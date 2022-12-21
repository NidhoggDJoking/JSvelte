import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),
    '@babel/plugin-proposal-optional-chaining',// 可选链
    '@babel/plugin-proposal-nullish-coalescing-operator'//双问号
  ],
  resolve: {
    // Vite路径别名配置
    alias: {
      '@': path.resolve('./src')
    }
  }
})
