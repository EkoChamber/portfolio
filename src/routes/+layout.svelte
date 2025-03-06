<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	
	onMount(() => {
		setTimeout(() => {
			document.body.classList.remove('is-preload');
		}, 100);
	});
	
	$: showNav = $page.url.pathname === '/' || !$page.url.pathname.startsWith('/portfolio/');
</script>

<CustomCursor />

{#if showNav}
	<Nav />
{/if}

<slot />