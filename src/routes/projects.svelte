<script context="module" lang="ts">
import Card from "$lib/card/card.svelte";

	export const prerender = true;
  let cards = [
    {id: 1, title: 'Tetris', src: 'src/lib/images/tetris.png', alt: 'tetris game with colorful pieces', info: 'I wanted to challenge myself and build someting that is both fun and tricky. What better way than to build something that I am already familiar with the logic of, but never have created myself. Built using TypeScript and React.', github: 'https://github.com/karolinfrennert/tetris-react', website: 'https://tetris.frennert.com/'},
    {id: 2, title:'Date planner', src: '/src/lib/images/date-planner.png', alt: '', info: '', github: 'https://github.com/karolinfrennert/Brief-3-API', website: 'https://date-planner.netlify.app/'},
    {id: 3, title: 'Itsy Bitsy Space', src: 'src/lib/images/space.png', alt: 'Small man on a dark blue background with start', info: '', github: 'https://github.com/karolinfrennert/Bitsy-Space', website: 'https://bitsy.frennert.com/'},
    {id: 4, title: 'FindBucketList.com', src: 'src/lib/images/findbucketlist.png', alt: 'Small man on a dark blue background with start', info: '', github: '', website: 'https://findbucketlist.com/'},
    
  ]
  
</script>

<svelte:head>
	<title >Projects</title>
	<meta  name="description" content="Portfolio" />
</svelte:head>

<h1 id="projects">Projects</h1>
<hr class="solid">

<div class="card-grid">
{#each cards as card (card.id) }
	<Card title={card.title} src={card.src} alt={card.alt} info={card.info} github={card.github} website={card.website}/>
{/each}
</div>

<style>
  .card-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }    
</style>