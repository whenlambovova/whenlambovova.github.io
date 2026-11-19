"use strict";

const CHANNEL_URL = "https://www.youtube.com/@WhenLamboVova";
const DAILY_VIEW_VIDEO = "https://youtu.be/lYPGX4-Kj48";

const SYMBOLS = [
  { id: "bitcoin", pair: "BTC/USD", name: "Bitcoin" },
  { id: "ethereum", pair: "ETH/USD", name: "Ethereum" },
  { id: "binancecoin", pair: "BNB/USD", name: "BNB" },
  { id: "solana", pair: "SOL/USD", name: "Solana" },
  { id: "ripple", pair: "XRP/USD", name: "XRP" },
  { id: "dogecoin", pair: "DOGE/USD", name: "Dogecoin" },
  { id: "cardano", pair: "ADA/USD", name: "Cardano" },
  { id: "avalanche-2", pair: "AVAX/USD", name: "Avalanche" },
  { id: "chainlink", pair: "LINK/USD", name: "Chainlink" },
  { id: "polkadot", pair: "DOT/USD", name: "Polkadot" },
  { id: "toncoin", pair: "TON/USD", name: "Toncoin" },
  { id: "pax-gold", pair: "PAXG/USD", name: "Vàng token hóa, tham khảo" },
];

const fmt = (n, d = 2) => n.toLocaleString("vi-VN", { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtPrice = (n) => n.toLocaleString("vi-VN", { maximumFractionDigits: n < 10 ? 4 : 2 });
const esc = (t) => String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---------- Market data ---------- */
let tickers = []; // {id, price, changePct}
let tickerError = false;
let lastUpdate = null;

/* Cache: localStorage, stale allowed on error. live.json (written by a free
   scheduled fetcher on the host, when present) beats direct API calls. */
const TICKER_TTL = 90 * 1000;          // 90 giây
const CHART_TTL = 60 * 60 * 1000;      // 60 phút
let backoffUntil = 0;

function cacheGet(key, ttl) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const o = JSON.parse(raw);
    if (Date.now() - o.at < ttl) return o.data;
    return null;
  } catch (e) { return null; }
}
function cacheGetStale(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}
function cacheSet(key, data) {
  try { localStorage.setItem(key, JSON.stringify({ at: Date.now(), data })); } catch (e) {}
}

async function fetchJSON(url) {
  const r = await fetch(url);
  if (r.status === 429) { backoffUntil = Date.now() + 5 * 60 * 1000; throw new Error("rate"); }
  if (!r.ok) throw new Error("http");
  return r.json();
}

let liveSnapshot = undefined; // undefined = chưa thử, null = không có, object = có
async function loadLive() {
  if (liveSnapshot !== undefined) return liveSnapshot;
  try {
    const r = await fetch("data/live.json");
    if (!r.ok) throw new Error("no live");
    liveSnapshot = await r.json();
  } catch (e) { liveSnapshot = null; }
  return liveSnapshot;
}

