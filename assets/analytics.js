(function () {
  'use strict';
  var id = 'G-6P8TX5MR6T', key = 'priya-beauty-analytics-choice', loaded = false;
  function saved() { try { return localStorage.getItem(key); } catch (_) { return null; } }
  var panel = document.createElement('section');
  panel.id = 'analytics-choice';
  panel.setAttribute('aria-label', 'Optional website analytics');
  panel.style.cssText = 'position:fixed;left:16px;bottom:80px;width:calc(100% - 32px);max-width:390px;padding:20px;background:var(--ink2);color:var(--txt);border:1px solid var(--line2);border-radius:20px;z-index:1000;box-shadow:0 12px 40px #0008;font-size:13px;line-height:21px';
  panel.innerHTML = '<b>Optional website analytics</b><p style="margin:8px 0 14px">Allow Google Analytics to measure visits and Call/WhatsApp button clicks? Booking names, phone numbers and notes are excluded. You can change this choice in the footer.</p><div style="display:flex;gap:12px"><button type="button" class="btn btn-pink" data-choice="allow">Allow analytics</button><button type="button" class="btn btn-ghost" data-choice="decline">Decline</button></div><a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style="display:inline-block;margin-top:10px;text-decoration:underline">Google privacy policy</a>';
  document.body.appendChild(panel);
  function show() { panel.hidden = false; }
  function start() {
    window['ga-disable-' + id] = false;
    if (loaded) { window.gtag('consent','update',{analytics_storage:'granted'}); return; }
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('js', new Date());
    window.gtag('config', id, {
      page_location: location.origin + location.pathname,
      page_referrer: '',
      page_title: document.title,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_path: '/priyabeauty/'
    });
    var tag = document.createElement('script');
    tag.async = true; tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    tag.setAttribute('data-salon-analytics', 'true');
    tag.onload = function () { tag.setAttribute('data-ready', 'true'); };
    document.head.appendChild(tag);
  }
  function choose(value) {
    try { localStorage.setItem(key, value); } catch (_) {}
    panel.hidden = true;
    if (value === 'allow') start();
    else {
      window['ga-disable-' + id] = true;
      if (window.gtag) window.gtag('consent','update',{analytics_storage:'denied'});
      document.cookie.split(';').forEach(function (c) {
        var name = c.split('=')[0].trim();
        if (name === '_ga' || name.indexOf('_ga_') === 0)
          document.cookie = name + '=; Max-Age=0; path=/priyabeauty/; SameSite=Lax';
      });
    }
  }
  panel.querySelectorAll('button[data-choice]').forEach(function (b) {
    b.addEventListener('click', function () { choose(b.getAttribute('data-choice')); });
  });
  var footer = document.querySelector('footer .footer-links') || document.querySelector('footer');
  if (footer) {
    var link = document.createElement('a'); link.href = '#analytics-choice';
    link.textContent = 'Privacy & analytics';
    link.style.cssText = 'display:inline-block;margin:12px 20px;font-size:12px;color:var(--txt2)';
    link.addEventListener('click', function (e) { e.preventDefault(); show(); panel.querySelector('button').focus(); });
    footer.appendChild(link);
  }
  if (saved() === 'allow') { panel.hidden = true; start(); }
  else if (saved() === 'decline') panel.hidden = true;
})();
