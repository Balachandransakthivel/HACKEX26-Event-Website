import { cpSync } from 'node:fs';

// Mirrors the vite build output to every location Vercel may validate as
// the deployment output directory, covering all combinations of
// {repo-root, app-dir} base paths x {dist, public, nested} values.
// URL-based paths make this independent of the current working directory.
const src = new URL('./dist/', import.meta.url);

const targets = [
  ['repo-root/dist', new URL('../../dist/', import.meta.url)],
  ['repo-root/public', new URL('../../public/', import.meta.url)],
  ['app/artifacts/hackex26/dist', new URL('./artifacts/hackex26/dist/', import.meta.url)],
];

for (const [label, dest] of targets) {
  try {
    cpSync(src, dest, { recursive: true });
    console.log(`[copy-dist] synced -> ${label} (${dest.href})`);
  } catch (err) {
    console.error(`[copy-dist] failed for ${label}:`, err);
    process.exit(1);
  }
}
