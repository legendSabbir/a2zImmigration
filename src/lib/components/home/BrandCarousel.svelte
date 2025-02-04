{#snippet brandRow()}
<div class="shrink-0 flex items-center slide">
  <img src="/images/logo-1.png" class="w-28 md:w-36 md:mr-4 lg:mr-8 lg:w-44 hover:scale-125 transition-transform duration-500" alt="brand logo">
  <img src="/images/logo-2.png" class="w-28 md:w-36 md:mr-4 lg:mr-8 lg:w-44 hover:scale-125 transition-transform duration-500" alt="brand logo">
  <img src="/images/logo-3.png" class="w-12 -ml-2 mr-7 md:w-14 md:mr-12 lg:mr-20 lg:w-20 hover:scale-125 transition-transform duration-500" alt="brand logo">
  <img src="/images/logo-4.png" class="w-20 mr-7 md:w-24 md:mr-10 lg:mr-[72px] lg:w-36 hover:scale-125 transition-transform duration-500" alt="brand logo">
  <img src="/images/logo-5.png" class="w-12 mr-4 md:w-14 md:mr-8 lg:mr-10 lg:w-20 hover:scale-125 transition-transform duration-500" alt="brand logo">
  <img src="/images/logo-6.png" class="w-16 mr-6 md:w-20 md:mr-12 lg:mr-20 lg:w-28 hover:scale-125 transition-transform duration-500" alt="brand logo">
  <img src="/images/logo-7.jpeg" class="w-9 mr-7 md:w-10 md:mr-12 lg:mr-20 lg:w-16 hover:scale-125 transition-transform duration-500" alt="brand logo">
  <img src="/images/logo-8.png" class="w-14 mr-6 md:w-16 md:mr-12 lg:mr-20 lg:w-24 hover:scale-125 transition-transform duration-500" alt="brand logo">
</div>
{/snippet}

<div class="py-[72px] lg:py-28 mt-16 lg:mt-24">
  <h3 class="font-bold px-4 text-slate-800 text-center md:text-xl lg:text-2xl mb-10 md:mb-16">Trusted by UK Employers Across Industries</h3>

  <div class="relative flex slider h-20 lg:h-28 lg:mb-6">
    {@render brandRow()}
    {@render brandRow()}
    {@render brandRow()}
  </div>
  <div class="relative flex row-2 h-20 lg:h-28 slider">
    {@render brandRow()}
    {@render brandRow()}
    {@render brandRow()}
  </div>
</div>

<style>
  .slide {
    animation: slide 35s linear infinite;
  }

  /* .slider:hover .slide {
    animation-play-state: paused;
  } */

  .row-2 .slide { animation-direction: reverse; }

  .slider::before,
  .slider::after {
    content: "";
    position: absolute;
    height: 100%;
    z-index: 2;
    width: var(--size);
    top: 0;
    left: 0;
    background: linear-gradient(90deg, white 51.55%, rgb(255, 255, 255, 0.1) 85.21%);
  }
  .slider::after { 
    left: auto;
    right: 0;
    background: linear-gradient(270deg, white 51.55%, rgb(255, 255, 255, 0.1) 85.21%);
   }


  .slider {
    @apply [--size:60px] md:[--size:80px] lg:[--size:160px] xl:[--size:200px];
  }


  @keyframes slide {
    to { transform: translateX(-100%) }
  }
</style>