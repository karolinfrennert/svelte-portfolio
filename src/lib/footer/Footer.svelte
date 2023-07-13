<script lang="ts">
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="https://github.com/karolinfrennert"> Github </a>
			</li>
			<li>
				<a href="https://linkedin.com/in/karolinfrennert"> LinkedIn </a>
			</li>
		</ul>
	</nav>
</footer>

<style>
	nav {
		display: flex;
		justify-content: space-evenly;
		--background: rgba(255, 255, 255, 0.7);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
