<script>
  $effect(() => {
    jQuery(document).ready(function ($) {
      $("#camera-slide").camera({
        height: Math.min(window.innerHeight - (window.innerWidth >= 968 ? 72 : 64), 1200) + "px",
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

{#snippet content(src)}
<div data-src={src}>
  <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 -mt-8">
    <div
      class="mx-auto lg:max-w-6xl -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"
    >
      <h1 class="font-nunito sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 lg:mb-5 motion-scale-in-[0] motion-opacity-in-[0%] motion-duration-[1500ms] motion-ease-out-cubic">
        Get your Sponsor Licence & Work Permit Visas
        with Comprehensive Immigration Support.
      </h1>
      <a
        href="/contact"
        class="bg-white text-primary text-sm md:text-base lg:text-lg font-bold font-nunito px-6 py-3 lg:px-10 lg:py-4 rounded-full mt-10 hover:bg-sky-500 hover:text-white outline outline-1 outline-offset-4 outline-white transition-colors duration-300 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth"
        >Book a free consultation</a>
    </div>
  </div>
</div>
{/snippet}

<section>
  <div class="camera_wrap overflow-hidden relative mt-16 lg:mt-[72px] h-[calc(100vh-64px)] lg:h-[calc(100vh-72px)]" id="camera-slide">
    {@render content("/images/hero-1.jpg")}
    {@render content("/images/hero-2.jpg")}
  </div>
</section>