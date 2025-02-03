<script>
  import Blog from "$lib/components/home/Blog.svelte";
  import BrandCarousel from "$lib/components/home/BrandCarousel.svelte";
  import Facts from "$lib/components/home/Facts.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import Message from "$lib/components/home/Message.svelte";
  import Reviews from "$lib/components/home/Reviews.svelte";
  import Services from "$lib/components/home/Services.svelte";
  import StartJourney from "$lib/components/home/StartJourney.svelte";
  import StepByStep from "$lib/components/home/StepByStep.svelte";
  import Welcome from "$lib/components/home/Welcome.svelte";
  import Works from "$lib/components/home/Works.svelte";
</script>

<svelte:head>
  <title>A2Z ImmiMigration</title>
</svelte:head>

<main class="overflow-hidden">
  <Hero />
  <Facts />
  <BrandCarousel />
  <Welcome />
  <Services />
  <StartJourney />
  <StepByStep />
  <Reviews />
  <Blog />
</main>