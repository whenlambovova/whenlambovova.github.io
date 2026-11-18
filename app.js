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
  { id: "pax-gold", pair: "PAXG/USD", name: "VÃ ng token hÃ³a, tham kháº£o" },
];

const fmt = (n, d = 2) => n.toLocaleString("vi-VN", { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtPrice = (n) => n.toLocaleString("vi-VN", { maximumFractionDigits: n < 10 ? 4 : 2 });
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/* ---------- Market data ---------- */
let tickers = []; // {id, price, changePct}
let tickerError = false;
let lastUpdate = null;

/* Cache: localStorage, stale allowed on error. live.json (written by a free
   scheduled fetcher on the host, when present) beats direct API calls. */
const TICKER_TTL = 90 * 1000;          // 90 giÃ¢y
const CHART_TTL = 60 * 60 * 1000;      // 60 phÃºt
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

let liveSnapshot = undefined; // undefined = chÆ°a thá»­, null = khÃ´ng cÃ³, object = cÃ³
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
  if (goldError && !goldSpot) { el.innerHTML = '<div class="note">ChÆ°a táº£i ÄÆ°á»£c giÃ¡ vÃ ng tháº¿ giá»i tá»« nguá»n miá»n phÃ­. Trang tá»± thá»­ láº¡i sau Ã­t phÃºt.</div>'; return; }
  if (!goldSpot) { el.innerHTML = '<p class="muted">Äang táº£i giÃ¡ vÃ ng tháº¿ giá»iâ¦</p>'; return; }
  const OZ_PER_LUONG = 1.20565; // 1 lÆ°á»£ng (cÃ¢y) = 37,5 g = 1,20565 oz troy
  const usdOz = goldSpot.price;
  const usdLuong = usdOz * OZ_PER_LUONG;
  const time = new Date(goldSpot.at).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" });
  let rows = `<tr><td class="pair">XAU/USD<small>VÃ ng tháº¿ giá»i, 1 oz troy</small></td><td class="num">${fmt(usdOz)} $</td><td class="num">oz</td></tr>
  <tr><td class="pair">Quy Äá»i<small>1 lÆ°á»£ng = 1,20565 oz</small></td><td class="num">${fmt(usdLuong)} $</td><td class="num">lÆ°á»£ng</td></tr>`;
  if (goldXag) rows += `<tr><td class="pair">XAG/USD<small>Báº¡c tháº¿ giá»i, 1 oz troy</small></td><td class="num">${fmt(goldXag)} $</td><td class="num">oz</td></tr>`;
  if (goldFx) rows += `<tr><td class="pair">Quy Äá»i VND<small>Theo tá»· giÃ¡ USD/VND ${fmt(goldFx, 0)}, tham kháº£o</small></td><td class="num">${fmt(usdLuong * goldFx, 0)} â«</td><td class="num">lÆ°á»£ng</td></tr>`;
  el.innerHTML = `<table class="price"><thead><tr><th>Má»¥c</th><th class="num">GiÃ¡</th><th class="num">ÄÆ¡n vá»</th></tr></thead><tbody>${rows}</tbody></table>
  <p class="table-note">Nguá»n: Gold API (gold-api.com, miá»n phÃ­), cáº­p nháº­t ${time}. Tá»· giÃ¡ USD/VND: open.er-api.com. GiÃ¡ quy Äá»i chá» Äá» so sÃ¡nh tÆ°Æ¡ng Äá»i, chÆ°a gá»m thuáº¿, phÃ­ vÃ  chÃªnh lá»ch trong nÆ°á»c.</p>`;
}

/* ---------- Gold chart (PAXG tham kháº£o, cÃ¹ng bá» chá» bÃ¡o) ---------- */
let goldXag = null;
let goldKline = null, goldKlineError = false;

/* ---------- VÃ ng trong nÆ°á»c (SJC, nháº«n, DOJI, PhÃº QuÃ½ tá»« nguá»n cÃ´ng khai) ---------- */
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
  if (vangVNError && !vangVN) { el.innerHTML = '<div class="note">ChÆ°a táº£i ÄÆ°á»£c giÃ¡ vÃ ng trong nÆ°á»c tá»« nguá»n cÃ´ng khai. Trang tá»± thá»­ láº¡i sau Ã­t phÃºt.</div>'; return; }
  if (!vangVN) { el.innerHTML = '<p class="muted">Äang táº£i giÃ¡ trong nÆ°á»câ¦</p>'; return; }
  const fmtK = (v) => (v > 0 ? "+" : "") + fmt(v / 1000, 0) + "k";
  const row = (label, sub, d) => (d && d.buy) ? `<tr><td class="pair">${label}<small>${sub}</small></td><td class="num">${fmt(d.buy, 0)} â«</td><td class="num">${fmt(d.sell, 0)} â«</td><td class="num ${d.change < 0 ? "down" : "up"}">${d.change ? fmtK(d.change) : "â"}</td></tr>` : "";
  const rows = row("SJC", "VÃ ng miáº¿ng, 1 lÆ°á»£ng", vangVN.sjc) + row("Nháº«n trÆ¡n 9999", "Báº£o TÃ­n, 1 lÆ°á»£ng", vangVN.nhan) + row("DOJI", "DOJI HCM, 1 lÆ°á»£ng", vangVN.doji) + row("PhÃº QuÃ½", "PhÃº QuÃ½ SJC, 1 lÆ°á»£ng", vangVN.phuquy);
  const time = vangVN.at ? new Date(vangVN.at).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" }) : "";
  el.innerHTML = `<table class="price"><thead><tr><th>ThÆ°Æ¡ng hiá»u</th><th class="num">Mua vÃ o</th><th class="num">BÃ¡n ra</th><th class="num">Â± phiÃªn</th></tr></thead><tbody>${rows}</tbody></table>
  <p class="table-note">Nguá»n: tá»ng há»£p niÃªm yáº¿t cÃ´ng khai (vang.today), cáº­p nháº­t ${time}, tá»± Äá»ng má»i 30 phÃºt. PAXG trong báº£ng giÃ¡ chá» lÃ  vÃ ng token hÃ³a, tham kháº£o, khÃ´ng thay giÃ¡ SJC.</p>`;
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
  if (fxError && !fxRows) { el.innerHTML = '<div class="note">ChÆ°a táº£i ÄÆ°á»£c tá»· giÃ¡ tá»« nguá»n miá»n phÃ­. Trang tá»± thá»­ láº¡i sau.</div>'; return; }
  if (!fxRows) { el.innerHTML = '<p class="muted">Äang táº£i tá»· giÃ¡â¦</p>'; return; }
  const rows = fxRows.map((r) => {
    const cls = r.chg === null ? "" : (r.chg >= 0 ? "up" : "down");
    const sign = r.chg === null ? "" : (r.chg >= 0 ? "+" : "");
    return `<tr><td class="pair">${r.pair}</td><td class="num">${r.price.toLocaleString("vi-VN", { minimumFractionDigits: r.d, maximumFractionDigits: r.d })}</td><td class="num ${cls}">${r.chg === null ? "â" : sign + fmt(r.chg) + "%"}</td></tr>`;
  }).join("");
  const vndRow = vndRate ? `<tr><td class="pair">USD/VND<small>Tham kháº£o</small></td><td class="num">${fmt(vndRate, 0)}</td><td class="num">â</td></tr>` : "";
  el.innerHTML = `<table class="price"><thead><tr><th>Cáº·p</th><th class="num">Tá»· giÃ¡</th><th class="num">So phiÃªn trÆ°á»c</th></tr></thead><tbody>${rows}${vndRow}</tbody></table>
  <p class="table-note">Nguá»n: tá»· giÃ¡ tham chiáº¿u ECB qua Frankfurter (frankfurter.dev, miá»n phÃ­), ngÃ y tham chiáº¿u ${fxDate || "â"}; USD/VND tá»« open.er-api.com. Tá»· giÃ¡ tham chiáº¿u cáº­p nháº­t má»i ngÃ y lÃ m viá»c, khÃ´ng pháº£i giÃ¡ tick realtime vÃ  khÃ´ng pháº£i tá»· giÃ¡ mua bÃ¡n táº¡i ngÃ¢n hÃ ng.</p>`;
}

