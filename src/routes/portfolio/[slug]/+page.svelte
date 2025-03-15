<script lang="ts">
	import { getProjectById } from '$lib/data/projects.js';
	import { page } from '$app/stores';
	
	$: slug = $page.params.slug;
	$: project = getProjectById(slug);

	const projectSkills: Record<string, string[]> = {
		'iskedyul': ['Full-stack Development', 'UI/UX Design', 'Database Design'],
		'bridging-the-gap': ['Data Visualization', 'UI/UX Design', 'Statistical Analysis'],
		'assembler': ['C Programming'],
		'laging-handa': ['UI/UX Design', 'Prototyping & Pitching'],
		'butuwhere': ['UI/UX Design', 'Prototyping & Pitching'],
		'guess-that-baby': ['Front-end Development', 'UI/UX Design', 'Game Design']
	};

	const projectActions: Record<string, {text: string, url: string}> = {
		'iskedyul': {text: 'View our project demo', url: 'https://iskedyul.example.com'},
		'bridging-the-gap': {text: 'Visit our website', url: 'https://ahzzano.github.io/cs-132-project/'},
		'assembler': {text: 'View our repository', url: 'https://github.com/EkoChamber/cs-21-project-1'},
		'laging-handa': {text: 'View our project demo', url: 'https://www.youtube.com/watch?v=oIuXyjI3-T4'},
		'butuwhere': {text: 'View our project demo', url: 'https://www.youtube.com/watch?v=6x2FCyhK03E&t=346s'},
		'guess-that-baby': {text: 'View our project demo', url: 'https://www.youtube.com/watch?v=MGgvqTI43XQ&t=141s'}
	};

	const techIcons: Record<string, string> = {
		'C': '/images/tech/c.png',
		'CSS': '/images/tech/css.png',
		'Figma': '/images/tech/figma.png',
		'FXML': '/images/tech/fxml.png',
		'HTML': '/images/tech/html.png',
		'Java': '/images/tech/java.png',
		'Javascript': '/images/tech/javascript.png',
		'Jupyter': '/images/tech/jupyter.png',
		'Matplotlib': '/images/tech/matplotlib.png',
		'Numpy': '/images/tech/numpy.png',
		'Pandas': '/images/tech/pandas.png',
		'Postgresql': '/images/tech/postgresql.png',
		'Seaborn': '/images/tech/seaborn.png',
		'Svelte': '/images/tech/svelte.png',
		'Typescript': '/images/tech/typescript.png',
	};

	function getTechIcon(tech: string): string {
		return techIcons[tech] || '/images/tech/code.png';
	}
	
	function getSkillsForProject(projectId: string): string[] {
		return projectSkills[projectId] || [];
	}
	
	function getActionForProject(projectId: string): {text: string, url: string} | null {
		return projectActions[projectId] || null;
	}
</script>

<svelte:head>
	<title>{project ? `${project.title} | Aneko Delfin` : 'Project Not Found'}</title>
</svelte:head>

<div class="page-container">
	{#if project}
		<article class="project-container">
			<div class="main-content">
				<header>
					<h1>{project.title}</h1>
					<p>{project.description} | {project.year}</p>
				</header>
				
				<div class="project-image">
					<div class="image-container {project.imageClass}"></div>
				</div>
				
				<div class="project-description">
					{#each project.fullDescription.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
			
			<div class="sidebar">
				<div class="sidebar-section">
					<h3>Technologies</h3>
					<div class="tech-icons">
						{#each project.technologies as tech}
							<div class="tech-icon-wrapper" title={tech}>
								<img src={getTechIcon(tech)} alt={tech} class="tech-icon" />
							</div>
						{/each}
					</div>
				</div>
				
				<div class="sidebar-section">
					<h3>Skills</h3>
					<div class="skills-list">
						{#each getSkillsForProject(project.id) as skill}
							<span class="skill-pill">{skill}</span>
						{/each}
					</div>
				</div>
				
				<div class="sidebar-section buttons">
					{#if getActionForProject(project.id)}
						<a href={getActionForProject(project.id)?.url} class="action-button primary" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
							{getActionForProject(project.id)?.text}
						</a>
					{/if}
					<a href="/#portfolio" class="action-button secondary">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
						Back to portfolio
					</a>
				</div>
			</div>
		</article>
	{:else}
		<article class="project-container not-found">
			<div class="main-content">
				<header>
					<h1>Project Not Found</h1>
					<p>Sorry, we couldn't find the project you were looking for.</p>
				</header>
				
				<div class="project-nav">
					<a href="/#portfolio" class="action-button secondary">← Back to portfolio</a>
				</div>
			</div>
		</article>
	{/if}
</div>

<style>
	.page-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 4rem 1.5rem 2rem;
		width: 100%;
		box-sizing: border-box;
	}
	
	.project-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
		color: #f4f4f4;
		background-color: #111111;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	
	.not-found {
		min-height: 50vh;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	header {
		margin-bottom: 2rem;
	}
	
	h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	
	header p {
		color: rgba(255, 255, 255, 0.7);
		font-size: 1rem;
	}
	
	.project-image {
		width: 100%;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 2rem;
	}
	
	.image-container {
		width: 100%;
		height: 350px;
		background-size: cover;
		background-position: center;
		border-radius: 4px;
	}
	
	.project-description {
		line-height: 1.6;
		margin-bottom: 2rem;
	}
	
	.project-description p {
		margin-bottom: 1rem;
	}
	
	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	
	.sidebar-section {
		margin-bottom: 1.5rem;
		width: 100%;
	}
	
	.sidebar-section h3 {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.tech-icons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 0.5rem;
	}
	
	.tech-icon-wrapper {
		transition: all 0.2s ease;
	}
	
	.tech-icon-wrapper:hover {
		transform: translateY(-3px);
	}
	
	.tech-icon {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}
	
	/* Skills */
	.skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	
	.skill-pill {
		display: inline-block;
		padding: 0.4em 1em;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.9);
		font-weight: 300;
		transition: background-color 0.2s ease;
	}
	
	.skill-pill:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
	
	/* Button styles */
	.buttons {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
	
	.action-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.8em 1em;
		border-radius: 30px;
		font-weight: 500;
		font-size: 0.9rem;
		text-decoration: none;
		text-align: center;
		transition: all 0.2s ease;
		width: 100%;
		box-sizing: border-box;
	}
	
	.action-button svg {
		flex-shrink: 0;
	}
	
	.action-button.primary {
		background-color: #7842C8;
		color: white !important;
	}
	
	.action-button.primary:hover {
		background-color: #8952DC;
	}
	
	.action-button.secondary {
		background-color: rgba(255, 255, 255, 0.1);
		color: white !important;
	}
	
	.action-button.secondary:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
	
	/* Responsive */
	@media (min-width: 768px) {
		.project-container {
			flex-direction: row;
			padding: 3rem;
		}
		
		.main-content {
			flex: 2;
			margin-right: 3rem;
		}
		
		.sidebar {
			flex: 1;
			position: sticky;
			top: 2rem;
			align-self: flex-start;
		}
	}
</style>