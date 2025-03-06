<script>
	import Home from '$lib/components/Home.svelte';
	import About from '$lib/components/About.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import { onMount } from 'svelte';
	
	onMount(() => {
		if (window.location.hash) {
			const id = window.location.hash.substring(1);
			const element = document.getElementById(id);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' });
				}, 300);
			}
		}
	});
</script>

<svelte:head>
	<title>Aneko Delfin</title>
	<meta name="description" content="Portfolio of Aneko Delfin | Developer and Designer" />
</svelte:head>

<Home />
<About />
<Portfolio />
<Connect />

<style>

</style>