<script>
  import { Router, Link, Route } from "svelte-routing";
  import { navlink } from '@/styles/index';
  import Index from '@/lib/Index.svelte'
  import Animations from '@/lib/Animations.svelte'
  import Transition from '@/lib/Transition.svelte'
  import '@/styles/global.css'
  export let url = "";
</script>

<main>
  <Router url="{url}">
  <nav>
    <Link to="/">index</Link>
    <Link to="transition">transition</Link>
    <Link to="animations">animations</Link>
  </nav>
  <div>
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
