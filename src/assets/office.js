// Waterside Press — Daily Office behaviour.
// Date policy: the visitor's device-local date. The psalms follow the 1662 day-of-month
// psalter; the lessons follow the Waterside continuous-reading plan counted from
// PLAN.epoch. Without JavaScript the page shows both forms and the full psalter table.
(function () {
  var root = document.getElementById('office-root');
  if (!root) return;
  var PLAN = JSON.parse(document.getElementById('office-plan').textContent);

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  var today = new Date();
  var current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  var m = /[?&]date=(\d{4})-(\d{2})-(\d{2})/.exec(location.search);
  if (m) current = new Date(+m[1], +m[2] - 1, +m[3]);

  function dayIndex(d) {
    var e = PLAN.epoch.split('-');
    return Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(+e[0], +e[1] - 1, +e[2])) / 86400000);
  }
  function chapterAt(books, n) {
    var total = books.reduce(function (a, b) { return a + b[1]; }, 0);
    n = ((n % total) + total) % total;
    for (var i = 0; i < books.length; i++) {
      if (n < books[i][1]) return books[i][0] + ' ' + (n + 1);
      n -= books[i][1];
    }
  }
  function esv(ref) { return 'https://www.esv.org/' + ref.replace(/\s+/g, '+') + '/'; }
  function link(ref, label) {
    var a = document.createElement('a');
    a.href = esv(ref); a.textContent = label || ref; a.rel = 'noopener';
    return a;
  }

  var fmt;
  try { fmt = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }); } catch (e) { fmt = null; }

  function render() {
    var isSunday = current.getDay() === 0;
    var dom = current.getDate();
    var day = Math.min(dom, 30); // 1662 rubric: on the 31st the psalms of the 30th day are read again
    var idx = dayIndex(current);
    var isToday = current.toDateString() === new Date().toDateString();

    document.getElementById('office-date').textContent =
      (fmt ? fmt.format(current) : current.toDateString()) + (isToday ? ' · today' : '');
    document.getElementById('back-today').hidden = isToday;
    root.classList.toggle('is-sunday', isSunday);
    root.classList.toggle('is-weekday', !isSunday);
    document.querySelectorAll('[data-sunday-note]').forEach(function (n) { n.hidden = !isSunday; });

    ['morning', 'evening'].forEach(function (o, oi) {
      var ps = PLAN.psalter[day - 1][oi];
      var box = document.getElementById(o + '-psalms');
      box.textContent = '';
      ps.forEach(function (p, i) {
        if (i) box.appendChild(document.createTextNode(', '));
        box.appendChild(link('Psalm ' + p, 'Psalm ' + p));
      });
      document.getElementById(o + '-psalter-day').textContent =
        'Day ' + day + ' of the psalter, ' + (o === 'morning' ? 'morning' : 'evening') + (dom === 31 ? ' (the 30th day repeated, as the 1662 rubric directs)' : '');
      var lesson = o === 'morning' ? chapterAt(PLAN.ot, idx) : chapterAt(PLAN.nt, idx);
      var lbox = document.getElementById(o + '-lesson');
      lbox.textContent = '';
      lbox.appendChild(link(lesson, lesson));
    });
    var q = '?date=' + current.getFullYear() + '-' + String(current.getMonth() + 1).padStart(2, '0') + '-' + String(current.getDate()).padStart(2, '0');
    if (!isToday) history.replaceState(null, '', location.pathname + q); else history.replaceState(null, '', location.pathname);
  }

  function shift(n) { current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + n); render(); }
  document.getElementById('prev-day').addEventListener('click', function () { shift(-1); });
  document.getElementById('next-day').addEventListener('click', function () { shift(1); });
  document.getElementById('back-today').addEventListener('click', function () { var t = new Date(); current = new Date(t.getFullYear(), t.getMonth(), t.getDate()); render(); });

  // Morning / Evening tabs: default by the hour (before 3 p.m. → Morning).
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.office-tabs [role="tab"]'));
  var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
  function select(i, focus) {
    tabs.forEach(function (t, j) { t.setAttribute('aria-selected', i === j ? 'true' : 'false'); t.tabIndex = i === j ? 0 : -1; panels[j].hidden = i !== j; });
    if (focus) tabs[i].focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); select(1 - i, true); }
    });
  });
  var hash = location.hash.replace('#', '');
  select(hash === 'evening' ? 1 : hash === 'morning' ? 0 : (today.getHours() < 15 ? 0 : 1));

  // Shorter form
  var shortBtn = document.getElementById('short-toggle');
  function setShort(on) { root.classList.toggle('short', on); shortBtn.setAttribute('aria-pressed', on ? 'true' : 'false'); store('wp-short', on ? '1' : '0'); }
  shortBtn.addEventListener('click', function () { setShort(shortBtn.getAttribute('aria-pressed') !== 'true'); });
  setShort(load('wp-short') === '1');

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

  document.getElementById('print-btn').addEventListener('click', function () { window.print(); });
  var status = document.getElementById('copy-status');
  document.getElementById('copy-btn').addEventListener('click', function () {
    var panel = panels.filter(function (p) { return !p.hidden; })[0];
    var clone = panel.cloneNode(true);
    clone.querySelectorAll('summary, .no-copy, [hidden]').forEach(function (n) { n.remove(); });
    var drop = root.classList.contains('is-sunday') ? '.weekday-only' : '.sunday-only';
    clone.querySelectorAll(drop).forEach(function (n) { n.remove(); });
    if (root.classList.contains('short')) clone.querySelectorAll('.full-only').forEach(function (n) { n.remove(); });
    clone.style.cssText = 'position:absolute;left:-9999px;top:0;width:40rem';
    document.body.appendChild(clone);
    var text = 'Waterside Press — ' + document.getElementById('office-date').textContent + '\n\n' + clone.innerText.replace(/\n{3,}/g, '\n\n').trim() + '\n\n' + document.getElementById('esv-notice').innerText;
    document.body.removeChild(clone);
    function done(ok) { status.textContent = ok ? 'Order copied.' : 'Copy failed. Use Print instead.'; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    else done(false);
  });

  document.querySelectorAll('.js-only').forEach(function (n) { n.hidden = false; });
  document.querySelectorAll('.nojs-only').forEach(function (n) { n.hidden = true; });
  render();
})();
