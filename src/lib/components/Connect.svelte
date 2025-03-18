<script lang="ts">
	import { base } from '$app/paths';

	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/aneko-delfin/',
			icon: '/images/linkedin.png',
		},
		{
			name: 'GitHub',
			url: 'https://github.com/EkoChamber',
			icon: '/images/github.png',
		},
		{
			name: 'Behance',
			url: 'https://www.behance.net/anekodelfin',
			icon: '/images/behance.png',
		},
		{
			name: 'Email',
			url: 'mailto:aneko.a.d@gmail.com',
			icon: '/images/email.png',
		},
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/@aneko8692',
			icon: '/images/youtube.png',
		}
	];

	function getIconPath(iconPath: string): string {
		if (iconPath.startsWith('http://') || iconPath.startsWith('https://') || iconPath.startsWith('//')) {
		return iconPath;
		}
    return `${base}${iconPath}`;
  }
</script>

<article id="connect" class="wrapper style2">
	<div class="connect-container">
		<div class="social-links">
			{#each socialLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link" aria-label={link.name}>
					<div class="social-icon-container">
						<img src={getIconPath(link.icon)} alt={link.name} class="social-icon" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</article>

<style>
	:global(article#connect) {
		background-image: url('/images/gradient2.png');
		background-size: cover;
		background-position: center;
		transform: rotate(180deg);
	}
	.connect-container {
		transform: rotate(180deg);
		margin: 0 auto;
		max-width: 1200px;
		width: 100%;
		text-align: center;
		min-height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 25px;
		box-sizing: border-box;
	}
	
	.social-links {
        display: flex;
        justify-content: center;
        gap: clamp(0.5rem, 3vw, 2rem);
        margin: 6rem auto;
        width: 100%;
        flex-wrap: nowrap;
    }
	
	.social-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: #fff;
		transition: color 0.3s ease;
	}
	
	.social-link:hover {
		color: #43B3E0;
	}
	
	.social-icon-container {
        width: clamp(30px, 8vw, 60px);
        height: clamp(30px, 8vw, 60px);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
    }
	
	.social-link:hover .social-icon-container {
		transform: translateY(-5px);
	}
	
	.social-icon {
        width: clamp(20px, 6vw, 40px);
        height: clamp(20px, 6vw, 40px);
        filter: brightness(0) invert(1);
        transition: opacity 0.3s ease;
    }
	
	.social-link:hover .social-icon {
		opacity: 0.8;
	}
	
	@media screen and (max-width: 736px) {
		.social-links {
            gap: clamp(0.3rem, 2vw, 1.5rem);
        }
	}
</style>