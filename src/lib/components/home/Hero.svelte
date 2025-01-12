
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
        minHeight: Math.min(window.innerHeight - (window.innerWidth >= 968 ? 112 : 64), 1000) + "px",
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

<section>  
  <div class="camera_wrap overflow-hidden relative mt-16 lg:mt-[112px] h-[calc(100vh)]" id="camera-slide">
    <div data-src="/images/hero-1.jpg" class="">
      <div class="after:absolute after:inset-0 after:bg-[rgba(9,30,62,.7)] after:pointer-events-none after:z-10 motion-preset-fade"></div>

      <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 -mt-8">
        <div
          class="mx-auto sm:max-w-md md:max-w-xl lg:max-w-2xl -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"
        >
          <h2
            class="font-nunito text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 lg:mb-5 motion-scale-in-[0] motion-opacity-in-[0%] motion-duration-[1500ms] motion-ease-out-cubic"
          >
            100% Success Rate
          </h2>
          <p class="text-gray-200 px-2 text-sm sm:text-base font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">
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
   
    <div data-src="/images/hero-2.jpg">
      <div class="after:absolute after:inset-0 after:bg-[rgba(9,30,62,.7)] after:pointer-events-none after:z-10 motion-preset-fade"></div>

      <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 -mt-8">
        <div
          class="mx-auto sm:max-w-md md:max-w-xl lg:max-w-2xl -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"
        >
          <h2
            class="font-nunito text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 lg:mb-5 motion-scale-in-[0] motion-opacity-in-[0%] motion-duration-[1500ms] motion-ease-out-cubic"
          >
            100% Success Rate
          </h2>
          <p class="text-gray-200 px-2 text-sm sm:text-base font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">
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