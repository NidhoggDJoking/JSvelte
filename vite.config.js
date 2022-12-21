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
    alias: {
      '@': path.resolve('./src') // Vite路径别名配置
    }
  },
  css:{
    devSourcemap: false, // 在开发过程中是否启用 sourcemap. 默认： false
  },
  build:{
    assetsDir: 'assets', // 指定生成静态资源的存放路径. 默认： assets
    cssCodeSplit: true, // 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入。如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    sourcemap: true, // 如果为 true，将会创建一个独立的 source map 文件
    reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
  },
  server:{
    port: 9527, // 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
    strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
  },
  preview:{
    port: 9527,
    strictPort: false,
    open: false, // 开发服务器启动时，自动在浏览器中打开应用程序。当该值为字符串时，它将被用作 URL 的路径名. 默认： server.open
  }
})
