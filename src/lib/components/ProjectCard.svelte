<script lang='ts'>
	import { base } from '$app/paths';
	
	export let title = '';
	export let description = '';
	export let imageClass = '';
	export let skills: string[] = [];
	export const technologies: string[] = [];
	export let link = '#';
	
	const baseName = imageClass.replace('-cover', '');
	
	// Debug

	const defaultImage = `https://ekochamber.github.io/portfolio/images/${baseName}-cover.png`;
	const hoverImage = `https://ekochamber.github.io/portfolio/images/${baseName}.png`;

	console.log('Base path:', base);
	console.log('Default image path:', defaultImage);
	console.log('Hover image path:', hoverImage);
</script>

<article class="style2">
	<a href={link} class="image-link">
		<div class="image-container">
			<img src={defaultImage} alt={title} class="project-image default-image" />
			<img src={hoverImage} alt={title} class="project-image hover-image" />
		</div>
	</a>
	<h3><a href={link}>{title}</a></h3>
	<p class="description">{description}</p>
	
	{#if skills && skills.length > 0}
		<div class="skills-container">
			{#each skills as skill}
				<span class="skill-pill">{skill}</span>
			{/each}
		</div>
	{/if}
</article>

<style>
	article {
		background-color: transparent;
		margin-bottom: 2rem;
		text-align: center;
		padding: 0;
	}
	
	.image-link {
		display: block;
		overflow: hidden;
		border-radius: 12px;
		border: solid 0.5px rgba(255, 255, 255, 0.5);
		box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}
	
	.image-link:hover {
		transform: translateY(-5px);
	}
	
	.image-container {
		position: relative;
		width: 100%;
	}
	
	.image-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%);
		border-radius: 12px;
		z-index: 1;
		transition: opacity 0.3s ease;
	}
	
	.project-image {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
		transition: opacity 0.3s ease;
		position: relative;
		z-index: 0;
	}
	
	.default-image {
		opacity: 1;
	}
	
	.hover-image {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
	}
	
	.image-link:hover .default-image {
		opacity: 0;
	}
	
	.image-link:hover .hover-image {
		opacity: 1;
	}
	
	h3 {
		font-size: 1.5em;
		color: white;
		margin: 0.5em 0 0.2em 0;
		text-align: left;
	}
	
	h3 a {
		color: inherit;
		text-decoration: none;
	}
	
	.description {
		font-weight: lighter;
		font-size: 0.9em;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 0.5em;
		text-align: left;
		line-height: 1.2;
	}
	
	.skills-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		margin-top: 0.5em;
		text-align: left;
	}
	
	.skill-pill {
		display: inline-block;
		padding: 0.2em 0.8em;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		font-size: 0.75em;
		color: rgba(255, 255, 255, 0.9);
		font-weight: 300;
		transition: background-color 0.2s ease;
	}
	
	.skill-pill:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
</style>