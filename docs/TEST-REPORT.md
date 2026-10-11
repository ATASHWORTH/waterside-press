# Test Report — 2026-10-11 (visual refinement)

Run (after the October restructure): `node tests/check.mjs` and `python3 tests/browser_test.py` (Playwright Chromium, headless; Google Fonts requests blocked so results don't depend on the network).

| Area | Result |
|---|---|
| Static checks (25 pages) | 0 failures: every internal link and asset resolves; one `<h1>`, `<title>`, description, and `lang` per page; no duplicate ids; all `aria-controls` targets exist; no placeholder text |
| Navigation | All nav and footer links resolve. Mobile menu opens with the toggle and closes with Escape. 404 page uses root-absolute links |
| Responsive | No horizontal overflow on any page at 375, 768, or 1280 px; header checked at 768–1280 px (nav wrapping at 980–1280 px found and fixed by moving the menu breakpoint to 1080 px) |
| Console | No JavaScript errors on any page at either width |
| Daily Office | Correct device date; psalter day and both lessons verified against hand-computed values (1 Jan 2026 = Ps 1–5, Genesis 1, Matthew 1; 31 Jan uses day 30; 22 Mar 2026 = Exodus 31, John 13, Sunday form); Morning/Evening tabs; date navigation; shorter form shortens the office ~45%; text size; print hides controls |
| Family Catechesis | 7 sessions listed; each session page has all 9 steps; previous/next navigation |
| Library | Search matches title/author/tags; empty state appears for no matches; PDF, transcription, and category filters return correct sets; header search (`?q=`) pre-fills |
| PDFs | Both external PDF links fetched and title pages matched on 2026-10-11. Full-file completeness **not** verified (see SOURCES-AND-RIGHTS.md) |
| Scripture | No ESV passage now on the site has been collated against esv.org (the one checked passage, Isaiah 53:4–6, belonged to the retired weekday liturgy) |
| Colour contrast | Computed for the new palette: all text/background pairs ≥ 4.58:1 (light) and ≥ 5.85:1 (dark); button text ≥ 9.6:1; form-control borders ≥ 3.59:1 (raised after review) |
| Accessibility | Skip link, landmarks, labelled form controls, visible focus, ARIA tablist with keyboard support, reduced-motion respected. No automated scanner (axe) run — the package registry was unreachable — and no screen-reader test. Not a conformance claim |
| Print | Controls, header, and footer hidden; collapsed notes printed |

Web fonts could not load in the test environment, so screenshots used fallback faces; layout was judged with those.

Not tested: real mobile devices, Safari/Firefox, screen readers, rendering with the actual web fonts.
