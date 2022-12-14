<script>
  import { Router, Link, Route } from "svelte-routing";
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  export let url = "";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>
  <Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
     <Link to="about">about</Link>
  </nav>
  <div>
    <Route path="/">
      <Counter />
    </Route>
    <Route path="about">
      <div>about</div>
    </Route>
  </div>
</Router>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