async function loadTickers() {
  const fresh = cacheGet("wlv_tickers", TICKER_TTL);
  if (fresh) {
    tickers = fresh; tickerError = false;
    lastUpdate = new Date(cacheGetStale("wlv_tickers").at);
  } else if (Date.now() < backoffUntil) {
    const stale = cacheGetStale("wlv_tickers");
    if (stale) { tickers = stale.data; tickerError = false; lastUpdate = new Date(stale.at); }
  } else {
    try {
      const live = await loadLive();
      let data = null;
      if (live && live.tickers && Date.now() - live.at < 45 * 60 * 1000) {
        data = live.tickers;
        lastUpdate = new Date(live.at);
      }
      if (!data) {
        const ids = SYMBOLS.map((s) => s.id).join(",");
        data = await fetchJSON(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        lastUpdate = new Date();
      }
      tickers = SYMBOLS.filter((s) => data[s.id]).map((s) => ({
        id: s.id, price: data[s.id].usd, changePct: data[s.id].usd_24h_change || 0,
      }));
      tickerError = false;
      cacheSet("wlv_tickers", tickers);
    } catch (e) {
      const stale = cacheGetStale("wlv_tickers");
      if (stale) { tickers = stale.data; tickerError = false; lastUpdate = new Date(stale.at); }
      else { tickers = []; tickerError = true; }
    }
  }
  renderTickerStrip();
  if (currentRoute === "home") renderHomeMarket();
  if (currentRoute === "thi-truong") renderMarketTable();
}


/* ---------- Tin nóng tự động (RSS tổng hợp, workflow cập nhật 30 phút/lần) ---------- */
let newsItems = null, newsError = false;
const NEWS_PAIRS = [[/bitcoin|\bbtc\b|etf/i, "BTC/USD"], [/ethereum|ether\b|\beth\b/i, "ETH/USD"], [/solana|\bsol\b/i, "SOL/USD"], [/\bxrp\b|ripple/i, "XRP/USD"], [/dogecoin|\bdoge\b/i, "DOGE/USD"], [/gold|vàng/i, "XAU/USD"], [/silver|bạc/i, "XAG/USD"], [/vn-index|vnindex|chứng khoán/i, "VN-Index"], [/oil|dầu|brent|wti/i, "Brent, WTI /USD"]];
function newsView(n) {
  const note = n; const title = n.title; const summary = n.summary || "";
  const pairs = NEWS_PAIRS.filter((p) => p[0].test(n.title + " " + (n.summary || ""))).map((p) => p[1]);
  return { title, summary, note: note && note.note, pairs };
}
function newsArticleHTML(n) {
  const v = newsView(n);
  const time = new Date(n.at).toLocaleString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  const pairs = v.pairs.length ? `<p><strong>Cặp liên quan:</strong> ${v.pairs.map(esc).join(", ")}. <a href="#/thi-truong">Xem bảng thị trường</a></p>` : "";
  const note = `<h3>Nhận định</h3><p>${esc(v.note || "Tin này chỉ để bạn nắm thông tin. Hãy xem giá phản ứng thế nào trước khi rút ra kết luận.")}</p>`;
  return `<div class="article-grid" style="margin-top:36px"><div class="article"><span class="tag">Tin tức mới nhất · ${esc(n.source)}</span><h2 class="title">${esc(v.title)}</h2><p class="byline">When Lambo Vova · ${esc(time)}</p><p class="intro">${esc(v.summary)}</p>${pairs}${note}<p class="source">Nội dung chỉ để tham khảo, không phải lời khuyên đầu tư.</p><p class="source" style="font-size:12px">Nguồn: ${esc(n.source)}. <a href="${esc(n.link)}" target="_blank" rel="noopener noreferrer nofollow">Bài gốc</a></p><a class="back" href="#/tin-tuc">← Quay lại Tin tức mới nhất</a></div>${promoHTML()}</div>`;
}

async function loadNews(force) {
  const fresh = force ? null : cacheGet("wlv_art", 30 * 60 * 1000);
  if (fresh) { newsItems = fresh; newsError = false; if (currentRoute === "tin-tuc") renderNews(); return; }
  try {
    const r = await fetch("data/articles.json?t=" + Date.now());
    if (!r.ok) throw new Error("news " + r.status);
    const d = await r.json();
    newsItems = (d && d.items) ? d.items : [];
    newsError = false;
    cacheSet("wlv_art", newsItems);
  } catch (e) {
    const stale = cacheGetStale("wlv_art");
    if (stale) { newsItems = stale.data; newsError = false; }
    else newsError = true;
  }
  if (currentRoute === "tin-tuc") renderNews();
}
function renderNews() {
  const el = document.getElementById("news-auto");
  if (!el) return;
  if (newsError && !newsItems) { el.innerHTML = '<div class="note">Chưa tải được tin tự động. Trang tự thử lại sau ít phút.</div>'; return; }
  if (!newsItems) { el.innerHTML = '<p class="muted">Đang tải tin…</p>'; return; }
  if (!newsItems.length) { el.innerHTML = '<p class="muted">Chưa có tin mới trong lần cập nhật gần nhất.</p>'; return; }
  const list = newsItems.filter((n) => n.id && n.title);
  if (!list.length) { el.innerHTML = '<p class="muted">Chưa có bài mới. Quay lại sau ít phút.</p>'; return; }
  el.innerHTML = list.map((n) => {
    const v = newsView(n);
    const time = new Date(n.at).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
    return `<a class="article-item" href="#/tin/${encodeURIComponent(n.id)}"><span class="idx">→</span><span><span class="tag">${esc(n.source)} · ${time}</span><h3>${esc(v.title)}</h3><p>${esc(v.summary.length > 170 ? v.summary.slice(0, 167).replace(/\s+\S*$/, "") + "..." : v.summary)}</p></span></a>`;
  }).join("");
}

/* ---------- Gold spot (XAU/USD) + USD/VND ---------- */
let goldSpot = null, goldFx = null, goldError = false;
async function loadGold() {
  const fresh = cacheGet("wlv_xau", 5 * 60 * 1000);
  if (fresh) { goldSpot = fresh.spot; goldFx = fresh.fx; goldError = false; }
  else if (Date.now() < backoffUntil) {
    const stale = cacheGetStale("wlv_xau");
    if (stale) { goldSpot = stale.data.spot; goldFx = stale.data.fx; goldError = false; }
  } else {
    try {
      const live = await loadLive();
      let spot = null, fx = null;
      if (live && live.xau && Date.now() - live.at < 45 * 60 * 1000) { spot = live.xau; fx = live.fx || null; if (live.xag && live.xag.price) goldXag = live.xag.price; }
      if (!spot) {
        spot = await fetchJSON("https://api.gold-api.com/price/XAU");
        try { const f = await fetchJSON("https://open.er-api.com/v6/latest/USD"); fx = f && f.rates ? f.rates.VND : null; } catch (e) { fx = null; }
      }
      goldSpot = { price: spot.price, at: spot.updatedAt ? new Date(spot.updatedAt).getTime() : Date.now() };
      goldFx = fx;
      goldError = false;
      cacheSet("wlv_xau", { spot: goldSpot, fx: goldFx });
    } catch (e) {
      const stale = cacheGetStale("wlv_xau");
      if (stale) { goldSpot = stale.data.spot; goldFx = stale.data.fx; goldError = false; }
      else { goldSpot = null; goldError = true; }
    }
  }
  if (currentRoute === "vang") renderGoldSpot();
}

function renderGoldSpot() {
  const el = document.getElementById("gold-spot");
  if (!el) return;
  if (goldError && !goldSpot) { el.innerHTML = '<div class="note">Chưa tải được giá vàng thế giới từ nguồn miễn phí. Trang tự thử lại sau ít phút.</div>'; return; }
  if (!goldSpot) { el.innerHTML = '<p class="muted">Đang tải giá vàng thế giới…</p>'; return; }
  const OZ_PER_LUONG = 1.20565; // 1 lượng (cây) = 37,5 g = 1,20565 oz troy
  const usdOz = goldSpot.price;
  const usdLuong = usdOz * OZ_PER_LUONG;
  const time = new Date(goldSpot.at).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" });
  let rows = `<tr><td class="pair">XAU/USD<small>Vàng thế giới, 1 oz troy</small></td><td class="num">${fmt(usdOz)} $</td><td class="num">oz</td></tr>
  <tr><td class="pair">Quy đổi<small>1 lượng = 1,20565 oz</small></td><td class="num">${fmt(usdLuong)} $</td><td class="num">lượng</td></tr>`;
  if (goldXag) rows += `<tr><td class="pair">XAG/USD<small>Bạc thế giới, 1 oz troy</small></td><td class="num">${fmt(goldXag)} $</td><td class="num">oz</td></tr>`;
  if (goldFx) rows += `<tr><td class="pair">Quy đổi VND<small>Theo tỷ giá USD/VND ${fmt(goldFx, 0)}, tham khảo</small></td><td class="num">${fmt(usdLuong * goldFx, 0)} ₫</td><td class="num">lượng</td></tr>`;
  el.innerHTML = `<table class="price"><thead><tr><th>Mục</th><th class="num">Giá</th><th class="num">Đơn vị</th></tr></thead><tbody>${rows}</tbody></table>
  <p class="table-note">Nguồn: Gold API (gold-api.com, miễn phí), cập nhật ${time}. Tỷ giá USD/VND: open.er-api.com. Giá quy đổi chỉ để so sánh tương đối, chưa gồm thuế, phí và chênh lệch trong nước.</p>`;
}

/* ---------- Gold chart (PAXG tham khảo, cùng bộ chỉ báo) ---------- */
let goldXag = null;
let goldKline = null, goldKlineError = false;

/* ---------- Vàng trong nước (SJC, nhẫn, DOJI, Phú Quý từ nguồn công khai) ---------- */
let vangVN = null, vangVNError = false;
async function loadVangVN() {
  try {
    const live = await loadLive();
    if (live && live.vang && live.vang.sjc && live.vang.sjc.buy) vangVN = live.vang;
    else vangVNError = true;
  } catch (e) { vangVNError = true; }
  if (currentRoute === "vang") renderVangVN();
}
function renderVangVN() {
  const el = document.getElementById("gold-vn");
  if (!el) return;
  if (vangVNError && !vangVN) { el.innerHTML = '<div class="note">Chưa tải được giá vàng trong nước từ nguồn công khai. Trang tự thử lại sau ít phút.</div>'; return; }
  if (!vangVN) { el.innerHTML = '<p class="muted">Đang tải giá trong nước…</p>'; return; }
  const fmtK = (v) => (v > 0 ? "+" : "") + fmt(v / 1000, 0) + "k";
  const row = (label, sub, d) => (d && d.buy) ? `<tr><td class="pair">${label}<small>${sub}</small></td><td class="num">${fmt(d.buy, 0)} ₫</td><td class="num">${fmt(d.sell, 0)} ₫</td><td class="num ${d.change < 0 ? "down" : "up"}">${d.change ? fmtK(d.change) : "—"}</td></tr>` : "";
  const rows = row("SJC", "Vàng miếng, 1 lượng", vangVN.sjc) + row("Nhẫn trơn 9999", "Bảo Tín, 1 lượng", vangVN.nhan) + row("DOJI", "DOJI HCM, 1 lượng", vangVN.doji) + row("Phú Quý", "Phú Quý SJC, 1 lượng", vangVN.phuquy);
  const time = vangVN.at ? new Date(vangVN.at).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" }) : "";
  el.innerHTML = `<table class="price"><thead><tr><th>Thương hiệu</th><th class="num">Mua vào</th><th class="num">Bán ra</th><th class="num">± phiên</th></tr></thead><tbody>${rows}</tbody></table>
  <p class="table-note">Nguồn: tổng hợp niêm yết công khai (vang.today), cập nhật ${time}, tự động mỗi 30 phút. PAXG trong bảng giá chỉ là vàng token hóa, tham khảo, không thay giá SJC.</p>`;
}
async function loadGoldKlines() {
  const fresh = cacheGet("wlv_paxg_daily", CHART_TTL);
  if (fresh) { goldKline = fresh; goldKlineError = false; }
  else if (Date.now() < backoffUntil) {
    const stale = cacheGetStale("wlv_paxg_daily");
    if (stale) { goldKline = stale.data; goldKlineError = false; }
  } else {
    try {
      const data = await fetchJSON("https://api.coingecko.com/api/v3/coins/pax-gold/market_chart?vs_currency=usd&days=250&interval=daily");
      goldKline = data.prices.map((k) => ({ t: k[0], c: k[1] }));
      goldKlineError = false;
      cacheSet("wlv_paxg_daily", goldKline);
    } catch (e) {
      const stale = cacheGetStale("wlv_paxg_daily");
      if (stale) { goldKline = stale.data; goldKlineError = false; }
      else { goldKline = null; goldKlineError = true; }
    }
  }
  if (currentRoute === "vang") renderGoldChart();
}


/* ---------- FX majors (ECB reference via frankfurter.dev) ---------- */
const FX_PAIRS = [
  { pair: "EUR/USD", cur: "EUR", inv: true, d: 4 },
  { pair: "GBP/USD", cur: "GBP", inv: true, d: 4 },
  { pair: "AUD/USD", cur: "AUD", inv: true, d: 4 },
  { pair: "NZD/USD", cur: "NZD", inv: true, d: 4 },
  { pair: "USD/JPY", cur: "JPY", inv: false, d: 2 },
  { pair: "USD/CHF", cur: "CHF", inv: false, d: 4 },
  { pair: "USD/CAD", cur: "CAD", inv: false, d: 4 },
];
let fxRows = null, fxDate = null, fxError = false, vndRate = null;
async function loadFx() {
  const fresh = cacheGet("wlv_fx", 6 * 60 * 60 * 1000);
  if (fresh) { applyFx(fresh); return; }
  if (Date.now() < backoffUntil) { const s = cacheGetStale("wlv_fx"); if (s) applyFx(s.data); return; }
  try {
    const since = new Date(Date.now() - 12 * 86400000).toISOString().slice(0, 10);
    const data = await fetchJSON(`https://api.frankfurter.dev/v1/${since}..?base=USD&symbols=EUR,GBP,AUD,NZD,JPY,CHF,CAD`);
    const dates = Object.keys(data.rates).sort();
    const last = dates[dates.length - 1], prev = dates.length > 1 ? dates[dates.length - 2] : null;
    fxDate = last;
    fxRows = FX_PAIRS.map((p) => {
      const cur = data.rates[last][p.cur];
      const price = p.inv ? 1 / cur : cur;
      let chg = null;
      if (prev && data.rates[prev][p.cur]) {
        const p0 = p.inv ? 1 / data.rates[prev][p.cur] : data.rates[prev][p.cur];
        chg = (price / p0 - 1) * 100;
      }
      return { pair: p.pair, price, chg, d: p.d };
    });
    try { const f = await fetchJSON("https://open.er-api.com/v6/latest/USD"); vndRate = f && f.rates ? f.rates.VND : null; } catch (e) { vndRate = null; }
    fxError = false;
    cacheSet("wlv_fx", { rows: fxRows, date: fxDate, vnd: vndRate });
  } catch (e) {
    const s = cacheGetStale("wlv_fx");
    if (s) applyFx(s.data); else { fxRows = null; fxError = true; }
  }
  if (currentRoute === "fx") renderFx();
}
function applyFx(d) { fxRows = d.rows; fxDate = d.date; vndRate = d.vnd || null; fxError = false; }

function renderFx() {
  const el = document.getElementById("fx-table");
  if (!el) return;
  if (fxError && !fxRows) { el.innerHTML = '<div class="note">Chưa tải được tỷ giá từ nguồn miễn phí. Trang tự thử lại sau.</div>'; return; }
  if (!fxRows) { el.innerHTML = '<p class="muted">Đang tải tỷ giá…</p>'; return; }
  const rows = fxRows.map((r) => {
    const cls = r.chg === null ? "" : (r.chg >= 0 ? "up" : "down");
    const sign = r.chg === null ? "" : (r.chg >= 0 ? "+" : "");
    return `<tr><td class="pair">${r.pair}</td><td class="num">${r.price.toLocaleString("vi-VN", { minimumFractionDigits: r.d, maximumFractionDigits: r.d })}</td><td class="num ${cls}">${r.chg === null ? "—" : sign + fmt(r.chg) + "%"}</td></tr>`;
  }).join("");
  const vndRow = vndRate ? `<tr><td class="pair">USD/VND<small>Tham khảo</small></td><td class="num">${fmt(vndRate, 0)}</td><td class="num">—</td></tr>` : "";
  el.innerHTML = `<table class="price"><thead><tr><th>Cặp</th><th class="num">Tỷ giá</th><th class="num">So phiên trước</th></tr></thead><tbody>${rows}${vndRow}</tbody></table>
  <p class="table-note">Nguồn: tỷ giá tham chiếu ECB qua Frankfurter (frankfurter.dev, miễn phí), ngày tham chiếu ${fxDate || "—"}; USD/VND từ open.er-api.com. Tỷ giá tham chiếu cập nhật mỗi ngày làm việc, không phải giá tick realtime và không phải tỷ giá mua bán tại ngân hàng.</p>`;
}

function renderTickerStrip() {
  const el = document.getElementById("ticker-strip");
  if (tickerError) { el.innerHTML = '<span class="muted">Chưa tải được giá trực tiếp — trang tự thử lại sau ít phút.</span>'; return; }
  if (!tickers.length) { el.innerHTML = '<span class="muted">Đang tải giá…</span>'; return; }
  el.innerHTML = tickers.map((t) => {
    const s = SYMBOLS.find((x) => x.id === t.id);
    const cls = t.changePct >= 0 ? "up" : "down";
    const sign = t.changePct >= 0 ? "+" : "";
    return `<span class="t"><span class="sym">${s.pair.split("/")[0]}</span>${fmtPrice(t.price)}$ <span class="${cls}">${sign}${fmt(t.changePct)}%</span></span>`;
  }).join("");
}

/* ---------- Indicator math ---------- */
function sma(v, p, at) { if (at + 1 < p) return null; let s = 0; for (let i = at - p + 1; i <= at; i++) s += v[i]; return s / p; }
function smaSeries(v, p) { return v.map((_, i) => sma(v, p, i)); }
function emaSeries(v, p) {
  const k = 2 / (p + 1), out = []; let prev = null;
  for (let i = 0; i < v.length; i++) {
    if (i < p - 1) { out.push(null); continue; }
    if (prev === null) { prev = sma(v, p, i); out.push(prev); continue; }
    prev = v[i] * k + prev * (1 - k); out.push(prev);
  }
  return out;
}
function rsiSeries(closes, p = 14) {
  const out = new Array(closes.length).fill(null);
  if (closes.length < p + 1) return out;
  let g = 0, l = 0;
  for (let i = 1; i <= p; i++) { const d = closes[i] - closes[i - 1]; if (d >= 0) g += d; else l -= d; }
  let ag = g / p, al = l / p;
  out[p] = al === 0 ? 100 : 100 - 100 / (1 + ag / al);
  for (let i = p + 1; i < closes.length; i++) {
    const d = closes[i] - closes[i - 1];
    ag = (ag * (p - 1) + Math.max(d, 0)) / p; al = (al * (p - 1) + Math.max(-d, 0)) / p;
    out[i] = al === 0 ? 100 : 100 - 100 / (1 + ag / al);
  }
  return out;
}

let klineData = null, klineError = false;
async function loadKlines() {
  const fresh = cacheGet("wlv_btc_daily", CHART_TTL);
  if (fresh) { klineData = fresh; klineError = false; }
  else if (Date.now() < backoffUntil) {
    const stale = cacheGetStale("wlv_btc_daily");
    if (stale) { klineData = stale.data; klineError = false; }
  } else {
    try {
      const live = await loadLive();
      if (live && live.btcDaily && Date.now() - live.at < 45 * 60 * 1000) {
        klineData = live.btcDaily.map((k) => ({ t: k[0], c: k[1] }));
      } else {
        const data = await fetchJSON("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=250&interval=daily");
        klineData = data.prices.map((k) => ({ t: k[0], c: k[1] }));
      }
      klineError = false;
      cacheSet("wlv_btc_daily", klineData);
    } catch (e) {
      const stale = cacheGetStale("wlv_btc_daily");
      if (stale) { klineData = stale.data; klineError = false; }
      else { klineData = null; klineError = true; }
    }
  }
  if (currentRoute === "thi-truong") renderChart();
}

/* ---------- Chart drawing ---------- */
function drawLine(ctx, pts, x0, x1, y, min, max, h, color, width, dash) {
  ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash || []);
  ctx.beginPath(); let started = false;
  pts.forEach((v, i) => {
    if (v === null) return;
    const px = x0 + (x1 - x0) * (i / (pts.length - 1));
    const py = y + h - h * ((v - min) / (max - min));
    if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
  });
  ctx.stroke(); ctx.setLineDash([]);
}

