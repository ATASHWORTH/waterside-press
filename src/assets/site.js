// Waterside Press — shared behaviour (navigation, light/dark switch). No tracking, no cookies.
(function () {
  // Light/dark switch. Light is the default; a chosen theme is kept in local storage.
  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function showTheme(dark) {
    if (dark) root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
    if (themeMeta) themeMeta.content = dark ? '#111816' : '#eef1ee';
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      themeBtn.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
    }
  }
  showTheme(root.getAttribute('data-theme') === 'dark');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') !== 'dark';
    showTheme(dark);
    try { if (dark) localStorage.setItem('wp-theme', 'dark'); else localStorage.removeItem('wp-theme'); } catch (e) {}
  });

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
