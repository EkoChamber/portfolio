<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	
	onMount(() => {
		setTimeout(() => {
			document.body.classList.remove('is-preload');
		}, 100);
	});
	
	$: showNav = $page.url.pathname === '/' || !$page.url.pathname.startsWith('/portfolio/');
</script>

{#if showNav}
	<Nav />
{/if}

<slot />