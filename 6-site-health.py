"""Public-site health checks. No accounts, orders, posts or private data."""
import asyncio, json, os, re, sys
from pathlib import Path
from urllib.parse import urljoin
from playwright.async_api import async_playwright
BASE=os.getenv('BASE_URL','https://whenlambovova.github.io/').rstrip('/')+'/'
OUT=Path('health-artifacts');OUT.mkdir(exist_ok=True)
async def main():
 findings=[];routes=set(['','tin-tuc','tam-ly','bai-hoc','kien-thuc','bang-gia','demo','video','login']);results=[]
 async with async_playwright() as p:
  browser=await p.chromium.launch(args=['--no-sandbox'])
  discovery=await browser.new_page()
  for route in ['','tin-tuc','bai-hoc','kien-thuc']:
   await discovery.goto(BASE+'#/'+route);await discovery.wait_for_timeout(2000)
   routes.update(await discovery.locator('#app a[href^="#/"]').evaluate_all('(els)=>els.map(e=>e.hash.slice(2))'))
  await discovery.close()
  sem=asyncio.Semaphore(8)
  async def check(route,width):
   async with sem:
    page=await browser.new_page(viewport={'width':width,'height':900});errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    name=(route or 'home').replace('/','_')+'-'+str(width)
    try:
     r=await page.goto(BASE+'?health=1#/'+route,wait_until='domcontentloaded',timeout=30000)
     await page.locator('#app').wait_for();await page.wait_for_timeout(3500 if route in ['demo','bang-gia','tam-ly','tin-tuc'] else 700)
     text=await page.locator('#app').inner_text()
     if not r or r.status>=400:errors.append('HTTP failure')
     if len(text.strip())<80 or 'Không tìm thấy bài này' in text:errors.append('Missing/empty page')
     broken=await page.locator('#app img').evaluate_all('(els)=>els.filter(e=>!e.complete||!e.naturalWidth).map(e=>e.src)')
     errors.extend('Broken image: '+x for x in broken)
     if route=='tam-ly' and await page.locator('[data-sentiment]').count()!=5:errors.append('Expected five sentiment markets')
     if route=='demo':
      await page.wait_for_timeout(5000)
      status=await page.locator('#dz-chart-status').inner_text() if await page.locator('#dz-chart-status').count() else ''
      canvas=await page.locator('#dz-chart canvas').count()
      if not canvas or not status or any(x in status for x in ['Đang tải','Không tải','Chưa có']):errors.append('Chart unavailable: '+status)
      else:
       # A sized canvas alone is not proof: count differing nontransparent pixels.
       ink=await page.locator('#dz-chart canvas').first.evaluate('(c)=>{try{let a=c.getContext("2d").getImageData(0,0,c.width,c.height).data;let n=0;for(let i=0;i<a.length;i+=64)if(a[i+3]&&(a[i]!==a[0]||a[i+1]!==a[1]||a[i+2]!==a[2]))n++;return n}catch(e){return 0}}')
       if ink<20:errors.append('Chart canvas appears empty')
     if route=='bang-gia':
      frames=page.frames[1:]
      if not frames or not any('tradingview' in f.url or 'simplize' in f.url for f in frames):errors.append('Missing quote/chart widget frame')
     if errors or route in ['demo','tam-ly','login']:
      await page.screenshot(path=str(OUT/(name+'.png')),full_page=False)
     results.append({'route':route or 'home','width':width,'errors':errors})
     if errors:findings.append({'route':route,'width':width,'errors':errors})
    except Exception as e:findings.append({'route':route,'width':width,'errors':[str(e)]})
    finally:await page.close()
  print('Discovered routes:',len(routes),flush=True)
  selected=[r for i,r in enumerate(sorted(routes)) if i % int(os.getenv('SHARDS','1')) == int(os.getenv('SHARD','0'))]
  await asyncio.gather(*(check(r,w) for r in selected for w in [1440,390]))
  await browser.close()
 report={'base':BASE,'routes':len(routes),'checks':len(results),'failures':findings,'results':results}
 (OUT/('report-'+os.getenv('SHARD','0')+'.json')).write_text(json.dumps(report,ensure_ascii=False,indent=2))
 print(json.dumps({k:report[k] for k in ['base','routes','checks','failures']},ensure_ascii=False,indent=2))
 summary=os.getenv('GITHUB_STEP_SUMMARY')
 if summary:
  with open(summary,'a') as f:
   f.write(f'## Site health\n{len(results)} desktop/mobile checks across {len(routes)} routes. {len(findings)} failed checks.\n')
   for item in findings: f.write('\n- '+item['route']+' @ '+str(item['width'])+': '+ '; '.join(item['errors']))
 return bool(findings)
sys.exit(asyncio.run(main()))
