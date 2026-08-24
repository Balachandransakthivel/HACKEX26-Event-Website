import { cpSync } from 'node:fs';

// Mirrors the vite build output to every location Vercel may validate as
// the deployment output directory. URL-based paths make this independent
// of the current working directory.
const sources = new URL('./dist/', import.meta.url);

const targets = [
  ['repo-root dist', new URL('../../dist/', import.meta.url)],
  ['repo-root public', new URL('../../public/', import.meta.url)],
];

for (const [label, dest] of targets) {
  try {
    cpSync(sources, dest, { recursive: true });
    console.log(`[copy-dist] synced -> ${label}`);
  } catch (err) {
    console.error(`[copy-dist] failed for ${label}:`, err);
    process.exit(1);
  }
}
