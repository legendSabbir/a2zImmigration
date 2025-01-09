<script>
  import Facts from "$lib/components/home/Facts.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import Services from "$lib/components/home/Services.svelte";
  import Welcome from "$lib/components/home/Welcome.svelte";
  import Works from "$lib/components/home/Works.svelte";
</script>

<svelte:head>
  <title>A2Z ImmiMigration</title>
  <link rel="stylesheet" href="/lib/camera.css" />
  <script src="/lib/jquery.js" defer></script>
  <script src="/lib/jquery.easing.1.3.js" defer></script>
  <script src="/lib/camera.js" defer></script>
</svelte:head>

<main>
  <Hero />
  <Facts />
  <Welcome />
  <Services />
  <Works />
</main>