function renderChart() { drawFullChart(klineData, klineError, "chart-area", "chart", "rsi", "facts"); }
function renderGoldChart() { drawFullChart(goldKline, goldKlineError, "gchart-area", "gchart", "grsi", "gfacts"); }

function drawFullChart(klineData, klineError, areaId, cvId, rcId, factsId) {
  const box = document.getElementById(areaId);
  if (!box) return;
  if (klineError) { box.innerHTML = '<div class="note">Chưa tải được dữ liệu giá lịch sử (nguồn công khai giới hạn lượt gọi). Trang tự thử lại sau; nếu đã từng mở trang, số liệu gần nhất vẫn hiển thị.</div>'; return; }
  if (!klineData) { box.innerHTML = '<p class="muted">Đang tải nến ngày và tính chỉ báo…</p>'; return; }

  const N = 90;
  const data = klineData.slice(-N);
  const closes = data.map((d) => d.c);
  const at = closes.length - 1;
  const ma = {}; [20, 50, 65, 200].forEach((p) => { ma[p] = smaSeries(klineData.map((d) => d.c), p).slice(-N); });
  const ema = {}; [21, 34, 89, 200].forEach((p) => { ema[p] = emaSeries(klineData.map((d) => d.c), p).slice(-N); });
  const mid = smaSeries(klineData.map((d) => d.c), 21).slice(-N);
  const bbUp = mid.map((m, i) => {
    if (m === null) return null;
    const gi = klineData.length - N + i;
    const all = klineData.map((d) => d.c);
    let v = 0; for (let j = gi - 20; j <= gi; j++) v += (all[j] - m) ** 2;
    return m + 2 * Math.sqrt(v / 21);
  });
  const bbLow = mid.map((m, i) => m === null || bbUp[i] === null ? null : 2 * m - bbUp[i]);
  const rsi = rsiSeries(klineData.map((d) => d.c)).slice(-N);

  const allVals = closes.concat(ma[200].filter(Boolean), bbUp.filter(Boolean), bbLow.filter(Boolean));
  let min = Math.min(...allVals), max = Math.max(...allVals);
  const pad = (max - min) * 0.05; min -= pad; max += pad;

  const cv = document.getElementById(cvId);
  const dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth, H = cv.clientHeight;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
  const x0 = 8, x1 = W - 62, y = 10, h = H - 34;

  ctx.strokeStyle = themeColor("--chart-grid"); ctx.lineWidth = 1; ctx.fillStyle = themeColor("--chart-text"); ctx.font = "11px Segoe UI, sans-serif";
  for (let i = 0; i <= 4; i++) {
    const gy = y + (h * i) / 4;
    ctx.beginPath(); ctx.moveTo(x0, gy); ctx.lineTo(x1, gy); ctx.stroke();
    const val = max - ((max - min) * i) / 4;
    ctx.fillText(fmtPrice(val), x1 + 6, gy + 4);
  }
  const dFirst = new Date(data[0].t), dLast = new Date(data[at].t);
  const fmtD = (d) => d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
  ctx.fillText(fmtD(dFirst), x0, H - 6); ctx.fillText(fmtD(dLast), x1 - 26, H - 6);

  // Bollinger band area
  ctx.beginPath(); let started = false;
  bbUp.forEach((v, i) => { if (v === null) return; const px = x0 + (x1 - x0) * (i / (N - 1)); const py = y + h - h * ((v - min) / (max - min)); if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py); });
  for (let i = N - 1; i >= 0; i--) { const v = bbLow[i]; if (v === null) continue; const px = x0 + (x1 - x0) * (i / (N - 1)); const py = y + h - h * ((v - min) / (max - min)); ctx.lineTo(px, py); }
  ctx.closePath(); ctx.fillStyle = "rgba(184,134,11,0.07)"; ctx.fill();

  drawLine(ctx, bbUp, x0, x1, y, min, max, h, "#d8c48a", 1, [4, 3]);
  drawLine(ctx, bbLow, x0, x1, y, min, max, h, "#d8c48a", 1, [4, 3]);
  drawLine(ctx, mid, x0, x1, y, min, max, h, "#cbb26a", 1, [2, 3]);
  drawLine(ctx, ma[20], x0, x1, y, min, max, h, "#2e86de", 1.4);
  drawLine(ctx, ma[50], x0, x1, y, min, max, h, "#8e44ad", 1.4);
  drawLine(ctx, ma[200], x0, x1, y, min, max, h, "#c0392b", 1.6);
  drawLine(ctx, closes, x0, x1, y, min, max, h, themeColor("--chart-price"), 1.8);

  // RSI panel
  const rc = document.getElementById(rcId);
  rc.width = W * dpr; rc.height = rc.clientHeight * dpr;
  const rctx = rc.getContext("2d"); rctx.scale(dpr, dpr);
  const rh = rc.clientHeight - 16, ry = 6;
  rctx.strokeStyle = themeColor("--chart-grid"); rctx.beginPath(); rctx.moveTo(x0, ry + rh * 0.3); rctx.lineTo(x1, ry + rh * 0.3); rctx.moveTo(x0, ry + rh * 0.7); rctx.lineTo(x1, ry + rh * 0.7); rctx.stroke();
  rctx.fillStyle = themeColor("--chart-text"); rctx.fillText("70", x1 + 6, ry + rh * 0.3 + 4); rctx.fillText("30", x1 + 6, ry + rh * 0.7 + 4); rctx.fillText("RSI 14", x0, ry + rh + 12);
  drawLine(rctx, rsi, x0, x1, ry, 0, 100, rh, "#b8860b", 1.5);
  const lastRsi = rsi[at];
  if (lastRsi !== null) {
    const py = ry + rh - rh * (lastRsi / 100);
    rctx.fillStyle = "#b8860b"; rctx.beginPath(); rctx.arc(x1, py, 3, 0, 7); rctx.fill();
    rctx.fillText(fmt(lastRsi, 1), x1 + 6, py + 4);
  }

  box.innerHTML = "";
  const facts = [
    ["Đóng cửa gần nhất (UTC)", fmtPrice(closes[at]) + " $"],
    ["MA 20 / 50 ngày", (ma[20][at] ? fmtPrice(ma[20][at]) : "—") + " / " + (ma[50][at] ? fmtPrice(ma[50][at]) : "—")],
    ["MA 65 / 200 ngày", (ma[65][at] ? fmtPrice(ma[65][at]) : "—") + " / " + (ma[200][at] ? fmtPrice(ma[200][at]) : "—")],
    ["EMA 21 / 34 ngày", (ema[21][at] ? fmtPrice(ema[21][at]) : "—") + " / " + (ema[34][at] ? fmtPrice(ema[34][at]) : "—")],
    ["EMA 89 / 200 ngày", (ema[89][at] ? fmtPrice(ema[89][at]) : "—") + " / " + (ema[200][at] ? fmtPrice(ema[200][at]) : "—")],
    ["RSI 14", lastRsi !== null ? fmt(lastRsi, 1) : "—"],
    ["Bollinger (21, 2): trên / giữa / dưới", bbUp[at] !== null ? `${fmtPrice(bbUp[at])} / ${fmtPrice(mid[at])} / ${fmtPrice(bbLow[at])}` : "—"],
    ["Đỉnh / đáy 90 ngày", fmtPrice(Math.max(...closes)) + " / " + fmtPrice(Math.min(...closes))],
  ];
  document.getElementById(factsId).innerHTML = facts.map(([l, v]) => `<div class="fact"><div class="l">${l}</div><div class="v">${v}</div></div>`).join("");
}

