<script>
	// Social media links
	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/aneko-delfin/',
			icon: '/images/linkedin-icon.svg',
		},
		{
			name: 'Behance',
			url: 'https://www.behance.net/anekodelfin',
			icon: '/images/behance-icon.svg',
		},
		{
			name: 'Email',
			url: 'mailto:aneko.a.d@gmail.com',
			icon: '/images/email-icon.svg',
		},
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/@aneko8692',
			icon: '/images/youtube-icon.svg',
		}
	];
</script>

<article id="connect" class="wrapper style2">
	<div class="container medium">
		
		<div class="social-links">
			{#each socialLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link" aria-label={link.name}>
					<div class="social-icon-container">
						<img src={link.icon} alt={link.name} class="social-icon" />
					</div>
				</a>
			{/each}
		</div>
		
		<footer>
			<p>&copy; {new Date().getFullYear()} Aneko Delfin. All rights reserved.</p>
		</footer>
	</div>
</article>

<style>
	header {
		text-align: center; /* Center the header text */
	}
	
	.container {
		text-align: center; /* Center all content in container */
	}
	
	.social-links {
		display: flex;
		justify-content: center; /* Center the social icons */
		gap: 2rem;
		margin: 3rem 0;
	}
	
	.social-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: #fff;
		transition: transform 0.3s ease, color 0.3s ease;
	}
	
	.social-link:hover {
		transform: translateY(-5px);
		color: #43B3E0;
	}
	
	.social-icon-container {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.3s ease;
	}
	
	.social-link:hover .social-icon-container {
		background-color: rgba(255, 255, 255, 0.2);
	}
	
	.social-icon {
		width: 30px;
		height: 30px;
		filter: brightness(0) invert(1); /* Makes icons white */
	}
	
	footer {
		margin-top: 3rem;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.5);
		text-align: center; /* Center footer text */
	}
	
	@media screen and (max-width: 736px) {
		.social-links {
			flex-wrap: wrap;
			gap: 1.5rem;
		}
		
		.social-icon-container {
			width: 50px;
			height: 50px;
		}
		
		.social-icon {
			width: 25px;
			height: 25px;
		}
	}
</style>