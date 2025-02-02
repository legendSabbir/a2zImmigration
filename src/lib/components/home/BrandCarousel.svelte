<script>
  const images = [
    "https://s3.nationbetter.uk/Caprice_8e3db5d1cd.svg 1x, https://s3.nationbetter.uk/Caprice_8e3db5d1cd.svg 2x",
    "https://s3.nationbetter.uk/Thingtrax_d455fb06c8.svg 1x, https://s3.nationbetter.uk/Thingtrax_d455fb06c8.svg 2x",
    "https://s3.nationbetter.uk/Arora_34c8ccc58e.svg 1x, https://s3.nationbetter.uk/Arora_34c8ccc58e.svg 2x",
    "https://s3.nationbetter.uk/Penhellis_1e34fe840a.svg 1x, https://s3.nationbetter.uk/Penhellis_1e34fe840a.svg 2x",
    "https://s3.nationbetter.uk/Lumen_35d0521664.svg 1x, https://s3.nationbetter.uk/Lumen_35d0521664.svg 2x",
    "https://s3.nationbetter.uk/Tatu_d244f1d499.svg 1x, https://s3.nationbetter.uk/Tatu_d244f1d499.svg 2x",
    "https://s3.nationbetter.uk/In_Paella_Limited_3a8f383f0a.svg 1x, https://s3.nationbetter.uk/In_Paella_Limited_3a8f383f0a.svg 2x",
    "https://s3.nationbetter.uk/Tortilla_ff8fb1ccbb.svg 1x, https://s3.nationbetter.uk/Tortilla_ff8fb1ccbb.svg 2x"
  ];
</script>

{#snippet brandRow()}
<div class="shrink-0 flex items-center slide">
  {#each images as img}
    <img srcset={img} alt="brand logo" class="h-10 w-16 mr-8 md:mr-12 lg:mr-20 sm:w-24 md:w-28 lg:w-36 xl:w-40 shrink-0 hover:scale-125 duration-500 transition-transform">
  {/each}
</div>
{/snippet}

<div class="py-[72px] lg:py-28 bg-primary mt-16 lg:mt-0">
  <p class="font-bold px-4 text-white text-center md:text-xl lg:text-2xl mb-10 md:mb-16 lg:mb-20">Trusted by UK Employers Across Industries</p>

  <div class="relative flex mb-2 md:mb-10 lg:mb-10 slider">
    {@render brandRow()}
    {@render brandRow()}
    {@render brandRow()}
  </div>
  <div class="relative flex row-2 slider">
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
    background: linear-gradient(90deg, rgb(var(--primary-color)) 51.55%, rgb(var(--primary-color), 0.1) 85.21%);
  }
  .slider::after { 
    left: auto;
    right: 0;
    background: linear-gradient(270deg, rgb(var(--primary-color)) 51.55%, rgb(var(--primary-color), 0.1) 85.21%);
   }


  .slider {
    @apply [--size:60px] md:[--size:80px] lg:[--size:160px] xl:[--size:200px];
  }


  @keyframes slide {
    to { transform: translateX(-100%) }
  }
</style>