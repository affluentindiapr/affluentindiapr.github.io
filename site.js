// Remember how this visitor first arrived (used only in enquiry emails)
(function(){
  try {
    if (sessionStorage.getItem('aipr_src')) return;
    var r = document.referrer || '', q = new URLSearchParams(location.search), src = '';
    var utm = q.get('utm_source');
    if (utm) src = utm + (q.get('utm_medium') ? ' / ' + q.get('utm_medium') : '');
    else if (!r) src = 'Direct (typed the address, a bookmark, or an app like WhatsApp)';
    else {
      var h = ''; try { h = new URL(r).hostname.replace(/^www\./, ''); } catch(e) { h = r; }
      if (h.indexOf('affluentindiapr') !== -1) return;
      if (/google\./.test(h)) src = 'Google search';
      else if (/instagram\.com/.test(h)) src = 'Instagram';
      else if (/linkedin\.com|lnkd\.in/.test(h)) src = 'LinkedIn';
      else if (/facebook\.com|fb\.me|m\.facebook/.test(h)) src = 'Facebook';
      else if (/bing\.com|duckduckgo|yahoo\./.test(h)) src = 'Other search engine (' + h + ')';
      else if (/whatsapp/.test(h)) src = 'WhatsApp';
      else if (/t\.co$|twitter\.com|x\.com/.test(h)) src = 'X / Twitter';
      else src = 'Another website: ' + h;
    }
    sessionStorage.setItem('aipr_src', src);
    sessionStorage.setItem('aipr_land', location.pathname.replace(/^\//, '') || 'home page');
  } catch(e) {}
})();
// Always open a new page at the top (unless a #section link was used)
(function(){
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch(e) {}
  function top(){ if (!location.hash) { document.documentElement.style.scrollBehavior='auto'; window.scrollTo(0,0); document.documentElement.style.scrollBehavior=''; } }
  top(); window.addEventListener('DOMContentLoaded', top); window.addEventListener('load', top);
  window.addEventListener('pageshow', function(e){ if (e.persisted) top(); });
})();
const PRESS = {
  anushka: { name: "Anushka Rathod", items: [
    ["anushka-1.jpg", "Forbes India: 30 Under 30 cover"],
    ["anushka-2.jpg", "Forbes 30 Under 30 Asia 2024"],
    ["anushka-3.jpg", "ELLE: ELLE Impact"],
    ["anushka-4.jpg", "Entrepreneur India: Best Financial Influencer, Influencers Awards 2024"],
    ["anushka-5.jpg", "Her Circle: #HerVoiceMatters, World Social Media Day"],
    ["anushka-6.jpg", "YourStory HerStory: Anushka Rathod on making personal finance simple, responsible and accessible"]
  ]},
  sharan: { name: "Sharan Hegde", items: [
    ["sharan-1.jpg", "Forbes India: Finfluencer turned entrepreneur shows how it's done"],
    ["sharan-2.jpg", "GQ: The GQ 35 Most Influential Young Indians"],
    ["sharan-3.jpg", "Femina: First South Asian finance creator to represent India at the film festival"],
    ["sharan-4.jpg", "ET Now: Gen Next show, first episode"],
    ["sharan-5.jpg", "Moneycontrol: Sharan Hegde reveals his biggest financial mistake"],
    ["sharan-6.jpg", "The 1% Club: Behind the scenes of Shark Tank India, 1.4M views"],
    ["sharan-7.jpg", "Social Ketchup: The Return on Influence, January 2024 cover"]
  ]},
  scribbld: { name: "Scribbld", items: [
    ["scribbld-1.jpg", "Forbes India 30 Under 30: Kajol Bheda, Founder, Scribbld"],
    ["scribbld-3.jpg", "Forbes India: the 30 Under 30 class"],
    ["scribbld-2.jpg", "FICCI Young Leaders: Women Who Lead panel with Kajol Bheda"]
  ]},
  neokred: { name: "Neokred", items: [
    ["forbes-rohith.jpg", "Forbes 30 Under 30 Asia 2025: Rohith Reji, Cofounder, Neokred"]
  ]},
  simran: { name: "Simran Balar Jain", items: [
    ["forbes-simran.jpg", "Forbes 30 Under 30 Asia 2024: Simran Jain, Cofounder, Balar Media"],
    ["simran-1.jpg", "Her Circle: #HerVoiceMatters"]
  ]},
  shivam: { name: "Shivam Budhiraja", items: [
    ["forbes-shivam.jpg", "Forbes 30 Under 30 Asia 2026: Shivam Budhiraja, Cofounder, Team Car Delight"]
  ]},
  dhvani: { name: "Dhvani Kothari", items: [
    ["dhvani-1.jpg", "ELLE India: Dhvani Kothari on taking India to dance on the world stage"],
    ["dhvani-2.jpg", "Her Circle Bizruptor: Dhvani Kothari, Founder, National Ballet School of India"]
  ]},
  sarah: { name: "Sarah Sarosh", items: [
    ["sarah-2.jpg", "ELLE Beauty India: #ELLEExclusive Instagram collaboration with Sarah Sarosh"],
    ["sarah-1.jpg", "Social Ketchup: Sarah Sarosh on her Cannes debut"],
    ["sarah-4.jpg", "Entrepreneur India: The Beauty Innovator, Sarah Sarosh, Founder and CEO of Impulse Coffees"],
    ["sarah-3.jpg", "ET Now Swadesh: Sarah Sarosh on a live panel"]
  ]},
  tanya: { name: "Tanya Mehra", items: [
    ["tanya-1.jpg", "HerZindagi: Rising From The Ruins, May 2025 cover"]
  ]},
  myfandom: { name: "MyFandom", items: [
    ["myfandom-1.jpg", "Fortune India: India's fandom economy set to hit $10 billion by 2028"]
  ]},
  sonika: { name: "Sonika Khurana", items: [
    ["sonika-1.jpg", "Women Fitness India: How Sonika Khurana turned design into a digital movement"]
  ]},
  kiara: { name: "Kiara", items: [
    ["kiara-1.jpg", "HerZindagi: DJ Kiara is breaking stereotypes with her perseverance and passion"]
  ]},
  alfiya: { name: "Alfiya Karim Khan", items: [
    ["alfiya-1.jpg", "Femina: Instagram collaboration with Alfiya Karim Khan"]
  ]},
  gopali: { name: "Gopali Tiwari", items: [
    ["gopali-1.jpg", "The Times of India: Gopali Tiwari on finding your individuality, an exclusive interview"]
  ]},
  runfrenzy: { name: "Run Frenzy", items: [
    ["runfrenzy-1.jpg", "SheThePeople: Starting young, dreaming big, the founders pioneering in production"],
    ["runfrenzy-2.jpg", "Mid-day: The Mad Women of OTT"],
    ["runfrenzy-3.jpg", "BestMediaInfo: BookMyShow makes holiday leave requests and New Year plans entertaining"],
    ["runfrenzy-5.jpg", "CNN-News18: Run Frenzy, the production house behind hits like Koffee With Karan"],
    ["runfrenzy-6.jpg", "Blog: BookMyShow and Run Frenzy's festive campaign"]
  ]}
};
(function () {
  const v = document.getElementById('viewer'), gal = document.getElementById('v-gallery'),
    body = document.getElementById('v-body'), title = document.getElementById('v-title'),
    count = document.getElementById('v-count'), zoom = document.getElementById('zoom'),
    zimg = document.getElementById('z-img'), zcap = document.getElementById('z-cap'),
    zprev = document.getElementById('z-prev'), znext = document.getElementById('z-next');
  let opener = null, zOpener = null, zList = [], zi = 0;
  function split(c) { const k = c.indexOf(': '); return k > 0 ? [c.slice(0, k), c.slice(k + 2)] : ['', c]; }

  // Marquee: duplicate each list once for a seamless loop
  document.querySelectorAll('.track').forEach(t => {
    const l = t.querySelector('.m-list'), c = l.cloneNode(true);
    c.setAttribute('aria-hidden', 'true');
    c.querySelectorAll('button').forEach(b => b.tabIndex = -1);
    t.appendChild(c);
  });
  // Rows drift slowly on their own, and people can swipe or drag them
  const SPEED = 32; // pixels per second
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.marquee').forEach(m => {
    const track = m.querySelector('.track'), dir = m.classList.contains('reverse') ? -1 : 1;
    let pos = 0, hover = false, held = false, resumeAt = 0, last = 0;
    const half = () => track.scrollWidth / 2;
    function wrap() {
      const h = half(); if (h <= 0) return;
      if (m.scrollLeft >= h) m.scrollLeft -= h;
      else if (m.scrollLeft <= 0) m.scrollLeft += h;
    }
    function rest(ms) { resumeAt = performance.now() + ms; }
    // start the reversed row in the middle so it can move right straight away
    requestAnimationFrame(() => { if (dir < 0) m.scrollLeft = half() - 1; pos = m.scrollLeft; });
    m.addEventListener('mouseenter', () => { hover = true; });
    m.addEventListener('mouseleave', () => { hover = false; });
    m.addEventListener('touchstart', () => { held = true; }, { passive: true });
    m.addEventListener('touchend', () => { held = false; pos = m.scrollLeft; rest(2500); }, { passive: true });
    m.addEventListener('wheel', () => rest(2500), { passive: true });
    m.addEventListener('scroll', () => { wrap(); if (Math.abs(m.scrollLeft - pos) > 2) pos = m.scrollLeft; }, { passive: true });
    m.addEventListener('dragstart', e => e.preventDefault());
    // mouse drag on laptops
    let dx = null, sl = 0, moved = false;
    m.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      dx = e.clientX; sl = m.scrollLeft; moved = false; held = true; m.classList.add('dragging');
    });
    window.addEventListener('pointermove', e => {
      if (dx === null) return;
      const d = e.clientX - dx; if (Math.abs(d) > 3) moved = true;
      m.scrollLeft = sl - d;
    });
    const endDrag = () => {
      if (dx === null) return;
      dx = null; held = false; m.classList.remove('dragging'); pos = m.scrollLeft; rest(2500);
    };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    m.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    function tick(t) {
      const dt = last ? Math.min(0.05, (t - last) / 1000) : 0; last = t;
      if (!still && !hover && !held && t > resumeAt && half() > 0) {
        pos += dir * SPEED * dt;
        const h = half();
        if (pos >= h) pos -= h; else if (pos <= 0) pos += h;
        m.scrollLeft = pos;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  // Zoom with prev/next over a list of [src, caption, who]
  function zShow(n) {
    zi = Math.max(0, Math.min(n, zList.length - 1));
    const [src, c, who] = zList[zi];
    zimg.src = src; zimg.alt = c;
    zcap.textContent = (who ? who + ' · ' : '') + c.replace(': ', ', ');
    zprev.disabled = zi === 0; znext.disabled = zi === zList.length - 1;
  }
  function zOpen(list, n, from) {
    zList = list; zOpener = from; zShow(n);
    zoom.classList.add('open'); document.body.style.overflow = 'hidden';
    document.getElementById('z-close').focus();
  }
  window.__zOpen = zOpen;
  function closeZoom() {
    zoom.classList.remove('open');
    if (!v.classList.contains('open')) document.body.style.overflow = '';
    if (zOpener) zOpener.focus();
  }

  // Per-client gallery
  function open(key, btn) {
    const cur = PRESS[key]; if (!cur) return; opener = btn;
    title.textContent = cur.name;
    count.textContent = cur.items.length + (cur.items.length === 1 ? ' story' : ' stories');
    gal.innerHTML = '';
    const list = cur.items.map(([src, c]) => [src, c, cur.name]);
    cur.items.forEach(([src, c], k) => {
      const [pub, head] = split(c);
      const f = document.createElement('figure');
      const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Enlarge: ' + c);
      const im = document.createElement('img'); im.src = src; im.alt = c; im.loading = 'lazy';
      b.appendChild(im); b.addEventListener('click', () => zOpen(list, k, b));
      const cap = document.createElement('figcaption');
      if (pub) { const p = document.createElement('b'); p.textContent = pub; cap.appendChild(p); }
      cap.appendChild(document.createTextNode(head));
      f.appendChild(b); f.appendChild(cap); gal.appendChild(f);
    });
    body.scrollTop = 0;
    v.classList.add('open'); document.body.style.overflow = 'hidden';
    document.getElementById('v-close').focus();
  }
  function close() { v.classList.remove('open'); document.body.style.overflow = ''; if (opener) opener.focus(); }
  document.addEventListener('click', e => { const b = e.target.closest('.press-btn'); if (b) open(b.dataset.press, b); });
  document.getElementById('v-close').addEventListener('click', close);

  const POS = {
    'sarah-3.jpg': 'center center', 'runfrenzy-2.jpg': 'center top', 'scribbld-3.jpg': 'center center',
    'runfrenzy-5.jpg': 'center top', 'sharan-4.jpg': 'center top', 'myfandom-1.jpg': 'left top'
  };
  if (document.getElementById('ps')) {
  // "In the press" slideshow: chosen order first, then the rest mixed across clients
  const TOP = [['anushka',0],['sharan',1],['anushka',1],['anushka',5],['scribbld',0],['dhvani',0],['sarah',0],['shivam',0],['sarah',2],['scribbld',1],['sharan',6],['simran',1],['sarah',1],['tanya',0],['anushka',4],['sharan',0],['neokred',0],['simran',0],['runfrenzy',0]];
  const all = [], used = new Set();
  TOP.forEach(([k, i]) => { const it = PRESS[k] && PRESS[k].items[i]; if (it) { all.push([it[0], it[1], PRESS[k].name]); used.add(it[0]); } });
  const keys = Object.keys(PRESS), maxLen = Math.max(...keys.map(k => PRESS[k].items.length));
  for (let r = 0; r < maxLen; r++) keys.forEach(k => { const it = PRESS[k].items[r]; if (it && !used.has(it[0])) all.push([it[0], it[1], PRESS[k].name]); });
  const ps = document.getElementById('ps');
  if (ps.dataset.style === 'a') {
    // Option A: one large frame, filled edge to edge, with a caption strip
    ps.innerHTML = '<div class="pa-stage"><button type="button" class="pc-nav prev" aria-label="Previous story">←</button><button type="button" class="pa-frame" aria-label="Open this story full screen"><img alt=""><span class="pa-cap"><span class="pa-who"></span><span class="pa-pub"></span><span class="pa-head"></span></span></button><button type="button" class="pc-nav next" aria-label="Next story">→</button></div><div class="pa-dots" aria-hidden="true"></div>';
    const frame = ps.querySelector('.pa-frame'), img = frame.querySelector('img'), dots = ps.querySelector('.pa-dots');
    let i = 0, timer = null, hover = false;
    all.forEach(() => dots.appendChild(document.createElement('span')));
    function go(n) {
      i = (n + all.length) % all.length;
      const [src, c, who] = all[i]; let [pub, head] = split(c); if (!pub) { pub = head; head = ''; }
      img.classList.add('fade');
      setTimeout(() => { img.src = src; img.alt = c; img.style.objectPosition = POS[src] || 'center top'; img.classList.remove('fade'); }, 180);
      frame.querySelector('.pa-who').textContent = who; frame.querySelector('.pa-pub').textContent = pub; frame.querySelector('.pa-head').textContent = head;
      [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
    }
    function restart() { clearInterval(timer); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => { if (!hover && !zoom.classList.contains('open')) go(i + 1); }, 4500); }
    ps.querySelector('.prev').addEventListener('click', () => { go(i - 1); restart(); });
    ps.querySelector('.next').addEventListener('click', () => { go(i + 1); restart(); });
    frame.addEventListener('click', () => zOpen(all, i, frame));
    ps.addEventListener('mouseenter', () => hover = true); ps.addEventListener('mouseleave', () => hover = false);
    let sx = null;
    frame.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    frame.addEventListener('touchend', e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); restart(); } sx = null; });
    img.src = all[0][0]; go(0); restart();
  } else {
  // Equal cards in a swipeable row
  ps.innerHTML = '<button type="button" class="pc-nav prev" aria-label="Previous stories">←</button><div class="pc-track" tabindex="0" aria-label="Press coverage, scroll sideways"></div><button type="button" class="pc-nav next" aria-label="More stories">→</button>';
  const track = ps.querySelector('.pc-track');
  all.forEach(([src, c, who], k) => {
    let [pub, head] = split(c); if (!pub) { pub = head; head = ''; }
    const b = document.createElement('button'); b.type = 'button'; b.className = 'pc-card'; b.setAttribute('aria-label', who + ': ' + c);
    b.innerHTML = '<span class="pc-img"><img alt="" loading="lazy"></span><span class="pc-who"></span><span class="pc-pub"></span><span class="pc-head"></span>';
    const im = b.querySelector('img'); im.src = src; im.alt = c;
    if (POS[src]) im.style.objectPosition = POS[src];
    b.querySelector('.pc-who').textContent = who;
    b.querySelector('.pc-pub').textContent = pub;
    b.querySelector('.pc-head').textContent = head;
    b.addEventListener('click', () => zOpen(all, k, b));
    track.appendChild(b);
  });
  const step = () => (track.querySelector('.pc-card')?.offsetWidth || 260) + 20;
  ps.querySelector('.prev').addEventListener('click', () => track.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
  ps.querySelector('.next').addEventListener('click', () => track.scrollBy({ left: step() * 2, behavior: 'smooth' }));
  function edges() {
    ps.querySelector('.prev').disabled = track.scrollLeft < 8;
    ps.querySelector('.next').disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
  }
  track.addEventListener('scroll', edges, { passive: true }); window.addEventListener('resize', edges); edges();
  }

  }
  document.getElementById('z-close').addEventListener('click', e => { e.stopPropagation(); closeZoom(); });
  zprev.addEventListener('click', e => { e.stopPropagation(); zShow(zi - 1); });
  znext.addEventListener('click', e => { e.stopPropagation(); zShow(zi + 1); });
  zoom.addEventListener('click', e => { if (e.target === zoom || e.target.classList.contains('z-fig')) closeZoom(); });
  let x0 = null;
  zoom.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  zoom.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) zShow(zi + (dx < 0 ? 1 : -1)); x0 = null; });
  document.addEventListener('keydown', e => {
    if (zoom.classList.contains('open')) {
      if (e.key === 'Escape') closeZoom(); else if (e.key === 'ArrowLeft') zShow(zi - 1); else if (e.key === 'ArrowRight') zShow(zi + 1);
    } else if (e.key === 'Escape' && v.classList.contains('open')) close();
  });
})();
// Industries: tap to flip; until someone taps, tiles flip one by one on their own
(function () {
  const tiles = [...document.querySelectorAll('.ind')];
  if (!tiles.length) return;
  let auto = !matchMedia('(prefers-reduced-motion: reduce)').matches, k = 0, timer = null;
  function toggle(t) {
    auto = false; clearInterval(timer);
    const on = t.getAttribute('aria-expanded') === 'true';
    t.setAttribute('aria-expanded', on ? 'false' : 'true');
    const link = t.querySelector('a'); if (link) link.tabIndex = on ? -1 : 0;
  }
  tiles.forEach(t => {
    t.addEventListener('click', e => { if (e.target.closest('a')) return; toggle(t); });
    if (t.tagName !== 'BUTTON') t.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) { e.preventDefault(); toggle(t); }
    });
  });
  function step() {
    if (!auto) return;
    tiles.forEach(t => t.setAttribute('aria-expanded', 'false'));
    tiles[k % tiles.length].setAttribute('aria-expanded', 'true'); k++;
  }
  const sec = document.getElementById('industries');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(e => {
      clearInterval(timer);
      if (e.isIntersecting && auto) { step(); timer = setInterval(step, 2600); }
    }), { threshold: 0.35 }).observe(sec);
  }
})();
// Milestone photo slideshows
(function () {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.ms-slides').forEach(box => {
    const imgs = [...box.querySelectorAll('img')];
    let k = 0;
    if (!still && imgs.length > 1) setInterval(() => {
      imgs[k].classList.remove('on'); k = (k + 1) % imgs.length; imgs[k].classList.add('on');
    }, 3200);
    box.addEventListener('click', () => {
      const list = imgs.map(i => [i.getAttribute('src'), i.dataset.cap, i.dataset.who]);
      if (window.__zOpen) window.__zOpen(list, k, box);
    });
  });
})();
// Enquiry form: steps, then a ready-to-send WhatsApp or email message
(function () {
  const f = document.getElementById('enq'); if (!f) return;
  const panes = [...f.querySelectorAll('.enq-pane')], next = document.getElementById('enq-next'), back = document.getElementById('enq-back'),
    err = document.getElementById('enq-err'), stepL = document.getElementById('enq-step'), fill = document.getElementById('enq-fill');
  let step = 1;
  const otherText = n => { const el = document.getElementById(n + '-other'); return el ? el.value.trim() : ''; };
  const val = n => [...f.querySelectorAll('input[name="' + n + '"]:checked')].map(i => i.value === 'Something else' && otherText(n) ? otherText(n) : i.value);
  const picked = (n, v) => !!f.querySelector('input[name="' + n + '"][value="' + v + '"]:checked');
  f.querySelectorAll('input[data-other]').forEach(box => {
    const n = box.name, wrap = document.getElementById(n + '-other-wrap');
    f.querySelectorAll('input[name="' + n + '"]').forEach(i => i.addEventListener('change', () => {
      const on = picked(n, 'Something else'); wrap.hidden = !on;
      if (on && i === box) document.getElementById(n + '-other').focus();
    }));
  });
  const needOther = n => picked(n, 'Something else') && !otherText(n);
  function show(n) {
    step = n;
    panes.forEach(p => p.hidden = +p.dataset.step !== n);
    stepL.textContent = n <= 4 ? 'Step ' + n + ' of 4' : 'Ready to send';
    fill.style.width = Math.min(n, 4) * 25 + '%';
    back.hidden = n === 1;
    next.hidden = n === 5;
    next.textContent = n === 4 ? 'See my message' : 'Next';
    err.textContent = '';
    const first = panes[n - 1].querySelector('input, select, textarea, a'); if (first && n > 1) first.focus({ preventScroll: true });
  }
  function build() {
    const name = document.getElementById('enq-name').value.trim(), contact = (document.getElementById('enq-contact') || {value: ''}).value.trim(), brand = document.getElementById('enq-brand').value.trim(),
      when = document.getElementById('enq-when').value, note = document.getElementById('enq-note').value.trim();
    let m = "Hi Affluent India PR, I'd like to know more about working with you.\n\n";
    m += 'Name: ' + name + '\n';
    if (contact) m += 'Contact: ' + contact + '\n';
    if (brand) m += 'Brand / handle: ' + brand + '\n';
    m += 'I am: ' + val('who').join(', ') + '\n';
    m += 'Main goal: ' + val('goal').join(', ') + '\n';
    m += 'Interested in: ' + val('want').join(', ') + '\n';
    if (when) m += 'Timeline: ' + when + '\n';
    if (note) m += '\n' + note + '\n';
    return m;
  }
  next.addEventListener('click', () => {
    if (step === 1 && !val('who').length) { err.textContent = 'Please choose the option that fits you best.'; return; }
    const grp = ['who', 'goal', 'want'][step - 1];
    if (grp && needOther(grp)) { err.textContent = 'Please tell us a little more in the box.'; document.getElementById(grp + '-other').focus(); return; }
    if (step === 2 && !val('goal').length) { err.textContent = 'Please choose your main goal.'; return; }
    if (step === 3 && !val('want').length) { err.textContent = 'Please choose at least one option.'; return; }
    if (step === 4 && !document.getElementById('enq-name').value.trim()) { err.textContent = 'Please add your name so we know who to reply to.'; document.getElementById('enq-name').focus(); return; }
    if (step === 4) { const c = document.getElementById('enq-contact'); const v = c ? c.value.trim() : 'x'; if (!(/^\S+@\S+\.\S+$/.test(v) || v.replace(/\D/g, '').length >= 10)) { err.textContent = 'Please add a valid email or WhatsApp number so we can reply.'; c.focus(); return; } }
    if (step === 4) {
      const m = build();
      document.getElementById('enq-msg').textContent = m;
      document.getElementById('enq-wa').href = 'https://wa.me/919890866324?text=' + encodeURIComponent(m);
      try {
        const fd = new URLSearchParams(new FormData(f));
        fd.set('who', val('who').join(', ')); fd.set('goal', val('goal').join(', ')); fd.set('want', val('want').join(', ')); fd.set('summary', m);
        fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: fd.toString() }).catch(() => {});
        const data = Object.fromEntries(fd.entries()); delete data['form-name']; delete data['company-website'];
        if (!(new FormData(f).get('company-website'))) {
          data._subject = 'New website enquiry from ' + document.getElementById('enq-name').value.trim();
          data._template = 'table'; data._captcha = 'false';
          try { data.came_from = sessionStorage.getItem('aipr_src') || 'Unknown'; data.first_page = sessionStorage.getItem('aipr_land') || ''; } catch(e) { data.came_from = 'Unknown'; }
          if (/^\S+@\S+\.\S+$/.test(data.contact || '')) data._replyto = data.contact;
          try { if (window.gtag) gtag('event', 'generate_lead', { form: 'enquiry', came_from: data.came_from }); } catch(e) {}
          fetch('https://formsubmit.co/ajax/bhavika@affluentindiapr.com', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) }).catch(() => {});
        }
      } catch (e) {}
      document.getElementById('enq-mail').href = 'mailto:bhavika@affluentindiapr.com?subject=' + encodeURIComponent('PR enquiry from ' + document.getElementById('enq-name').value.trim()) + '&body=' + encodeURIComponent(m);
    }
    show(step + 1);
  });
  back.addEventListener('click', () => show(step - 1));
  f.addEventListener('submit', e => e.preventDefault());
  f.querySelectorAll('input[type="radio"]').forEach(r => r.addEventListener('change', () => { err.textContent = ''; }));
  document.getElementById('enq-copy').addEventListener('click', async function () {
    try { await navigator.clipboard.writeText(document.getElementById('enq-msg').textContent); this.textContent = 'Copied'; }
    catch (e) { this.textContent = 'Select the text above to copy'; }
    setTimeout(() => { this.textContent = 'Copy message'; }, 2500);
  });
})();
// Menu (three lines)
(function () {
  const btn = document.getElementById('menu-btn'), menu = document.getElementById('menu');
  function set(open) { menu.hidden = !open; btn.setAttribute('aria-expanded', open); btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }
  btn.addEventListener('click', () => set(menu.hidden));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { set(false); btn.focus(); } });
  document.addEventListener('click', e => { if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) set(false); });
})();
const copyEmail = document.getElementById('copy-email');
if (copyEmail) copyEmail.addEventListener('click', async function () {
  const btn = this;
  try {
    await navigator.clipboard.writeText(btn.dataset.copy);
    btn.textContent = 'Copied';
  } catch (e) {
    btn.textContent = btn.dataset.copy;
  }
  setTimeout(() => { btn.textContent = 'Copy email'; }, 2200);
});

// Home: headline cards open in the full-screen viewer
(function () {
  const cards = [...document.querySelectorAll('.hl-card')];
  if (!cards.length || !window.__zOpen) return;
  const list = cards.map(c => [c.dataset.src, c.dataset.cap, c.dataset.who]);
  cards.forEach((c, k) => c.addEventListener('click', () => window.__zOpen(list, k, c)));
})();
