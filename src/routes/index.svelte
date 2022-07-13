<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import Cat from "$lib/cat/Cat.svelte";
import Contact from "./contact.svelte";
import Projects from "./projects.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>
<Cat/>
<section>	
	<div class="content">		
	<h1 id="home">
		Hello! I'm <span class="pink">Karolin</span>.
	</h1>
	<h2 class="subtitle">Based in Stockholm, Sweden</h2>
	<hr class="solid">	
		<p>With a passion for code, problem solving and pixel perfect user interfaces. I am currently creating technical solutions at Svenska Spel, where I am part of developing our new Design System. </p>			
		<p>Apart from this, I like to create websites for external clients helping them to get suitable user interfaces and bring their ideas to life.</p>
		<p>When I am not coding I love to cook and eat, travel, train and hang our with my cat. </p>		
	</div>	
</section>
<Projects/>
<Contact/>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;		
	}

	h1 {
		width: 100%;
	}
	.subtitle{
		text-align: center;
		font-size: 1.25rem;
	}
	.pink {
		color: var(--accent-color);
	}	

	.content {		
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding: 0 1rem;
	}

</style>