/* ---------- Page fragments ---------- */
function marketTableHTML(limit) {
  if (tickerError) return '<div class="note">Chưa tải được giá trực tiếp (nguồn công khai giới hạn lượt gọi). Trang tự thử lại sau ít phút và hiển thị số liệu gần nhất đã lưu nếu có.</div>';
  if (!tickers.length) return '<p class="muted">Đang tải giá trực tiếp…</p>';
  const rows = (limit ? tickers.slice(0, limit) : tickers).map((t) => {
    const s = SYMBOLS.find((x) => x.id === t.id);
    const cls = t.changePct >= 0 ? "up" : "down";
    const sign = t.changePct >= 0 ? "+" : "";
    return `<tr><td class="pair">${s.pair}<small>${s.name}</small></td><td class="num">${fmtPrice(t.price)} $</td><td class="num ${cls}">${sign}${fmt(t.changePct)}%</td></tr>`;
  }).join("");
  return `<table class="price"><thead><tr><th>Cặp</th><th class="num">Giá</th><th class="num">24 giờ</th></tr></thead><tbody>${rows}</tbody></table>
  <p class="table-note">Nguồn: dữ liệu giá công khai, cập nhật lúc ${lastUpdate ? lastUpdate.toLocaleTimeString("vi-VN") : "—"}. Tự tải lại mỗi 90 giây (tối đa 30 phút nếu dùng bản ghi của máy chủ). Tất cả cặp quy về …/USD. PAXG là vàng token hóa, chỉ tham khảo, không thay giá vàng thế giới hay SJC.</p>`;
}

function barsHTML() {
  if (!tickers.length) return "";
  const maxAbs = Math.max(...tickers.map((t) => Math.abs(t.changePct)), 1);
  const rows = tickers.map((t) => {
    const s = SYMBOLS.find((x) => x.id === t.id);
    const w = Math.max(Math.abs(t.changePct) / maxAbs * 50, 0.6);
    const cls = t.changePct >= 0 ? "pos" : "neg";
    const sign = t.changePct >= 0 ? "+" : "";
    return `<div class="bar-row"><span>${s.pair.split("/")[0]}</span><div class="bar-track"><div class="bar-zero"></div><div class="bar-fill ${cls}" style="width:${w}%"></div></div><span class="${t.changePct >= 0 ? "up" : "down"}" style="text-align:right">${sign}${fmt(t.changePct)}%</span></div>`;
  }).join("");
  return `<h2 class="section">Biến động 24 giờ</h2><div class="card bars">${rows}</div>`;
}

