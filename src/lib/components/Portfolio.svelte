<script lang="ts">
	import { base } from '$app/paths';
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '../data/projects';
</script>

<article id="portfolio" class="wrapper style2">
	<div class="containerrow">
		<header>
			<div class="boxstyle3">
				<img src="{base}/images/portfolio.png" style="height: 75px; width: auto; margin-bottom: 5em;" alt="" />
			</div>
		</header>

		<div class="row">
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title={projects[0].title}
					description={projects[0].description}
					skills={['Full-stack Development', 'UI/UX Design', 'Database Design']}
					technologies={projects[0].technologies}
					imageClass={projects[0].imageClass.replace('-banner', '-cover')}
					link={`${base}/portfolio/${projects[0].id}`}
				/>
			</div>
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title={projects[1].title}
					description={projects[1].description}
					skills={['Data Visualization', 'UI/UX Design', 'Statistical Analysis']}
					technologies={projects[1].technologies}
					imageClass={projects[1].imageClass.replace('-banner', '-cover')}
					link={`${base}/portfolio/${projects[1].id}`}
				/>
			</div>
		</div>
		
		<div class="row">
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title={projects[2].title}
					description={projects[2].description || "C Program"}
					skills={['C Programming']}
					technologies={projects[2].technologies}
					imageClass={projects[2].imageClass.replace('-banner', '-cover')}
					link={`${base}/portfolio/${projects[2].id}`}
				/>
			</div>
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title={projects[4].title}
					description={projects[4].description || "Travel Mobile App"}
					skills={['UI/UX Design', 'Prototyping & Pitching']}
					technologies={projects[4].technologies}
					imageClass={projects[4].imageClass.replace('-banner', '-cover')}
					link={`${base}/portfolio/${projects[4].id}`}
				/>
			</div>
		</div>
		
		<div class="row">
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title={projects[3].title}
					description={projects[3].description || "Disaster Preparedness Mobile App"}
					skills={['UI/UX Design', 'Prototyping & Pitching']}
					technologies={projects[3].technologies}
					imageClass={projects[3].imageClass.replace('-banner', '-cover')}
					link={`${base}/portfolio/${projects[3].id}`}
				/>
			</div>
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title={projects[5].title}
					description={projects[5].description || "Educational Java Game"}
					skills={['Front-end Development', 'UI/UX Design', 'Game Design']}
					technologies={projects[5].technologies}
					imageClass={projects[5].imageClass.replace('-banner', '-cover')}
					link={`${base}/portfolio/${projects[5].id}`}
				/>
			</div>
		</div>
	</div>
</article>

<style>
	.boxstyle3 {
		display: flex;
		justify-content: center;
		margin-bottom: 2em;
	}
</style>