"""Cache indicative OHLC within this website, as permitted by Biquote terms.
Not a standalone feed, bulk export product or price-execution service.
"""
import concurrent.futures,datetime,json,time,urllib.request
from pathlib import Path
SYMBOLS=['XAUUSD','XAGUSD','USOIL','UKOIL','EURUSD','GBPUSD','USDJPY','AUDUSD','USDCAD','USDCHF','NZDUSD']
INTERVALS=['1m','5m','15m','30m','1h','4h','1d']
OUT=Path('2-9-market-candles.json')
old=json.loads(OUT.read_text()) if OUT.exists() else {'datasets':{}}
def fetch(pair):
 symbol,interval=pair;url=f'https://biquote.io/api/{symbol}/ohlc?interval={interval}&limit=1000'
 try:
  with urllib.request.urlopen(url,timeout=25) as r:j=json.load(r)
  bars=j.get('bars',[])
  if j.get('symbol')!=symbol or len(bars)<2:raise ValueError('Missing candles')
  for c in bars:
   o,h,l,cl=[float(c[k]) for k in ['open','high','low','close']]
   if min(o,h,l,cl)<=0 or h<max(o,l,cl) or l>min(o,h,cl):raise ValueError('Invalid OHLC')
  return symbol+':'+interval,{'fetchedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'bars':bars}
 except Exception as e:print(symbol,interval,type(e).__name__);return symbol+':'+interval,None
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
 for key,result in pool.map(fetch,[(s,i) for s in SYMBOLS for i in INTERVALS]):
  if result:old['datasets'][key]=result
old.update({'source':'Biquote indicative broker OHLC','terms':'https://biquote.io/terms.html','updatedAt':datetime.datetime.now(datetime.timezone.utc).isoformat()})
if not all(s+':1d' in old['datasets'] for s in SYMBOLS):raise SystemExit('Missing daily market datasets, keeping existing cache')
OUT.write_text(json.dumps(old,separators=(',',':')))
print('Saved',len(old['datasets']),'datasets',OUT.stat().st_size,'bytes')