const ARTICLES = {
  "nhan-dinh-19-11": {
    tag: "Tin tức · Nhận định", date: "Ngày 19 tháng 11 năm 2026", title: "Nhận định đầu ngày 19/11: BTC sát đáy 90 ngày, RSI chạm 22",
    intro: "Bản nhận định sáng 19/11 dùng số liệu thật: nến ngày BTC đã đóng theo giờ UTC, vàng thế giới cập nhật 08:04, cùng tin trong ngày từ Fed. Chỉ mô tả trạng thái thị trường, không điểm vào, không lệnh, không hứa hướng đi.",
    body: `
      <h3>Giá đã xảy ra</h3>
      <ul>
        <li>BTC/USD đóng nến ngày gần nhất (theo UTC) ở 63.076,38 USD, giảm 2,39% trong 24 giờ qua. Đáy 90 ngày là 62.996,68 USD. Giá đóng cửa chỉ còn cách đáy này chưa tới 80 USD.</li>
        <li>ETH/USD 1.782,74 USD (-1,82%), SOL/USD 73,6 USD (-1,54%) tại thời điểm 08:22 sáng nay.</li>
        <li>Vàng thế giới XAU/USD giao dịch quanh 3.751,95 USD/oz lúc 08:04, nến ngày đóng ở 3.741,5 USD. Tỷ giá tham khảo USD/VND 25.704.</li>
      </ul>
      <h3>Bộ chỉ báo cố định nói gì</h3>
      <ul>
        <li>BTC/USD đang nằm dưới cả bốn đường MA: MA 20 ở 72.026,3; MA 50 ở 78.191,78; MA 65 ở 79.239,44; MA 200 ở 72.650,53 USD. Dưới cả bốn đường EMA (21, 34, 89, 200), đường gần nhất là EMA 21 ở 70.898,97 USD.</li>
        <li>RSI 14 của BTC ở 22,0, tức vùng quá bán theo thang thông dụng. Biên dưới Bollinger (21, 2) nằm ở 60.964,5 USD.</li>
        <li>Vàng thế giới cũng nằm dưới cả bốn đường MA: MA 20 ở 3.935,87; MA 50 ở 4.040,21; MA 65 ở 4.096,95; MA 200 ở 4.244,76 USD. RSI 14 của vàng ở 31,9, sát biên dưới Bollinger ở 3.715,38 USD.</li>
      </ul>
      <h3>Tin trong ngày cần kể tới</h3>
      <ul>
        <li>Rạng sáng 19/11 (giờ Việt Nam), Fed công bố biên bản cuộc họp 27-28/10: phần lớn quan chức vẫn nghiêng về thắt chặt thêm nếu kinh tế đi đúng kịch bản, đồng thời cảnh báo định giá tài sản và đòn bẩy có thể khuếch đại cú sốc. <a href="#/tin/fed-bien-ban-thang-10-cong-bo-2026-11-19">Đọc bản tin đầy đủ</a>.</li>
        <li>Ngày 18/11, các quỹ ETF Bitcoin bị rút ròng 240 triệu USD và CryptoQuant nhận định thị trường quay lại pha giảm. Đây là góc nhìn của một đơn vị phân tích, không phải kết luận.</li>
        <li>Chiều 18/11, VN-Index mất hơn 23 điểm, xuống sát mốc 1.700 khi khối ngoại bán mạnh ở nhóm ngân hàng lớn.</li>
      </ul>
      <h3>Những mức cần theo dõi, không phải điểm vào</h3>
      <ul>
        <li>Nếu nến ngày BTC đóng dưới 62.996,68 USD, thị trường sẽ có đáy 90 ngày mới. Đó là một dữ kiện, không phải tín hiệu mua hay bán.</li>
        <li>Phía trên, hình ảnh khung ngày chỉ đổi khi giá đóng cửa vượt lại EMA 21 quanh 70.899 USD, rồi tới cụm MA 200 quanh 72.650 USD. Giữa hai vùng đó là vùng chờ, không phải vùng đoán.</li>
        <li>Với vàng, biên dưới Bollinger 3.715,38 USD và MA 20 ở 3.935,87 USD là hai mức gần nhất để đối chiếu khi nến ngày đóng.</li>
      </ul>`,
    takeaway: "Đúc kết hôm nay: cả BTC lẫn vàng đều đóng nến dưới toàn bộ đường trung bình dài hạn, RSI ở vùng thấp, và giá đang đi sát các đáy 90 ngày. Đó là mô tả trạng thái, không phải lời hứa về hướng đi tiếp theo.",
    source: "Nguồn số liệu: nến ngày BTC/USD tổng hợp từ CoinGecko; XAU/USD từ Gold API lúc 08:04 19/11/2026; USD/VND từ open.er-api.com; biên bản Fed từ federalreserve.gov. Giờ ghi trong bài là giờ Việt Nam.",
    back: "#/tin-tuc", backLabel: "Quay lại Tin tức mới nhất",
  },
  "flash-crash-2020": {
    tag: "Kiến thức · Bài học lịch sử", date: "Ngày 18 tháng 11 năm 2026", title: "12/3/2020: ngày Bitcoin mất gần 39%",
    intro: "Ngày 12/3/2020, khi hoảng loạn COVID-19 quét qua mọi thị trường, Bitcoin trên Coinbase rơi từ vùng khoảng 7.900 USD xuống đáy trong ngày quanh 3.850 USD, tức mất gần 39% trong cùng một ngày. Đây là dữ liệu nến thật của một sàn, không phải con số minh họa.",
    body: `
      <h3>Cú rơi không đi một mình</h3>
      <ul>
        <li>Toàn bộ tài sản rủi ro bị bán tháo cùng lúc; người cầm đòn bẩy cao bị gọi ký quỹ ở mọi thị trường.</li>
        <li>Lệnh thanh lý trên các sàn phái sinh tạo hiệu ứng dây chuyền: giá rơi kích hoạt thanh lý, thanh lý đẩy giá rơi thêm.</li>
        <li>Thanh khoản mỏng ở vùng hoảng loạn khiến một lượng bán không quá lớn cũng đẩy giá đi rất xa.</li>
      </ul>
      <p>Trên chart ngày, giá xuyên qua mọi đường MA dài hạn trong một phiên. Những vùng hỗ trợ trông rất chắc trên khung lớn bị xuyên thủng trong vài giờ, vì lực bán lúc đó là bán bắt buộc, không phải bán theo phân tích.</p>`,
    takeaway: "Bài học đúc kết: đòn bẩy cao cộng thanh khoản mỏng thì không tồn tại vùng đáy an toàn. Quản trị rủi ro phải được đặt trước khi vào lệnh, không phải sau khi giá đã xuyên hỗ trợ.",
    source: "Nguồn: dữ liệu nến lịch sử BTC/USD trên Coinbase.",
    back: "#/kien-thuc", backLabel: "Quay lại Kiến thức",
  },
  "ftx-2022": {
    tag: "Kiến thức · Bài học lịch sử", date: "Ngày 18 tháng 11 năm 2026", title: "FTX sập: khi niềm tin vào sàn là rủi ro lớn nhất",
    intro: "Đầu tháng 11/2022, một bài báo về bảng cân đối của Alameda Research làm dấy nghi vấn về sàn FTX. Trong vài ngày, token FTT rơi từ vùng khoảng 22 USD xuống quanh 1,5 USD, sàn đông cứng rút tiền, và ngày 11/11/2022 FTX nộp đơn phá sản. Các báo cáo công khai sau đó chỉ ra khoảng thiếu hụt lên tới hàng tỷ USD của tiền khách hàng.",
    body: `
      <h3>Không ai đứng ngoài một mình</h3>
      <ul>
        <li>BTC/USD rơi từ vùng khoảng 20.500 xuống quanh 15.500 USD trong tuần sự kiện, theo dữ liệu Coinbase.</li>
        <li>Các quỹ và sàn có khoản vay, ký quỹ hoặc token liên quan FTX lần lượt công bố thiệt hại.</li>
        <li>Người dùng cá nhân giữ toàn bộ tài sản trên sàn mất quyền rút trong một đêm, dù tài khoản vẫn hiển thị số dư.</li>
      </ul>`,
    takeaway: "Bài học đúc kết: số dư hiển thị trên sàn là một khoản sàn nợ mình, không phải tài sản đang trong tay mình. Chia rủi ro lưu ký là một phần của quản trị vốn, ngang hàng với đặt dừng lỗ.",
    source: "Nguồn: hồ sơ phá sản công khai của FTX, dữ liệu nến Coinbase.",
    back: "#/kien-thuc", backLabel: "Quay lại Kiến thức",
  },
  "btc-2021-05": {
    tag: "Kiến thức · Bài học lịch sử", date: "Ngày 18 tháng 11 năm 2026", title: "19/5/2021: Bitcoin rơi mạnh sau một đợt tăng nóng",
    intro: "Giữa tháng 5/2021, sau nhiều tháng tăng mạnh, Bitcoin giảm sâu chỉ trong vài ngày, kèm làn sóng thanh lý lệnh đòn bẩy trên các sàn phái sinh. Giá có lúc chạm vùng quanh 30.000 USD từ vùng trên 50.000 USD đầu tháng.",
    body: `
      <h3>Điều gì đã xảy ra</h3>
      <ul>
        <li>Thị trường vào đợt này với tâm lý rất lạc quan và đòn bẩy cao, nên một cú đẩy xuống đã kích hoạt thanh lý dây chuyền.</li>
        <li>Tin tức về siết chặt khai thác và tiền mã hóa tại Trung Quốc được nhiều bên nhắc đến như một yếu tố thời điểm, nhưng không ai tách được chính xác phần đóng góp của từng yếu tố.</li>
        <li>Giá không về đáy rồi đi lên ngay: sau cú rơi còn nhiều tháng đi ngang và rung lắc.</li>
      </ul>`,
    takeaway: "Bài học đúc kết: khi mọi người cùng lạc quan và cùng dùng đòn bẩy, rủi ro không nằm ở tin tức mà ở cấu trúc vị thế. Hãy biết mình chịu được mức giảm bao nhiêu trước khi vào lệnh.",
    source: "Nguồn: dữ liệu nến lịch sử BTC/USD trên Coinbase. Mức giá nêu là gần đúng, không phải số liệu chính xác từng giây.",
    back: "#/kien-thuc", backLabel: "Quay lại Kiến thức",
  },
  "luna-2022": {
    tag: "Kiến thức · Bài học lịch sử", date: "Ngày 18 tháng 11 năm 2026", title: "LUNA và UST 5/2022: khi stablecoin mất neo",
    intro: "Tuần 9 đến 12 tháng 5 năm 2022, UST, stablecoin thuật toán của hệ sinh thái Terra, mất mốc 1 USD, kéo token LUNA từ vùng hàng chục USD về gần bằng không trong vài ngày.",
    body: `
      <h3>Cơ chế sụp đổ</h3>
      <ul>
        <li>UST không được bảo chứng bằng tiền mặt mà dựa vào cơ chế đổi qua lại với LUNA, nên khi niềm tin lung lay, cơ chế biến thành vòng xoáy giảm giá.</li>
        <li>Hàng chục tỷ USD vốn hóa bốc hơi, nhiều quỹ và người dùng cá nhân bị ảnh hưởng nặng.</li>
        <li>Lãi suất rất cao từng được quảng bá là dấu hiệu cần hỏi: lợi nhuận đến từ đâu?</li>
      </ul>`,
    takeaway: "Bài học đúc kết: lãi suất cao bất thường là chi phí của một rủi ro mà mình chưa nhìn thấy. Trước khi bỏ tiền, hãy trả lời được câu hỏi tiền lãi đến từ đâu.",
    source: "Nguồn: dữ liệu giá lịch sử LUNA, UST từ các sàn lớn và báo cáo công khai của báo chí tài chính. Số liệu nêu ở mức gần đúng.",
    back: "#/kien-thuc", backLabel: "Quay lại Kiến thức",
  },
  "don-bay-ky-quy": {
    tag: "Kiến thức · Khái niệm cơ bản", date: "Ngày 18 tháng 11 năm 2026", title: "Đòn bẩy và ký quỹ: vì sao tài khoản có thể về 0 nhanh",
    intro: "Đòn bẩy cho phép mở vị thế lớn hơn số vốn của mình. Phần vốn bỏ ra gọi là ký quỹ. Cả lãi và lỗ đều tính trên vị thế lớn, nên lỗ cũng phóng đại như lãi.",
    body: `
      <h3>Cách tính nhanh</h3>
      <ul>
        <li>Ví dụ đơn giản: đòn bẩy 10 lần nghĩa là giá đi ngược khoảng 10% thì phần ký quỹ gần như mất hết, trước cả phí.</li>
        <li>Khi ký quỹ không đủ duy trì vị thế, sàn tự đóng lệnh. Đó là thanh lý.</li>
        <li>Giá có thể quét qua mức thanh lý rồi quay lại ngay, nhưng vị thế đã bị đóng và không quay lại cùng giá.</li>
      </ul>`,
    takeaway: "Bài học đúc kết: đòn bẩy không đổi xác suất thắng, nó chỉ đổi mức giá mình bị loại khỏi cuộc chơi. Đòn bẩy càng cao thì biên sai càng nhỏ.",
    source: "Nội dung giáo dục, không phải khuyến nghị đầu tư. Ví dụ là minh họa, chưa tính phí và chênh lệch giá.",
    back: "#/kien-thuc", backLabel: "Quay lại Kiến thức",
  },
  "quan-tri-rui-ro": {
    tag: "Kiến thức · Khái niệm cơ bản", date: "Ngày 18 tháng 11 năm 2026", title: "Quản trị rủi ro: quyết định mức lỗ trước khi vào lệnh",
    intro: "Người mới thường nghĩ về lãi trước. Người giữ được vốn lâu thường nghĩ về mức lỗ chấp nhận được trước. Mức lỗ đó quyết định khối lượng, không phải ngược lại.",
    body: `
      <h3>Bốn việc nên làm trước khi bấm nút</h3>
      <ul>
        <li>Chọn mức lỗ tối đa mỗi lệnh theo phần trăm vốn mà mình thật sự chịu được. Nhiều người dùng một con số nhỏ, nhưng đây là lựa chọn cá nhân, không phải quy tắc chung.</li>
        <li>Điểm sai của ý tưởng phải có trước khi vào lệnh: giá đi tới đâu thì ý tưởng sai.</li>
        <li>Tỷ lệ lời lỗ 1:3 không đảm bảo có lãi. Với tỷ lệ này, thắng khoảng 25% lệnh mới hòa vốn trước phí.</li>
        <li>Ghi nhật ký từng lệnh: lý do vào, điểm sai, kết quả, cảm xúc lúc đó.</li>
      </ul>`,
    takeaway: "Bài học đúc kết: một quy tắc rõ ràng viết ra trước khi vào lệnh có giá trị hơn một dự đoán tự tin. Dự đoán có thể sai, quy tắc giúp mình sống sót khi sai.",
    source: "Nội dung giáo dục, không phải khuyến nghị mua bán hay phân bổ vốn.",
    back: "#/kien-thuc", backLabel: "Quay lại Kiến thức",
  },
};

