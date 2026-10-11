// Waterside Press — Daily Liturgy behaviour.
// Timezone policy: "today" is the visitor's own device date (local time), so a family
// sees the observance for the day it actually is where they live. Without JavaScript,
// all seven days are shown in order.
(function () {
  var root = document.getElementById('liturgy');
  if (!root) return;
  var days = Array.prototype.slice.call(root.querySelectorAll('.day'));
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.day-tabs [role="tab"]'));
  var todayLine = document.getElementById('today-line');
  var simpleBtn = document.getElementById('simple-toggle');
  var office = document.getElementById('office');

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  var now = new Date();
  var todayIdx = now.getDay(); // 0 = Sunday
  var fmt;
  try {
    fmt = new Intl.DateTimeFormat(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    todayLine.textContent = 'Today is ' + fmt.format(now) + ' (your device’s local date).';
  } catch (e) { todayLine.textContent = ''; }

  function show(idx, focusTab) {
    days.forEach(function (d, i) { d.hidden = i !== idx; });
    tabs.forEach(function (t, i) {
      t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
      t.tabIndex = i === idx ? 0 : -1;
    });
    if (focusTab) tabs[idx].focus();
    var label = days[idx].getAttribute('data-name');
    document.getElementById('showing').textContent = idx === todayIdx ? 'Showing today’s order (' + label + ').' : 'Showing ' + label + '’s order — not today’s.';
  }

  // Allow ?day=monday links; otherwise today.
  var start = todayIdx;
  var m = /[?&]day=([a-z]+)/.exec(location.search);
  if (m) days.forEach(function (d, i) { if (d.id === m[1]) start = i; });

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(i); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') n = (i + tabs.length - 1) % tabs.length;
      if (e.key === 'Home') n = 0;
      if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); show(n, true); }
    });
  });
  tabs[todayIdx].querySelector('.today-dot').textContent = 'today';
  document.querySelector('.day-tabs').hidden = false;
  document.querySelector('.lit-bar').hidden = false;
  show(start);

  // Simplified mode
  function setSimple(on) {
    office.classList.toggle('simple', on);
    simpleBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    store('wp-simple', on ? '1' : '0');
  }
  simpleBtn.addEventListener('click', function () { setSimple(simpleBtn.getAttribute('aria-pressed') !== 'true'); });
  setSimple(load('wp-simple') === '1');

  // Text size
  var scale = parseFloat(load('wp-scale')) || 1;
  function setScale(s) {
    scale = Math.min(1.6, Math.max(0.85, Math.round(s * 100) / 100));
    document.documentElement.style.setProperty('--reading-scale', scale);
    document.getElementById('size-label').textContent = Math.round(scale * 100) + '%';
    store('wp-scale', String(scale));
  }
  document.getElementById('size-down').addEventListener('click', function () { setScale(scale - 0.1); });
  document.getElementById('size-up').addEventListener('click', function () { setScale(scale + 0.1); });
  setScale(scale);

  // Print and copy
  document.getElementById('print-btn').addEventListener('click', function () { window.print(); });
  var status = document.getElementById('copy-status');
  document.getElementById('copy-btn').addEventListener('click', function () {
    var day = days.filter(function (d) { return !d.hidden; })[0];
    var clone = day.cloneNode(true);
    if (office.classList.contains('simple')) clone.querySelectorAll('.full-only').forEach(function (n) { n.remove(); });
    clone.querySelectorAll('summary, .no-copy').forEach(function (n) { n.remove(); });
    clone.querySelectorAll('sup').forEach(function (n) { n.textContent = n.textContent + ' '; });
    clone.hidden = false;
    clone.style.cssText = 'position:absolute;left:-9999px;top:0;width:40rem;white-space:normal';
    document.body.appendChild(clone); // innerText needs layout to keep line breaks
    var body = clone.innerText;
    document.body.removeChild(clone);
    var text = 'Waterside Press — Daily Liturgy\n\n' + body.replace(/\n{3,}/g, '\n\n').trim() +
      '\n\n' + document.getElementById('esv-notice').innerText;
    function done(ok) { status.textContent = ok ? 'Order of service copied.' : 'Copy failed — use Print instead.'; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallback(text)); });
    } else { done(fallback(text)); }
  });
  function fallback(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta); return ok;
  }
})();
