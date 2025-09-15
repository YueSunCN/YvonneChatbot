import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

// FIX: Define __dirname in ES module scope to resolve path aliases.
// This is necessary because __dirname is not available by default in ES modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
