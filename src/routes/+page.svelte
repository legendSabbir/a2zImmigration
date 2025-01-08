<script>
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const success = new Tween(0, {
    duration: 2000,
    delay: 500,
    easing: cubicOut,
  });

  success.target = 100;

  $effect(() => {
    jQuery(document).ready(function ($) {
      "use strict";
      $("#camera-slide").camera({
        height: '50%',
        minHeight: Math.min(window.innerHeight, 900) + "px",
	      thumbnails: false,
        hover: true,
        fx: 'random',
        time: 3000,
        transPeriod: 1500,
        pagination: false,
        loader: 'none'
      });
    });
  });

</script>

<svelte:head>
  <title>A2Z ImmiMigration</title>
  <link rel="stylesheet" href="/lib/camera.css" />
  <script src="/lib/jquery.js" defer></script>
  <script src="/lib/jquery.easing.1.3.js" defer></script>
  <script src="/lib/camera.js" defer></script>
</svelte:head>

<main>
  <section class="mt-16 lg:mt-0">
    
    <div class="camera_wrap overflow-hidden relative h-screen" id="camera-slide">
      <div data-src="images/hero-pattern.svg">
        <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            class="mx-auto max-w-md lg:max-w-lg -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"
          >
            <h2
              class="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 lg:mb-5 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-delay-[0.01s]/opacity motion-ease-spring-smooth"
            >
              {Math.floor(success.current)}% Success Rate
            </h2>
            <p class="text-gray-200 px-2 font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-delay-[0.5s]  motion-ease-spring-smooth">
              OISC Approved Immigration Advisors – Specialised in Sponsor License &
              Work Permit Visa
            </p>
            <button
              class="bg-white text-primary lg:text-lg font-bold font-nunito px-6 py-3 lg:px-10 lg:py-4 rounded-full mt-10 hover:bg-sky-500 hover:text-white outline outline-1 outline-offset-4 outline-white transition-colors duration-300 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-delay-[1s]  motion-ease-spring-smooth"
              >Get in touch</button
            >
          </div>
        </div>
      </div>     
      <div class="relative" data-src="images/hero-pattern.svg">
        <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            class="mx-auto max-w-md lg:max-w-lg -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"
          >
            <h2
              class="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 lg:mb-5 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-delay-[0.01s]/opacity motion-ease-spring-smooth"
            >
              {Math.floor(success.current)}% Success Rate
            </h2>
            <p class="text-gray-200 px-2 font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-delay-[0.5s]  motion-ease-spring-smooth">
              OISC Approved Immigration Advisors – Specialised in Sponsor License &
              Work Permit Visa
            </p>
            <button
              class="bg-white text-primary lg:text-lg font-bold font-nunito px-6 py-3 lg:px-10 lg:py-4 rounded-full mt-10 hover:bg-sky-500 hover:text-white outline outline-1 outline-offset-4 outline-white transition-colors duration-300 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-delay-[1s]  motion-ease-spring-smooth"
              >Get in touch</button
            >
          </div>
        </div>
      </div>
    </div>

  </section>

  <section class="py-20 lg:py-16">
    <div class="container grid gap-10 lg:gap-20 lg:grid-cols-2">

      <div class="grid place-items-center">
        <div>
          <h2 class="text-slate-900 text-center lg:text-left text-2xl md:text-3xl xl:text-4xl font-bold mb-8">Welcome to A2Z Immigration</h2>
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

  
</main>