function renderTickerStrip() {
  const el = document.getElementById("ticker-strip");
  if (tickerError) { el.innerHTML = '<span class="muted">ChÆ°a táº£i ÄÆ°á»£c giÃ¡ trá»±c tiáº¿p â trang tá»± thá»­ láº¡i sau Ã­t phÃºt.</span>'; return; }
  if (!tickers.length) { el.innerHTML = '<span class="muted">Äang táº£i giÃ¡â¦</span>'; return; }
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
  if (klineError) { box.innerHTML = '<div class="note">ChÆ°a táº£i ÄÆ°á»£c dá»¯ liá»u giÃ¡ lá»ch sá»­ (nguá»n cÃ´ng khai giá»i háº¡n lÆ°á»£t gá»i). Trang tá»± thá»­ láº¡i sau; náº¿u ÄÃ£ tá»«ng má» trang, sá» liá»u gáº§n nháº¥t váº«n hiá»n thá».</div>'; return; }
  if (!klineData) { box.innerHTML = '<p class="muted">Äang táº£i náº¿n ngÃ y vÃ  tÃ­nh chá» bÃ¡oâ¦</p>'; return; }

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
    ["ÄÃ³ng cá»­a gáº§n nháº¥t (UTC)", fmtPrice(closes[at]) + " $"],
    ["MA 20 / 50 ngÃ y", (ma[20][at] ? fmtPrice(ma[20][at]) : "â") + " / " + (ma[50][at] ? fmtPrice(ma[50][at]) : "â")],
    ["MA 65 / 200 ngÃ y", (ma[65][at] ? fmtPrice(ma[65][at]) : "â") + " / " + (ma[200][at] ? fmtPrice(ma[200][at]) : "â")],
    ["EMA 21 / 34 ngÃ y", (ema[21][at] ? fmtPrice(ema[21][at]) : "â") + " / " + (ema[34][at] ? fmtPrice(ema[34][at]) : "â")],
    ["EMA 89 / 200 ngÃ y", (ema[89][at] ? fmtPrice(ema[89][at]) : "â") + " / " + (ema[200][at] ? fmtPrice(ema[200][at]) : "â")],
    ["RSI 14", lastRsi !== null ? fmt(lastRsi, 1) : "â"],
    ["Bollinger (21, 2): trÃªn / giá»¯a / dÆ°á»i", bbUp[at] !== null ? `${fmtPrice(bbUp[at])} / ${fmtPrice(mid[at])} / ${fmtPrice(bbLow[at])}` : "â"],
    ["Äá»nh / ÄÃ¡y 90 ngÃ y", fmtPrice(Math.max(...closes)) + " / " + fmtPrice(Math.min(...closes))],
  ];
  document.getElementById(factsId).innerHTML = facts.map(([l, v]) => `<div class="fact"><div class="l">${l}</div><div class="v">${v}</div></div>`).join("");
}

