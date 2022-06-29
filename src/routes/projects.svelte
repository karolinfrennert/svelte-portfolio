<script context="module" lang="ts">
import Card from "$lib/card/card.svelte";

	export const prerender = true;
  let cards = [
    {id: 1, title: 'My first project', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer', src: 'src/lib/card/ryan-ancill-aJYO8JmVodY-unsplash.jpeg', alt: ''},
    {id: 2, title:'My second project', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer', src: 'src/lib/card/ryan-ancill-aJYO8JmVodY-unsplash.jpeg', alt: ''},
    {id: 3, title: 'My first project', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer', src: 'src/lib/card/ryan-ancill-aJYO8JmVodY-unsplash.jpeg', alt: ''},
    {id: 4, title:'My second project', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer', src: 'src/lib/card/ryan-ancill-aJYO8JmVodY-unsplash.jpeg', alt: ''}
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
	<Card title={card.title} description={card.description} src={card.src} alt={card.alt}/>
{/each}
</div>

<style>
  .card-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }    
</style>