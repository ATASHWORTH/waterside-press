// Waterside Press — shared behaviour (navigation). No tracking, no cookies.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }
  // Open collapsed notes when printing so nothing is lost on paper.
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('details.note').forEach(function (d) { d.dataset.wasOpen = d.open; d.open = true; });
  });
  window.addEventListener('afterprint', function () {
    document.querySelectorAll('details.note').forEach(function (d) { d.open = d.dataset.wasOpen === 'true'; });
  });
})();