/* ---------- Page fragments ---------- */
function marketTableHTML(limit) {
  if (tickerError) return '<div class="note">ChÆ°a táº£i ÄÆ°á»£c giÃ¡ trá»±c tiáº¿p (nguá»n cÃ´ng khai giá»i háº¡n lÆ°á»£t gá»i). Trang tá»± thá»­ láº¡i sau Ã­t phÃºt vÃ  hiá»n thá» sá» liá»u gáº§n nháº¥t ÄÃ£ lÆ°u náº¿u cÃ³.</div>';
  if (!tickers.length) return '<p class="muted">Äang táº£i giÃ¡ trá»±c tiáº¿pâ¦</p>';
  const rows = (limit ? tickers.slice(0, limit) : tickers).map((t) => {
    const s = SYMBOLS.find((x) => x.id === t.id);
    const cls = t.changePct >= 0 ? "up" : "down";
    const sign = t.changePct >= 0 ? "+" : "";
    return `<tr><td class="pair">${s.pair}<small>${s.name}</small></td><td class="num">${fmtPrice(t.price)} $</td><td class="num ${cls}">${sign}${fmt(t.changePct)}%</td></tr>`;
  }).join("");
  return `<table class="price"><thead><tr><th>Cáº·p</th><th class="num">GiÃ¡</th><th class="num">24 giá»</th></tr></thead><tbody>${rows}</tbody></table>
  <p class="table-note">Nguá»n: dá»¯ liá»u giÃ¡ cÃ´ng khai, cáº­p nháº­t lÃºc ${lastUpdate ? lastUpdate.toLocaleTimeString("vi-VN") : "â"}. Tá»± táº£i láº¡i má»i 90 giÃ¢y (tá»i Äa 30 phÃºt náº¿u dÃ¹ng báº£n ghi cá»§a mÃ¡y chá»§). Táº¥t cáº£ cáº·p quy vá» â¦/USD. PAXG lÃ  vÃ ng token hÃ³a, chá» tham kháº£o, khÃ´ng thay giÃ¡ vÃ ng tháº¿ giá»i hay SJC.</p>`;
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
  return `<h2 class="section">Biáº¿n Äá»ng 24 giá»</h2><div class="card bars">${rows}</div>`;
}

