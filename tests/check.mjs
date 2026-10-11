// Static checks over dist/: internal links resolve, one <h1> per page, titles and
// descriptions present, images/scripts exist, no placeholder text, external links listed.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';

const DIST = resolve(process.argv[2] || 'dist');
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(DIST);

let fail = 0; const external = new Set();
const err = (f, m) => { fail++; console.log('FAIL', relative(DIST, f), '—', m); };
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) err(f, 'expected exactly one <h1>');
  if (!/<title>[^<]+<\/title>/.test(html)) err(f, 'missing <title>');
  if (!/<meta name="description" content="[^"]{20,}"/.test(html)) err(f, 'missing description');
  if (!/<html lang="en">/.test(html)) err(f, 'missing lang');
  if (/lorem|TODO|insert content|placeholder text/i.test(html.replace(/placeholder="[^"]*"/g, ''))) err(f, 'placeholder text');
  for (const m of html.matchAll(/(?:href|src|action)="([^"]+)"/g)) {
    const u = m[1];
    if (/^https?:/.test(u)) { external.add(u); continue; }
    if (u.startsWith('#') || u.startsWith('mailto:')) continue;
    const path = u.split(/[?#]/)[0];
    if (!path) continue;
    const target = path.startsWith('/') ? join(DIST, path) : resolve(dirname(f), path);
    if (!existsSync(target)) err(f, `broken link ${u}`);
  }
  // in-page anchors
  for (const m of html.matchAll(/href="#([^"]+)"/g)) if (!html.includes(`id="${m[1]}"`)) err(f, `missing anchor #${m[1]}`);
  // aria-controls targets
  for (const m of html.matchAll(/aria-controls="([^"]+)"/g)) if (!html.includes(`id="${m[1]}"`)) err(f, `aria-controls target missing: ${m[1]}`);
  // duplicate ids
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dup.length) err(f, `duplicate ids: ${[...new Set(dup)].join(', ')}`);
}
console.log(`\n${files.length} pages checked, ${fail} failures.`);
console.log('External links (verify by hand / see docs/SOURCES-AND-RIGHTS.md):');
for (const u of [...external].sort()) if (!/fonts\.(googleapis|gstatic)/.test(u)) console.log('  ', u);
process.exit(fail ? 1 : 0);
