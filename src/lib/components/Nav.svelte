<script lang="ts">
	import { onMount } from 'svelte';
	
	let activeSection = 'home';
	
	function scrollToSection(sectionId: string, event: MouseEvent) {
		event.preventDefault();
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
	
	onMount(() => {
		const sections = ['home', 'about', 'portfolio', 'connect'];
		const sectionElements = sections.map(id => document.getElementById(id));
		
		function updateActiveSection() {
			const scrollPosition = window.scrollY + 100;
			
			for (let i = sectionElements.length - 1; i >= 0; i--) {
				const section = sectionElements[i];
				if (section && section.offsetTop <= scrollPosition) {
					if (activeSection !== sections[i]) {
						activeSection = sections[i];
					}
					break;
				}
			}
		}
		
		window.addEventListener('scroll', updateActiveSection);
		updateActiveSection();
		
		return () => {
			window.removeEventListener('scroll', updateActiveSection);
		};
	});
</script>

<nav>
	<ul class="container">
		<li><a href="#home" class:active={activeSection === 'home'} on:click={(e) => scrollToSection('home', e)}>Home</a></li>
		<li><a href="#about" class:active={activeSection === 'about'} on:click={(e) => scrollToSection('about', e)}>About</a></li>
		<li><a href="#portfolio" class:active={activeSection === 'portfolio'} on:click={(e) => scrollToSection('portfolio', e)}>Portfolio</a></li>
		<li><a href="#connect" class:active={activeSection === 'connect'} on:click={(e) => scrollToSection('connect', e)}>Connect</a></li>
	</ul>
</nav>

<style>
    :global(nav) {
        background-color: transparent !important;
        background-image: none !important;
        box-shadow: none !important;
        transition: background-color 0.3s ease;
        position: fixed;
        left: 0;
        top: 20px;
        width: 100%;
        z-index: 1000;
    }
    
    ul {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0 2rem;
    }
    
    li {
        list-style: none;
        margin-left: 1.5rem;
    }
    
    a {
        text-decoration: none;
        color: white;
        position: relative;
        padding-bottom: 0.25rem;
        transition: color 0.3s ease;
    }
    
    a:hover, a:focus {
        background: none;
    }
    
    a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: white;
        transition: width 0.3s ease, left 0.3s ease;
    }
    
    a:hover::after {
        width: 100%;
        left: 0;
    }
    
    .active::after {
        width: 100%;
        left: 0;
    }
</style>