/* ===== When Lambo Giao dịch demo v2: dashboard mô phỏng (tiền ảo, lưu trình duyệt) ===== */
(function () {
const style=document.createElement("style"); style.textContent="/* ===== S\u00e0n \u1ea3o v2 dashboard ===== */\n.dz-shell { margin-top: 1rem; }\n.dz-msg { display: none; margin: 0.5rem 0; padding: 0.6rem 0.9rem; border-radius: 8px; background: rgba(201,162,39,0.15); border: 1px solid #c9a227; font-size: 0.9rem; }\n.dz-msg.show { display: block; }\n.dz-pairhead { display: flex; align-items: center; gap: 1.4rem; flex-wrap: wrap; padding: 0.7rem 1rem; border: 1px solid var(--hairline, #262626); border-radius: 10px; background: var(--paper-2, #161616); }\n.dz-pairname { display: flex; flex-direction: column; }\n.dz-pairname strong { font-size: 1.15rem; color: var(--accent, #c9a227); }\n.dz-pairname small { color: var(--muted, #888); }\n.dz-lastprice { font-size: 1.5rem; font-weight: 700; font-variant-numeric: tabular-nums; }\n.dz-lastprice.up, .up { color: #26a69a; }\n.dz-lastprice.dn, .dn { color: #ef5350; }\n.dz-stat { display: flex; flex-direction: column; font-size: 0.82rem; }\n.dz-stat b { color: var(--muted, #888); font-weight: 500; }\n.dz-stat span { font-variant-numeric: tabular-nums; }\n.dz-grid { display: grid; grid-template-columns: 220px 1fr 250px; gap: 0.8rem; margin-top: 0.8rem; }\n.dz-col h3 { font-size: 0.85rem; margin: 0 0 0.4rem; color: var(--muted, #888); }\n.dz-col h3 small { font-weight: 400; opacity: 0.8; }\n.dz-toolbar { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; }\n.dz-toolbar > div { display: flex; gap: 0.25rem; }\n.dz-tf, .dz-ind, .dz-tool, #dz-clear-draw, .dz-ftab, .dz-tab { background: transparent; border: 1px solid var(--hairline, #2c2c2c); color: var(--ink, #ddd); border-radius: 6px; padding: 0.22rem 0.55rem; font-size: 0.78rem; cursor: pointer; }\n.dz-tf.on, .dz-ind.on, .dz-tool.on, .dz-ftab.on, .dz-tab.on { border-color: var(--accent, #c9a227); color: var(--accent, #c9a227); }\n.dz-chart-wrap { border: 1px solid var(--hairline, #262626); border-radius: 10px; overflow: hidden; background: var(--paper-2, #161616); }\n#dz-chart { position: relative; }\n.dz-pane { border-top: 1px solid var(--hairline, #262626); }\n.dz-dim { color: var(--muted, #888); font-size: 0.82rem; }\n.dz-ob-head, .dz-ob-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.3rem; font-size: 0.78rem; padding: 0.14rem 0.4rem; font-variant-numeric: tabular-nums; }\n.dz-ob-head { color: var(--muted, #888); border-bottom: 1px solid var(--hairline, #262626); margin-bottom: 2px; }\n.dz-ob-row.ask span:first-child { color: #ef5350; }\n.dz-ob-row.bid span:first-child { color: #26a69a; }\n.dz-ob-mid { text-align: center; font-weight: 700; padding: 0.3rem 0; border-block: 1px solid var(--hairline, #262626); margin-block: 2px; }\n.dz-mkrow { width: 100%; background: transparent; border: 0; cursor: pointer; text-align: left; color: inherit; border-radius: 4px; }\n.dz-mkrow:hover { background: rgba(201,162,39,0.08); }\n.dz-mkrow.cur { background: rgba(201,162,39,0.14); outline: 1px solid var(--accent, #c9a227); }\n.dz-mksearch input { width: 100%; margin-bottom: 0.4rem; }\n.dz-form { border: 1px solid var(--hairline, #262626); border-radius: 10px; padding: 0.8rem; margin-top: 0.7rem; background: var(--paper-2, #161616); }\n.dz-side { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; }\n.dz-buy, .dz-sell { border-radius: 6px; padding: 0.5rem; font-weight: 700; cursor: pointer; border: 1px solid var(--hairline, #2c2c2c); background: transparent; color: var(--ink, #ddd); }\n.dz-buy.on { background: #26a69a; border-color: #26a69a; color: #fff; }\n.dz-sell.on { background: #ef5350; border-color: #ef5350; color: #fff; }\n.dz-ftabs { display: flex; gap: 0.3rem; margin: 0.55rem 0; }\n.dz-ffields { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.55rem; align-items: end; }\n.dz-ffields label { display: flex; flex-direction: column; font-size: 0.76rem; color: var(--muted, #888); gap: 0.2rem; }\n.dz-ffields input, .dz-ffields select, .dz-mksearch input { background: var(--paper, #101010); border: 1px solid var(--hairline, #2c2c2c); color: var(--ink, #ddd); border-radius: 6px; padding: 0.4rem 0.5rem; font-size: 0.85rem; }\n.dz-slider { grid-column: 1 / -1; display: flex; align-items: center; gap: 0.6rem; }\n.dz-slider input { flex: 1; accent-color: var(--accent, #c9a227); }\n.dz-slider span { font-size: 0.8rem; min-width: 3ch; }\n.dz-tpsl { grid-column: 1 / -1; display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; }\n.dz-tpsl input[type=\"number\"] { width: 130px; }\n.dz-chk { flex-direction: row !important; align-items: center; gap: 0.3rem !important; }\n#dz-submit { grid-column: 1 / -1; padding: 0.6rem; font-size: 0.95rem; }\n.dz-bottom { margin-top: 0.9rem; border: 1px solid var(--hairline, #262626); border-radius: 10px; background: var(--paper-2, #161616); }\n.dz-tabs { display: flex; gap: 0.3rem; padding: 0.5rem 0.6rem 0; flex-wrap: wrap; }\n.dz-twrap { overflow-x: auto; }\n.dz-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }\n.dz-table th, .dz-table td { padding: 0.45rem 0.6rem; text-align: left; border-bottom: 1px solid var(--hairline, #262626); font-variant-numeric: tabular-nums; white-space: nowrap; }\n.dz-table th { color: var(--muted, #888); font-weight: 500; }\n.dz-close { background: transparent; border: 1px solid var(--hairline, #2c2c2c); color: var(--ink, #ddd); border-radius: 5px; padding: 0.15rem 0.5rem; cursor: pointer; font-size: 0.76rem; }\n.dz-close:hover { border-color: var(--accent, #c9a227); color: var(--accent, #c9a227); }\n.dz-summary { display: flex; gap: 1.4rem; flex-wrap: wrap; margin-top: 0.8rem; padding: 0.7rem 1rem; border: 1px solid var(--hairline, #262626); border-radius: 10px; font-size: 0.9rem; background: var(--paper-2, #161616); align-items: center; }\n.dz-draw-canvas { position: absolute; inset: 0; pointer-events: none; }\n@media (max-width: 980px) {\n  .dz-grid { grid-template-columns: 1fr; }\n  .dz-col-ob, .dz-col-mk { order: 2; }\n  .dz-col-mid { order: 1; }\n}\n"; style.textContent += "body[data-page=demo] #app{max-width:1800px;margin:auto;padding:0 18px 32px}body[data-page=demo] .hero{display:block;padding:18px 0 0;margin:0}.dz-col-mid{min-width:0}.dz-chart-wrap{width:100%}.dz-shell{font-weight:400}.dz-col-mk h3{margin-top:18px}.dz-pairhead{min-height:68px}.dz-inds{flex-wrap:wrap}"; style.textContent+="#dz-f-notional{grid-column:1/-1}.demo-reset{background:transparent;border:1px solid var(--hairline);border-radius:6px;padding:6px 10px;color:var(--ink);cursor:pointer;margin-left:auto}.dz-pane{position:relative}.dz-pane:after{position:absolute;left:10px;top:4px;content:attr(aria-label);font-size:10px;color:var(--muted);pointer-events:none;z-index:2}";document.head.appendChild(style);
const D2_KEY = "wlv_demo_v2";
const D2_START = 10000;
const D2_QUOTES = {};
function d2Available() { return Math.max(0,d2Load().cash-d2Load().orders.reduce((a,o)=>a+o.margin,0)); }
let S = null;

function d2Default() { return { cash: D2_START, positions: [], orders: [], history: [], trades: [], drawings: {}, seq: 1 }; }
function d2Load() {
  if (S) return S;
  try {
    const raw = localStorage.getItem(D2_KEY);
    if (raw) { const o = JSON.parse(raw); if (o && typeof o.cash === "number") { S = Object.assign(d2Default(), o); return S; } }
  } catch (e) {}
  S = d2Default();
  try { // migrate v1
    const old = JSON.parse(localStorage.getItem("wlv_demo_v1") || "null");
    if (old && typeof old.cash === "number") {
      S.cash = old.cash;
      (old.positions || []).forEach((p) => S.positions.push({ id: S.seq++, key: p.key, pair: p.pair, side: p.side, qty: p.qty, entry: p.entry, notional: p.notional, leverage: 1, margin: p.notional, tp: null, sl: null, at: p.at }));
      (old.history || []).forEach((h) => S.history.push({ pair: h.pair, side: h.side, entry: h.entry, exit: h.exit, pnl: h.pnl, closedAt: h.closedAt, reason: "Đóng tay" }));
    }
  } catch (e) {}
  d2Save();
  return S;
}
function d2Save() { try { localStorage.setItem(D2_KEY, JSON.stringify(S)); } catch (e) {} }

/* Tài sản: map sang cặp Kraken để lấy nến; null = không có nến miễn phí */
const D2_INSTR = [
  { key: "XAU", pair: "XAU/USD", name: "Vàng (proxy PAXG)", kraken: "PAXGUSD" },
  { key: "bitcoin", pair: "BTC/USD", name: "Bitcoin", kraken: "XBTUSD" },
  { key: "ethereum", pair: "ETH/USD", name: "Ethereum", kraken: "ETHUSD" },
  { key: "solana", pair: "SOL/USD", name: "Solana", kraken: "SOLUSD" },
  { key: "ripple", pair: "XRP/USD", name: "XRP", kraken: "XRPUSD" },
  { key: "binancecoin", pair: "BNB/USD", name: "BNB", kraken: null },
  { key: "dogecoin", pair: "DOGE/USD", name: "Dogecoin", kraken: "DOGEUSD" },
  { key: "cardano", pair: "ADA/USD", name: "Cardano", kraken: "ADAUSD" },
  { key: "avalanche-2", pair: "AVAX/USD", name: "Avalanche", kraken: "AVAXUSD" },
  { key: "chainlink", pair: "LINK/USD", name: "Chainlink", kraken: "LINKUSD" },
  { key: "polkadot", pair: "DOT/USD", name: "Polkadot", kraken: "DOTUSD" },
  { key: "toncoin", pair: "TON/USD", name: "Toncoin", kraken: "TONUSD" },
  { key: "XAG", pair: "XAG/USD", name: "Bạc", kraken: null },
];
function d2Instr(key) { return D2_INSTR.find((i) => i.key === key); }
function d2Price(key) {
  if (D2_QUOTES[key] && Date.now()-D2_QUOTES[key].at<120000) return D2_QUOTES[key].price;
  if (key === "XAU") return goldSpot && Date.now()-goldSpot.at<180000 ? goldSpot.price : null;
  if (typeof lastUpdate !== "undefined" && lastUpdate && Date.now()-new Date(lastUpdate).getTime()>180000) return null;
  if (key === "XAG") return goldXag || null;
  const t = (tickers || []).find((x) => x.id === key);
  return t ? t.price : null;
}
function d2Chg(key) {
  const t = (tickers || []).find((x) => x.id === key);
  return t ? t.changePct : null;
}
const d2Fmt = (n, d = 2) => Number(n).toLocaleString("vi-VN", { minimumFractionDigits: d, maximumFractionDigits: d });
const d2PFmt = (p) => d2Fmt(p, p < 1 ? 4 : p < 10 ? 3 : 2);
function d2Esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
/* --- Engine: vị thế, lệnh chờ, khớp lệnh, TP/SL, thanh lý --- */
function d2PosValue(p, cur) { return p.side === "long" ? p.qty * cur : Math.max(0, p.qty * (2 * p.entry - cur)); }
function d2PosPnl(p, cur) { return p.side === "long" ? p.qty * (cur - p.entry) : p.qty * (p.entry - cur); }
function d2Equity() {
  const s = d2Load(); let eq = s.cash;
  s.positions.forEach((p) => { const c = d2Price(p.key); eq += p.margin + (c ? d2PosPnl(p, c) : 0); });
  return eq;
}
function d2UsedMargin() { return d2Load().positions.reduce((a, p) => a + p.margin, 0); }
function d2OpenPnl() {
  let v = 0; d2Load().positions.forEach((p) => { const c = d2Price(p.key); if (c) v += d2PosPnl(p, c); });
  return v;
}
function d2OpenPosition(key, side, margin, leverage, price, tp, sl) {
  const s = d2Load();
  const notional = margin * leverage;
  s.cash -= margin;
  s.positions.push({ id: s.seq++, key, pair: d2Instr(key).pair, side, qty: notional / price, entry: price, notional, leverage, margin, tp: tp || null, sl: sl || null, at: Date.now() });
  d2Save();
}
function d2ClosePosition(id, reason) {
  const s = d2Load();
  const i = s.positions.findIndex((p) => p.id === id);
  if (i < 0) return null;
  const p = s.positions[i];
  const c = d2Price(p.key);
  if (!c) return null;
  let pnl = d2PosPnl(p, c);
  if (pnl < -p.margin) pnl = -p.margin;
  s.cash += p.margin + pnl;
  s.positions.splice(i, 1);
  const h = { pair: p.pair, side: p.side, entry: p.entry, exit: c, pnl, closedAt: Date.now(), reason: reason || "Đóng tay", leverage: p.leverage, margin: p.margin };
  s.history.unshift(h);
  s.trades.unshift({ pair: p.pair, side: p.side === "long" ? "Bán đóng" : "Mua đóng", price: c, qty: p.qty, at: Date.now() });
  d2Save();
  return h;
}
function d2PlaceOrder(o) { const s = d2Load(); o.id = s.seq++; o.at = Date.now(); s.orders.push(o); d2Save(); return o.id; }
function d2CancelOrder(id) {
  const s = d2Load();
  const i = s.orders.findIndex((o) => o.id === id);
  if (i < 0) return;
  const o = s.orders[i];
  s.orders.splice(i, 1);
  s.history.unshift({ pair: o.pair, side: o.side, entry: o.price || o.price2 || 0, exit: 0, pnl: 0, closedAt: Date.now(), reason: "Hủy lệnh " + o.type, leverage: o.leverage, margin: 0, canceled: true });
  d2Save();
}
function d2TriggerHit(o, cur) {
  if (o.type === "limit") return o.side === "long" ? cur <= o.price : cur >= o.price;
  if (o.type === "stop") {
    if (!o.triggered && (o.side === "long" ? cur >= o.price : cur <= o.price)) { o.triggered=true; d2Save(); }
    return o.triggered && (o.side === "long" ? cur <= o.limitPrice : cur >= o.limitPrice);
  }
  if (o.type === "oco") {
    if (!o.triggered && (o.side === "short" ? cur >= o.price : cur <= o.price)) return "limit";
    if (!o.triggered && (o.side === "short" ? cur <= o.price2 : cur >= o.price2)) { o.triggered=true; d2Save(); }
    return o.triggered && (o.side === "short" ? cur >= o.limitPrice : cur <= o.limitPrice) ? "stop-limit" : null;
  }
  return null;
}
function d2Tick() {
  const s = d2Load();
  let changed = false;
  for (let i = s.orders.length - 1; i >= 0; i--) {
    const o = s.orders[i];
    const cur = d2Price(o.key);
    if (!cur || !Number.isFinite(cur)) continue;
    const hit = d2TriggerHit(o, cur);
    if (hit) {
      if (o.margin>s.cash) continue;
      s.orders.splice(i, 1);
      d2OpenPosition(o.key, o.side, o.margin, o.leverage, cur, o.tp, o.sl);
      s.trades.unshift({ pair: o.pair, side: o.side === "long" ? "Mua" : "Bán", price: cur, qty: (o.margin * o.leverage) / cur, at: Date.now() });
      d2Msg("Lệnh " + o.type.toUpperCase() + " " + o.pair + " đã khớp tại " + d2PFmt(cur) + " $.");
      changed = true;
    }
  }
  for (let i = s.positions.length - 1; i >= 0; i--) {
    const p = s.positions[i];
    const cur = d2Price(p.key);
    if (!cur || !Number.isFinite(cur)) continue;
    const pnl = d2PosPnl(p, cur);
    if (pnl <= -p.margin * 0.95) { d2ClosePosition(p.id, "Thanh lý (chạm giới hạn ký quỹ)"); d2Msg("Vị thế " + p.pair + " bị thanh lý."); changed = true; continue; }
    if (p.tp && ((p.side === "long" && cur >= p.tp) || (p.side === "short" && cur <= p.tp))) { d2ClosePosition(p.id, "Chốt lời TP"); d2Msg("Vị thế " + p.pair + " chạm TP."); changed = true; continue; }
    if (p.sl && ((p.side === "long" && cur <= p.sl) || (p.side === "short" && cur >= p.sl))) { d2ClosePosition(p.id, "Cắt lỗ SL"); d2Msg("Vị thế " + p.pair + " chạm SL."); changed = true; }
  }
  if (changed) d2Save();
  return changed;
}
/* --- Nến & chỉ báo: Kraken OHLC miễn phí (không cần khóa), tính chỉ báo phía client --- */
const D2_TF = [{l:"5m",m:5}, { l: "15m", m: 15 }, { l: "1h", m: 60 }, { l: "4h", m: 240 }, { l: "1D", m: 1440 }];
let D2C = { chart: null, cs: null, vol: null, key: null, tf: 60, candles: [], indSeries: [], indPanes: [], indicators: { MA: true, VOL: true, RSI: true }, libPromise: null, feedTimer: null, livePriceLine: null, ohlc: null, tool: null, pending: [], drawn: [] };

function d2Lib() {
  if (window.LightweightCharts) return Promise.resolve();
  if (D2C.libPromise) return D2C.libPromise;
  D2C.libPromise = new Promise((res, rej) => {
    const cdns = ["https://unpkg.com/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js", "https://cdn.jsdelivr.net/npm/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js"];
    let i = 0;
    const tryNext = () => {
      if (i >= cdns.length) return rej(new Error("cdn"));
      const s = document.createElement("script");
      s.src = cdns[i++];
      s.onload = () => res();
      s.onerror = tryNext;
      document.head.appendChild(s);
    };
    tryNext();
  });
  return D2C.libPromise;
}
async function d2FetchKlines(krakenPair, minutes) {
  const cacheKey = "wlv_kl_" + krakenPair + "_" + minutes;
  const hit = cacheGet(cacheKey, 55000);
  if (hit) return hit;
  const r = await fetch("https://api.kraken.com/0/public/OHLC?pair=" + encodeURIComponent(krakenPair) + "&interval=" + minutes, { signal: AbortSignal.timeout(12000) });
  if (!r.ok) throw new Error("kraken " + r.status);
  const j = await r.json();
  const k = Object.keys(j.result || {}).find((x) => x !== "last");
  if (!k) throw new Error("empty");
  const data = j.result[k].map((row) => ({ time: row[0], open: +row[1], high: +row[2], low: +row[3], close: +row[4], volume: +row[6] }));
  cacheSet(cacheKey, data, 55000);
  return data;
}
/* Tính toán chỉ báo */
function d2SMA(c, n) { const out = []; let sum = 0; for (let i = 0; i < c.length; i++) { sum += c[i]; if (i >= n) sum -= c[i - n]; out.push(i >= n - 1 ? sum / n : null); } return out; }
function d2EMA(c,n) { const out=[]; let e=0; const k=2/(n+1); for(let i=0;i<c.length;i++){if(i<n){e+=c[i]/n;out.push(i===n-1?e:null);}else{e=c[i]*k+e*(1-k);out.push(e);}}return out; }
function d2BB(c, n, mult) {
  const mid = d2SMA(c, n), up = [], lo = [];
  for (let i = 0; i < c.length; i++) {
    if (mid[i] === null) { up.push(null); lo.push(null); continue; }
    let v = 0; for (let j = i - n + 1; j <= i; j++) v += (c[j] - mid[i]) ** 2;
    const sd = Math.sqrt(v / n); up.push(mid[i] + mult * sd); lo.push(mid[i] - mult * sd);
  }
  return { mid, up, lo };
}
function d2RSI(c, n) {
  const out = new Array(c.length).fill(null); let g = 0, l = 0;
  for (let i = 1; i < c.length; i++) {
    const d = c[i] - c[i - 1], up = Math.max(d, 0), dn = Math.max(-d, 0);
    if (i <= n) { g += up / n; l += dn / n; if (i === n) out[i] = (g===0&&l===0 ? 50 : 100 - 100 / (1 + (l === 0 ? Infinity : g / l))); }
    else { g = (g * (n - 1) + up) / n; l = (l * (n - 1) + dn) / n; out[i] = (g===0&&l===0 ? 50 : 100 - 100 / (1 + (l === 0 ? Infinity : g / l))); }
  }
  return out;
}
function d2MACD(c) {
  const f = d2EMA(c, 12), s = d2EMA(c, 26);
  const macd = c.map((_, i) => (f[i] !== null && s[i] !== null ? f[i] - s[i] : null));
  const valid = macd.filter((x) => x !== null);
  const sigValid = d2EMA(valid, 9);
  const sig = [], hist = [];
  let vi = 0;
  for (let i = 0; i < c.length; i++) {
    if (macd[i] === null) { sig.push(null); hist.push(null); } else { const sv = vi >= 8 ? sigValid[vi] : null; sig.push(sv); hist.push(sv !== null ? macd[i] - sv : null); vi++; }
  }
  return { macd, sig, hist };
}
function d2SuperTrend(candles, n, mult) {
  const out = new Array(candles.length).fill(null);
  let prevUp = null, prevDn = null, prevAtr = null, prevSt = null, prevDir = 1, sumTr=0;
  for (let i = 0; i < candles.length; i++) {
    const c = candles[i];
    const tr = i === 0 ? c.high - c.low : Math.max(c.high - c.low, Math.abs(c.high - candles[i - 1].close), Math.abs(c.low - candles[i - 1].close));
    if(i<n) {sumTr+=tr;if(i<n-1)continue;prevAtr=sumTr/n;} else prevAtr=(prevAtr*(n-1)+tr)/n;
    const mid = (c.high + c.low) / 2;
    let up = mid - mult * prevAtr, dn = mid + mult * prevAtr;
    const pc = candles[i - 1].close;
    if (prevUp !== null) { up = pc > prevUp ? Math.max(up, prevUp) : up; dn = pc < prevDn ? Math.min(dn, prevDn) : dn; }
    let dir = prevDir;
    if (prevSt !== null) { if (prevDir === 1 && c.close < prevSt) dir = -1; else if (prevDir === -1 && c.close > prevSt) dir = 1; }
    const st = dir === 1 ? up : dn;
    out[i] = { v: st, dir };
    prevUp = up; prevDn = dn; prevSt = st; prevDir = dir;
  }
  return out;
}
/* --- Dựng chart: trục chính + pane RSI/MACD đồng bộ --- */
function d2Theme() {
  const dark = document.documentElement.dataset.theme !== "light";
  return dark
    ? { bg: "#121212", text: "#9a9a9a", grid: "#1f1f1f", border: "#262626", up: "#26a69a", dn: "#ef5350" }
    : { bg: "#ffffff", text: "#777777", grid: "#f0ece2", border: "#e5e0d6", up: "#1b8a70", dn: "#d13434" };
}
function d2ChartOpts(h) {
  const t = d2Theme();
  return {
    height: h,
    layout: { background: { color: t.bg }, textColor: t.text, fontSize: 11, fontFamily: "Be Vietnam Pro, system-ui, sans-serif" },
    grid: { vertLines: { color: t.grid }, horzLines: { color: t.grid } },
    rightPriceScale: { borderColor: t.border },
    timeScale: { borderColor: t.border, timeVisible: true, secondsVisible: false },
    crosshair: { mode: 0 },
    localization: { locale: "vi-VN" },
  };
}
function d2DestroyCharts() {
  (D2C.panes || []).forEach((p) => { try { p.chart.remove(); } catch (e) {} if(p.el)p.el.remove(); });
  if (D2C.chart) { try { D2C.chart.remove(); } catch (e) {} }
  if(D2C.ro) D2C.ro.disconnect();
  D2C.chart = null; D2C.cs = null; D2C.vol = null; D2C.panes = []; D2C.indSeries = []; D2C.drawn = []; D2C.livePriceLine = null;
}
function d2BuildCharts() {
  d2DestroyCharts();
  const t = d2Theme();
  const main = document.getElementById("dz-chart");
  if (!main) return false;
  D2C.chart = LightweightCharts.createChart(main, d2ChartOpts(430));
  D2C.ro=new ResizeObserver(()=>{if(!D2C.chart)return;D2C.chart.applyOptions({width:main.clientWidth});D2C.panes.forEach(p=>p.chart.applyOptions({width:main.clientWidth}));d2RepaintOverlays();});D2C.ro.observe(main);
  D2C.cs = D2C.chart.addCandlestickSeries({ upColor: t.up, downColor: t.dn, wickUpColor: t.up, wickDownColor: t.dn, borderVisible: false, priceScaleId: "right" });
  D2C.chart.priceScale("right").applyOptions({ scaleMargins: { top: 0.06, bottom: 0.22 } });
  D2C.vol = D2C.chart.addHistogramSeries({ visible:!!D2C.indicators.VOL, priceFormat: { type: "volume" }, priceScaleId: "vol" });
  D2C.chart.priceScale("vol").applyOptions({ scaleMargins: { top: 0.82, bottom: 0 } });
  const syncTo = [];
  const addPane = (id, h) => {
    const host = document.getElementById("dz-panes");
    const el = document.createElement("div");
    el.className = "dz-pane"; el.id = "dz-pane-" + id;el.setAttribute("aria-label",id.toUpperCase());
    host.appendChild(el);
    const ch = LightweightCharts.createChart(el, Object.assign(d2ChartOpts(h), { rightPriceScale: { borderColor: t.border } }));
    D2C.panes.push({ id, chart: ch, el });
    return ch;
  };
  D2C._addPane = addPane;
  return true;
}
function d2Relink() {
  (D2C._subs || []).forEach(({ ch, h }) => { try { ch.timeScale().unsubscribeVisibleLogicalRangeChange(h); } catch (e) {} });
  D2C._subs = [];
  const all = [D2C.chart, ...D2C.panes.map((p) => p.chart)].filter(Boolean);
  let guard = false;
  all.forEach((a) => {
    const h = (r) => { if (guard || !r) return; guard = true; all.forEach((b) => { if (b !== a) { try { b.timeScale().setVisibleLogicalRange(r); } catch (e) {} } }); guard = false; };
    a.timeScale().subscribeVisibleLogicalRangeChange(h);
    D2C._subs.push({ ch: a, h });
  });
}
function d2LineSeries(chart, color, paneScaleMargins, dashed) {
  const s = chart.addLineSeries({ color, lineWidth: 1, priceLineVisible: false, lastValueVisible: false, crosshairMarkerVisible: false, lineStyle: dashed ? LightweightCharts.LineStyle.Dashed : LightweightCharts.LineStyle.Solid });
  return s;
}
function d2ToPoints(times, vals) {
  const out = [];
  for (let i = 0; i < times.length; i++) if (vals[i] !== null && vals[i] !== undefined) out.push({ time: times[i], value: typeof vals[i] === "object" ? vals[i].v : vals[i] });
  return out;
}
function d2ApplyIndicators() {
  D2C.indSeries.forEach((s) => { try { s._ch.removeSeries(s._s); } catch (e) {} });
  D2C.indSeries = [];
  D2C.panes.forEach((p) => { try { p.chart.remove(); } catch (e) {} p.el.remove(); });
  D2C.panes = [];
  if (!D2C.chart || !D2C.candles.length) return;
  const c = D2C.candles;
  const times = c.map((x) => x.time);
  const closes = c.map((x) => x.close);
  const on = D2C.indicators;
  const t = d2Theme();
  const add = (ch, color, pts, dashed) => { const s = d2LineSeries(ch, color, null, dashed); s.setData(pts); D2C.indSeries.push({ _ch: ch, _s: s }); return s; };
  if (on.MA) {
    add(D2C.chart, "#d4a017", d2ToPoints(times, d2SMA(closes, 20)));
    add(D2C.chart, "#8a8a8a", d2ToPoints(times, d2SMA(closes, 50)));
    add(D2C.chart, "#a04040", d2ToPoints(times, d2SMA(closes, 200)));
  }
  if (on.EMA) {
    add(D2C.chart, "#2e8b57", d2ToPoints(times, d2EMA(closes, 21)));
    add(D2C.chart, "#b8860b", d2ToPoints(times, d2EMA(closes, 89)));
  }
  if (on.BOLL) {
    const bb = d2BB(closes, 21, 2);
    add(D2C.chart, "#7a6a3a", d2ToPoints(times, bb.up));
    add(D2C.chart, "#7a6a3a", d2ToPoints(times, bb.mid));
    add(D2C.chart, "#7a6a3a", d2ToPoints(times, bb.lo));
  }
  if (on.ST) {
    const st = d2SuperTrend(c, 10, 3);
    const upPts = [], dnPts = [];
    for (let i = 0; i < c.length; i++) {
      const v = st[i];
      if (!v) continue;
      (v.dir === 1 ? upPts : dnPts).push({ time: times[i], value: v.v });
      if (i > 0 && st[i - 1] && st[i - 1].dir !== v.dir) (v.dir === 1 ? dnPts : upPts).push({ time: times[i], value: v.v });
    }
    add(D2C.chart, "#26a69a", upPts);
    add(D2C.chart, "#ef5350", dnPts);
  }
  if (on.RSI) {
    const ch = D2C._addPane("rsi", 110);
    const rs = add(ch, "#c9a227", d2ToPoints(times, d2RSI(closes, 14)));
    rs.createPriceLine({ price: 70, color: "#ef5350", lineStyle: 2, lineWidth: 1, title: "70" });
    rs.createPriceLine({ price: 30, color: "#26a69a", lineStyle: 2, lineWidth: 1, title: "30" });
    ch.timeScale().setVisibleLogicalRange(D2C.chart.timeScale().getVisibleLogicalRange());
  }
  if (on.MACD) {
    const ch = D2C._addPane("macd", 120);
    const m = d2MACD(closes);
    const hist = ch.addHistogramSeries({ priceLineVisible: false, lastValueVisible: false });
    hist.setData(c.map((x, i) => (m.hist[i] === null ? null : { time: x.time, value: m.hist[i], color: m.hist[i] >= 0 ? t.up : t.dn })).filter(Boolean));
    add(ch, "#d4a017", d2ToPoints(times, m.macd));
    add(ch, "#8a8a8a", d2ToPoints(times, m.sig));
    ch.timeScale().setVisibleLogicalRange(D2C.chart.timeScale().getVisibleLogicalRange());
  }
  d2Relink();
}
/* --- Tải nến, đường giá trực tiếp, công cụ vẽ --- */
async function d2LoadCandles() {
  const st = document.getElementById("dz-chart-status");
  const instr = d2Instr(D2C.key);
  if (!instr.kraken) {
    if(D2C.cs) D2C.cs.setData([]);
    if(D2C.vol) D2C.vol.setData([]);
    if (st) st.textContent = "Chưa có nguồn nến miễn phí cho " + instr.pair + " (chưa tích hợp nguồn nến). Vẫn đặt lệnh theo giá trực tiếp bình thường.";
    D2C.candles = []; d2ApplyIndicators(); d2RedrawDrawings();
    return;
  }
  if (st) st.textContent = "Đang tải nến " + instr.pair + "…";
  const reqKey=D2C.key,reqTf=D2C.tf;
  if(D2C.loadedKey!==reqKey+":"+reqTf){D2C.candles=[];D2C.cs.setData([]);D2C.vol.setData([]);d2ApplyIndicators();}
  try {
    const data = await d2FetchKlines(instr.kraken, reqTf);
    if(reqKey!==D2C.key || reqTf!==D2C.tf) return;
    D2C.loadedKey=reqKey+":"+reqTf;
    D2C.candles = data;
    D2C.cs.setData(data);
    if (D2C.vol) {
      const t = d2Theme();
      D2C.vol.setData(data.map((c) => ({ time: c.time, value: c.volume, color: c.close >= c.open ? t.up : t.dn })));
    }
    D2C.chart.timeScale().setVisibleLogicalRange({from:Math.max(0,data.length-120),to:data.length+4});
    d2ApplyIndicators();
    d2RedrawDrawings();
    if (st) st.textContent = D2C.key === "XAU" ? "Nến PAXG/USD của Kraken chỉ làm tham khảo, không phải nến XAU/USD. Giá đặt lệnh vàng từ Gold API." : "Nến: Kraken. Giá Kraken cập nhật khoảng 60 giây; dữ liệu nến không phải tick-by-tick. Khớp lệnh mô phỏng, không tính phí/trượt giá; chỉ xử lý khi mở trang.";
  } catch (e) {
    if (st) st.textContent = "Không tải được nến (Kraken API). Thử khung giờ khác hoặc tải lại trang.";
  }
}
function d2LiveTick() {
  if (!D2C.cs || !D2C.candles.length || D2C.key === "XAU") return;
  const p = d2Price(D2C.key);
  if (!p) return;
  if (D2C.livePriceLine) { try { D2C.cs.removePriceLine(D2C.livePriceLine); } catch (e) {} }
  D2C.livePriceLine = D2C.cs.createPriceLine({ price: p, color: "#c9a227", lineStyle: 2, lineWidth: 1, title: "" });
}
/* Công cụ vẽ: đường ngang, fib (priceLine), trendline/hộp (canvas phủ) */
function d2DrawingKey() { return D2C.key + ":" + D2C.tf; }
function d2RedrawDrawings() {
  D2C.drawn.forEach((d) => { try { d.kind === "pline" ? D2C.cs.removePriceLine(d.ref) : d.ref.remove(); } catch (e) {} });
  D2C.drawn = [];
  const list = (d2Load().drawings || {})[d2DrawingKey()] || [];
  list.forEach((d) => {
    if (d.type === "hline") {
      D2C.drawn.push({ kind: "pline", ref: D2C.cs.createPriceLine({ price: d.p1.price, color: "#c9a227", lineWidth: 1, lineStyle: 0, title: "HL" }) });
    } else if (d.type === "fib") {
      const lo = Math.min(d.p1.price, d.p2.price), hi = Math.max(d.p1.price, d.p2.price);
      [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1].forEach((f) => {
        D2C.drawn.push({ kind: "pline", ref: D2C.cs.createPriceLine({ price: lo + (hi - lo) * f, color: "rgba(201,162,39,0.55)", lineWidth: 1, lineStyle: 2, title: (f * 100).toFixed(1) + "%" }) });
      });
    } else {
      const cv = document.createElement("canvas");
      cv.className = "dz-draw-canvas";
      document.getElementById("dz-chart").appendChild(cv);
      D2C.drawn.push({ kind: "overlay", ref: cv, d });
      requestAnimationFrame(() => d2PaintOverlay(cv, d));
    }
  });
}
function d2PaintOverlay(cv, d) {
  const host = document.getElementById("dz-chart");
  if (!host || !D2C.chart) return;
  const r = host.getBoundingClientRect();
  cv.width = r.width; cv.height = r.height;
  cv.style.cssText = "position:absolute;inset:0;pointer-events:none;width:" + r.width + "px;height:" + r.height + "px";
  const xy = (p) => {
    const x = D2C.chart.timeScale().timeToCoordinate(p.time);
    const y = D2C.cs.priceToCoordinate(p.price);
    return x === null || y === null ? null : { x, y };
  };
  const a = xy(d.p1), b = xy(d.p2);
  if (!a || !b) return;
  const ctx = cv.getContext("2d");
  ctx.strokeStyle = "#c9a227"; ctx.fillStyle = "rgba(201,162,39,0.12)"; ctx.lineWidth = 1.5;
  if (d.type === "trend") { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
  else if (d.type === "box") {
    const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y), w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
    ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h);
  }
}
function d2RepaintOverlays() { D2C.drawn.forEach((d) => { if (d.kind === "overlay") d2PaintOverlay(d.ref, d.d); }); }
function d2AddDrawing(d) {
  const s = d2Load();
  s.drawings[d2DrawingKey()] = (s.drawings[d2DrawingKey()] || []).concat([d]);
  d2Save();
  d2RedrawDrawings();
}
function d2ClearDrawings() {
  const s = d2Load();
  s.drawings[d2DrawingKey()] = [];
  d2Save();
  d2RedrawDrawings();
}
/* Click chart khi đang bật công cụ vẽ */
function d2BindDrawing() {
  const host = document.getElementById("dz-chart");
  if (!host) return;
  host.addEventListener("click", (ev) => {
    if (!D2C.tool || !D2C.cs) return;
    const rect = host.getBoundingClientRect();
    const x = ev.clientX - rect.left, y = ev.clientY - rect.top;
    const time = D2C.chart.timeScale().coordinateToTime(x);
    const price = D2C.cs.coordinateToPrice(y);
    if (time === null || price === null) return;
    const p = { time, price };
    if (D2C.tool === "hline") { d2AddDrawing({ type: "hline", p1: p }); D2C.pending = []; d2SetTool(null); }
    else {
      D2C.pending.push(p);
      if (D2C.pending.length === 2) {
        d2AddDrawing({ type: D2C.tool, p1: D2C.pending[0], p2: D2C.pending[1] });
        D2C.pending = [];
        d2SetTool(null);
      } else d2Msg("Chạm điểm thứ hai để hoàn tất hình vẽ.");
    }
  });
}
function d2SetTool(tool) {
  D2C.tool = tool;
  D2C.pending = [];
  document.querySelectorAll(".dz-tool").forEach((b) => b.classList.toggle("on", b.dataset.tool === tool));
  const host = document.getElementById("dz-chart");
  if (host) host.style.cursor = tool ? "crosshair" : "";
}
/* --- Sổ lệnh & khớp lệnh thị trường: MÔ PHỎNG quanh giá thật --- */
function d2SeedRand(seed) { let h = seed >>> 0; return () => { h = (h * 1103515245 + 12345) % 2147483648; return h / 2147483648; }; }
function d2OrderbookHTML(price) {
  if (!price) return '<p class="dz-dim">Chưa có giá.</p>';
  const bucket = Math.floor(Date.now() / 10000);
  const rnd = d2SeedRand(bucket * 2654435761 + D2C.key.length);
  const step = Math.max(price * 0.0004, 1e-6);
  const rows = 12;
  let asks = "", bids = "", cumA = 0, cumB = 0;
  const aRows = [], bRows = [];
  for (let i = rows; i >= 1; i--) { const qty = 0.2 + rnd() * 3.2; cumA += qty; aRows.push({ p: price + step * i, q: qty, cum: cumA }); }
  for (let i = 1; i <= rows; i++) { const qty = 0.2 + rnd() * 3.2; cumB += qty; bRows.push({ p: price - step * i, q: qty, cum: cumB }); }
  asks = aRows.map((r) => '<div class="dz-ob-row ask"><span>' + d2PFmt(r.p) + '</span><span>' + r.q.toFixed(3) + "</span><span>" + r.cum.toFixed(2) + "</span></div>").join("");
  bids = bRows.map((r) => '<div class="dz-ob-row bid"><span>' + d2PFmt(r.p) + '</span><span>' + r.q.toFixed(3) + "</span><span>" + r.cum.toFixed(2) + "</span></div>").join("");
  return '<div class="dz-ob-head"><span>Giá</span><span>SL</span><span>Cộng dồn</span></div>' + asks +
    '<div class="dz-ob-mid">' + d2PFmt(price) + " $</div>" + bids;
}
function d2TradesHTML(price) {
  if (!price) return '<p class="dz-dim">Chưa có giá.</p>';
  const bucket = Math.floor(Date.now() / 3000);
  const rnd = d2SeedRand(bucket * 40503 + D2C.tf);
  const rows = [];
  for (let i = 0; i < 16; i++) {
    const t = new Date(Date.now() - i * (1000 + rnd() * 4000));
    const side = rnd() > 0.5;
    const p = price * (1 + (rnd() - 0.5) * 0.0008);
    rows.push('<div class="dz-ob-row ' + (side ? "bid" : "ask") + '"><span>' + d2PFmt(p) + "</span><span>" + (0.01 + rnd() * 1.4).toFixed(3) + "</span><span>" + t.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) + "</span></div>");
  }
  return '<div class="dz-ob-head"><span>Giá</span><span>SL</span><span>Giờ</span></div>' + rows.join("");
}
/* --- Header cặp giao dịch: giá + thống kê 24h (Kraken Ticker khi có) --- */
async function d2FetchTicker(krakenPair) {
  const cacheKey = "wlv_tk_" + krakenPair;
  const hit = cacheGet(cacheKey, 55000);
  if (hit) return hit;
  const r = await fetch("https://api.kraken.com/0/public/Ticker?pair=" + encodeURIComponent(krakenPair), { signal: AbortSignal.timeout(10000) });
  if (!r.ok) throw new Error("ticker");
  const j = await r.json();
  const k = Object.keys(j.result || {})[0];
  const d = j.result[k];
  const out = { last: +d.c[0], open24: +d.o, high: +d.h[1], low: +d.l[1], vol: +d.v[1] };
  cacheSet(cacheKey, out, 30000);
  return out;
}
async function d2RefreshOrderQuotes() {
  const s=d2Load();const keys=[...new Set([...s.positions,...s.orders].map(x=>x.key))].filter(k=>k!==D2C.key);
  for(const key of keys){try{
    const ins=d2Instr(key);if(!ins)continue;
    if(key==="XAU"||key==="XAG"){
      const r=await fetch("https://api.gold-api.com/price/"+key,{signal:AbortSignal.timeout(10000)});if(!r.ok)continue;const j=await r.json();if(j.price>0)D2_QUOTES[key]={price:j.price,at:Date.now()};
    }else if(ins.kraken){const q=await d2FetchTicker(ins.kraken);if(q.last>0)D2_QUOTES[key]={price:q.last,at:Date.now()};}
  }catch(e){}}
  if(d2Mounted){d2Tick();d2RefreshPanels();}
}
async function d2RenderHeader() {
  const el = document.getElementById("dz-pairhead");
  if (!el) return;
  const headerKey = D2C.key;
  const instr = d2Instr(headerKey);
  if(el.dataset.key!==headerKey){el.dataset.key=headerKey;el.innerHTML='<div class="dz-pairname"><strong>'+d2Esc(instr.pair)+'</strong><small>'+d2Esc(instr.name)+'</small></div><span class="dz-dim">Đang cập nhật giá…</span>';}
  let p = d2Price(D2C.key);
  let chg = d2Chg(D2C.key), hi = null, lo = null, vol = null;
  if(headerKey==="XAU"||headerKey==="XAG") {
    try {
      const cached=D2_QUOTES[headerKey];
      if(!cached||Date.now()-cached.at>55000){
        const r=await fetch("https://api.gold-api.com/price/"+headerKey,{signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error("metal");const j=await r.json();
        if(j.price>0) D2_QUOTES[headerKey]={price:j.price,at:Date.now()};
      }
      if(headerKey!==D2C.key)return;
      p=d2Price(headerKey);
    }catch(e){}
  }
  if (instr.kraken) {
    try {
      const tk = await d2FetchTicker(instr.kraken);
      if(headerKey!==D2C.key)return;
      hi = tk.high; lo = tk.low; vol = tk.vol;
      if(headerKey!=="XAU") { D2_QUOTES[headerKey]={price:tk.last,at:Date.now()}; p=tk.last; }
    } catch (e) {}
  }
  if(headerKey!==D2C.key)return;
  const cls = chg === null || chg === undefined ? "" : chg >= 0 ? "up" : "dn";
  const stat = (l, v) => '<div class="dz-stat"><b>' + l + "</b><span>" + v + "</span></div>";
  el.innerHTML =
    '<div class="dz-pairname"><strong>' + d2Esc(instr.pair) + "</strong><small>" + d2Esc(instr.name) + "</small></div>" +
    '<div class="dz-lastprice ' + cls + '">' + (p ? d2PFmt(p) : "—") + "</div>" +
    stat("24h %", chg === null || chg === undefined ? "—" : '<span class="' + cls + '">' + (chg >= 0 ? "+" : "") + chg.toFixed(2) + "%</span>") +
    stat(D2C.key === "XAU" ? "PAXG cao 24h" : "Cao 24h", hi ? d2PFmt(hi) : "—") +
    stat(D2C.key === "XAU" ? "PAXG thấp 24h" : "Thấp 24h", lo ? d2PFmt(lo) : "—") +
    stat(D2C.key === "XAU" ? "PAXG KL 24h" : "KL 24h", vol ? d2Fmt(vol, vol > 1000 ? 0 : 2) : "—");
}
/* --- Giao diện dashboard --- */
function d2Msg(text) {
  const el = document.getElementById("dz-msg");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(d2Msg._t);
  d2Msg._t = setTimeout(() => el.classList.remove("show"), 4200);
}
function d2ShellHTML() {
  return (
    '<div class="dz-shell">' +
    '<div id="dz-msg" class="dz-msg"></div>' +
    '<div id="dz-pairhead" class="dz-pairhead"></div>' +
    '<div class="dz-grid">' +
    '<aside class="dz-col dz-col-ob"><h3>Sổ lệnh <small>(mô phỏng quanh giá thật)</small></h3><div id="dz-orderbook"></div></aside>' +
    '<div class="dz-col dz-col-mid">' +
    '<div class="dz-toolbar">' +
    '<div class="dz-tfs">' + D2_TF.map((t) => '<button class="dz-tf' + (t.m === D2C.tf ? " on" : "") + '" data-tf="' + t.m + '">' + t.l + "</button>").join("") + "</div>" +
    '<div class="dz-inds">' + ["MA", "EMA", "BOLL", "ST", "VOL", "RSI", "MACD"].map((n) => '<button class="dz-ind' + (D2C.indicators[n] ? " on" : "") + '" data-ind="' + n + '">' + (n === "ST" ? "SuperTrend" : n) + "</button>").join("") + "</div>" +
    '<div class="dz-tools">' +
    '<button class="dz-tool" data-tool="hline" title="Đường ngang">—</button>' +
    '<button class="dz-tool" data-tool="trend" title="Đường xu hướng">╱</button>' +
    '<button class="dz-tool" data-tool="box" title="Hộp">▭</button>' +
    '<button class="dz-tool" data-tool="fib" title="Fibonacci">𝑓</button>' +
    '<button id="dz-clear-draw" title="Xóa hình vẽ">✕</button>' +
    "</div>" +
    "</div>" +
    '<div class="dz-chart-wrap"><div id="dz-chart"></div><div id="dz-panes"></div></div>' +
    '<p id="dz-chart-status" class="dz-dim"></p>' +
    '<div id="dz-orderform"></div>' +
    "</div>" +
    '<aside class="dz-col dz-col-mk">' +
    '<div class="dz-mksearch"><input id="dz-search" type="search" placeholder="Tìm cặp…" autocomplete="off"></div>' +
    '<div id="dz-markets"></div>' +
    '<h3>Giao dịch thị trường <small>(mô phỏng)</small></h3><div id="dz-trades"></div>' +
    "</aside>" +
    "</div>" +
    '<div class="dz-bottom">' +
    '<div class="dz-tabs" id="dz-tabs">' +
    ["pos:Vị thế mở", "ord:Lệnh chờ", "hist:Lịch sử lệnh", "fills:Lịch sử khớp", "assets:Tài sản"].map((t, i) => {
      const [k, l] = t.split(":");
      return '<button class="dz-tab' + (i === 0 ? " on" : "") + '" data-tab="' + k + '">' + l + "</button>";
    }).join("") +
    "</div>" +
    '<div id="dz-panel"></div>' +
    "</div>" +
    '<div class="dz-summary" id="dz-summary"></div>' +
    "</div>"
  );
}
function d2RenderSummary() {
  const el = document.getElementById("dz-summary");
  if (!el) return;
  const s = d2Load();
  const eq = d2Equity();
  const pnl = d2OpenPnl();
  const cls = pnl >= 0 ? "up" : "dn";
  el.innerHTML =
    "<span>Số dư khả dụng: <b>" + d2Fmt(d2Available()) + " $</b></span>" +
    "<span>Ký quỹ đang dùng: <b>" + d2Fmt(d2UsedMargin()) + " $</b></span>" +
    '<span>PNL vị thế mở: <b class="' + cls + '">' + (pnl >= 0 ? "+" : "") + d2Fmt(pnl) + " $</b></span>" +
    "<span>Giữ cho lệnh chờ: <b>" + d2Fmt(s.orders.reduce((a,o)=>a+o.margin,0)) + " $</b></span>" +
    "<span>Tổng tài sản ảo: <b>" + d2Fmt(eq) + " $</b></span>" +
    '<button id="dz-reset" class="demo-reset">↺ Reset 10.000 $</button>';
}
function d2RenderMarkets() {
  const el = document.getElementById("dz-markets");
  if (!el) return;
  const q = ((document.getElementById("dz-search") || {}).value || "").toLowerCase();
  el.innerHTML = '<div class="dz-ob-head"><span>Cặp</span><span>Giá</span><span>24h%</span></div>' + D2_INSTR
    .filter((i) => !q || i.pair.toLowerCase().includes(q) || i.name.toLowerCase().includes(q))
    .map((i) => {
      const p = d2Price(i.key);
      const chg = d2Chg(i.key);
      const cls = chg === null || chg === undefined ? "" : chg >= 0 ? "bid" : "ask";
      return '<button class="dz-ob-row dz-mkrow ' + (i.key === D2C.key ? "cur " : "") + cls + '" data-key="' + i.key + '"><span>' + d2Esc(i.pair) + "</span><span>" + (p ? d2PFmt(p) : "—") + "</span><span>" + (chg === null || chg === undefined ? "—" : (chg >= 0 ? "+" : "") + chg.toFixed(2) + "%") + "</span></button>";
    }).join("");
}
function d2RenderObTrades() {
  const ob = document.getElementById("dz-orderbook");
  const tr = document.getElementById("dz-trades");
  const p = d2Price(D2C.key);
  if (ob) ob.innerHTML = d2OrderbookHTML(p);
  if (tr) tr.innerHTML = d2TradesHTML(p);
}
/* --- Form đặt lệnh --- */
const D2F = { side: "long", type: "market", pct: 0, tab: "pos" };
function d2FormHTML() {
  const instr = d2Instr(D2C.key);
  const p = d2Price(D2C.key) || 0;
  const s = d2Load();
  const typeTabs = [["market", "Market"], ["limit", "Limit"], ["stop", "Stop Limit"], ["oco", "OCO"]]
    .map(([k, l]) => '<button class="dz-ftab' + (D2F.type === k ? " on" : "") + '" data-ftype="' + k + '">' + l + "</button>").join("");
  const priceFields =
    (D2F.type === "limit" ? '<label>Giá limit<input id="dz-f-price" type="number" step="any" value="' + p + '"></label>' : "") +
    (D2F.type === "stop" ? '<label>Giá kích hoạt<input id="dz-f-price" type="number" step="any" placeholder="Giá stop"></label><label>Giá limit sau kích hoạt<input id="dz-f-limit" type="number" step="any"></label>' : "") +
    (D2F.type === "oco" ? '<label>Giá limit<input id="dz-f-price" type="number" step="any"></label><label>Giá kích hoạt stop<input id="dz-f-price2" type="number" step="any"></label><label>Giá limit nhánh stop<input id="dz-f-limit" type="number" step="any"></label>' : "");
  return (
    '<div class="dz-form">' +
    '<div class="dz-side">' +
    '<button class="dz-buy' + (D2F.side === "long" ? " on" : "") + '" data-side="long">Mua / Long</button>' +
    '<button class="dz-sell' + (D2F.side === "short" ? " on" : "") + '" data-side="short">Bán / Short</button>' +
    "</div>" +
    '<div class="dz-ftabs">' + typeTabs + "</div>" +
    '<div class="dz-ffields">' +
    '<label>Cặp<input value="' + d2Esc(instr.pair) + '" disabled></label>' +
    priceFields +
    '<label>Ký quỹ ($)<input id="dz-f-margin" type="number" min="10" step="10" value="100"></label>' +
    '<div class="dz-slider"><input id="dz-f-pct" type="range" min="0" max="100" value="0"><span id="dz-f-pct-lab">0%</span></div>' +
    '<label>Đòn bẩy<select id="dz-f-lev">' + [1, 2, 3, 5, 10].map((l) => "<option" + (l === 1 ? " selected" : "") + ">" + l + "x</option>").join("") + "</select></label>" +
    '<div class="dz-tpsl"><label class="dz-chk"><input type="checkbox" id="dz-f-tp-on">TP</label><input id="dz-f-tp" type="number" step="any" placeholder="Giá TP" disabled>' +
    '<label class="dz-chk"><input type="checkbox" id="dz-f-sl-on">SL</label><input id="dz-f-sl" type="number" step="any" placeholder="Giá SL" disabled></div>' +
    '<p class="dz-dim" id="dz-f-notional"></p>' +
    '<button id="dz-submit" class="' + (D2F.side === "long" ? "dz-buy on" : "dz-sell on") + '">' + (D2F.side === "long" ? "Mua " : "Bán ") + d2Esc(instr.pair) + "</button>" +
    "</div></div>"
  );
}
function d2FormNotional() {
  const m = +((document.getElementById("dz-f-margin") || {}).value || 0);
  const lev = parseFloat((document.getElementById("dz-f-lev") || {}).value) || 1;
  const el = document.getElementById("dz-f-notional");
  if (el) el.textContent = m > 0 ? "Khối lượng mở: " + d2Fmt(m * lev) + " $ (" + lev + "x) · Khả dụng: " + d2Fmt(d2Available()) + " $" : "";
}
function d2Submit() {
  const instr = d2Instr(D2C.key);
  const cur = d2Price(D2C.key);
  if (!cur) return d2Msg("Chưa có giá trực tiếp cho " + instr.pair + ".");
  const num = (id) => { const el = document.getElementById(id); const v = el ? parseFloat(el.value) : NaN; return isNaN(v) ? null : v; };
  const margin = num("dz-f-margin");
  const lev = num("dz-f-lev") || 1;
  if (!margin || margin < 10) return d2Msg("Ký quỹ tối thiểu 10 $.");
  if (margin > d2Available()) return d2Msg("Không đủ số dư khả dụng.");
  const tpOn = (document.getElementById("dz-f-tp-on") || {}).checked;
  const slOn = (document.getElementById("dz-f-sl-on") || {}).checked;
  const tp = tpOn ? num("dz-f-tp") : null;
  const sl = slOn ? num("dz-f-sl") : null;
  if (tpOn && !(tp>0)) return d2Msg("Nhập giá TP hoặc bỏ chọn TP.");
  if (slOn && !(sl>0)) return d2Msg("Nhập giá SL hoặc bỏ chọn SL.");
  const badDir = (x, isTp) => (D2F.side === "long" ? (isTp ? x <= cur : x >= cur) : (isTp ? x >= cur : x <= cur));
  if (tp && badDir(tp, true)) return d2Msg("Giá TP sai hướng so với vị thế " + (D2F.side === "long" ? "Long" : "Short") + ".");
  if (sl && badDir(sl, false)) return d2Msg("Giá SL sai hướng so với vị thế " + (D2F.side === "long" ? "Long" : "Short") + ".");
  const base = { key: D2C.key, pair: instr.pair, side: D2F.side, margin, leverage: lev, tp, sl };
  if (D2F.type === "market") {
    d2OpenPosition(D2C.key, D2F.side, margin, lev, cur, tp, sl);
    const s = d2Load();
    s.trades.unshift({ pair: instr.pair, side: D2F.side === "long" ? "Mua" : "Bán", price: cur, qty: (margin * lev) / cur, at: Date.now() });
    d2Save();
    d2Msg("Đã mở vị thế " + (D2F.side === "long" ? "Long" : "Short") + " " + instr.pair + " tại " + d2PFmt(cur) + " $.");
  } else {
    const p1 = num("dz-f-price");
    const p2 = num("dz-f-price2");
    const limitPrice = num("dz-f-limit");
    if ((D2F.type==="stop"||D2F.type==="oco") && !(limitPrice>0)) return d2Msg("Nhập giá limit sau kích hoạt stop.");
    if (D2F.type === "oco") {
      if (!(p1>0) || !(p2>0)) return d2Msg("OCO cần cả giá limit và giá stop.");
      if (p1 === p2) return d2Msg("Giá limit và stop phải khác nhau.");
      if (D2F.side === "short" && !(p1 > cur && p2 < cur)) return d2Msg("OCO bán: giá limit phải trên giá hiện tại, giá stop dưới giá hiện tại.");
      if (D2F.side === "long" && !(p1 < cur && p2 > cur)) return d2Msg("OCO mua: giá limit phải dưới giá hiện tại, giá stop trên giá hiện tại.");
      d2PlaceOrder(Object.assign(base, { type: "oco", price: p1, price2: p2, limitPrice }));
    } else {
      if (!(p1>0)) return d2Msg("Nhập giá đặt lệnh.");
      if (D2F.type === "limit") {
        if (D2F.side === "long" && p1 >= cur) return d2Msg("Limit mua phải dưới giá hiện tại (hoặc dùng Market).");
        if (D2F.side === "short" && p1 <= cur) return d2Msg("Limit bán phải trên giá hiện tại (hoặc dùng Market).");
        d2PlaceOrder(Object.assign(base, { type: "limit", price: p1 }));
      } else {
        if (D2F.side === "long" && p1 <= cur) return d2Msg("Stop mua phải trên giá hiện tại.");
        if (D2F.side === "short" && p1 >= cur) return d2Msg("Stop bán phải dưới giá hiện tại.");
        d2PlaceOrder(Object.assign(base, { type: "stop", price: p1, limitPrice }));
      }
    }
    d2Msg("Đã đặt lệnh " + (D2F.type === "stop" ? "STOP LIMIT" : D2F.type.toUpperCase()) + " " + instr.pair + ". Sẽ khớp khi giá chạm mức đặt.");
  }
  d2RefreshPanels();
}
/* --- Bảng dưới: vị thế, lệnh chờ, lịch sử, tài sản --- */
function d2Table(head, rows) {
  return '<div class="dz-twrap"><table class="dz-table"><thead><tr>' + head.map((h) => "<th>" + h + "</th>").join("") + "</tr></thead><tbody>" +
    (rows.length ? rows.join("") : '<tr><td colspan="' + head.length + '" class="dz-dim">Chưa có dữ liệu.</td></tr>') + "</tbody></table></div>";
}
function d2RenderPanel() {
  const el = document.getElementById("dz-panel");
  if (!el) return;
  const s = d2Load();
  const fmtT = (t) => new Date(t).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
  if (D2F.tab === "pos") {
    el.innerHTML = d2Table(["Cặp", "Phía", "Khối lượng", "Giá vào", "Giá hiện tại", "Ký quỹ", "ĐB", "TP/SL", "PNL", ""], s.positions.map((p) => {
      const cur = d2Price(p.key);
      const pnl = cur ? d2PosPnl(p, cur) : 0;
      return "<tr><td>" + d2Esc(p.pair) + "</td><td>" + (p.side === "long" ? '<b class="up">Long</b>' : '<b class="dn">Short</b>') + "</td><td>" + d2Fmt(p.notional) + " $</td><td>" + d2PFmt(p.entry) + "</td><td>" + (cur ? d2PFmt(cur) : "—") + "</td><td>" + d2Fmt(p.margin) + "</td><td>" + p.leverage + "x</td><td>" + (p.tp ? d2PFmt(p.tp) : "—") + " / " + (p.sl ? d2PFmt(p.sl) : "—") + '</td><td class="' + (pnl >= 0 ? "up" : "dn") + '">' + (pnl >= 0 ? "+" : "") + d2Fmt(pnl) + ' $</td><td><button class="dz-close" data-close="' + p.id + '">Đóng</button></td></tr>';
    }));
  } else if (D2F.tab === "ord") {
    el.innerHTML = d2Table(["Cặp", "Loại", "Phía", "Giá đặt", "Giá stop", "Ký quỹ", "ĐB", "TP/SL", "Đặt lúc", ""], s.orders.map((o) =>
      "<tr><td>" + d2Esc(o.pair) + "</td><td>" + (o.type === "stop" ? "STOP LIMIT" : o.type.toUpperCase()) + (o.triggered ? " (đã kích hoạt)" : "") + (o.limitPrice ? " · limit " + d2PFmt(o.limitPrice) : "") + "</td><td>" + (o.side === "long" ? "Long" : "Short") + "</td><td>" + d2PFmt(o.price) + "</td><td>" + (o.price2 ? d2PFmt(o.price2) : "—") + "</td><td>" + d2Fmt(o.margin) + "</td><td>" + o.leverage + "x</td><td>" + (o.tp ? d2PFmt(o.tp) : "—") + " / " + (o.sl ? d2PFmt(o.sl) : "—") + "</td><td>" + fmtT(o.at) + '</td><td><button class="dz-close" data-cancel="' + o.id + '">Hủy</button></td></tr>'));
  } else if (D2F.tab === "hist") {
    el.innerHTML = d2Table(["Cặp", "Phía", "Giá vào", "Giá ra", "PNL", "Lý do", "Đóng lúc"], s.history.map((h) =>
      "<tr><td>" + d2Esc(h.pair) + "</td><td>" + (h.side === "long" ? "Long" : "Short") + "</td><td>" + (h.canceled ? "—" : d2PFmt(h.entry)) + "</td><td>" + (h.canceled ? "—" : d2PFmt(h.exit)) + '</td><td class="' + (h.pnl >= 0 ? "up" : "dn") + '">' + (h.canceled ? "—" : (h.pnl >= 0 ? "+" : "") + d2Fmt(h.pnl) + " $") + "</td><td>" + d2Esc(h.reason) + "</td><td>" + fmtT(h.closedAt) + "</td></tr>"));
  } else if (D2F.tab === "fills") {
    el.innerHTML = d2Table(["Cặp", "Lệnh", "Giá", "Khối lượng", "Thời gian"], s.trades.slice(0, 60).map((t) =>
      "<tr><td>" + d2Esc(t.pair) + "</td><td>" + d2Esc(t.side) + "</td><td>" + d2PFmt(t.price) + "</td><td>" + d2Fmt(t.qty, t.qty < 1 ? 4 : 2) + "</td><td>" + fmtT(t.at) + "</td></tr>"));
  } else {
    const rows = D2_INSTR.map((i) => {
      const pos = s.positions.filter((p) => p.key === i.key);
      if (!pos.length) return null;
      const net = pos.reduce((a, p) => a + (p.side === "long" ? p.qty : -p.qty), 0);
      const cur = d2Price(i.key);
      const val = cur ? net * cur : 0;
      return "<tr><td>" + d2Esc(i.pair) + "</td><td>" + d2Fmt(net, Math.abs(net) < 1 ? 4 : 2) + "</td><td>" + (cur ? d2Fmt(val) + " $" : "—") + "</td><td>" + pos.length + "</td></tr>";
    }).filter(Boolean);
    rows.unshift("<tr><td>USD (khả dụng)</td><td>—</td><td>" + d2Fmt(d2Available()) + " $</td><td>—</td></tr>");
    el.innerHTML = d2Table(["Tài sản", "Số lượng ròng", "Giá trị", "Vị thế"], rows);
  }
}
function d2RefreshPanels() {
  d2RenderSummary();
  d2RenderPanel();
  d2FormNotional();
}
/* --- Mount: dựng shell, chart, vòng lặp cập nhật --- */
let d2Mounted = false;
let d2Timers = [];
function d2Unmount() {
  d2Timers.forEach(clearInterval);
  d2Timers = [];
  d2Mounted = false;
  d2DestroyCharts();
}
function d2Bind() {
  const root = document.getElementById("dz-shell-root");
  if (!root) return;
  root.addEventListener("click", (ev) => {
    const b = ev.target.closest("button");
    if (!b) return;
    if (b.dataset.tf) { D2C.tf = +b.dataset.tf; document.querySelectorAll(".dz-tf").forEach((x) => x.classList.toggle("on", +x.dataset.tf === D2C.tf)); d2LoadCandles(); }
    else if (b.dataset.ind) {
      const n = b.dataset.ind;
      D2C.indicators[n] = !D2C.indicators[n];
      b.classList.toggle("on", D2C.indicators[n]);
      if (n === "VOL") { D2C.vol.applyOptions({ visible: D2C.indicators.VOL }); } else d2ApplyIndicators();
    }
    else if (b.dataset.tool !== undefined && b.classList.contains("dz-tool")) d2SetTool(b.dataset.tool === D2C.tool ? null : b.dataset.tool);
    else if (b.id === "dz-clear-draw") d2ClearDrawings();
    else if (b.dataset.side) { D2F.side = b.dataset.side; d2RenderForm(); }
    else if (b.dataset.ftype) { D2F.type = b.dataset.ftype; d2RenderForm(); }
    else if (b.id === "dz-submit") d2Submit();
    else if (b.dataset.close) { d2ClosePosition(+b.dataset.close, "Đóng tay"); d2RefreshPanels(); }
    else if (b.dataset.cancel) { d2CancelOrder(+b.dataset.cancel); d2RefreshPanels(); }
    else if (b.dataset.key) { D2C.key = b.dataset.key; d2SwitchPair(); }
    else if (b.dataset.tab) { D2F.tab = b.dataset.tab; document.querySelectorAll(".dz-tab").forEach((x) => x.classList.toggle("on", x.dataset.tab === D2F.tab)); d2RenderPanel(); }
    else if (b.id === "dz-reset") {
      if(!confirm("Xóa toàn bộ lệnh, lịch sử và hình vẽ để đặt lại 10.000 USD ảo?")) return;
      S = d2Default();
      d2Save();
      d2RedrawDrawings();
      d2RefreshPanels();
      d2Msg("Đã reset về 10.000 $ ảo.");
    }
  });
  root.addEventListener("input", (ev) => {
    if (ev.target.id === "dz-search") d2RenderMarkets();
    if (ev.target.id === "dz-f-margin") d2FormNotional();
    if (ev.target.id === "dz-f-pct") {
      const pct = +ev.target.value;
      const lab = document.getElementById("dz-f-pct-lab");
      if (lab) lab.textContent = pct + "%";
      const m = document.getElementById("dz-f-margin");
      if (m) { m.value = Math.max(0, Math.floor(d2Available() * pct / 100)); d2FormNotional(); }
    }
  });
  root.addEventListener("change", (ev) => {
    if (ev.target.id === "dz-f-lev") d2FormNotional();
    if (ev.target.id === "dz-f-tp-on") { const i = document.getElementById("dz-f-tp"); if (i) i.disabled = !ev.target.checked; }
    if (ev.target.id === "dz-f-sl-on") { const i = document.getElementById("dz-f-sl"); if (i) i.disabled = !ev.target.checked; }
  });
}
function d2RenderForm() {
  const el = document.getElementById("dz-orderform");
  if (el) el.innerHTML = d2FormHTML();
  d2FormNotional();
}
async function d2SwitchPair() {
  d2RenderHeader();
  d2RenderForm();
  d2RenderMarkets();
  d2RenderObTrades();
  await d2LoadCandles();
}
async function d2Mount() {
  const root = document.getElementById("dz-shell-root");
  if (!root) return;
  if (!d2Mounted) {
    d2Mounted = true;
    d2Load();
    D2C.key = D2C.key || "bitcoin";
    root.innerHTML = d2ShellHTML();
    d2Bind();
    d2RenderHeader();
    d2RenderForm();
    d2RenderMarkets();
    d2RenderObTrades();
    d2RefreshPanels();
    try {
      await d2Lib();
      d2BuildCharts();
      d2BindDrawing();
      await d2LoadCandles();
      if (D2C.chart) D2C.chart.timeScale().subscribeVisibleTimeRangeChange(() => d2RepaintOverlays());
    } catch (e) {
      const st = document.getElementById("dz-chart-status");
      if (st) st.textContent = "Không tải được thư viện đồ thị. Kiểm tra mạng rồi tải lại trang.";
    }
    d2Timers.push(setInterval(() => { d2Tick(); d2RenderObTrades(); d2RefreshPanels(); d2LiveTick(); }, 5000));
    d2Timers.push(setInterval(d2RenderHeader, 60000));
    d2RefreshOrderQuotes();
    d2Timers.push(setInterval(d2RefreshOrderQuotes, 60000));
    d2Timers.push(setInterval(d2LoadCandles, 60000));
    d2Timers.push(setInterval(d2RenderMarkets, 15000));
  }
}
new MutationObserver(()=>{if(d2Mounted && window.LightweightCharts){d2BuildCharts();d2LoadCandles();}}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});
window.demoDashMount = d2Mount;
window.demoDashUnmount = d2Unmount;
window.demoDashRefresh = () => {if(d2Mounted){d2RenderHeader();d2RenderMarkets();}};
})();
