<script>
  import Blog from "$lib/components/home/Blog.svelte";
  import BrandCarousel from "$lib/components/home/BrandCarousel.svelte";
  import Facts from "$lib/components/home/Facts.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import Message from "$lib/components/home/Message.svelte";
  import Services from "$lib/components/home/Services.svelte";
  import StartJourney from "$lib/components/home/StartJourney.svelte";
  import Welcome from "$lib/components/home/Welcome.svelte";
  import Works from "$lib/components/home/Works.svelte";
</script>

<svelte:head>
  <title>A2Z ImmiMigration</title>
  <link rel="stylesheet" href="/lib/camera.css" />
  <script src="/lib/jquery.js"></script>
  <script src="/lib/jquery.easing.1.3.js"></script>
  <script src="/lib/camera.js"></script>
  <link rel="preload" href="/images/hero-1.jpg" as="image">
  <link rel="preload" href="/images/hero-2.jpg" as="image">
</svelte:head>

<main class="overflow-hidden">
  <Hero />
  <Facts />
  <BrandCarousel />
  <Welcome />
  <Services />
  <StartJourney />
  <Works />
  <Message />
  <Blog />
</main>