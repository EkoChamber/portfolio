<script>
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
</script>

<article id="connect" class="wrapper style2">
	<div class="connect-container">
		<div class="social-links">
			{#each socialLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link" aria-label={link.name}>
					<div class="social-icon-container">
						<img src={link.icon} alt={link.name} class="social-icon" />
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
		gap: 2rem;
		margin: 6rem auto;
		width: 100%;
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
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s ease;
	}
	
	.social-link:hover .social-icon-container {
		transform: translateY(-5px);
	}
	
	.social-icon {
		width: 40px;
		height: 40px;
		filter: brightness(0) invert(1);
		transition: opacity 0.3s ease;
	}
	
	.social-link:hover .social-icon {
		opacity: 0.8;
	}
	
	@media screen and (max-width: 736px) {
		.social-links {
			flex-wrap: wrap;
			gap: 1.5rem;
		}
		
		.social-icon {
			width: 35px;
			height: 35px;
		}
	}
</style>