function articleHTML(key) {
  const a = ARTICLES[key];
  return `<div class="article-grid" style="margin-top:36px">
    <div class="article">
      <span class="tag">${a.tag}</span>
      <h2 class="title">${a.title}</h2>
      <p class="byline">When Lambo Vova · ${a.date}</p>
      <p class="intro">${a.intro}</p>
      ${a.body}
      <div class="takeaway">${a.takeaway}</div>
      <p class="source">${a.source}</p>
      <a class="back" href="${a.back}">← ${a.backLabel}</a>
    </div>
    ${promoHTML()}
  </div>`;
}

/* ---------- Routes ---------- */
let currentRoute = "home";

function renderHomeMarket() {
  const el = document.getElementById("home-market");
  if (el) el.innerHTML = marketTableHTML(5);
}
function renderMarketTable() {
  const el = document.getElementById("market-table");
  if (el) el.innerHTML = marketTableHTML(0);
  const b = document.getElementById("market-bars");
  if (b) b.innerHTML = barsHTML();
}

const VIDEO_ID = "lYPGX4-Kj48";
function promoHTML() {
  return `<aside class="promo">
    <p class="label">Quảng bá</p>
    <p class="pname">Kênh YouTube When Lambo Vova</p>
    <p class="desc">Video ngắn mỗi ngày: tin nóng gắn với chart cặp …/USD, bài học từ các cú sập lịch sử. Xem video xong quay lại đây đọc số liệu cho kỹ.</p>
    <a class="thumb" href="${DAILY_VIEW_VIDEO}" target="_blank" rel="noopener">
      <img src="https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg" alt="Video nhận định phiên 9/11/2026 trên kênh When Lambo Vova">
    </a>
    <a class="btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">Xem kênh</a>
    <p class="pnote">Ô này là quảng bá của chính trang, không phải quảng cáo bên thứ ba.</p>
  </aside>`;
}
function promoBandHTML() {
  return `<div class="promo-band">
    <div class="promo-band-inner">
      <a class="thumb" href="${DAILY_VIEW_VIDEO}" target="_blank" rel="noopener">
        <img src="https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg" alt="Video nhận định phiên 9/11/2026 trên kênh When Lambo Vova">
      </a>
      <div>
        <p class="label">Quảng bá · Kênh YouTube</p>
        <h2 class="section">Video mới: nhận định phiên 9/11</h2>
        <p class="section-sub">Vàng, Bitcoin, Ethereum — xem trên kênh When Lambo Vova, rồi đọc lại số liệu ở đây. Trang không chạy quảng cáo bên ngoài; ô này quảng bá kênh của chính mình.</p>
        <a class="btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">Xem kênh When Lambo Vova</a>
      </div>
    </div>
  </div>`;
}

