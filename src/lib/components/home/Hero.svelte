
<script>
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const success = new Tween(0, {
    duration: 2000,
    delay: 500,
    easing: cubicOut,
  });

  $effect(() => {
    jQuery(document).ready(function ($) {
      "use strict";
      $("#camera-slide").camera({
        height: '50%',
        minHeight: Math.min(window.innerHeight + 150, 1100) + "px",
	      thumbnails: false,
        hover: true,
        fx: 'random',
        time: 3000,
        transPeriod: 1500,
        pagination: false,
        loader: 'none'
      });
    });

    success.target = 100;
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="/lib/camera.css" />
  <script src="/lib/jquery.js" defer></script>
  <script src="/lib/jquery.easing.1.3.js" defer></script>
  <script src="/lib/camera.js" defer></script>
</svelte:head>

<section>
  <div class="camera_wrap overflow-hidden relative h-[calc(100vh+150px)]" id="camera-slide">
    <div data-src="images/hero-pattern.svg">
      <img src="images/hero-pattern.svg" alt="hero-pattern" class="sr-only" />
      <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8">
        <div
          class="mx-auto max-w-md lg:max-w-lg -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"
        >
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 lg:mb-5 motion-scale-in-[0] motion-opacity-in-[0%] motion-duration-[0.90s] motion-ease-out-cubic"
          >
            100% Success Rate
          </h2>
          <p class="text-gray-200 px-2 font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">
            OISC Approved Immigration Advisors – Specialised in Sponsor License &
            Work Permit Visa
          </p>
          <button
            class="bg-white text-primary lg:text-lg font-bold font-nunito px-6 py-3 lg:px-10 lg:py-4 rounded-full mt-10 hover:bg-sky-500 hover:text-white outline outline-1 outline-offset-4 outline-white transition-colors duration-300 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth"
            >Get in touch</button
          >
        </div>
      </div>
    </div>
    <div data-src="images/hero-pattern.svg">
      <img src="images/hero-pattern.svg" alt="hero-pattern" class="sr-only" />
      <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8">
        <div
          class="mx-auto max-w-md lg:max-w-lg -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"
        >
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 lg:mb-5 motion-scale-in-[0] motion-opacity-in-[0%] motion-duration-[0.90s] motion-ease-out-cubic"
          >
            100% Success Rate
          </h2>
          <p class="text-gray-200 px-2 font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">
            OISC Approved Immigration Advisors – Specialised in Sponsor License &
            Work Permit Visa
          </p>
          <button
            class="bg-white text-primary lg:text-lg font-bold font-nunito px-6 py-3 lg:px-10 lg:py-4 rounded-full mt-10 hover:bg-sky-500 hover:text-white outline outline-1 outline-offset-4 outline-white transition-colors duration-300 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth"
            >Get in touch</button
          >
        </div>
      </div>
    </div>
  </div>
</section>