# JSvelte

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/jsvelte)

### Stackblitz

#### Stackblitz + Github 系列功能都还在测试阶段

1. stackblitz Save 记得 Commit，没有Commit重进会被Github库初始化后覆盖
2. stackblitz Commit 大概率会连接失败，多等等别想着退出去重新进参考第一条
3. 什么是环境，什么是node_modules
4. Commit 跳过了gitignore的忽略

---

### Svelte

#### 路由

- ##### Svelte 目前没有提供官方路由组件，这是社区中找到的以及它的风格模式

1. [svelte-routing](https://github.com/EmilTholin/svelte-routing) -> `react-router-dom`
2. [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) -> `vue-router`


#### 样式

- 使用 `emotion` 如`React` 一样进行 `CSS-IN-JS` 的样式编写
- Svelte 文件里`style` 直接写，文件结构与`Vue`一致

