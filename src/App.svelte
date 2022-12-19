<script>
  import { Router, Link, Route } from "svelte-routing";
  import { navlink, navPosition } from '@/styles/index';
  import Index from '@/lib/Index.svelte'
  import Animations from '@/lib/Animations.svelte'
  import Transition from '@/lib/Transition.svelte'
  import '@/styles/global.css'
  export let url = "";
</script>

<main>
  <Router url="{url}">
    <nav class={navPosition}>
      <Link to="/">index</Link>
      <Link to="transition">transition</Link>
      <Link to="animations">animations</Link>
    </nav>
    <div class="container">
      <Route path="/">
        <Index />
      </Route>
      <Route path="transition">
        <Transition />
      </Route>
      <Route path="animations">
        <Animations/>
      </Route>
    </div>
  </Router>
</main>


<style>
main{
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
}
.container{
  padding-top: 30px;
}
</style>