const ARTICLES = {
  "nhan-dinh-mau": {
    tag: "Tin tá»©c Â· Nháº­n Äá»nh", date: "NgÃ y 18 thÃ¡ng 11 nÄm 2026", title: "Nháº­n Äá»nh Äáº§u ngÃ y: cáº¥u trÃºc cá» Äá»nh",
    intro: "ÄÃ¢y lÃ  khung bÃ i nháº­n Äá»nh háº±ng ngÃ y, dá»±a trÃªn báº£n 9/11 ÄÃ£ phÃ¡t trÃªn kÃªnh. Sá» liá»u háº±ng ngÃ y ÄÆ°á»£c tÃ­nh láº¡i tá»« dá»¯ liá»u náº¿n; bÃ i nÃ y giá»¯ cáº¥u trÃºc.",
    body: `
      <h3>BÆ°á»c 1 â TÃ¡ch ba thá»© riÃªng biá»t</h3>
      <ul>
        <li>GiÃ¡ ÄÃ£ xáº£y ra: náº¿n ÄÃ£ ÄÃ³ng, theo giá» UTC, ghi rÃµ sÃ n vÃ  khung.</li>
        <li>Cáº¥u trÃºc khung lá»n: thÃ¡ng, tuáº§n, ngÃ y xÃ©t theo thá»© tá»±, khÃ´ng dÃ¹ng náº¿n Äang cháº¡y thay náº¿n ÄÃ£ ÄÃ³ng.</li>
        <li>Ká»ch báº£n chÆ°a xáº£y ra: Äiá»u kiá»n xÃ¡c nháº­n vÃ  Äiá»u kiá»n khiáº¿n nháº­n Äá»nh khÃ´ng cÃ²n phÃ¹ há»£p.</li>
      </ul>
      <h3>BÆ°á»c 2 â Äá»c bá» chá» bÃ¡o cá» Äá»nh</h3>
      <ul>
        <li>MA 20, 50, 65, 200 vÃ  EMA 21, 34, 89, 200 trÃªn khung ngÃ y: giÃ¡ trÃªn hay dÆ°á»i tá»«ng ÄÆ°á»ng, nÃªu ÄÃºng nhÆ° dá»¯ liá»u.</li>
        <li>Bollinger (21, 2): vá» trÃ­ so vá»i ÄÆ°á»ng giá»¯a vÃ  hai biÃªn.</li>
        <li>RSI 14: vÃ¹ng lá»±c, khÃ´ng suy diá»n quÃ¡ má»©c.</li>
        <li>Fibonacci tá»« nhá»p gáº§n nháº¥t: Äá»nh, ÄÃ¡y, cÃ¡c má»©c há»i 23,6% vÃ  38,2%.</li>
        <li>Khá»i lÆ°á»£ng má»t sÃ n chá» lÃ  cá»§a sÃ n ÄÃ³; tÄng khá»i lÆ°á»£ng khi giÃ¡ giáº£m lÃ  sá»©c Ã©p bÃ¡n, chÆ°a pháº£i phÃ¢n ká»³.</li>
      </ul>
      <h3>BÆ°á»c 3 â VÃ ng thÃ¬ thÃªm vÃ ng trong nÆ°á»c</h3>
      <p>NgÃ y nÃ o bÃ n vÃ ng tháº¿ giá»i thÃ¬ Äá»i chiáº¿u SJC vÃ  nháº«n trÆ¡n: giÃ¡ mua, giÃ¡ bÃ¡n, chÃªnh lá»ch mua bÃ¡n vÃ  chÃªnh vá»i tháº¿ giá»i, ghi rÃµ giá» niÃªm yáº¿t, khÃ´ng ghÃ©p hai loáº¡i giÃ¡ thÃ nh má»t cÃ¢u chuyá»n.</p>`,
    takeaway: "NguyÃªn táº¯c giá»¯ xuyÃªn suá»t: mÃ´ táº£ Äiá»u kiá»n, khÃ´ng há»©a hÆ°á»ng Äi; khÃ´ng Äiá»m vÃ o, dá»«ng lá» hay má»¥c tiÃªu lá»nh trong báº£n tin.",
    source: `Video máº«u 9/11: <a href="${DAILY_VIEW_VIDEO}">xem trÃªn kÃªnh YouTube</a>.`,
    back: "#/tin-tuc", backLabel: "Quay láº¡i Tin tá»©c",
  },
  "flash-crash-2020": {
    tag: "Kiáº¿n thá»©c Â· BÃ i há»c lá»ch sá»­", date: "NgÃ y 18 thÃ¡ng 11 nÄm 2026", title: "12/3/2020: ngÃ y Bitcoin máº¥t gáº§n 39%",
    intro: "NgÃ y 12/3/2020, khi hoáº£ng loáº¡n COVID-19 quÃ©t qua má»i thá» trÆ°á»ng, Bitcoin trÃªn Coinbase rÆ¡i tá»« vÃ¹ng khoáº£ng 7.900 USD xuá»ng ÄÃ¡y trong ngÃ y quanh 3.850 USD, tá»©c máº¥t gáº§n 39% trong cÃ¹ng má»t ngÃ y. ÄÃ¢y lÃ  dá»¯ liá»u náº¿n tháº­t cá»§a má»t sÃ n, khÃ´ng pháº£i con sá» minh há»a.",
    body: `
      <h3>CÃº rÆ¡i khÃ´ng Äi má»t mÃ¬nh</h3>
      <ul>
        <li>ToÃ n bá» tÃ i sáº£n rá»§i ro bá» bÃ¡n thÃ¡o cÃ¹ng lÃºc; ngÆ°á»i cáº§m ÄÃ²n báº©y cao bá» gá»i kÃ½ quá»¹ á» má»i thá» trÆ°á»ng.</li>
        <li>Lá»nh thanh lÃ½ trÃªn cÃ¡c sÃ n phÃ¡i sinh táº¡o hiá»u á»©ng dÃ¢y chuyá»n: giÃ¡ rÆ¡i kÃ­ch hoáº¡t thanh lÃ½, thanh lÃ½ Äáº©y giÃ¡ rÆ¡i thÃªm.</li>
        <li>Thanh khoáº£n má»ng á» vÃ¹ng hoáº£ng loáº¡n khiáº¿n má»t lÆ°á»£ng bÃ¡n khÃ´ng quÃ¡ lá»n cÅ©ng Äáº©y giÃ¡ Äi ráº¥t xa.</li>
      </ul>
      <p>TrÃªn chart ngÃ y, giÃ¡ xuyÃªn qua má»i ÄÆ°á»ng MA dÃ i háº¡n trong má»t phiÃªn. Nhá»¯ng vÃ¹ng há» trá»£ trÃ´ng ráº¥t cháº¯c trÃªn khung lá»n bá» xuyÃªn thá»§ng trong vÃ i giá», vÃ¬ lá»±c bÃ¡n lÃºc ÄÃ³ lÃ  bÃ¡n báº¯t buá»c, khÃ´ng pháº£i bÃ¡n theo phÃ¢n tÃ­ch.</p>`,
    takeaway: "BÃ i há»c ÄÃºc káº¿t: ÄÃ²n báº©y cao cá»ng thanh khoáº£n má»ng thÃ¬ khÃ´ng tá»n táº¡i vÃ¹ng ÄÃ¡y an toÃ n. Quáº£n trá» rá»§i ro pháº£i ÄÆ°á»£c Äáº·t trÆ°á»c khi vÃ o lá»nh, khÃ´ng pháº£i sau khi giÃ¡ ÄÃ£ xuyÃªn há» trá»£.",
    source: "Nguá»n: dá»¯ liá»u náº¿n lá»ch sá»­ BTC/USD trÃªn Coinbase.",
    back: "#/kien-thuc", backLabel: "Quay láº¡i Kiáº¿n thá»©c",
  },
  "ftx-2022": {
    tag: "Kiáº¿n thá»©c Â· BÃ i há»c lá»ch sá»­", date: "NgÃ y 18 thÃ¡ng 11 nÄm 2026", title: "FTX sáº­p: khi niá»m tin vÃ o sÃ n lÃ  rá»§i ro lá»n nháº¥t",
    intro: "Äáº§u thÃ¡ng 11/2022, má»t bÃ i bÃ¡o vá» báº£ng cÃ¢n Äá»i cá»§a Alameda Research lÃ m dáº¥y nghi váº¥n vá» sÃ n FTX. Trong vÃ i ngÃ y, token FTT rÆ¡i tá»« vÃ¹ng khoáº£ng 22 USD xuá»ng quanh 1,5 USD, sÃ n ÄÃ´ng cá»©ng rÃºt tiá»n, vÃ  ngÃ y 11/11/2022 FTX ná»p ÄÆ¡n phÃ¡ sáº£n. CÃ¡c bÃ¡o cÃ¡o cÃ´ng khai sau ÄÃ³ chá» ra khoáº£ng thiáº¿u há»¥t lÃªn tá»i hÃ ng tá»· USD cá»§a tiá»n khÃ¡ch hÃ ng.",
    body: `
      <h3>KhÃ´ng ai Äá»©ng ngoÃ i má»t mÃ¬nh</h3>
      <ul>
        <li>BTC/USD rÆ¡i tá»« vÃ¹ng khoáº£ng 20.500 xuá»ng quanh 15.500 USD trong tuáº§n sá»± kiá»n, theo dá»¯ liá»u Coinbase.</li>
        <li>CÃ¡c quá»¹ vÃ  sÃ n cÃ³ khoáº£n vay, kÃ½ quá»¹ hoáº·c token liÃªn quan FTX láº§n lÆ°á»£t cÃ´ng bá» thiá»t háº¡i.</li>
        <li>NgÆ°á»i dÃ¹ng cÃ¡ nhÃ¢n giá»¯ toÃ n bá» tÃ i sáº£n trÃªn sÃ n máº¥t quyá»n rÃºt trong má»t ÄÃªm, dÃ¹ tÃ i khoáº£n váº«n hiá»n thá» sá» dÆ°.</li>
      </ul>`,
    takeaway: "BÃ i há»c ÄÃºc káº¿t: sá» dÆ° hiá»n thá» trÃªn sÃ n lÃ  má»t khoáº£n sÃ n ná»£ mÃ¬nh, khÃ´ng pháº£i tÃ i sáº£n Äang trong tay mÃ¬nh. Chia rá»§i ro lÆ°u kÃ½ lÃ  má»t pháº§n cá»§a quáº£n trá» vá»n, ngang hÃ ng vá»i Äáº·t dá»«ng lá».",
    source: "Nguá»n: há» sÆ¡ phÃ¡ sáº£n cÃ´ng khai cá»§a FTX, dá»¯ liá»u náº¿n Coinbase.",
    back: "#/kien-thuc", backLabel: "Quay láº¡i Kiáº¿n thá»©c",
  },
};

