<script lang="ts">
	import { getProjectById } from '$lib/data/projects.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	
	$: slug = $page.params.slug;
	$: project = getProjectById(slug);

	const projectStatus: Record<string, string> = {
		'iskedyul': 'in-progress',
		'bridging-the-gap': 'completed',
		'assembler': 'completed',
		'laging-handa': 'completed',
		'butuwhere': 'completed',
		'guess-that-baby': 'completed'
	};

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

	const projectCompletionDates: Record<string, string> = {
		'iskedyul': 'May 2025'
	};

	// Project carousel images
	const projectCarouselImages: Record<string, string[]> = {
		'iskedyul': [
			`${base}/images/projects/iskedyul/carousel-1.png`,
			`${base}/images/projects/iskedyul/carousel-2.png`,
			`${base}/images/projects/iskedyul/carousel-3.png`
		],
		'bridging-the-gap': [
			`${base}/images/projects/gap/carousel-1.png`,
			`${base}/images/projects/gap/carousel-2.png`,
			`${base}/images/projects/gap/carousel-3.png`
		],
		'assembler': [
			`${base}/images/projects/assembler/carousel-1.png`,
			`${base}/images/projects/assembler/carousel-2.png`
		],
		'laging-handa': [
			`${base}/images/projects/handa/carousel-1.png`,
			`${base}/images/projects/handa/carousel-2.png`
		],
		'butuwhere': [
			`${base}/images/projects/butuwhere/carousel-1.png`,
			`${base}/images/projects/butuwhere/carousel-2.png`,
			`${base}/images/projects/butuwhere/carousel-3.png`
		],
		'guess-that-baby': [
			`${base}/images/projects/baby/carousel-2.png`,
			`${base}/images/projects/baby/carousel-3.png`,
			`${base}/images/projects/baby/carousel-4.png`,
			`${base}/images/projects/baby/carousel-5.png`
		]
	};

	const techIcons: Record<string, string> = {
		'C': `${base}/images/tech/c.png`,
		'CSS': `${base}/images/tech/css.png`,
		'Figma': `${base}/images/tech/figma.png`,
		'FXML': `${base}/images/tech/fxml.png`,
		'HTML': `${base}/images/tech/html.png`,
		'Java': `${base}/images/tech/java.png`,
		'Javascript': `${base}/images/tech/javascript.png`,
		'Jupyter': `${base}/images/tech/jupyter.png`,
		'Matplotlib': `${base}/images/tech/matplotlib.png`,
		'Numpy': `${base}/images/tech/numpy.png`,
		'Pandas': `${base}/images/tech/pandas.png`,
		'Postgresql': `${base}/images/tech/postgresql.png`,
		'Seaborn': `${base}/images/tech/seaborn.png`,
		'Svelte': `${base}/images/tech/svelte.png`,
		'Typescript': `${base}/images/tech/typescript.png`,
	};

	function getTechIcon(tech: string): string {
		return techIcons[tech] || `${base}/images/tech/code.png`;
	}
	
	function getSkillsForProject(projectId: string): string[] {
		return projectSkills[projectId] || [];
	}
	
	function getActionForProject(projectId: string): {text: string, url: string} | null {
		return projectActions[projectId] || null;
	}
	
	function getCarouselImagesForProject(projectId: string): string[] {
		return projectCarouselImages[projectId] || [];
	}

	function getProjectStatus(projectId: string): string {
		return projectStatus[projectId] || 'completed';
	}
	
	function getCompletionDate(projectId: string): string | null {
		return projectCompletionDates[projectId] || null;
	}
	
	// Carousel animation
	let carouselContainer: HTMLElement;
	let animationFrame: number;
	let scrollPosition = 0;
	const scrollSpeed = 0.2;
	let autoScrolling = true;
	let isGrabbing = false;
	
	// Drag functionality variables
	let dragStartX = 0;
	let dragStartScrollLeft = 0;
	let isDragging = false;
	let lastDragEvent: MouseEvent | TouchEvent | null = null;
	
	onMount(() => {
		if (project && carouselContainer) {
			setTimeout(() => {
				if (autoScrolling) {
					startCarouselAnimation();
				}
			}, 300);
			
			// Mouse events for desktop
			carouselContainer.addEventListener('mouseenter', handleMouseEnter);
			carouselContainer.addEventListener('mouseleave', handleMouseLeave);
			carouselContainer.addEventListener('mousedown', handleDragStart);
			window.addEventListener('mouseup', handleDragEnd);
			window.addEventListener('mousemove', handleDragMove);
			
			// Touch events for mobile
			carouselContainer.addEventListener('touchstart', handleTouchStart);
			window.addEventListener('touchend', handleTouchEnd);
			window.addEventListener('touchmove', handleTouchMove);
			
			carouselContainer.addEventListener('contextmenu', (e) => {
				if (isDragging) {
					e.preventDefault();
				}
			});
		}
		
		return () => {
			if (carouselContainer) {
				carouselContainer.removeEventListener('mouseenter', handleMouseEnter);
				carouselContainer.removeEventListener('mouseleave', handleMouseLeave);
				carouselContainer.removeEventListener('mousedown', handleDragStart);
				carouselContainer.removeEventListener('touchstart', handleTouchStart);
			}
			
			window.removeEventListener('mouseup', handleDragEnd);
			window.removeEventListener('mousemove', handleDragMove);
			window.removeEventListener('touchend', handleTouchEnd);
			window.removeEventListener('touchmove', handleTouchMove);
			
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	});
	
	function handleMouseEnter() {
		pauseAutoScroll();
	}
	
	function handleMouseLeave() {
		if (!isDragging) {
			resumeAutoScroll();
		}
	}
	
	function handleDragStart(e: MouseEvent) {
		isDragging = true;
		isGrabbing = true;
		dragStartX = e.clientX;
		dragStartScrollLeft = carouselContainer.scrollLeft;
		pauseAutoScroll();
		
		e.preventDefault();
	}
	
	function handleDragEnd() {
		if (isDragging) {
			isDragging = false;
			isGrabbing = false;

			if (lastDragEvent) {
				const endTime = new Date().getTime();
				const moveDistance = calculateDragDistance(lastDragEvent);
				
				if (Math.abs(moveDistance) > 5) {
					const momentum = moveDistance * 2;
					carouselContainer.scrollLeft = carouselContainer.scrollLeft - momentum;
				}
			}
			
			const containerRect = carouselContainer.getBoundingClientRect();
			let mouseX = 0;
			let mouseY = 0;
			
			if (lastDragEvent instanceof MouseEvent) {
				mouseX = lastDragEvent.clientX;
				mouseY = lastDragEvent.clientY;
			} else if (lastDragEvent instanceof TouchEvent && lastDragEvent.touches.length > 0) {
				mouseX = lastDragEvent.touches[0].clientX;
				mouseY = lastDragEvent.touches[0].clientY;
			}
			
			const isMouseOverContainer = 
				mouseX >= containerRect.left && 
				mouseX <= containerRect.right &&
				mouseY >= containerRect.top && 
				mouseY <= containerRect.bottom;
			
			if (!isMouseOverContainer) {
				resumeAutoScroll();
			}
			
			lastDragEvent = null;
		}
	}
	
	function handleDragMove(e: MouseEvent) {
		if (!isDragging) return;
		
		lastDragEvent = e;
		
		const x = e.clientX;
		const moveDistance = dragStartX - x;
		carouselContainer.scrollLeft = dragStartScrollLeft + moveDistance;
		
		scrollPosition = carouselContainer.scrollLeft;
		
		e.preventDefault();
	}
	
	function handleTouchStart(e: TouchEvent) {
		if (e.touches.length === 1) {
			isDragging = true;
			isGrabbing = true;
			dragStartX = e.touches[0].clientX;
			dragStartScrollLeft = carouselContainer.scrollLeft;
			pauseAutoScroll();
		}
	}
	
	function handleTouchEnd() {
		if (isDragging) {
			isDragging = false;
			isGrabbing = false;
			
			setTimeout(() => {
				if (!isDragging) {
					resumeAutoScroll();
				}
			}, 1000);
		}
	}
	
	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		
		lastDragEvent = e;
		
		if (e.touches.length === 1) {
			const x = e.touches[0].clientX;
			const moveDistance = dragStartX - x;
			carouselContainer.scrollLeft = dragStartScrollLeft + moveDistance;
			
			scrollPosition = carouselContainer.scrollLeft;
		}
	}
	
	function calculateDragDistance(e: MouseEvent | TouchEvent): number {
		if (e instanceof TouchEvent && e.touches.length === 1) {
			return dragStartX - e.touches[0].clientX;
		} else if (e instanceof MouseEvent) {
			return dragStartX - e.clientX;
		}
		return 0;
	}
	
	function pauseAutoScroll() {
		autoScrolling = false;
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
			animationFrame = 0;
		}
	}
	
	function resumeAutoScroll() {
		autoScrolling = true;
		startCarouselAnimation();
	}
	
	function startCarouselAnimation() {
		if (!autoScrolling || !carouselContainer) return;
		
		const animate = () => {
			if (!carouselContainer || !autoScrolling) return;
			
			const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;
			if (maxScroll <= 0) return;
			
			scrollPosition += scrollSpeed;
			
			if (scrollPosition >= maxScroll) {
				scrollPosition = 0;
				carouselContainer.scrollTo({ left: 0, behavior: 'auto' });
			} else {
				carouselContainer.scrollLeft = scrollPosition;
			}
			
			animationFrame = requestAnimationFrame(animate);
		};
		
		animationFrame = requestAnimationFrame(animate);
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
					<h1>
						{project.title}
						{#if getProjectStatus(project.id) === 'in-progress'}
							<span class="status-badge">In Progress</span>
						{/if}
					</h1>
					<p>{project.description} | {project.year}</p>
				</header>
				
				<div class="project-image">
					{#if getCarouselImagesForProject(project.id).length > 0}
						<!-- Carousel -->
						<div 
							class="carousel-container" 
							class:grabbing={isGrabbing}
							bind:this={carouselContainer}
						>
							<div class="carousel-instructions">
								Drag to explore images
							</div>
							<div class="carousel-track">
								{#each getCarouselImagesForProject(project.id) as image, i}
									<div class="carousel-item">
										<img src={image} alt="{project.title} screenshot {i+1}" loading="lazy" />
									</div>
								{/each}
								{#each getCarouselImagesForProject(project.id).slice(0, 2) as image, i}
									<div class="carousel-item">
										<img src={image} alt="{project.title} screenshot {i+1} (duplicate)" loading="lazy" />
									</div>
								{/each}
							</div>
						</div>
					{:else}
						<div class="image-container {project.imageClass}"></div>
					{/if}
				</div>
				
				<div class="project-description">
					{#each project.fullDescription.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
					
					{#if getProjectStatus(project.id) === 'in-progress'}
						<div class="wip-notice">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<line x1="12" y1="8" x2="12" y2="12"></line>
								<line x1="12" y1="16" x2="12.01" y2="16"></line>
							</svg>
							<div>
								<h4>This project is currently in development</h4>
								{#if getCompletionDate(project.id)}
									<p>Expected completion: {getCompletionDate(project.id)}</p>
								{/if}
							</div>
						</div>
					{/if}
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
					{#if getProjectStatus(project.id) === 'in-progress'}
						<!-- In-progress -->
						<div class="action-button disabled">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"/>
								<polyline points="12 6 12 12 16 14"/>
							</svg>
							Coming Soon
						</div>
					{:else if getActionForProject(project.id)}
						<!-- Completed -->
						<a href={getActionForProject(project.id)?.url} class="action-button primary" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
							{getActionForProject(project.id)?.text}
						</a>
					{/if}
					<a href="{base}/#portfolio" class="action-button secondary">
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
					<a href="{base}/#portfolio" class="action-button secondary">← Back to portfolio</a>
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
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	
	.status-badge {
		font-size: 0.7rem;
		background-color: #7842C8;
		color: white;
		padding: 0.3em 0.8em;
		border-radius: 20px;
		font-weight: 500;
		display: inline-flex;
		align-items: center;
		vertical-align: middle;
		letter-spacing: 0.05em;
		text-transform: uppercase;
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
	
	/* Work in Progress Notice */
	.wip-notice {
		margin-top: 2rem;
		padding: 1rem;
		background-color: rgba(120, 66, 200, 0.1);
		border-left: 3px solid #7842C8;
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		border-radius: 4px;
	}
	
	.wip-notice svg {
		color: #7842C8;
		flex-shrink: 0;
		margin-top: 0.25rem;
	}
	
	.wip-notice h4 {
		margin: 0 0 0.5rem 0;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.9);
	}
	
	.wip-notice p {
		margin: 0;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
	}
	
	/* Carousel Styles */
	.carousel-container {
		width: 100%;
		min-height: 200px;
		max-height: 500px;
		overflow-x: auto;
		position: relative;
		border-radius: 4px;
		cursor: grab;
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.2);
		position: relative;
	}
	
	.carousel-container::-webkit-scrollbar {
		height: 6px;
	}
	
	.carousel-container::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 4px;
	}
	
	.carousel-container::-webkit-scrollbar-thumb {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
	}
	
	.carousel-container.grabbing {
		cursor: grabbing;
	}
	
	.carousel-instructions {
		position: absolute;
		top: 10px;
		right: 10px;
		background-color: rgba(0, 0, 0, 0.7);
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.8rem;
		padding: 5px 10px;
		border-radius: 15px;
		z-index: 3;
		opacity: 0.8;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}
	
	.carousel-container:hover .carousel-instructions {
		opacity: 0.3;
	}
	
	.carousel-track {
		display: flex;
		align-items: center;
		padding: 10px 0;
	}
	
	.carousel-item {
		flex: 0 0 auto;
		margin-right: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.carousel-item:last-child {
		margin-right: 0;
	}
	
	.carousel-item img {
		max-height: 450px;
		max-width: 500px;
		width: auto;
		height: auto;
		object-fit: contain;
		border-radius: 4px;
	}
	
	/* Original styles */
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
		word-wrap: break-word;
		overflow-wrap: break-word;
		max-width: 100%;
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
	
	/* Buttons */
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
	
	.action-button.disabled {
		background-color: rgba(255, 255, 255, 0.1);
		color: rgba(255, 255, 255, 0.6) !important;
		cursor: not-allowed;
		opacity: 0.7;
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
			max-width: calc(100% - 350px);
			overflow: hidden;
		}
		
		.sidebar {
			flex: 1;
			position: sticky;
			top: 2rem;
			align-self: flex-start;
			min-width: 250px;
			max-width: 300px;
		}

		.carousel-container {
			max-height: 450px;
		}
		
		.carousel-item img {
			max-width: 500px;
		}
	}
</style>