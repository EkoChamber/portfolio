<script>
	import { getProjectById } from '$lib/data/projects.js';
	import Nav from '$lib/components/Nav.svelte';
	import { page } from '$app/stores';
	
	$: slug = $page.params.slug;
	$: project = getProjectById(slug);
</script>

<svelte:head>
	<title>{project ? `${project.title} | Aneko Delfin` : 'Project Not Found'}</title>
</svelte:head>

<Nav />

{#if project}
	<article class="wrapper style2">
		<div class="container">
			<header>
				<h1>{project.title}</h1>
				<p>{project.description} | {project.year}</p>
			</header>
			
			<div class="content">
				<div class="project-image">
					<div class="image-container {project.imageClass}"></div>
				</div>
				
				<div class="project-details">
					<h2>Overview</h2>
					<p>{project.fullDescription}</p>
					
					<h2>Challenges</h2>
					<p>{project.challenges}</p>
					
					<h2>Solution</h2>
					<p>{project.solution}</p>
					
					<h2>Technologies Used</h2>
					<div class="tech-stack">
						{#each project.technologies as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>
					
					<div class="project-nav">
						<a href="/#portfolio" class="button">← Back to Portfolio</a>
					</div>
				</div>
			</div>	
		</div>
	</article>
{:else}
	<article class="wrapper style2">
		<div class="container">
			<header>
				<h1>Project Not Found</h1>
				<p>Sorry, we couldn't find the project you were looking for.</p>
			</header>
			
			<div class="project-nav">
				<a href="/#portfolio" class="button">← Back to Portfolio</a>
			</div>
		</div>
	</article>
{/if}

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
	}
	
	.project-image {
		width: 100%;
		border-radius: 8px;
		overflow: hidden;
	}
	
	.image-container {
		width: 100%;
		height: 350px;
		background-size: cover;
		background-position: center;
		border-radius: 8px;
	}
	
	.project-details {
		text-align: left;
	}
	
	.project-details h2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1.5rem 0;
	}
	
	.tech-tag {
		background-color: rgba(67, 179, 224, 0.2);
		color: #43B3E0;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	.project-nav {
		margin-top: 3rem;
		text-align: center;
	}
	
	@media (min-width: 768px) {
		.content {
			flex-direction: row;
		}
		
		.project-image {
			flex: 1;
		}
		
		.project-details {
			flex: 1;
			padding-left: 2rem;
		}
	}
</style>