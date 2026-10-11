# Test Report — 2026-10-11

Run (after the October restructure): `node tests/check.mjs` and `python3 tests/browser_test.py` (Playwright Chromium, headless; Google Fonts requests blocked so results don't depend on the network).

| Area | Result |
|---|---|
| Static checks (25 pages) | 0 failures: every internal link and asset resolves; one `<h1>`, `<title>`, description, and `lang` per page; no duplicate ids; all `aria-controls` targets exist; no placeholder text |
| Navigation | All nav and footer links resolve. Mobile menu opens with the toggle and closes with Escape. 404 page uses root-absolute links |
| Responsive | No horizontal overflow on any page at 375 px or 1280 px (an overflow on the library filters at 375 px was found and fixed) |
| Console | No JavaScript errors on any page at either width |
| Daily Office | Correct device date; psalter day and both lessons verified against hand-computed values (1 Jan 2026 = Ps 1–5, Genesis 1, Matthew 1; 31 Jan uses day 30; 22 Mar 2026 = Exodus 31, John 13, Sunday form); Morning/Evening tabs; date navigation; shorter form shortens the office ~45%; text size; print hides controls |
| Family Catechesis | 7 sessions listed; each session page has all 9 steps; previous/next navigation |
| Library | Search matches title/author/tags; empty state appears for no matches; PDF, transcription, and category filters return correct sets; header search (`?q=`) pre-fills |
| PDFs | Both external PDF links fetched and title pages matched on 2026-10-11. Full-file completeness **not** verified (see SOURCES-AND-RIGHTS.md) |
| Scripture | No ESV passage now on the site has been collated against esv.org (the one checked passage, Isaiah 53:4–6, belonged to the retired weekday liturgy) |
| Colour contrast | Computed: all text/background pairs ≥ 4.5:1 in light and dark modes; buttons ≥ 6.7:1 |
| Accessibility | Skip link, landmarks, labelled form controls, visible focus, ARIA tablist with keyboard support, reduced-motion respected. No automated scanner (axe) run — the package registry was unreachable — and no screen-reader test. Not a conformance claim |
| Print | Controls, header, and footer hidden; collapsed notes printed |

Not tested: real mobile devices, Safari/Firefox, screen readers, the production host.
