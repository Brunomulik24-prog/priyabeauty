
document.documentElement.classList.add('js');
(function(){
  /* ---------- data (edit here) ---------- */
  var WA = '919004312040';
  var OPEN_H = 10, CLOSE_H = 20; // every day, IST

  /* MENU: prices in rupees. '+' = onwards. Two prices = two columns (see cols). */
  var CATS = {hair:'Hair', skin:'Skin', makeup:'Make-up', nails:'Hands, feet & body'};
  var MENU = [
    {cat:'hair', name:'Hair colour', intro:'Matrix, L’Oréal and L’Oréal Inoa.', rows:[
      ['Root touch-up: Matrix','1100'],
      ['Root touch-up: L’Oréal','1300'],
      ['Root touch-up: L\u2019Or\u00e9al Inoa','1600+'],
      ['Global colour','2500+'],
      ['Highlights','3500+'],
      ['Balayage','3500+']
    ]},
    {cat:'hair', name:'Haircut & styling', intro:'Pratibha’s speciality.', rows:[
      ['Haircut: straight / U cut','250+'],
      ['Layers cut','400+'],
      ['Step cut','400+'],
      ['Advance cut','750+'],
      ['Blow-dry: straight','380'],
      ['Blow-dry: out curls','500'],
      ['Hair tongs','500+']
    ]},
    {cat:'hair', name:'Hair spa', intro:'For soft, nourished hair.', rows:[
      ['Normal hair spa','1000+'],
      ['L’Oréal hair spa','1200+'],
      ['Botox hair spa','1500+'],
      ['Aqua hair spa','2000+','Most loved'],
      ['Head oil massage','350+','Add-on']
    ]},
    {cat:'hair', name:'Hair treatments', intro:'Longer-lasting results for frizz and damage.', rows:[
      ['Aqua treatment','4000+'],
      ['Botox treatment','5000+'],
      ['Nanoplastia','6000+']
    ]},
    {cat:'hair', name:'Scalp treatments', intro:'', rows:[
      ['Hair fall treatment','1500'],
      ['Dandruff treatment','1600']
    ]},
    {cat:'skin', name:'Facials', intro:'Basic for a quick glow. Advance for real results.', rows:[
      ['Herbal facial','1000'],
      ['Lotus facial','1200'],
      ['O3+ facial','2000'],
      ['Hydra facial','2500+','Popular'],
      ['Peeling facial','3000'],
      ['Acne facial','3500'],
      ['Collagen facial','3500']
    ]},
    {cat:'skin', name:'Clean-up', intro:'', rows:[
      ['Herbal clean-up','650'],
      ['Lotus clean-up','800'],
      ['O3+ clean-up','1500']
    ]},
    {cat:'skin', name:'Bleach & de-tan', intro:'', rows:[
      ['De-tan','250+'],
      ['Bleach','350+']
    ]},
    {cat:'skin', name:'Threading & face wax', intro:'Quick, clean and precise.', cols:['Threading','Face wax'], rows:[
      ['Eyebrows',['50','80']],
      ['Forehead',['30','80']],
      ['Upper lip',['30','80']],
      ['Lower lip',['20','80']],
      ['Chin',['80','80']],
      ['Sidelocks',['60','160']],
      ['Full face',['–','600']]
    ]},
    {cat:'makeup', name:'Make-up, hair & draping', intro:'Party, function and bridal looks.', rows:[
      ['Make-up, hairstyling & saree draping','2500+','Bridal on enquiry']
    ]},
    {cat:'nails', name:'Waxing', intro:'Regular or Rica, your choice.', cols:['Regular','Rica'], rows:[
      ['Underarms',['100','150']],
      ['Full arms',['300','400']],
      ['Half legs',['300','400']],
      ['Full legs',['600','800']],
      ['Stomach',['350','350']],
      ['Half back',['350','400']],
      ['Full back',['500','800']],
      ['B wax',['1200','1500']]
    ]},
    {cat:'nails', name:'Manicure & pedicure', intro:'Basic, Lotus and Footlogix rituals.', cols:['Manicure','Pedicure'], rows:[
      ['Basic',['500','600']],
      ['Lotus',['1000','1200']],
      ['Footlogix',['1200','1500']],
      ['Footlogix advance pedicure',['–','2000']]
    ]}
  ];

  var COURSES = [
    {name:'Basic Salon Course', dur:'2 months', price:'20,000', mods:[
      ['Skin & grooming',['Threading','Waxing (honey, normal)','Basic manicure & pedicure','Face bleach (Oxy)','Basic clean-up & facial']],
      ['Hair',['Head oil massage','Hair spa','Hair colour: grey coverage, root touch-up','Haircut: straight, normal U','Blow-dry & ironing']],
      ['Make-up & styling',['Basic light make-up','Simple bridal make-up','French roll + 3 bridal hairstyles','Saree draping: simple, Gujarati, Nauvari']]
    ]},
    {name:'Advance Salon Course', dur:'3 months', price:'45,000', hot:true, mods:[
      ['Skin & grooming',['Threading, full waxing (honey + Rica)','Advanced manicure & pedicure','Face bleach (Oxy), face waxing (bean wax)','Advanced clean-up & facial (VLCC, Cheryl’s)','Skin treatment: acne control, high-frequency machine']],
      ['Hair',['Haircut: straight, U, step, layer','L’Oréal hair spa','Root touch-up (L’Oréal Inoa)','Professional aqua hair protein treatment','Straightening & smoothening','L’Oréal anti-dandruff treatment']],
      ['Make-up & styling',['Basic light make-up','Simple bridal make-up','3 basic hairstyles','Advanced styling: ironing, blow-dry, curls']]
    ]},
    {name:'Professional Salon Course', dur:'4 months', price:'75,000', mods:[
      ['Skin & grooming',['Threading, full body waxing (honey + Rica)','Spa manicure & pedicure','Face bleach (Cheryl’s, Oxy), D-tan pack (O3+, Raga)','Basic + advanced clean-up (ultrasonic machine)','O3+ treatment with hydra machine','Skin treatment: pigmentation']],
      ['Hair',['White hair coverage (L’Oréal Inoa)','Crown highlights','L’Oréal hair spa, hair fall treatment','Aroma head oil massage with machine','Straightening, smoothening, botox protein, keratin','Basic to advanced haircut with styling & setting']],
      ['Make-up & styling',['Basic make-up','Bridal make-up with professional products','Basic + advanced hairstyles: messy bun, tong, ironing, hair extensions']]
    ]}
  ];

  var REVIEWS = [
    ['Kavita Dodia','I have been taking hair services from this salon for the last 15 years and they never disappoint! Recently I did Nanoplastia treatment and the result is just AWESOME! My hair feels so smooth, shiny and frizz-free.'],
    ['Madhura Rane','Very clean and hygienic salon, been going here for a year and I’ve never been disappointed with any haircut. The staff is very attentive and gives your hair all the care it requires. Would 100% recommend!'],
    ['Neerja Bavishi','I was dressed by Pratibha aunty and her team for my baby shower. They did a fabulous job with my make-up which was very subtle, hairstyle, etc. She is also very punctual and professional.'],
    ['Vansika','Just had my aqua spa done. My hair looks great and much straighter and smoother than before.'],
    ['Rakhi Dhar','I am delighted to give a 5-star rating to Priya beauty salon. The staff is friendly and professional, the services are top-notch, and the atmosphere is relaxing. I always leave feeling pampered and refreshed.'],
    ['Sneha Amonkar','Priya parlour provides good service with skilled staff, and hygiene is also taken care of.'],
    ['Shweta Thorat','I like Aqua hair spa treatment a lot. My hair transformed totally.'],
    ['Chetna Patel','Aqua spa, very good treatment for hair 👍']
  ];

  var GALLERY = [
    ['signboard.jpg','Look for this board: opp. Sunflower Building'],
    ['mirrors-led.jpg','Styling stations with lit mirrors'],
    ['salon-long-view.jpg','The salon floor'],
    ['product-wall.jpg','Product wall, pedicure and hair wash corner'],
    ['mirrors-brass.jpg','Brass mirrors on the stone wall'],
    ['entrance-view.jpg','Looking towards the entrance'],
    ['salon-long-view-2.jpg','UV sterilizers at every station'],
    ['reception.jpg','Reception: pay by UPI, review us on Google']
  ];

  /* ---------- helpers ---------- */
  function $(s,r){return (r||document).querySelector(s)}
  function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
  function waLink(msg){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(msg)}
  function istNow(){var d=new Date();return new Date(d.getTime()+(d.getTimezoneOffset()+330)*60000)}

  /* ---------- whatsapp links ---------- */
  function wireWA(root){
    $$('.js-wa',root).forEach(function(a){
      a.href=waLink(a.getAttribute('data-msg')||'Hi Priya Beauty!');
      a.target='_blank'; a.rel='noopener';
    });
  }

  /* ---------- open status ---------- */
  function fmt(h){return (h>12?h-12:h)+(h>=12?' pm':' am')}
  function updateStatus(){
    var t=istNow(), h=t.getHours()+t.getMinutes()/60, open=h>=OPEN_H&&h<CLOSE_H;
    var txt=open?'Open now · till '+fmt(CLOSE_H):'Closed · opens '+fmt(OPEN_H);
    $$('.js-status').forEach(function(s){s.classList.toggle('closed',!open)});
    $$('.js-status-txt').forEach(function(s){s.textContent=txt});
    $$('.js-status-short').forEach(function(s){s.textContent=open?'Open now':'Closed'});
    $$('.js-status-mini').forEach(function(s){s.textContent=open?'online · replies fast':'closed · replies from '+fmt(OPEN_H);s.style.color=open?'#3ddc84':'#ff8a8a'});
    var tb=$('#hours'); if(tb && !tb.children.length){
      var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], today=t.getDay();
      for(var i=1;i<=7;i++){var d=i%7, tr=el('tr'); if(d===today) tr.className='today';
        tr.appendChild(el('td',null,days[d]+(d===today?' (today)':''))); tr.appendChild(el('td',null,'10 am to 8 pm')); tb.appendChild(tr);}
    }
  }

  /* ---------- chat greeting ---------- */
  function playChat(){
    var box=$('#bubbles'); if(!box||box.dataset.done) return; box.dataset.done=1;
    var h=istNow().getHours();
    var hello=h<12?'Good morning 🌸':h<17?'Good afternoon 🌸':'Good evening 🌸';
    var lines=[hello+' Welcome to Priya Beauty.','Hair spa, facial or a fresh cut?','Tell us a time and we’ll hold your chair.'];
    var i=0;
    (function next(){
      if(i>=lines.length) return;
      var ty=el('div','bub typing'); ty.innerHTML='<i></i><i></i><i></i>'; box.appendChild(ty);
      requestAnimationFrame(function(){ty.classList.add('show')});
      setTimeout(function(){ty.remove(); var b=el('div','bub',lines[i++]); box.appendChild(b);
        requestAnimationFrame(function(){b.classList.add('show')}); setTimeout(next,500);}, 900);
    })();
  }

  /* ---------- reviews ---------- */
  function renderReviews(){
    $$('.js-reviews').forEach(function(g){
      if(g.children.length) return;
      var lim=+g.getAttribute('data-limit')||REVIEWS.length;
      REVIEWS.slice(0,lim).forEach(function(r){
        var c=el('article','rev reveal'); c.appendChild(el('div','stars','★★★★★'));
        c.appendChild(el('p',null,'“'+r[1]+'”'));
        var w=el('div','who'); w.appendChild(el('div','av',r[0].charAt(0)));
        var n=el('div'); n.appendChild(el('b',null,r[0])); n.appendChild(el('small',null,'Google review')); w.appendChild(n);
        c.appendChild(w); g.appendChild(c);
      });
    });
  }

  /* ---------- services ---------- */
  function rs(p){ if(p==='–') return '–'; var on=/\+$/.test(p); var n=p.replace('+',''); return '₹'+Number(n).toLocaleString('en-IN')+(on?'+':''); }
  function minPrice(g){ var m=Infinity; g.rows.forEach(function(r){if(r[2]==='Add-on')return;(Array.isArray(r[1])?r[1]:[r[1]]).forEach(function(p){var n=parseInt(p,10); if(!isNaN(n)&&n<m)m=n})}); return m }
  var CAT_META = {
    hair:{img:'svc-hair.jpg', fb:'mirrors-led.jpg', line:'Colour, cuts, spa and long-lasting treatments.'},
    skin:{img:'svc-skin.jpg', fb:'salon-long-view.jpg', line:'Facials, clean-ups, threading and face wax.'},
    makeup:{img:'svc-makeup.jpg', fb:'mirrors-brass.jpg', line:'Party, function and bridal looks, with hair and draping.'},
    nails:{img:'svc-body.jpg', fb:'product-wall.jpg', line:'Waxing, manicure and pedicure rituals.'}
  };
  function renderServices(){
    var wrap=$('#svcGroups'); if(!wrap) return;
    wireWA(wrap);
    $$('#svcTabs .tab').forEach(function(b){b.addEventListener('click',function(){filterSvc(b.dataset.c)})});
    $$('#svcGroups details').forEach(function(d){d.addEventListener('toggle',function(){
      if(d.open) $$('#svcGroups details[open]').forEach(function(o){if(o!==d)o.open=false});
    })});
  }
  function filterSvc(c){
    $$('#svcTabs .tab').forEach(function(b){var on=b.dataset.c===c; b.classList.toggle('on',on); b.setAttribute('aria-selected',on)});
    $$('#svcGroups .svc-cat').forEach(function(g){g.style.display=(c==='all'||g.dataset.c===c)?'':'none'});
    $$('#svcGroups details[open]').forEach(function(o){o.open=false});
    if(c!=='all'){ var f=$('#svcGroups .svc-cat[data-c="'+c+'"] details'); if(f) f.open=true; }
  }

  /* ---------- courses ---------- */
  function renderCourses(){
    var w=$('#courses'); if(!w || w.children.length) return;
    COURSES.forEach(function(c){
      var card=el('article','course reveal'+(c.hot?' hot':''));
      if(c.hot) card.appendChild(el('span','flag','Most chosen'));
      card.appendChild(el('h3',null,c.name));
      card.appendChild(el('div','dur',c.dur+' · hands-on practice'));
      var p=el('div','price','₹'+c.price+' '); p.appendChild(el('small',null,'course fee')); card.appendChild(p);
      c.mods.forEach(function(m,i){
        var d=el('details'); if(i===0) d.open=true; d.appendChild(el('summary',null,m[0]));
        var ul=el('ul'); m[1].forEach(function(x){ul.appendChild(el('li',null,x))}); d.appendChild(ul); card.appendChild(d);
      });
      var a=el('a','btn '+(c.hot?'btn-pink':'btn-ghost')+' js-wa','Enquire about this course'); a.href='#';
      a.setAttribute('data-msg','Hi! I’d like details of the '+c.name+' ('+c.dur+'). When does the next batch start?');
      card.appendChild(a); w.appendChild(card);
    });
    wireWA(w);
  }


  var WORK = [
    ['work-bridal.jpg','Bridal look','tall'],
    ['work-aqua-highlights.jpg','Aqua treatment with highlights','tall'],
    ['work-curls.jpg','Soft curls',''],
    ['work-haldi.jpg','Haldi look',''],
    ['work-botox.jpg','Botox smoothing',''],
    ['work-traditional.jpg','Traditional look','']
  ];
  function renderCollage(){
    if(!$('#gal')) return;
    GALLERY=GALLERY.concat(WORK.map(function(w){return [w[0],w[1]]}));
    var g=$('#gal'); if(g){g.innerHTML='';renderGallery()}
  }

  var RESPONSIVE_IMAGES = {"images/aqua-spa.jpg":{"src":"images/responsive/aqua-spa-1200.webp","srcset":"images/responsive/aqua-spa-320.webp 320w, images/responsive/aqua-spa-640.webp 640w, images/responsive/aqua-spa-960.webp 960w, images/responsive/aqua-spa-1200.webp 1200w","width":1200,"height":1500},"images/entrance-view.jpg":{"src":"images/responsive/entrance-view-1600.webp","srcset":"images/responsive/entrance-view-320.webp 320w, images/responsive/entrance-view-640.webp 640w, images/responsive/entrance-view-960.webp 960w, images/responsive/entrance-view-1280.webp 1280w, images/responsive/entrance-view-1600.webp 1600w","width":1600,"height":1200},"images/hero-salon.jpg":{"src":"images/responsive/hero-salon-1920.webp","srcset":"images/responsive/hero-salon-320.webp 320w, images/responsive/hero-salon-640.webp 640w, images/responsive/hero-salon-960.webp 960w, images/responsive/hero-salon-1280.webp 1280w, images/responsive/hero-salon-1920.webp 1920w","width":1920,"height":1085},"images/logo-mark-black.png":{"src":"images/responsive/logo-mark-black-168.webp","srcset":"images/responsive/logo-mark-black-56.webp 56w, images/responsive/logo-mark-black-112.webp 112w, images/responsive/logo-mark-black-168.webp 168w","width":324,"height":609},"images/logo-mark-white.png":{"src":"images/responsive/logo-mark-white-168.webp","srcset":"images/responsive/logo-mark-white-56.webp 56w, images/responsive/logo-mark-white-112.webp 112w, images/responsive/logo-mark-white-168.webp 168w","width":324,"height":609},"images/mirrors-brass.jpg":{"src":"images/responsive/mirrors-brass-1600.webp","srcset":"images/responsive/mirrors-brass-320.webp 320w, images/responsive/mirrors-brass-640.webp 640w, images/responsive/mirrors-brass-960.webp 960w, images/responsive/mirrors-brass-1280.webp 1280w, images/responsive/mirrors-brass-1600.webp 1600w","width":1600,"height":1200},"images/mirrors-led.jpg":{"src":"images/responsive/mirrors-led-1600.webp","srcset":"images/responsive/mirrors-led-320.webp 320w, images/responsive/mirrors-led-640.webp 640w, images/responsive/mirrors-led-960.webp 960w, images/responsive/mirrors-led-1280.webp 1280w, images/responsive/mirrors-led-1600.webp 1600w","width":1600,"height":1200},"images/og-cover.jpg":{"src":"images/responsive/og-cover-1200.webp","srcset":"images/responsive/og-cover-320.webp 320w, images/responsive/og-cover-640.webp 640w, images/responsive/og-cover-960.webp 960w, images/responsive/og-cover-1200.webp 1200w","width":1200,"height":629},"images/pratibha-portrait-full.png":{"src":"images/responsive/pratibha-portrait-full-1792.webp","srcset":"images/responsive/pratibha-portrait-full-320.webp 320w, images/responsive/pratibha-portrait-full-640.webp 640w, images/responsive/pratibha-portrait-full-960.webp 960w, images/responsive/pratibha-portrait-full-1280.webp 1280w, images/responsive/pratibha-portrait-full-1792.webp 1792w","width":1792,"height":2240},"images/pratibha-portrait-wine.jpg":{"src":"images/responsive/pratibha-portrait-wine-1536.webp","srcset":"images/responsive/pratibha-portrait-wine-320.webp 320w, images/responsive/pratibha-portrait-wine-640.webp 640w, images/responsive/pratibha-portrait-wine-960.webp 960w, images/responsive/pratibha-portrait-wine-1280.webp 1280w, images/responsive/pratibha-portrait-wine-1536.webp 1536w","width":1536,"height":1920},"images/pratibha-portrait.jpg":{"src":"images/responsive/pratibha-portrait-1536.webp","srcset":"images/responsive/pratibha-portrait-320.webp 320w, images/responsive/pratibha-portrait-640.webp 640w, images/responsive/pratibha-portrait-960.webp 960w, images/responsive/pratibha-portrait-1280.webp 1280w, images/responsive/pratibha-portrait-1536.webp 1536w","width":1536,"height":1920},"images/pratibha.jpg":{"src":"images/responsive/pratibha-480.webp","srcset":"images/responsive/pratibha-320.webp 320w, images/responsive/pratibha-480.webp 480w","width":480,"height":480},"images/product-wall.jpg":{"src":"images/responsive/product-wall-1600.webp","srcset":"images/responsive/product-wall-320.webp 320w, images/responsive/product-wall-640.webp 640w, images/responsive/product-wall-960.webp 960w, images/responsive/product-wall-1280.webp 1280w, images/responsive/product-wall-1600.webp 1600w","width":1600,"height":1200},"images/reception.jpg":{"src":"images/responsive/reception-1200.webp","srcset":"images/responsive/reception-320.webp 320w, images/responsive/reception-640.webp 640w, images/responsive/reception-960.webp 960w, images/responsive/reception-1200.webp 1200w","width":1200,"height":1600},"images/salon-long-view-2.jpg":{"src":"images/responsive/salon-long-view-2-1600.webp","srcset":"images/responsive/salon-long-view-2-320.webp 320w, images/responsive/salon-long-view-2-640.webp 640w, images/responsive/salon-long-view-2-960.webp 960w, images/responsive/salon-long-view-2-1280.webp 1280w, images/responsive/salon-long-view-2-1600.webp 1600w","width":1600,"height":1200},"images/salon-long-view.jpg":{"src":"images/responsive/salon-long-view-1600.webp","srcset":"images/responsive/salon-long-view-320.webp 320w, images/responsive/salon-long-view-640.webp 640w, images/responsive/salon-long-view-960.webp 960w, images/responsive/salon-long-view-1280.webp 1280w, images/responsive/salon-long-view-1600.webp 1600w","width":1600,"height":1200},"images/signboard.jpg":{"src":"images/responsive/signboard-1198.webp","srcset":"images/responsive/signboard-320.webp 320w, images/responsive/signboard-640.webp 640w, images/responsive/signboard-960.webp 960w, images/responsive/signboard-1198.webp 1198w","width":1198,"height":444},"images/svc-body.jpg":{"src":"images/responsive/svc-body-900.webp","srcset":"images/responsive/svc-body-320.webp 320w, images/responsive/svc-body-640.webp 640w, images/responsive/svc-body-900.webp 900w","width":900,"height":675},"images/svc-hair.jpg":{"src":"images/responsive/svc-hair-900.webp","srcset":"images/responsive/svc-hair-320.webp 320w, images/responsive/svc-hair-640.webp 640w, images/responsive/svc-hair-900.webp 900w","width":900,"height":675},"images/svc-makeup.jpg":{"src":"images/responsive/svc-makeup-900.webp","srcset":"images/responsive/svc-makeup-320.webp 320w, images/responsive/svc-makeup-640.webp 640w, images/responsive/svc-makeup-900.webp 900w","width":900,"height":675},"images/svc-skin.jpg":{"src":"images/responsive/svc-skin-900.webp","srcset":"images/responsive/svc-skin-320.webp 320w, images/responsive/svc-skin-640.webp 640w, images/responsive/svc-skin-900.webp 900w","width":900,"height":675},"images/work/bridal-01.jpg":{"src":"images/work/responsive/bridal-01-540.webp","srcset":"images/work/responsive/bridal-01-320.webp 320w, images/work/responsive/bridal-01-540.webp 540w","width":540,"height":960},"images/work/bridal-02.jpg":{"src":"images/work/responsive/bridal-02-540.webp","srcset":"images/work/responsive/bridal-02-320.webp 320w, images/work/responsive/bridal-02-540.webp 540w","width":540,"height":960},"images/work/bridal-03.jpg":{"src":"images/work/responsive/bridal-03-540.webp","srcset":"images/work/responsive/bridal-03-320.webp 320w, images/work/responsive/bridal-03-540.webp 540w","width":540,"height":960},"images/work/bridal-04.jpg":{"src":"images/work/responsive/bridal-04-720.webp","srcset":"images/work/responsive/bridal-04-320.webp 320w, images/work/responsive/bridal-04-640.webp 640w, images/work/responsive/bridal-04-720.webp 720w","width":720,"height":960},"images/work/bridal-05.jpg":{"src":"images/work/responsive/bridal-05-720.webp","srcset":"images/work/responsive/bridal-05-320.webp 320w, images/work/responsive/bridal-05-640.webp 640w, images/work/responsive/bridal-05-720.webp 720w","width":720,"height":960},"images/work/bridal-06.jpg":{"src":"images/work/responsive/bridal-06-720.webp","srcset":"images/work/responsive/bridal-06-320.webp 320w, images/work/responsive/bridal-06-640.webp 640w, images/work/responsive/bridal-06-720.webp 720w","width":720,"height":960},"images/work/bridal-07.jpg":{"src":"images/work/responsive/bridal-07-720.webp","srcset":"images/work/responsive/bridal-07-320.webp 320w, images/work/responsive/bridal-07-640.webp 640w, images/work/responsive/bridal-07-720.webp 720w","width":720,"height":960},"images/work/bridal-08.jpg":{"src":"images/work/responsive/bridal-08-567.webp","srcset":"images/work/responsive/bridal-08-320.webp 320w, images/work/responsive/bridal-08-567.webp 567w","width":567,"height":1200},"images/work/bridal-09.jpg":{"src":"images/work/responsive/bridal-09-960.webp","srcset":"images/work/responsive/bridal-09-320.webp 320w, images/work/responsive/bridal-09-640.webp 640w, images/work/responsive/bridal-09-960.webp 960w","width":960,"height":1200},"images/work/bridal-10.jpg":{"src":"images/work/responsive/bridal-10-1080.webp","srcset":"images/work/responsive/bridal-10-320.webp 320w, images/work/responsive/bridal-10-640.webp 640w, images/work/responsive/bridal-10-960.webp 960w, images/work/responsive/bridal-10-1080.webp 1080w","width":1080,"height":1080},"images/work/colour-01.jpg":{"src":"images/work/responsive/colour-01-900.webp","srcset":"images/work/responsive/colour-01-320.webp 320w, images/work/responsive/colour-01-640.webp 640w, images/work/responsive/colour-01-900.webp 900w","width":900,"height":1200},"images/work/colour-02.jpg":{"src":"images/work/responsive/colour-02-900.webp","srcset":"images/work/responsive/colour-02-320.webp 320w, images/work/responsive/colour-02-640.webp 640w, images/work/responsive/colour-02-900.webp 900w","width":900,"height":1200},"images/work/colour-03.jpg":{"src":"images/work/responsive/colour-03-1200.webp","srcset":"images/work/responsive/colour-03-320.webp 320w, images/work/responsive/colour-03-640.webp 640w, images/work/responsive/colour-03-960.webp 960w, images/work/responsive/colour-03-1200.webp 1200w","width":1200,"height":900},"images/work/colour-04.jpg":{"src":"images/work/responsive/colour-04-1200.webp","srcset":"images/work/responsive/colour-04-320.webp 320w, images/work/responsive/colour-04-640.webp 640w, images/work/responsive/colour-04-960.webp 960w, images/work/responsive/colour-04-1200.webp 1200w","width":1200,"height":900},"images/work/colour-05.jpg":{"src":"images/work/responsive/colour-05-864.webp","srcset":"images/work/responsive/colour-05-320.webp 320w, images/work/responsive/colour-05-640.webp 640w, images/work/responsive/colour-05-864.webp 864w","width":864,"height":1152},"images/work/colour-06.jpg":{"src":"images/work/responsive/colour-06-864.webp","srcset":"images/work/responsive/colour-06-320.webp 320w, images/work/responsive/colour-06-640.webp 640w, images/work/responsive/colour-06-864.webp 864w","width":864,"height":1152},"images/work/colour-07.jpg":{"src":"images/work/responsive/colour-07-900.webp","srcset":"images/work/responsive/colour-07-320.webp 320w, images/work/responsive/colour-07-640.webp 640w, images/work/responsive/colour-07-900.webp 900w","width":900,"height":1200},"images/work/colour-08.jpg":{"src":"images/work/responsive/colour-08-1200.webp","srcset":"images/work/responsive/colour-08-320.webp 320w, images/work/responsive/colour-08-640.webp 640w, images/work/responsive/colour-08-960.webp 960w, images/work/responsive/colour-08-1200.webp 1200w","width":1200,"height":900},"images/work/colour-09.jpg":{"src":"images/work/responsive/colour-09-540.webp","srcset":"images/work/responsive/colour-09-320.webp 320w, images/work/responsive/colour-09-540.webp 540w","width":540,"height":960},"images/work/colour-10.jpg":{"src":"images/work/responsive/colour-10-540.webp","srcset":"images/work/responsive/colour-10-320.webp 320w, images/work/responsive/colour-10-540.webp 540w","width":540,"height":960},"images/work/hair-01.jpg":{"src":"images/work/responsive/hair-01-540.webp","srcset":"images/work/responsive/hair-01-320.webp 320w, images/work/responsive/hair-01-540.webp 540w","width":540,"height":960},"images/work/hair-02.jpg":{"src":"images/work/responsive/hair-02-540.webp","srcset":"images/work/responsive/hair-02-320.webp 320w, images/work/responsive/hair-02-540.webp 540w","width":540,"height":960},"images/work/hair-03.jpg":{"src":"images/work/responsive/hair-03-540.webp","srcset":"images/work/responsive/hair-03-320.webp 320w, images/work/responsive/hair-03-540.webp 540w","width":540,"height":960},"images/work/hair-04.jpg":{"src":"images/work/responsive/hair-04-540.webp","srcset":"images/work/responsive/hair-04-320.webp 320w, images/work/responsive/hair-04-540.webp 540w","width":540,"height":960},"images/work/hair-05.jpg":{"src":"images/work/responsive/hair-05-540.webp","srcset":"images/work/responsive/hair-05-320.webp 320w, images/work/responsive/hair-05-540.webp 540w","width":540,"height":960},"images/work/hair-06.jpg":{"src":"images/work/responsive/hair-06-540.webp","srcset":"images/work/responsive/hair-06-320.webp 320w, images/work/responsive/hair-06-540.webp 540w","width":540,"height":960},"images/work/hair-07.jpg":{"src":"images/work/responsive/hair-07-540.webp","srcset":"images/work/responsive/hair-07-320.webp 320w, images/work/responsive/hair-07-540.webp 540w","width":540,"height":960},"images/work/hair-08.jpg":{"src":"images/work/responsive/hair-08-720.webp","srcset":"images/work/responsive/hair-08-320.webp 320w, images/work/responsive/hair-08-640.webp 640w, images/work/responsive/hair-08-720.webp 720w","width":720,"height":960},"images/work/hair-09.jpg":{"src":"images/work/responsive/hair-09-720.webp","srcset":"images/work/responsive/hair-09-320.webp 320w, images/work/responsive/hair-09-640.webp 640w, images/work/responsive/hair-09-720.webp 720w","width":720,"height":960},"images/work/hair-10.jpg":{"src":"images/work/responsive/hair-10-893.webp","srcset":"images/work/responsive/hair-10-320.webp 320w, images/work/responsive/hair-10-640.webp 640w, images/work/responsive/hair-10-893.webp 893w","width":893,"height":1200},"images/work/hair-11.jpg":{"src":"images/work/responsive/hair-11-1080.webp","srcset":"images/work/responsive/hair-11-320.webp 320w, images/work/responsive/hair-11-640.webp 640w, images/work/responsive/hair-11-960.webp 960w, images/work/responsive/hair-11-1080.webp 1080w","width":1080,"height":1080},"images/work/party-01.jpg":{"src":"images/work/responsive/party-01-540.webp","srcset":"images/work/responsive/party-01-320.webp 320w, images/work/responsive/party-01-540.webp 540w","width":540,"height":960},"images/work/party-02.jpg":{"src":"images/work/responsive/party-02-720.webp","srcset":"images/work/responsive/party-02-320.webp 320w, images/work/responsive/party-02-640.webp 640w, images/work/responsive/party-02-720.webp 720w","width":720,"height":960},"images/work/party-03.jpg":{"src":"images/work/responsive/party-03-540.webp","srcset":"images/work/responsive/party-03-320.webp 320w, images/work/responsive/party-03-540.webp 540w","width":540,"height":960},"images/work/party-04.jpg":{"src":"images/work/responsive/party-04-540.webp","srcset":"images/work/responsive/party-04-320.webp 320w, images/work/responsive/party-04-540.webp 540w","width":540,"height":960},"images/work/party-05.jpg":{"src":"images/work/responsive/party-05-540.webp","srcset":"images/work/responsive/party-05-320.webp 320w, images/work/responsive/party-05-540.webp 540w","width":540,"height":960},"images/work/party-06.jpg":{"src":"images/work/responsive/party-06-720.webp","srcset":"images/work/responsive/party-06-320.webp 320w, images/work/responsive/party-06-640.webp 640w, images/work/responsive/party-06-720.webp 720w","width":720,"height":960},"images/work/party-07.jpg":{"src":"images/work/responsive/party-07-720.webp","srcset":"images/work/responsive/party-07-320.webp 320w, images/work/responsive/party-07-640.webp 640w, images/work/responsive/party-07-720.webp 720w","width":720,"height":960},"images/work/party-08.jpg":{"src":"images/work/responsive/party-08-720.webp","srcset":"images/work/responsive/party-08-320.webp 320w, images/work/responsive/party-08-640.webp 640w, images/work/responsive/party-08-720.webp 720w","width":720,"height":960},"images/work/party-09.jpg":{"src":"images/work/responsive/party-09-720.webp","srcset":"images/work/responsive/party-09-320.webp 320w, images/work/responsive/party-09-640.webp 640w, images/work/responsive/party-09-720.webp 720w","width":720,"height":960},"images/work/party-10.jpg":{"src":"images/work/responsive/party-10-720.webp","srcset":"images/work/responsive/party-10-320.webp 320w, images/work/responsive/party-10-640.webp 640w, images/work/responsive/party-10-720.webp 720w","width":720,"height":960},"images/work/party-11.jpg":{"src":"images/work/responsive/party-11-786.webp","srcset":"images/work/responsive/party-11-320.webp 320w, images/work/responsive/party-11-640.webp 640w, images/work/responsive/party-11-786.webp 786w","width":786,"height":982},"images/work-aqua-highlights.jpg":{"src":"images/responsive/work-aqua-highlights-540.webp","srcset":"images/responsive/work-aqua-highlights-320.webp 320w, images/responsive/work-aqua-highlights-540.webp 540w","width":540,"height":960},"images/work-botox.jpg":{"src":"images/responsive/work-botox-540.webp","srcset":"images/responsive/work-botox-320.webp 320w, images/responsive/work-botox-540.webp 540w","width":540,"height":960},"images/work-bridal.jpg":{"src":"images/responsive/work-bridal-960.webp","srcset":"images/responsive/work-bridal-320.webp 320w, images/responsive/work-bridal-640.webp 640w, images/responsive/work-bridal-960.webp 960w","width":960,"height":1200},"images/work-curls.jpg":{"src":"images/responsive/work-curls-1080.webp","srcset":"images/responsive/work-curls-320.webp 320w, images/responsive/work-curls-640.webp 640w, images/responsive/work-curls-960.webp 960w, images/responsive/work-curls-1080.webp 1080w","width":1080,"height":1080},"images/work-haldi.jpg":{"src":"images/responsive/work-haldi-786.webp","srcset":"images/responsive/work-haldi-320.webp 320w, images/responsive/work-haldi-640.webp 640w, images/responsive/work-haldi-786.webp 786w","width":786,"height":982},"images/work-traditional.jpg":{"src":"images/responsive/work-traditional-1080.webp","srcset":"images/responsive/work-traditional-320.webp 320w, images/responsive/work-traditional-640.webp 640w, images/responsive/work-traditional-960.webp 960w, images/responsive/work-traditional-1080.webp 1080w","width":1080,"height":1080}};
  function setResponsiveImage(img, src, sizes){
    var photo=RESPONSIVE_IMAGES[src];
    img.decoding='async';
    if(!photo){img.src=src;return}
    img.sizes=sizes;
    img.srcset=photo.srcset;
    img.src=photo.src;
    img.width=photo.width; img.height=photo.height;
  }

  /* ---------- gallery + lightbox ---------- */
  var lbI=0;
  function renderGallery(){
    var g=$('#gal'); if(!g || g.children.length) return;
    GALLERY.forEach(function(p,i){
      var b=el('button'); b.setAttribute('aria-label','Open photo: '+p[1]);
      var im=el('img'); setResponsiveImage(im,'images/'+p[0],'(min-width: 900px) 400px, calc(100vw - 48px)'); im.alt=p[1]; im.loading='lazy';
      b.appendChild(im); b.appendChild(el('span',null,p[1]));
      b.addEventListener('click',function(){openLb(i)}); g.appendChild(b);
    });
  }
  function showLb(){var p=GALLERY[lbI]; setResponsiveImage($('#lbImg'),'images/'+p[0],'100vw'); $('#lbImg').alt=p[1]; $('#lbCap').textContent=p[1]+'  ('+(lbI+1)+'/'+GALLERY.length+')'}
  function openLb(i){lbI=i; showLb(); $('#lb').classList.add('open'); document.body.style.overflow='hidden'; $('#lbClose').focus()}
  function closeLb(){$('#lb').classList.remove('open'); document.body.style.overflow=''}
  function stepLb(d){lbI=(lbI+d+GALLERY.length)%GALLERY.length; showLb()}

  /* ---------- booking form ---------- */
  function setupForm(){
    var d=$('#f-date'); if(!d) return; var t=istNow(); function iso(x){return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')}
    d.min=iso(t); var tm=new Date(t); tm.setDate(tm.getDate()+1); d.value=iso(tm);
    var ts=$('#f-time'); ts.appendChild(new Option('Any time',''));
    for(var h=OPEN_H;h<CLOSE_H;h++){ts.appendChild(new Option(fmt(h),fmt(h))); ts.appendChild(new Option(fmt(h).replace(' ',':30 '),fmt(h).replace(' ',':30 ')))}
    $('#bookForm').addEventListener('submit',function(e){
      e.preventDefault();
      var name=$('#f-name').value.trim(), ph=$('#f-phone').value.replace(/[^\d+]/g,''), svc=$('#f-svc').value, dt=$('#f-date').value, tmv=$('#f-time').value, note=$('#f-note').value.trim();
      var err=$('#f-err');
      if(!name){err.textContent='Please add your name.';$('#f-name').focus();return}
      if(!/^(?:\+?91)?[6-9]\d{9}$/.test(ph)){err.textContent='Please add a valid 10-digit phone number.';$('#f-phone').focus();return}
      if(!svc){err.textContent='Please choose a service.';$('#f-svc').focus();return}
      if(!dt){err.textContent='Please pick a date.';$('#f-date').focus();return}
      d.min=iso(istNow());
      if(dt<d.min){err.textContent='Please choose today or a future date.';$('#f-date').focus();return}
      err.textContent='';
      var nice=new Date(dt+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
      var msg='Hello Priya Beauty!\n\nAppointment request\nName: '+name+'\nPhone: '+ph+'\nService: '+svc+'\nDate: '+nice+'\nTime: '+(tmv||'Any time')+(note?'\nNote: '+note:'')+'\n\nPlease confirm my slot. Thank you!';
      measureEnquiry('whatsapp_click','booking_form');
      window.open(waLink(msg),'_blank','noopener');
    });
  }

  /* ---------- router ---------- */
  var ROUTES=['home','services','bridal','academy','space','reviews','contact'];
  function route(){
    // Retain previously shared hash links and the existing Google menu link.
    if(location.hash.indexOf('#/')===0){
      var legacy=location.hash.slice(2).split('?'), target=legacy[0]||'home';
      if(ROUTES.indexOf(target)>=0){
        location.replace(new URL((target==='home'?'./':target+'/')+(legacy[1]?'?'+legacy[1]:''),document.baseURI).href); return;
      }
    }
    var r=document.body.dataset.page, pg=$('.page.on');
    $$('[data-r]').forEach(function(a){
      var selected=a.getAttribute('data-r')===r;
      a.classList.toggle('on',selected);
      if(selected) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
    if(r==='services'){
      var c=new URLSearchParams(location.search).get('c'); filterSvc(c&&CATS[c]?c:'all');
    }
    if(r==='home') playChat();
    document.body.classList.toggle('on-home',r==='home');
    closeDrawer(); observe(pg);
  }

  /* ---------- reveal ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}) : null;
  function observe(root){$$('.reveal:not(.in)',root).forEach(function(x){
    var sib=x.parentNode?Array.prototype.filter.call(x.parentNode.children,function(c){return c.classList.contains('reveal')}):[];
    var i=sib.indexOf(x); x.style.setProperty('--d',Math.max(0,Math.min(i,6))*80+'ms');
    x.addEventListener('transitionend',function done(ev){ if(ev.target!==x||ev.propertyName!=='opacity') return; x.classList.add('done'); x.style.removeProperty('--d'); x.removeEventListener('transitionend',done); });
    io?io.observe(x):x.classList.add('in');
  })}

  /* ---------- home reviews: swipe + dots (no autoplay) ---------- */
  (function(){
    var t=$('#rvTrack'), d=$$('#rvDots button'); if(!t||!d.length) return;
    function cur(){ return Math.round(t.scrollLeft/(t.clientWidth+16)) }
    t.addEventListener('scroll',function(){ var c=cur(); d.forEach(function(b,i){b.classList.toggle('on',i===c); b.setAttribute('aria-pressed',i===c?'true':'false')}) },{passive:true});
    d.forEach(function(b,i){
      b.addEventListener('click',function(){t.scrollTo({left:i*(t.clientWidth+16),behavior:'smooth'})});
      b.addEventListener('keydown',function(e){
        var n=e.key==='ArrowRight'?(i+1)%d.length:e.key==='ArrowLeft'?(i+d.length-1)%d.length:e.key==='Home'?0:e.key==='End'?d.length-1:null;
        if(n!==null){e.preventDefault();d[n].focus();d[n].click()}
      });
    });
  })();

  /* ---------- drawer / nav / fab ---------- */
  function closeDrawer(){$('#drawer').classList.remove('open');$('#drawer').setAttribute('aria-hidden','true');$('#burger').setAttribute('aria-expanded','false')}
  $('#burger').addEventListener('click',function(){$('#drawer').classList.add('open');$('#drawer').setAttribute('aria-hidden','false');this.setAttribute('aria-expanded','true')});
  $('#drawerClose').addEventListener('click',closeDrawer);
  function past(){var p=!document.body.classList.contains('on-home')||window.scrollY>window.innerHeight*0.7; document.body.classList.toggle('past-hero',p); $('#nav').classList.toggle('solid',window.scrollY>30)}
  window.addEventListener('scroll',past,{passive:true}); window.addEventListener('hashchange',function(){setTimeout(past,0)}); setTimeout(past,0);
  $('#askFab').addEventListener('click',function(){var o=$('#askPanel').classList.toggle('open');this.setAttribute('aria-expanded',o)});
  document.addEventListener('click',function(e){if(!e.target.closest('#askPanel,#askFab'))$('#askPanel').classList.remove('open')});
  $('#lbClose').addEventListener('click',closeLb);
  $('#lbPrev').addEventListener('click',function(){stepLb(-1)});
  $('#lbNext').addEventListener('click',function(){stepLb(1)});
  $('#lb').addEventListener('click',function(e){if(e.target===this)closeLb()});
  document.addEventListener('keydown',function(e){
    if($('#lb').classList.contains('open')){if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')stepLb(-1);if(e.key==='ArrowRight')stepLb(1)}
    else if(e.key==='Escape'){closeDrawer();$('#askPanel').classList.remove('open')}
  });


  /* ---------- our work: category slideshow ---------- */
  (function(){
    var CATS = [["Bridal", ["bridal-01.jpg", "bridal-02.jpg", "bridal-03.jpg", "bridal-04.jpg", "bridal-05.jpg", "bridal-06.jpg", "bridal-07.jpg", "bridal-08.jpg", "bridal-09.jpg", "bridal-10.jpg"]], ["Party & festive", ["party-01.jpg", "party-02.jpg", "party-03.jpg", "party-04.jpg", "party-05.jpg", "party-06.jpg", "party-07.jpg", "party-08.jpg", "party-09.jpg", "party-10.jpg", "party-11.jpg"]], ["Hairstyles", ["hair-01.jpg", "hair-02.jpg", "hair-03.jpg", "hair-04.jpg", "hair-05.jpg", "hair-06.jpg", "hair-07.jpg", "hair-08.jpg", "hair-09.jpg", "hair-10.jpg", "hair-11.jpg"]], ["Colour & treatments", ["colour-01.jpg", "colour-02.jpg", "colour-03.jpg", "colour-04.jpg", "colour-05.jpg", "colour-06.jpg", "colour-07.jpg", "colour-08.jpg", "colour-09.jpg", "colour-10.jpg"]]];
    var ss=$('#ss'), tr=$('#ssTrack'), tabs=$('#ssTabs'), bar=$('#ssBar'), cnt=$('#ssCount'), play=$('#ssPlay');
    if(!ss) return;
    var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cat=0, i=0, timer=null, playing=!RM, opener=null, lock=false;
    CATS.forEach(function(c,k){ var b=el('button',null,c[0]); b.addEventListener('click',function(){load(k)}); tabs.appendChild(b); });
    if(RM){ play.style.display='none'; }
    function w(){ return tr.clientWidth||1 }
    function label(){ cnt.textContent=CATS[cat][0]+'  ·  '+(i+1)+' / '+CATS[cat][1].length }
    function load(k){
      cat=k; i=0; tr.innerHTML='';
      CATS[k][1].forEach(function(f,n){ var fg=el('figure'); var im=el('img'); setResponsiveImage(im,'images/work/'+f,'(min-width: 900px) 700px, 100vw'); im.alt=CATS[k][0]+', photo '+(n+1); if(n>1) im.loading='lazy'; fg.appendChild(im); tr.appendChild(fg); });
      Array.prototype.forEach.call(tabs.children,function(b,n){ b.classList.toggle('on',n===k); if(n===k&&b.scrollIntoView) b.scrollIntoView({block:'nearest',inline:'center'}); });
      tr.scrollLeft=0; label(); restart();
    }
    function go(n,user){
      var L=CATS[cat][1].length;
      if(n>=L){ if(user){ n=0 } else { load((cat+1)%CATS.length); return } }
      if(n<0) n=L-1;
      i=n; lock=true; tr.scrollTo({left:i*w(),behavior:RM?'auto':'smooth'}); setTimeout(function(){lock=false},500);
      label(); if(user) stop(); else restart();
    }
    function restart(){
      clearTimeout(timer); bar.classList.remove('run'); void bar.offsetWidth;
      if(!playing||!ss.classList.contains('open')) return;
      bar.classList.add('run'); timer=setTimeout(function(){ go(i+1,false) },4000);
    }
    function stop(){ playing=false; play.textContent='Play'; play.setAttribute('aria-label','Play slideshow'); clearTimeout(timer); bar.classList.remove('run'); }
    play.addEventListener('click',function(){ if(playing){stop()} else { playing=true; play.textContent='Pause'; play.setAttribute('aria-label','Pause slideshow'); restart(); } });
    tr.addEventListener('scroll',function(){ if(lock) return; var n=Math.round(tr.scrollLeft/w()); if(n!==i){ i=n; label(); } },{passive:true});
    ['touchstart','pointerdown','wheel'].forEach(function(ev){ tr.addEventListener(ev,function(){ if(playing) stop() },{passive:true}) });
    function open(k,btn){ opener=btn; playing=!RM; if(!RM){play.textContent='Pause'} ss.classList.add('open'); document.body.style.overflow='hidden'; load(k); $('#ssClose').focus(); }
    function close(){ ss.classList.remove('open'); clearTimeout(timer); document.body.style.overflow=''; if(opener) opener.focus(); }
    $$('.cat').forEach(function(b){ b.addEventListener('click',function(){ open(+b.getAttribute('data-cat'),b) }) });
    $('#ssClose').addEventListener('click',close);
    $('#ssPrev').addEventListener('click',function(){go(i-1,true)});
    $('#ssNext').addEventListener('click',function(){go(i+1,true)});
    window.addEventListener('resize',function(){ if(ss.classList.contains('open')) tr.scrollLeft=i*w() });
    document.addEventListener('keydown',function(e){
      if(!ss.classList.contains('open')) return;
      if(e.key==='Escape') close(); else if(e.key==='ArrowLeft') go(i-1,true); else if(e.key==='ArrowRight') go(i+1,true);
    });
  })();
  /* ---------- optional measurement ---------- */
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href]'); if(!a) return;
    var kind=a.href.indexOf('https://wa.me/')===0?'whatsapp_click':a.href.indexOf('tel:')===0?'call_click':null;
    if(!kind) return;
    measureEnquiry(kind,'link');
  });
  function measureEnquiry(kind,source){
    // Only fixed action labels are measured; never include form values or URLs.
    var detail={action:kind,page:document.body.dataset.page,source:source};
    window.dispatchEvent(new CustomEvent('salon-enquiry',{detail:detail}));
    if(typeof window.gtag==='function') window.gtag('event',kind,{page_type:detail.page,enquiry_source:source});
  }
  /* ---------- init ---------- */
  $('#yr').textContent=new Date().getFullYear();
  renderReviews(); renderCollage(); renderServices(); renderCourses(); renderGallery(); setupForm();
  wireWA(document); updateStatus(); setInterval(updateStatus,60000);
  window.addEventListener('hashchange',route); route();
})();
