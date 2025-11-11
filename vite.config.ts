import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const aliases: Record<string, string> = {}

  const pkgPath = path.resolve(__dirname, './package.json')
  if (fs.existsSync(pkgPath)) {
    const packageJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
    if (packageJson.name) {
      aliases[packageJson.name] = path.resolve(__dirname, './src')
    }
  }
    return {
        plugins: [
            react(),
            visualizer({
                open: process.env.NODE_ENV !== 'CI',
                filename: './dist/stats.html',
            }),
        ],
        define: {
            'process.env': process.env,
        },
        server: {
            port: 8000,
            open: true,
        },
        base: './',
        esbuild: {
            keepNames: true,
        },
        build: {
            sourcemap: true,
        },
        resolve: {
            preserveSymlinks: true,
            alias: [
                // FIXME: doesn't work with react 19
                // allow profiling in production
                // { find: /^react-dom$/, replacement: 'react-dom/profiling' },
                // {
                //     find: 'scheduler/tracing',
                //     replacement: 'scheduler/tracing-profiling',
                // },
                // we need to manually follow the symlinks for local packages to allow deep HMR
                ...Object.keys(aliases).map(packageName => ({
                    find: packageName,
                    replacement: aliases[packageName],
                })),
            ],
        },
    };
});
