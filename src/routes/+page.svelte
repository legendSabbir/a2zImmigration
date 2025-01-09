<script>
  import Facts from "$lib/components/home/Facts.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import Welcome from "$lib/components/home/Welcome.svelte";
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


  <section class="">
    <div class="container">

      <h2 class="text-slate-800 text-center text-2xl md:text-3xl xl:text-4xl font-bold mb-8">Our Services</h2>

      <div>

        <div class="px-4 py-8 bg-white hover:border hover:border-primary">

        </div>

      </div>

    </div>
  </section>
</main>