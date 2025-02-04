<script>
  import { viewport } from "$lib/utils/viewport";
  import Star from "~icons/tabler/star-filled";

  $effect(() => {
    jQuery(document).ready(function ($) {
      $(".carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText:[`<div class='nav-btn next-slide'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"/></svg></div>`, `<div class='nav-btn prev-slide'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/></svg></div>`],
        responsive: {
          0: {
            items: 1
          },
          968: {
            items: 2
          },
          1280: {
            items: 3
          }
        }
      });
    });
  })
</script>

{#snippet testimonials()}
<div class="flex flex-col gap-6 p-4 sm:p-6 lg:p-8 bg-sky-50 rounded-xl">
  <div>
    <div class="flex items-center justify-center mb-6 mt-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"/><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"/><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"/><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"/><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"/></svg>
    </div>

    <div class="flex items-center justify-center gap-3 mb-8 text-amber-400">
      {#each { length: 5 } as _, index}
        <span>
          <Star height="24" width="24"  /> 
        </span>
      {/each}
    </div>

    <p class="">We turned to a2zimmigrations for help because we didn’t know how to go about international recruitment ourselves. The team guided us through every step and simplified the hiring process immensely. The entire recruitment process is efficient and smooth, which allowed us to hire our first caregivers in December, about a month after we started working together.</p>
  </div>

  <div class="flex items-center justify-center gap-4 mb-2">
    <figure class="size-16 rounded-full bg-slate-200"></figure>
    <div>
      <p class="font-bold">John Doe</p>
      <p class="text-sm text-slate-600">Feb 03, 2025</p>
    </div>
  </div>
</div>
{/snippet}


<section class="py-10 mt-10">
  <div class="container">

    <h2 class="section-title relative mb-10 lg:mb-12 viewport" use:viewport>
      Reviews from our clients
      <span class="indicator"></span>
    </h2>
    
    <div class="owl-carousel relative carousel viewport" use:viewport>
      {#each { length: 5 } as _, index}
        {@render testimonials()}
      {/each}
    </div>

  </div>
</section>