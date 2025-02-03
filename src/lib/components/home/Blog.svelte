<script>
  import { viewport } from "$lib/utils/viewport";
  import ArrowRight from '~icons/ic/round-arrow-right';
</script>

{#snippet blogCard(delay, time, src, title, description)}
<div class="flex flex-col rounded-xl border bg-white border-slate-200 {delay} viewport relative z-10 after:-z-10 after:absolute after:inset-0 after:transition-shadow after:duration-[400ms] after:rounded-xl hover:after:shadow-xl after:ease-out" use:viewport>
  <figure class="w-full aspect-square max-h-[350px] rounded-xl overflow-hidden">
    <img {src} alt="blog thumbnail" height="150" width="150" loading="lazy" class="w-full h-full object-cover hover:scale-110 duration-300 transition-transform">
  </figure>

  <div class="flex-1 p-4 lg:p-6 flex flex-col">
    <span class="text-primary text-xs font-bold mb-1 uppercase">{time}</span>

    <h3 class="text-lg text-slate-700 font-bold mb-4">{title}</h3>

    <p class="font-nunito font-medium text-slate-600 mb-4">{description}</p>

    <a href="/" class="text-slate-600 py-2 flex items-center text-sm uppercase font-bold hover:text-primary mt-auto">
      Read more
      <ArrowRight height="24" width="24" class="-translate-y-px" />
    </a>
  </div>
</div>
{/snippet}


<section class="py-20">
  <div class="container">

    <h2 class="section-title mb-20 relative viewport" use:viewport>
      Blog & News
      <span class="indicator"></span>
    </h2>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {@render blogCard("lg:delay[200ms]", 'DECEMBER 19, 2024', '/images/blog-1.jpeg', 'Unlock Your Future in the UK_ All About the New Entrant Skill Visa', 'Start your UK career with the New Entrant Skill Visa—low barriers, great opportunities, tailored support.')}
      {@render blogCard("lg:delay-[400ms]", 'November 29, 2024',  '/images/blog-2.jpeg', 'Everything You Need to Know About the UK’s New Travel Authorization (ETA) for 2025', 'Starting January 2025, non-European travelers must apply for the UK ETA, a digital travel authorization streamlining UK entry processes.')}
      {@render blogCard("lg:delay-[600ms]", 'NOVEMBER 22, 2024', '/images/blog-3.webp', 'Unlock Your Dream UK Trip: The Ultimate Tourist Visa Guide', 'Your guide to a smooth UK visa!')}
    </div>

  </div>
</section>