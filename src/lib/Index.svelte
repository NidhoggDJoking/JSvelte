<script>
  import svelteLogo from '@/assets/svelte.svg'
  import viteLogo from '@/assets/vite.svg'
  import Counter from '@/lib/Counter.svelte'
  let string = `<h1>Vite + Svelte</h1>`;
  let _object = {
    name:'joking'
  }
  var foo = _object.foo ?? "default"; // "default"
  var res = _object?.name // 2
</script>

  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <!-- 多页面 MPA 多页面应用存在问题 -->
      <!-- <img src="/vite.svg" class="logo vite" alt="Vite Logo" /> -->
      <img src={viteLogo} class="logo vite" alt="Vite Logo" />
      
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  
  <div>{@html string}</div>
  <div>{foo}</div>
  <div>{res}</div>
  <!-- <div>{import.meta.env.VITE_SOME_KEY}</div> -->

  <style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>