function articleHTML(key) {
  const a = ARTICLES[key];
  return `<div class="article-grid" style="margin-top:36px">
    <div class="article">
      <span class="tag">${a.tag}</span>
      <h2 class="title">${a.title}</h2>
      <p class="byline">When Lambo Vova Â· ${a.date}</p>
      <p class="intro">${a.intro}</p>
      ${a.body}
      <div class="takeaway">${a.takeaway}</div>
      <p class="source">${a.source}</p>
      <a class="back" href="${a.back}">â ${a.backLabel}</a>
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
    <p class="label">Quáº£ng bÃ¡</p>
    <p class="pname">KÃªnh YouTube When Lambo Vova</p>
    <p class="desc">Video ngáº¯n má»i ngÃ y: tin nÃ³ng gáº¯n vá»i chart cáº·p â¦/USD, bÃ i há»c tá»« cÃ¡c cÃº sáº­p lá»ch sá»­. Xem video xong quay láº¡i ÄÃ¢y Äá»c sá» liá»u cho ká»¹.</p>
    <a class="thumb" href="${DAILY_VIEW_VIDEO}" target="_blank" rel="noopener">
      <img src="https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg" alt="Video nháº­n Äá»nh phiÃªn 9/11/2026 trÃªn kÃªnh When Lambo Vova">
    </a>
    <a class="btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">Xem kÃªnh</a>
    <p class="pnote">Ã nÃ y lÃ  quáº£ng bÃ¡ cá»§a chÃ­nh trang, khÃ´ng pháº£i quáº£ng cÃ¡o bÃªn thá»© ba.</p>
  </aside>`;
}
function promoBandHTML() {
  return `<div class="promo-band">
    <div class="promo-band-inner">
      <a class="thumb" href="${DAILY_VIEW_VIDEO}" target="_blank" rel="noopener">
        <img src="https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg" alt="Video nháº­n Äá»nh phiÃªn 9/11/2026 trÃªn kÃªnh When Lambo Vova">
      </a>
      <div>
        <p class="label">Quáº£ng bÃ¡ Â· KÃªnh YouTube</p>
        <h2 class="section">Video má»i: nháº­n Äá»nh phiÃªn 9/11</h2>
        <p class="section-sub">VÃ ng, Bitcoin, Ethereum â xem trÃªn kÃªnh When Lambo Vova, rá»i Äá»c láº¡i sá» liá»u á» ÄÃ¢y. Trang khÃ´ng cháº¡y quáº£ng cÃ¡o bÃªn ngoÃ i; Ã´ nÃ y quáº£ng bÃ¡ kÃªnh cá»§a chÃ­nh mÃ¬nh.</p>
        <a class="btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">Xem kÃªnh When Lambo Vova</a>
      </div>
    </div>
  </div>`;
}

