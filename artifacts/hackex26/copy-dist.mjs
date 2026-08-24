import { cpSync } from 'node:fs';

// Copies the vite build output to the repo-root dist/ folder.
// URL-based paths make this independent of the current working directory,
// so it behaves identically locally and on Vercel regardless of where
// the build command is invoked from.
try {
  cpSync(new URL('./dist/', import.meta.url), new URL('../../dist/', import.meta.url), {
    recursive: true,
  });
  console.log('[copy-dist] synced artifacts/hackex26/dist -> repo-root dist');
} catch (err) {
  console.error('[copy-dist] failed:', err);
  process.exit(1);
}
