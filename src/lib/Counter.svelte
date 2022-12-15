<script>
  import { title, comicSans, box } from '@/styles/index';
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="{title}">
  count is {count}
</button>
