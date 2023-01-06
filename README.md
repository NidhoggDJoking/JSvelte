<h1 align="center">JSvelte</h1>

<p align="center">
  <a href="https://vitejs.cn/" target="_blank">
      <img src="https://img.shields.io/badge/Vite-4.0.0-646CFF?logo=Vite">
  </a>
  <a href="https://www.sveltejs.cn" target="_blank">
      <img src="https://img.shields.io/badge/Svelte-3.54.0-ff3e00?logo=Svelte">
  </a>
  <a href="https://developer.stackblitz.com/" target="_blank">
      <img src="https://img.shields.io/badge/Stackblitz-dev_tool-1374ef?logo=StackBlitz" >
  </a>
</p>


## [Stackblitz](https://stackblitz.com)

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/jsvelte)

#### Stackblitz + Github 系列功能都还在测试阶段

1. stackblitz Save 记得 Commit，没有 Commit 重进会被 Github 库初始化后覆盖
2. stackblitz Commit 大概率会连接失败，多等等别想着退出去重新进参考第一条
3. 什么是环境，什么是 node_modules
4. Commit 跳过了 gitignore 的忽略
5. 运行得先装依赖 `yarn install && yarn run dev`


## [Svelte](https://www.sveltejs.cn/)

#### 路由

- ##### Svelte 目前没有提供官方路由组件，这是社区中找到的以及它的风格模式

1. [svelte-routing](https://github.com/EmilTholin/svelte-routing) -> `react-router-dom`
2. [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) -> `vue-router` 路由规则的配置
3. [Routify](https://www.routify.dev) : 是约定式路由解决方案，无需配置路由规则，直接根据目录结构生成路由

#### 样式

- 使用 `emotion` 如`React` 一样进行 `CSS-IN-JS` 的样式编写
- Svelte 文件里`style` 直接写，文件结构与`Vue`一致

单个组件用`style`
组件渗透用`emotion`

- 全局样式策略

```css
/* 通过global.css设置全局样式变量 */
:global(:root){
   --header-color: purple
}
```

#### 预处理相关

- [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)

#### UI框架

`sveltematerialui`

- [svelte-material-ui 📌](https://github.com/hperrin/svelte-material-ui)

- [sveltematerialui 🚀](https://sveltematerialui.com/)

`sveltestrap`

- [sveltestrap 📌](https://github.com/bestguy/sveltestrap)

- [sveltestrap 🚀](https://sveltestrap.js.org/)


#### Babel 升级

`vite.config.js` 文件 `plugins` 里直接加

```js
plugins: [svelte(),
   '@babel/plugin-proposal-optional-chaining',// 可选链
   '@babel/plugin-proposal-nullish-coalescing-operator'//双问号
],
```

```bash
npm install --save-dev @babel/plugin-proposal-optional-chaining // 可选链
npm install --save-dev @babel/plugin-proposal-nullish-coalescing-operator // 合并操作符
npm install --save-dev @babel/plugin-proposal-logical-assignment-operators // 短路符
npm install --save-dev @babel/plugin-proposal-private-methods // 私有属性关键词"#"
npm install --save-dev @babel/plugin-proposal-partial-application // 函数科里化
```

[拓展用法参照](https://nidhoggdjoking.gitee.io/#/js/future)



## [Vite](https://vitejs.cn/)

| 选项 |  |
| :----- | :---: |
| `--host [host]` | 指定主机名称 (`string`) |
| `--port <port>` | 指定端口 (`number`) |
| `--https` | 使用 TLS + HTTP/2 (`boolean`) |
| `--open [path]` | 启动时打开浏览器 (`boolean \| string`) |
| `--cors` | 启用 CORS (`boolean`) |
| `--strictPort` | 如果指定的端口已在使用中，则退出 (`boolean`) |
| `--force` | 强制优化器忽略缓存并重新构建 (`boolean`) |
| `-c, --config <file>` | 使用指定的配置文件 (`string`) |
| `--base <path>` | 公共基础路径（默认为：`/`）(`string`) |
| `-l, --logLevel <level>` | Info \| warn \| error \| silent (`string`) |
| `--clearScreen` | 允许或禁用打印日志时清除屏幕 (`boolean`) |
| `-d, --debug [feat]` | 显示调试日志 (`string \| boolean`) |
| `-f, --filter <filter>` | 过滤调试日志 (`string`) |
| `-m, --mode <mode>` | 设置环境模式 (`string`) |
| `-h, --help` | 显示可用的 CLI 选项 |
|`-v, --version` | 显示版本号 |
