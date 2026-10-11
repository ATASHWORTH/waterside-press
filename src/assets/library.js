// Waterside Press — client-side library search and filters over the published records.
(function () {
  var list = document.getElementById('book-list');
  if (!list) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll('.book-item'));
  var q = document.getElementById('lib-q');
  var cat = document.getElementById('lib-cat');
  var author = document.getElementById('lib-author');
  var period = document.getElementById('lib-period');
  var pdf = document.getElementById('lib-pdf');
  var trans = document.getElementById('lib-trans');
  var count = document.getElementById('results-count');
  var empty = document.getElementById('no-results');

  var params = new URLSearchParams(location.search);
  if (params.get('q')) q.value = params.get('q');
  if (params.get('category')) cat.value = params.get('category');

  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function apply() {
    var terms = norm(q.value).split(/\s+/).filter(Boolean);
    var shown = 0;
    cards.forEach(function (c) {
      var hay = norm(c.getAttribute('data-search'));
      var ok = terms.every(function (t) { return hay.indexOf(t) !== -1; });
      if (ok && cat.value) ok = (' ' + c.getAttribute('data-cats') + ' ').indexOf(' ' + cat.value + ' ') !== -1;
      if (ok && author.value) ok = c.getAttribute('data-author') === author.value;
      if (ok && period.value) ok = c.getAttribute('data-period') === period.value;
      if (ok && pdf.checked) ok = c.getAttribute('data-pdf') === 'yes';
      if (ok && trans.checked) ok = c.getAttribute('data-trans') === 'yes';
      c.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = shown + (shown === 1 ? ' work shown' : ' works shown') + ' of ' + cards.length + '.';
    empty.hidden = shown !== 0;
  }
  [q, cat, author, period, pdf, trans].forEach(function (el) {
    el.addEventListener('input', apply);
    el.addEventListener('change', apply);
  });
  document.getElementById('lib-form').addEventListener('submit', function (e) { e.preventDefault(); apply(); });
  document.getElementById('lib-reset').addEventListener('click', function () {
    q.value = ''; cat.value = ''; author.value = ''; period.value = ''; pdf.checked = false; trans.checked = false; apply(); q.focus();
  });
  apply();
})();
