<script>
  import { viewport } from '$lib/utils/viewport';
</script>

{#snippet listItem(content)}
  <li class="mb-5 md:mb-4 flex gap-4 text-slate-600">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="rotate-90 shrink-0"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18l-7 3l7-18l7 18zm0 0v-5"/></svg>
    <span class="font-medium text-sm md:text-base">{content}</span>
  </li>
{/snippet}


<section class="py-20 lg:py-28">
  <div class="container grid gap-10 lg:gap-20 lg:grid-cols-2">

    <div class="grid place-items-center viewport-left" use:viewport>
      <img src="/images/banner-1.svg" alt="hero banner" loading="lazy" class="w-full max-w-md">
    </div>

    <div class="grid place-items-center">
      <div>
        <h2 class="section-title lg:text-left mb-12 lg:mb-14 viewport-right indicator lg:indicator-left lg:after:-bottom-4 lg:before:-bottom-4" use:viewport>Why You Need Sponsor Licence?</h2>
        <ul>
          {@render listItem("Recruit Skilled Workers from Outside UK to fill talent gaps.")}
          {@render listItem("Hire Right Talent to drive Innovation and Business Growth.")}
          {@render listItem("Support your Business Expansion Plan")}
          {@render listItem("Stay Competitive in your Industry with Highly Skilled Workers")}
          {@render listItem("Allow you to legally employ non-UK workers")}
          {@render listItem("Long term Staff Retention & Peace of Mind")}
        </ul>
      </div>
    </div>

  </div>
</section>