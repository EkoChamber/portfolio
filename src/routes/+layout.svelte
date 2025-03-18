<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Nav from '$lib/components/Nav.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	
	onMount(() => {
		setTimeout(() => {
			document.body.classList.remove('is-preload');
		}, 100);
		
		// Debug logging
		console.log('Current pathname:', $page.url.pathname);
		console.log('Base path:', base);
	});
	
	$: isRootPath = $page.url.pathname === '/' || $page.url.pathname === `${base}/` || $page.url.pathname === base;
	$: isPortfolioProject = base && $page.url.pathname.startsWith(`${base}/portfolio/`);
	$: showNav = isRootPath || !isPortfolioProject;
</script>

<CustomCursor />

{#if showNav}
	<Nav />
{/if}

<slot />