const PAGES = {
  home: () => `
    <section class="hero blk">
      <div>
        <p class="dateline">${new Date().toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
        <h2 class="big">Đọc thị trường <em>cho bớt mơ hồ.</em></h2>
        <p class="standfirst">Đây là nhật ký của When Lambo Vova. Giá đang chạy ở ngay trên, chart chỉ vẽ một bộ chỉ báo duy nhất mình dùng thật, còn bài viết là những lần thị trường dạy mình một bài học. Không điểm vào, không hứa hướng đi — chỉ dữ liệu và cách đọc.</p>
        <p class="byline">When Lambo Vova · Bài do Vova soạn từ dữ liệu lịch sử</p>
      </div>
      <figure>
        <img src="photo-markets.jpg" alt="Màn hình bảng giá thị trường trên điện thoại">
        <figcaption>Bảng giá buổi sáng qua điện thoại · Ảnh: Unsplash</figcaption>
      </figure>
    </section>
    <hr class="rule">
    <section class="blk blk--alt">
      <div class="wrap-inner">
      <p class="label">Thị trường</p>
      <h2 class="section">Hôm nay giá thế nào</h2>
      <p class="section-sub">Giá trực tiếp các cặp chính, quy về …/USD. Tự cập nhật mỗi 90 giây.</p>
      <div id="home-market">${marketTableHTML(5)}</div>
      <a class="btn ghost" href="#/thi-truong">Mở bảng thị trường đầy đủ</a>
      </div>
    </section>
    <section class="blk">
      <p class="label">Mới đăng</p>
      <h2 class="section">Bài mới trên trang</h2>
      <p class="section-sub">Mỗi bài kết lại bằng một điều đúc kết, kiểm chứng được trên chart.</p>
      <div class="article-list">
        <a class="article-item" href="#/bai/nhan-dinh-19-11"><span class="idx">01</span><span><span class="tag">Tin tức · Nhận định</span><h3>Nhận định đầu ngày 19/11: BTC sát đáy 90 ngày, RSI chạm 22</h3><p>Số liệu thật sáng nay: BTC và vàng dưới mọi đường MA, biên bản Fed, ETF bị rút 240 triệu USD.</p></span></a>
        <a class="article-item" href="#/bai/flash-crash-2020"><span class="idx">02</span><span><span class="tag">Kiến thức · Bài học lịch sử</span><h3>12/3/2020: ngày Bitcoin mất gần 39%</h3><p>Đòn bẩy, thanh khoản, và vì sao không có cái đáy nào an toàn cả.</p></span></a>
        <a class="article-item" href="#/bai/ftx-2022"><span class="idx">03</span><span><span class="tag">Kiến thức · Bài học lịch sử</span><h3>FTX sập: khi niềm tin vào sàn là rủi ro lớn nhất</h3><p>Tháng 11/2022, từ bài báo về Alameda tới tờ đơn phá sản.</p></span></a>
      </div>
    </section>
    ${promoBandHTML()}`,
  "thi-truong": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Thị trường</p>
      <h2 class="section">Bảng giá 24 giờ</h2>
      <div id="market-table">${marketTableHTML(0)}</div>
      <div id="market-bars">${barsHTML()}</div>
    </section>
    <section class="blk">
      <p class="label">Chart</p>
      <h2 class="section">BTC/USD, khung ngày</h2>
      <p class="section-sub">Đúng một bộ chỉ báo: MA 20/50/65/200, EMA 21/34/89/200, Bollinger (21, 2), RSI 14.</p>
      <div class="chart-box">
        <div class="legend">
          <span style="--c:#211d19">BTC/USD</span>
          <span style="--c:#2e86de">MA 20</span>
          <span style="--c:#8e44ad">MA 50</span>
          <span style="--c:#a2543f">MA 200</span>
          <span style="--c:#cbb26a">Bollinger (21, 2)</span>
        </div>
        <div id="chart-area"><p class="muted">Đang tải nến ngày và tính chỉ báo…</p></div>
        <canvas id="chart"></canvas>
        <canvas id="rsi"></canvas>
        <p class="table-note">Nguồn: giá BTC/USD theo ngày, tổng hợp nhiều sàn từ dữ liệu công khai. Số liệu một nguồn tổng hợp không thay chart của từng sàn cụ thể.</p>
      </div>
      <div class="facts" id="facts"></div>
      <div class="note">Đọc theo đúng bộ cố định: giá đang ở đâu so với từng đường MA và EMA, RSI ở vùng nào, giá nằm trên hay dưới đường giữa Bollinger. Trang chỉ mô tả trạng thái, không kết luận thay người xem.</div>
    </section>
    ${promoBandHTML()}`,
  "tin-tuc": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Thị trường</p>
      <h2 class="section">Tin tức mới nhất</h2>
      <p class="section-sub">Tin thị trường được viết lại ngắn gọn bằng tiếng Việt, có ghi nguồn. Chỉ để tham khảo, không phải lời khuyên đầu tư.</p>
      <p class="label" style="margin-top:18px">Cập nhật mỗi 30 phút</p>
      <div class="article-list" id="news-auto"><p class="muted">Đang tải tin…</p></div>
      <p class="label" style="margin-top:18px">Bài nhận định của Vova</p>
      <div class="article-list">
        <a class="article-item" href="#/bai/nhan-dinh-19-11"><span class="idx">01</span><span><span class="tag">Nhận định · Bản sáng 19/11</span><h3>Nhận định đầu ngày 19/11: BTC sát đáy 90 ngày, RSI chạm 22</h3><p>Số liệu thật, giờ thật, nguồn rõ. Không điểm vào, không hứa hướng đi.</p></span></a>
      </div>
    </section>
    ${promoBandHTML()}`,
  "kien-thuc": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Kiến thức</p>
      <h2 class="section">Bài học từ lịch sử</h2>
      <p class="section-sub">Những cú sập thật, số liệu thật, nguồn ghi rõ. Đọc để nhớ, vì thị trường không có nút hoàn tác.</p>
      <div class="article-list">
        <a class="article-item" href="#/bai/flash-crash-2020"><span class="idx">01</span><span><span class="tag">Bài học lịch sử</span><h3>12/3/2020: ngày Bitcoin mất gần 39%</h3><p>Đòn bẩy, thanh khoản, và vì sao không có cái đáy nào an toàn cả.</p></span></a>
        <a class="article-item" href="#/bai/ftx-2022"><span class="idx">02</span><span><span class="tag">Bài học lịch sử</span><h3>FTX sập: khi niềm tin vào sàn là rủi ro lớn nhất</h3><p>Tháng 11/2022, từ bài báo về Alameda tới tờ đơn phá sản.</p></span></a>
        <a class="article-item" href="#/bai/btc-2021-05"><span class="idx">03</span><span><span class="tag">Bài học lịch sử</span><h3>19/5/2021: Bitcoin rơi mạnh sau đợt tăng nóng</h3><p>Thanh lý dây chuyền và tâm lý đám đông.</p></span></a>
        <a class="article-item" href="#/bai/luna-2022"><span class="idx">04</span><span><span class="tag">Bài học lịch sử</span><h3>LUNA và UST 5/2022: khi stablecoin mất neo</h3><p>Lãi suất cao bất thường đến từ đâu?</p></span></a>
        <a class="article-item" href="#/bai/don-bay-ky-quy"><span class="idx">05</span><span><span class="tag">Khái niệm cơ bản</span><h3>Đòn bẩy và ký quỹ</h3><p>Vì sao tài khoản có thể về 0 nhanh.</p></span></a>
        <a class="article-item" href="#/bai/quan-tri-rui-ro"><span class="idx">06</span><span><span class="tag">Khái niệm cơ bản</span><h3>Quản trị rủi ro trước khi vào lệnh</h3><p>Mức lỗ quyết định khối lượng, không ngược lại.</p></span></a>
      </div>
      <h2 class="section" style="margin-top:44px">Từ điển nhanh</h2>
      <p class="section-sub">Những từ hay gặp trong video và bài viết. Nội dung giáo dục, không phải khuyến nghị đầu tư.</p>
      <div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Thanh lý (liquidation)</strong><p style="margin:4px 0 0;color:var(--muted)">Sàn tự đóng vị thế khi ký quỹ không đủ duy trì.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Ký quỹ (margin)</strong><p style="margin:4px 0 0;color:var(--muted)">Số vốn bỏ ra làm tài sản bảo đảm cho vị thế dùng đòn bẩy.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Đòn bẩy (leverage)</strong><p style="margin:4px 0 0;color:var(--muted)">Hệ số phóng đại vị thế so với vốn. Phóng đại cả lãi lẫn lỗ.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Stop-loss</strong><p style="margin:4px 0 0;color:var(--muted)">Lệnh tự đóng vị thế khi giá chạm mức sai đã định trước.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>RR (rủi ro/lợi nhuận)</strong><p style="margin:4px 0 0;color:var(--muted)">Tỷ lệ mức lời mục tiêu trên mức lỗ chấp nhận. Không nói gì về xác suất thắng.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Thanh khoản</strong><p style="margin:4px 0 0;color:var(--muted)">Mức dễ mua bán mà không làm giá dịch chuyển nhiều.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Slippage (trượt giá)</strong><p style="margin:4px 0 0;color:var(--muted)">Chênh lệch giữa giá mong muốn và giá khớp thực tế.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Spread</strong><p style="margin:4px 0 0;color:var(--muted)">Chênh lệch giữa giá mua và giá bán tại cùng thời điểm.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>Stablecoin</strong><p style="margin:4px 0 0;color:var(--muted)">Token cố giữ giá quanh 1 USD. Cơ chế giữ neo khác nhau, rủi ro cũng khác nhau.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>MA (đường trung bình động)</strong><p style="margin:4px 0 0;color:var(--muted)">Đường làm mượt giá trung bình của N phiên gần nhất.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>RSI</strong><p style="margin:4px 0 0;color:var(--muted)">Chỉ báo dao động 0 đến 100 đo tốc độ tăng giảm gần đây. Không phải tín hiệu mua bán.</p></div>
        <div style="padding:14px 0;border-bottom:1px solid var(--line, rgba(128,128,128,.3))"><strong>FVG (vùng mất cân bằng giá)</strong><p style="margin:4px 0 0;color:var(--muted)">Khoảng trống giữa các nến. Một giả thuyết cần định nghĩa và kiểm chứng, không phải điểm đảo chiều chắc chắn.</p></div>
      </div>
    </section>
    ${promoBandHTML()}`,
  video: () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Video</p>
      <h2 class="section">Video When Lambo Vova</h2>
      <p class="section-sub">Trang web không thay kênh YouTube mà là bản chữ đi kèm: số liệu, nguồn, chart tĩnh.</p>
      <div class="article-list">
        <a class="article-item" href="${DAILY_VIEW_VIDEO}" target="_blank" rel="noopener"><span class="idx">01</span><span><span class="tag">YouTube · Nhận định</span><h3>Nhận định phiên 9/11/2026: Vàng, Bitcoin, Ethereum</h3><p>Video mẫu cho chuyên mục nhận định hằng ngày.</p></span></a>
        <a class="article-item" href="${CHANNEL_URL}" target="_blank" rel="noopener"><span class="idx">02</span><span><span class="tag">YouTube · Kênh</span><h3>Toàn bộ kênh When Lambo Vova</h3><p>Tối thiểu 5 Shorts mỗi ngày: có tin nóng thì tin nóng đi trước, không có thì rà lại lịch sử cho bài học đau.</p></span></a>
      </div>
      <h3 style="font-family:'Playfair Display',Georgia,serif;font-weight:500;font-size:19px;margin:30px 0 12px">Xem ngay bản mới nhất</h3>
      <iframe class="video-embed" src="https://www.youtube-nocookie.com/embed/${VIDEO_ID}" title="Nhận định phiên 9/11/2026 — When Lambo Vova" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>`,
  "vang": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Giá vàng</p>
      <h2 class="section">Theo dõi giá vàng</h2>
      <p class="section-sub">Vàng thế giới tự động từ nguồn miễn phí; vàng trong nước không có nguồn API miễn phí tin cậy nên Vova cập nhật tay, ghi rõ giờ.</p>
      <div id="gold-spot"><p class="muted">Đang tải giá vàng thế giới…</p></div>
    </section>
    <section class="blk blk--alt">
      <div class="wrap-inner">
        <p class="label">Trong nước</p>
        <h2 class="section">Vàng SJC và nhẫn trơn</h2>
        <p class="section-sub">SJC, nhẫn trơn 9999, DOJI, Phú Quý — tự động từ nguồn niêm yết công khai, mỗi 30 phút.</p>
        <div id="gold-vn"><p class="muted">Đang tải giá trong nước…</p></div>
      </div>
    </section>
    <section class="blk">
      <p class="label">Chart</p>
      <h2 class="section">PAXG/USD, khung ngày</h2>
      <p class="section-sub">Vàng token hóa bám vàng thế giới, chỉ để tham khảo hình chart. Đúng một bộ chỉ báo: MA 20/50/65/200, EMA 21/34/89/200, Bollinger (21, 2), RSI 14.</p>
      <div class="chart-box">
        <div class="legend">
          <span style="--c:#211d19">PAXG/USD</span>
          <span style="--c:#2e86de">MA 20</span>
          <span style="--c:#8e44ad">MA 50</span>
          <span style="--c:#a2543f">MA 200</span>
          <span style="--c:#cbb26a">Bollinger (21, 2)</span>
        </div>
        <div id="gchart-area"><p class="muted">Đang tải nến ngày và tính chỉ báo…</p></div>
        <canvas id="gchart"></canvas>
        <canvas id="grsi"></canvas>
        <p class="table-note">Nguồn: giá PAXG/USD theo ngày từ dữ liệu công khai. PAXG là token bám giá vàng thế giới, chỉ tham khảo, không thay giá SJC.</p>
      </div>
      <div class="facts" id="gfacts"></div>
      <div class="note">Đọc theo đúng bộ cố định: giá đang ở đâu so với từng đường MA và EMA, RSI ở vùng nào, giá nằm trên hay dưới đường giữa Bollinger. Trang chỉ mô tả trạng thái, không kết luận thay người xem.</div>
    </section>
    ${promoBandHTML()}`,
  "fx": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Thị trường</p>
      <h2 class="section">Cặp FX nổi bật</h2>
      <p class="section-sub">Tỷ giá tham chiếu miễn phí từ ECB, cập nhật mỗi ngày làm việc.</p>
      <div id="fx-table"><p class="muted">Đang tải tỷ giá…</p></div>
    </section>
    ${promoBandHTML()}`,
};

