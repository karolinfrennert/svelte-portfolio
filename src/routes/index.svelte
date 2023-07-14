<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Cat from '$lib/cat/Cat.svelte';
	import Contact from './contact.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>
<Cat />
<section>
	<div class="content">
		<h1 id="home">
			Hello! I'm <span class="pink">Karolin</span>.
		</h1>
		<h2 class="subtitle">Based in Stockholm, Sweden</h2>
		<hr class="solid" />
		<p>
			I have a passion for coding, problem solving, and creating pixel-perfect user interfaces. My current focus revolves around developing technical solutions as part of 
			Svenska Spel's talented team, specifically contributing to the creation of our new <a href="https://www.svenskaspel.design/">Design System</a>.
		</p>
		<p>
			Aside from my professional work, I take great pleasure in building websites that bring people's ideas to life. Whether you're in need of a captivating user interface or want to transform your concept into a fully functional website, I'm here to help. 
			Feel free to reach out, and let's discuss how we can make your ideas a reality. 
		</p>
		<p>When I am not coding I love to cook and eat, travel, train and hang out with my cat Kurt.</p>
	</div>
</section>
<Contact />

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
	.subtitle {
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