const PAGES = {
  home: () => `
    <section class="hero blk">
      <div>
        <p class="dateline">${new Date().toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
        <h2 class="big">Äá»c thá» trÆ°á»ng <em>cho bá»t mÆ¡ há».</em></h2>
        <p class="standfirst">ÄÃ¢y lÃ  nháº­t kÃ½ cá»§a When Lambo Vova. GiÃ¡ Äang cháº¡y á» ngay trÃªn, chart chá» váº½ má»t bá» chá» bÃ¡o duy nháº¥t mÃ¬nh dÃ¹ng tháº­t, cÃ²n bÃ i viáº¿t lÃ  nhá»¯ng láº§n thá» trÆ°á»ng dáº¡y mÃ¬nh má»t bÃ i há»c. KhÃ´ng Äiá»m vÃ o, khÃ´ng há»©a hÆ°á»ng Äi â chá» dá»¯ liá»u vÃ  cÃ¡ch Äá»c.</p>
        <p class="byline">When Lambo Vova Â· BÃ i do Vova soáº¡n tá»« dá»¯ liá»u lá»ch sá»­</p>
      </div>
      <figure>
        <img src="photo-markets.jpg" alt="MÃ n hÃ¬nh báº£ng giÃ¡ thá» trÆ°á»ng trÃªn Äiá»n thoáº¡i">
        <figcaption>Báº£ng giÃ¡ buá»i sÃ¡ng qua Äiá»n thoáº¡i Â· áº¢nh: Unsplash</figcaption>
      </figure>
    </section>
    <hr class="rule">
    <section class="blk blk--alt">
      <div class="wrap-inner">
      <p class="label">Thá» trÆ°á»ng</p>
      <h2 class="section">HÃ´m nay giÃ¡ tháº¿ nÃ o</h2>
      <p class="section-sub">GiÃ¡ trá»±c tiáº¿p cÃ¡c cáº·p chÃ­nh, quy vá» â¦/USD. Tá»± cáº­p nháº­t má»i 90 giÃ¢y.</p>
      <div id="home-market">${marketTableHTML(5)}</div>
      <a class="btn ghost" href="#/thi-truong">Má» báº£ng thá» trÆ°á»ng Äáº§y Äá»§</a>
      </div>
    </section>
    <section class="blk">
      <p class="label">Má»i ÄÄng</p>
      <h2 class="section">BÃ i má»i trÃªn trang</h2>
      <p class="section-sub">Má»i bÃ i káº¿t láº¡i báº±ng má»t Äiá»u ÄÃºc káº¿t, kiá»m chá»©ng ÄÆ°á»£c trÃªn chart.</p>
      <div class="article-list">
        <a class="article-item" href="#/bai/nhan-dinh-mau"><span class="idx">01</span><span><span class="tag">Tin tá»©c Â· Nháº­n Äá»nh</span><h3>Nháº­n Äá»nh Äáº§u ngÃ y: vÃ ng, BTC, ETH</h3><p>Cáº¥u trÃºc báº£n nháº­n Äá»nh háº±ng ngÃ y: giÃ¡ ÄÃ£ xáº£y ra, cáº¥u trÃºc khung lá»n, rá»i má»i tá»i ká»ch báº£n.</p></span></a>
        <a class="article-item" href="#/bai/flash-crash-2020"><span class="idx">02</span><span><span class="tag">Kiáº¿n thá»©c Â· BÃ i há»c lá»ch sá»­</span><h3>12/3/2020: ngÃ y Bitcoin máº¥t gáº§n 39%</h3><p>ÄÃ²n báº©y, thanh khoáº£n, vÃ  vÃ¬ sao khÃ´ng cÃ³ cÃ¡i ÄÃ¡y nÃ o an toÃ n cáº£.</p></span></a>
        <a class="article-item" href="#/bai/ftx-2022"><span class="idx">03</span><span><span class="tag">Kiáº¿n thá»©c Â· BÃ i há»c lá»ch sá»­</span><h3>FTX sáº­p: khi niá»m tin vÃ o sÃ n lÃ  rá»§i ro lá»n nháº¥t</h3><p>ThÃ¡ng 11/2022, tá»« bÃ i bÃ¡o vá» Alameda tá»i tá» ÄÆ¡n phÃ¡ sáº£n.</p></span></a>
      </div>
    </section>
    ${promoBandHTML()}`,
  "thi-truong": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Thá» trÆ°á»ng</p>
      <h2 class="section">Báº£ng giÃ¡ 24 giá»</h2>
      <div id="market-table">${marketTableHTML(0)}</div>
      <div id="market-bars">${barsHTML()}</div>
    </section>
    <section class="blk">
      <p class="label">Chart</p>
      <h2 class="section">BTC/USD, khung ngÃ y</h2>
      <p class="section-sub">ÄÃºng má»t bá» chá» bÃ¡o: MA 20/50/65/200, EMA 21/34/89/200, Bollinger (21, 2), RSI 14.</p>
      <div class="chart-box">
        <div class="legend">
          <span style="--c:#211d19">BTC/USD</span>
          <span style="--c:#2e86de">MA 20</span>
          <span style="--c:#8e44ad">MA 50</span>
          <span style="--c:#a2543f">MA 200</span>
          <span style="--c:#cbb26a">Bollinger (21, 2)</span>
        </div>
        <div id="chart-area"><p class="muted">Äang táº£i náº¿n ngÃ y vÃ  tÃ­nh chá» bÃ¡oâ¦</p></div>
        <canvas id="chart"></canvas>
        <canvas id="rsi"></canvas>
        <p class="table-note">Nguá»n: giÃ¡ BTC/USD theo ngÃ y, tá»ng há»£p nhiá»u sÃ n tá»« dá»¯ liá»u cÃ´ng khai. Sá» liá»u má»t nguá»n tá»ng há»£p khÃ´ng thay chart cá»§a tá»«ng sÃ n cá»¥ thá».</p>
      </div>
      <div class="facts" id="facts"></div>
      <div class="note">Äá»c theo ÄÃºng bá» cá» Äá»nh: giÃ¡ Äang á» ÄÃ¢u so vá»i tá»«ng ÄÆ°á»ng MA vÃ  EMA, RSI á» vÃ¹ng nÃ o, giÃ¡ náº±m trÃªn hay dÆ°á»i ÄÆ°á»ng giá»¯a Bollinger. Trang chá» mÃ´ táº£ tráº¡ng thÃ¡i, khÃ´ng káº¿t luáº­n thay ngÆ°á»i xem.</div>
    </section>
    ${promoBandHTML()}`,
  "tin-tuc": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Tin tá»©c</p>
      <h2 class="section">Tin tá»©c vÃ  nháº­n Äá»nh</h2>
      <p class="section-sub">Tin nÃ³ng tá»ng há»£p tá»« tá»i thiá»u hai nguá»n chÃ­nh thá»ng, gáº¯n ngay vÃ o chart cá»§a cáº·p â¦/USD bá» áº£nh hÆ°á»ng. KhÃ´ng ÄÄng tin trÆ¡ trá»¥i khÃ´ng cÃ³ phÃ¢n tÃ­ch.</p>
      <div class="article-list">
        <a class="article-item" href="#/bai/nhan-dinh-mau"><span class="idx">01</span><span><span class="tag">Nháº­n Äá»nh Â· Khung háº±ng ngÃ y</span><h3>Nháº­n Äá»nh Äáº§u ngÃ y: vÃ ng, BTC, ETH</h3><p>Khung nháº­n Äá»nh má»i sÃ¡ng, dá»±ng theo báº£n 9/11 trÃªn kÃªnh.</p></span></a>
      </div>
    </section>
    ${promoBandHTML()}`,
  "kien-thuc": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Kiáº¿n thá»©c</p>
      <h2 class="section">BÃ i há»c tá»« lá»ch sá»­</h2>
      <p class="section-sub">Nhá»¯ng cÃº sáº­p tháº­t, sá» liá»u tháº­t, nguá»n ghi rÃµ. Äá»c Äá» nhá», vÃ¬ thá» trÆ°á»ng khÃ´ng cÃ³ nÃºt hoÃ n tÃ¡c.</p>
      <div class="article-list">
        <a class="article-item" href="#/bai/flash-crash-2020"><span class="idx">01</span><span><span class="tag">BÃ i há»c lá»ch sá»­</span><h3>12/3/2020: ngÃ y Bitcoin máº¥t gáº§n 39%</h3><p>ÄÃ²n báº©y, thanh khoáº£n, vÃ  vÃ¬ sao khÃ´ng cÃ³ cÃ¡i ÄÃ¡y nÃ o an toÃ n cáº£.</p></span></a>
        <a class="article-item" href="#/bai/ftx-2022"><span class="idx">02</span><span><span class="tag">BÃ i há»c lá»ch sá»­</span><h3>FTX sáº­p: khi niá»m tin vÃ o sÃ n lÃ  rá»§i ro lá»n nháº¥t</h3><p>ThÃ¡ng 11/2022, tá»« bÃ i bÃ¡o vá» Alameda tá»i tá» ÄÆ¡n phÃ¡ sáº£n.</p></span></a>
      </div>
    </section>
    ${promoBandHTML()}`,
  video: () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Video</p>
      <h2 class="section">Video When Lambo Vova</h2>
      <p class="section-sub">Trang web khÃ´ng thay kÃªnh YouTube mÃ  lÃ  báº£n chá»¯ Äi kÃ¨m: sá» liá»u, nguá»n, chart tÄ©nh.</p>
      <div class="article-list">
        <a class="article-item" href="${DAILY_VIEW_VIDEO}" target="_blank" rel="noopener"><span class="idx">01</span><span><span class="tag">YouTube Â· Nháº­n Äá»nh</span><h3>Nháº­n Äá»nh phiÃªn 9/11/2026: VÃ ng, Bitcoin, Ethereum</h3><p>Video máº«u cho chuyÃªn má»¥c nháº­n Äá»nh háº±ng ngÃ y.</p></span></a>
        <a class="article-item" href="${CHANNEL_URL}" target="_blank" rel="noopener"><span class="idx">02</span><span><span class="tag">YouTube Â· KÃªnh</span><h3>ToÃ n bá» kÃªnh When Lambo Vova</h3><p>Tá»i thiá»u 5 Shorts má»i ngÃ y: cÃ³ tin nÃ³ng thÃ¬ tin nÃ³ng Äi trÆ°á»c, khÃ´ng cÃ³ thÃ¬ rÃ  láº¡i lá»ch sá»­ cho bÃ i há»c Äau.</p></span></a>
      </div>
      <h3 style="font-family:'Playfair Display',Georgia,serif;font-weight:500;font-size:19px;margin:30px 0 12px">Xem ngay báº£n má»i nháº¥t</h3>
      <iframe class="video-embed" src="https://www.youtube-nocookie.com/embed/${VIDEO_ID}" title="Nháº­n Äá»nh phiÃªn 9/11/2026 â When Lambo Vova" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>`,
  "vang": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">GiÃ¡ vÃ ng</p>
      <h2 class="section">Theo dÃµi giÃ¡ vÃ ng</h2>
      <p class="section-sub">VÃ ng tháº¿ giá»i tá»± Äá»ng tá»« nguá»n miá»n phÃ­; vÃ ng trong nÆ°á»c khÃ´ng cÃ³ nguá»n API miá»n phÃ­ tin cáº­y nÃªn Vova cáº­p nháº­t tay, ghi rÃµ giá».</p>
      <div id="gold-spot"><p class="muted">Äang táº£i giÃ¡ vÃ ng tháº¿ giá»iâ¦</p></div>
    </section>
    <section class="blk blk--alt">
      <div class="wrap-inner">
        <p class="label">Trong nÆ°á»c</p>
        <h2 class="section">VÃ ng SJC vÃ  nháº«n trÆ¡n</h2>
        <p class="section-sub">SJC, nháº«n trÆ¡n 9999, DOJI, PhÃº QuÃ½ â tá»± Äá»ng tá»« nguá»n niÃªm yáº¿t cÃ´ng khai, má»i 30 phÃºt.</p>
        <div id="gold-vn"><p class="muted">Äang táº£i giÃ¡ trong nÆ°á»câ¦</p></div>
      </div>
    </section>
    <section class="blk">
      <p class="label">Chart</p>
      <h2 class="section">PAXG/USD, khung ngÃ y</h2>
      <p class="section-sub">VÃ ng token hÃ³a bÃ¡m vÃ ng tháº¿ giá»i, chá» Äá» tham kháº£o hÃ¬nh chart. ÄÃºng má»t bá» chá» bÃ¡o: MA 20/50/65/200, EMA 21/34/89/200, Bollinger (21, 2), RSI 14.</p>
      <div class="chart-box">
        <div class="legend">
          <span style="--c:#211d19">PAXG/USD</span>
          <span style="--c:#2e86de">MA 20</span>
          <span style="--c:#8e44ad">MA 50</span>
          <span style="--c:#a2543f">MA 200</span>
          <span style="--c:#cbb26a">Bollinger (21, 2)</span>
        </div>
        <div id="gchart-area"><p class="muted">Äang táº£i náº¿n ngÃ y vÃ  tÃ­nh chá» bÃ¡oâ¦</p></div>
        <canvas id="gchart"></canvas>
        <canvas id="grsi"></canvas>
        <p class="table-note">Nguá»n: giÃ¡ PAXG/USD theo ngÃ y tá»« dá»¯ liá»u cÃ´ng khai. PAXG lÃ  token bÃ¡m giÃ¡ vÃ ng tháº¿ giá»i, chá» tham kháº£o, khÃ´ng thay giÃ¡ SJC.</p>
      </div>
      <div class="facts" id="gfacts"></div>
      <div class="note">Äá»c theo ÄÃºng bá» cá» Äá»nh: giÃ¡ Äang á» ÄÃ¢u so vá»i tá»«ng ÄÆ°á»ng MA vÃ  EMA, RSI á» vÃ¹ng nÃ o, giÃ¡ náº±m trÃªn hay dÆ°á»i ÄÆ°á»ng giá»¯a Bollinger. Trang chá» mÃ´ táº£ tráº¡ng thÃ¡i, khÃ´ng káº¿t luáº­n thay ngÆ°á»i xem.</div>
    </section>
    ${promoBandHTML()}`,
  "fx": () => `
    <section class="blk" style="margin-top:40px">
      <p class="label">Thá» trÆ°á»ng</p>
      <h2 class="section">Cáº·p FX ná»i báº­t</h2>
      <p class="section-sub">Tá»· giÃ¡ tham chiáº¿u miá»n phÃ­ tá»« ECB, cáº­p nháº­t má»i ngÃ y lÃ m viá»c.</p>
      <div id="fx-table"><p class="muted">Äang táº£i tá»· giÃ¡â¦</p></div>
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