function themeColor(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#888"; }

const themeToggle = document.getElementById("theme-toggle");
function syncThemeIcon() {
  if (!themeToggle) return;
  const cur = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  themeToggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.setTheme === cur));
}
if (themeToggle) {
  syncThemeIcon();
  themeToggle.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    const next = b.dataset.setTheme;
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("wlv-theme", next); } catch (e) {}
    syncThemeIcon();
    if (klineData || klineError) renderChart();
    if (goldKline || goldKlineError) renderGoldChart();
  }));
}

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const app = document.getElementById("app");
  let page = "home";
  if (hash.startsWith("tin/")) {
    const id = decodeURIComponent(hash.slice(4));
    document.body.dataset.page = "tin-tuc"; currentRoute = "news-article"; setActive("tin-tuc"); window.scrollTo(0, 0);
    const draw = (retried) => {
      const n = (newsItems || []).find((x) => x.id === id);
      if (n) { app.innerHTML = newsArticleHTML(n); return; }
      if (!retried) { app.innerHTML = '<section class="blk" style="margin-top:40px"><p class="muted">Đang tải bài…</p></section>'; loadNews(true).then(() => draw(true)); return; }
      app.innerHTML = '<section class="blk" style="margin-top:40px"><h2 class="section">Không tìm thấy bài này</h2><p class="section-sub">Bài có thể đã được gỡ hoặc chưa được duyệt.</p><a class="back" href="#/tin-tuc">← Quay lại Tin tức</a></section>';
    };
    draw(false);
    return;
  }
  if (hash.startsWith("bai/")) {
    const key = hash.slice(4);
    if (ARTICLES[key]) { app.innerHTML = articleHTML(key); page = hash.startsWith("bai/nhan-dinh") ? "tin-tuc" : "kien-thuc"; document.body.dataset.page = page; window.scrollTo(0, 0); setActive(page); currentRoute = page; return; }
  }
  if (PAGES[hash]) page = hash;
  document.body.dataset.page = page;
  app.innerHTML = PAGES[page]();
  currentRoute = page;
  setActive(page);
  window.scrollTo(0, 0);
  if (page === "thi-truong") renderChart();
  if (page === "vang") renderGoldChart();
  if (page === "fx") renderFx();
  if (page === "vang") { renderGoldSpot(); renderGoldChart(); }
  if (page === "tin-tuc") { renderNews(); loadNews(); }
}

function setActive(page) {
  document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === page));
}

window.addEventListener("hashchange", route);
window.addEventListener("resize", () => { if (currentRoute === "thi-truong") renderChart(); if (currentRoute === "vang") renderGoldChart(); });

const dl = document.getElementById("date-line");
if (dl) dl.textContent = new Date().toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

route();
loadTickers();
loadKlines();
loadGold();
loadVangVN();
loadGoldKlines();
loadFx();
setInterval(loadTickers, 90000);
setInterval(loadKlines, 60 * 60 * 1000);
