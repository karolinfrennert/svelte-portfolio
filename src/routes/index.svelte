<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import Contact from "./contact.svelte";
import Projects from "./projects.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<section>
	<div class="content">
	<h1 id="home">
		Hello! I'm <span class="pink">Karolin</span>.
	</h1>
	<hr class="solid">	
		<p>A Frontend Developer currently learning to code at Hyper Island, but I’ve had coding for about 1+ year in as a hobby before I started studying. My current goal is learning how to learn - and applying it into my projects. </p>
		<p>When I am not coding (which is not often) I love to cook and eat, travel, train and hang our with my cat. </p>
		<p>Let’s stay in touch! You can find my projects on GitHub or here, get in contact on LinkedIn and occationally read my tweets on Twitter! </p>
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

	.pink {
		color: var(--accent-color);
	}	

	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

</style>
