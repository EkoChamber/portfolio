<script>
	import { onMount } from 'svelte';

	let showLogos = false;

	onMount(() => {
		setTimeout(() => {
			showLogos = true;
		}, 100);
	});
</script>

<article id="home" class="wrapper style1">
  <div class="container center-content">
    <div class="content-wrapper">
      <div class="row">
        <div class="boxstyle3 logo" class:show={showLogos}>
          <img src="/images/aneko.png" alt="Aneko" draggable="false" />
        </div>
        <div class="boxstyle4 logo" class:show={showLogos}>
          <img src="/images/delfin.png" alt="Delfin" draggable="false" />
        </div>
      </div>
      <p class="tagline">Developer, designer, and everything in between.</p>
    </div>
  </div>
</article>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #000;
  }

  :global(article#home) {
    background-image: url('/images/gradient.png');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .content-wrapper {
    text-align: left;
    padding-bottom: 10vh;
  }
  
  .row {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .logo {
    opacity: 0;
    transform: scale(0.7) translateY(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .logo.show {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  
  .boxstyle3 img, .boxstyle4 img {
    max-width: 100%;
    height: auto;
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  
  .tagline {
    font-size: 24px;
    color: white;
    margin-top: 1rem;
    text-align: left;
  }

  @media (max-width: 1000px) {
    .tagline {
      text-align: center;
    }
    
    .row {
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }
    
    .boxstyle3 {
      margin-bottom: -2.5em;
    }

    .boxstyle4 {
      margin-bottom: 0;
    }
  }
</style>