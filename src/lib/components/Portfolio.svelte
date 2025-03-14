<script>
	import ProjectCard from './ProjectCard.svelte';
</script>

<article id="portfolio" class="wrapper style2">
	<div class="containerrow">
		<header>
			<div class="boxstyle3">
				<img src="/images/portfolio.png" style="height: 75px; width: auto; margin-bottom: 5em;" alt="" />
			</div>
		</header>
		
		<div class="row">
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title="Bridging The Gap"
					description="Data science project"
					year="2024"
					imageClass="gap-cover"
					link="/portfolio/bridging-the-gap"
				/>
			</div>
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title="Assembler"
					description=""
					year="2024"
					imageClass="assembler-cover"
					link="/portfolio/assembler"
				/>
			</div>
		</div>
		
		<div class="row">
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title="BitWise"
					description="Mobile app for computer science learning"
					year="2022"
					imageClass="bitwise-cover"
					link="/portfolio/bitwise"
				/>
			</div>
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title="JOT"
					description="Productivity app"
					year="2022"
					imageClass="jot-cover"
					link="/portfolio/jot"
				/>
			</div>
		</div>
		
		<div class="row">
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title="Laging Handa"
					description="Emergency app"
					year="2021"
					imageClass="handa-cover"
					link="/portfolio/laging-handa"
				/>
			</div>
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title="BuTuWhere"
					description="Travel app"
					year="2021"
					imageClass="butuwhere-cover"
					link="/portfolio/butuwhere"
				/>
			</div>
		</div>
		
		<div class="row">
			<div class="col-6 col-6-medium col-12-small">
				<ProjectCard 
					title="Guess That Baby!"
					description="Educational game on Mendelian genetics"
					year="2021"
					imageClass="baby-cover"
					link="/portfolio/guess-that-baby"
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