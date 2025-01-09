<script>
  import Facts from "$lib/components/home/Facts.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
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
  

  <section class="py-20 lg:py-16">
    <div class="container grid gap-10 lg:gap-20 lg:grid-cols-2">

      <div class="grid place-items-center">
        <div>
          <h2 class="text-slate-800 text-center lg:text-left text-2xl md:text-3xl xl:text-4xl font-bold mb-8">Welcome to A2Z Immigration</h2>
          <div>
            <p class="font-nunito font-medium md:text-lg text-slate-600 mb-6">A2Z Immigration Solution Limited has spent the last 5 years as region leader in UK Immigration Law. We have been a fully OISC regulated immigration firm for over 5 years now and have
              specialised in immigration matters.
            </p>
            <p class="font-nunito font-medium md:text-lg text-slate-600">
              Our expert team have more than 50 years of combined immigration expertise. We have proudly handled more than 30 immigration cases and our general success rate has been over 100% across all application types, so we are the go to experts for all matters regarding UK immigration laws, applications and procedures.
            </p>
          </div>
        </div>
      </div>

      <div class="grid place-items-center">
        <img src="/images/banner-1.svg" alt="hero banner" class="max-w-md">
      </div>

    </div>
  </section>


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