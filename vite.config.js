import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import sass from 'sass' 

export default defineConfig({
    base: './',
    plugins: [],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        format: {
          comments: false
        }
      },
      rollupOptions: {
        plugins: [
          visualizer({
            open: false,
            gzipSize: true,
            brotliSize: true,
            filename: 'dist/stats.html'
          })
        ],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass
        }
      }
    }
  })