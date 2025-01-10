<script>
  import { viewport } from "$lib/utils/viewport";
  import Check from "~icons/heroicons-solid/check";
</script>

{#snippet workListItem(text)}
<li class="font-nunito font-bold flex gap-4">
  <Check class="size-6 text-emerald-500 shrink-0" />
  {text}
</li>
{/snippet}

<section class="pt-4 pb-8 lg:py-24">
  <div class="container">
    <div class=" grid gap-14 lg:gap-20 lg:grid-cols-2 max-w-[1024px] mx-auto">

      <div class="">
        <div>
          <h2 class="section-title lg:text-left mb-12 lg:mb-20 scale-100 viewport indicator lg:indicator-left" use:viewport>What we do</h2>
  
          <ul use:viewport class="viewport-scale text-slate-600 space-y-4 mb-10">
            {@render workListItem('Skilled Worker Sponsorship Management Services')}
            {@render workListItem('Hand-holding support across all stages of applications')}
            {@render workListItem('Support to draft online application')}
            {@render workListItem('Support to collate appropriate supporting Documentation')}
            {@render workListItem('Providing template HR Compliance')}
            {@render workListItem('Auditing HR systems and Procedures')}
            {@render workListItem('Support towards Job Advertisement & Recruitment Process')}
            {@render workListItem('Provide training inmanaging and retaining license')}
          </ul>
  
          <button class="delay-[200ms] bg-primary text-white px-8 py-3 font-medium rounded btn-ripple viewport-scale" use:viewport>Get in touch</button>
        </div>
      </div>
  
      <div class="grid place-items-center delay-200 viewport-scale" use:viewport>
        <img src="/images/banner-2.svg" alt="hero banner" height="923" width="1142" class="w-full max-w-md">
      </div>

    </div>
  </div>
</section>