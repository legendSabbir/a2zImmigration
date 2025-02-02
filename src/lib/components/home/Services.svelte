<script>
  import { viewport } from '$lib/utils/viewport';
  import Star from '~icons/tabler/star';
  import Link from '~icons/tabler/external-link';
  import Send from '~icons/tabler/send';
  import Check from '~icons/tabler/discount-check';
</script>

{#snippet servicesCard(Icon, title, _class, description)}
<div class="p-4 md:p-6 bg-sky-50 rounded-xl shadow viewport-scale {_class}" use:viewport>
  <div class="mt-6 md:mt-0 mb-3 md:mb-4 flex items-center justify-center md:justify-start">
    <span class="p-2.5 bg-sky-200 text-slate-800 inline-flex items-center justify-center rounded-md border border-sky-100">
      <Icon height="20" width="20" />
    </span>
  </div>

  <h2 class="text-sky-950 text-2xl md:text-2xl font-nunito font-bold xl:font-black text-center md:text-left mb-3">{title}</h2>

  <p class="text-slate-600 text-center mb-6 text-sm md:text-left md:text-base xl:text-lg">{description}</p>

  <a href="/" class="flex items-center justify-center w-full h-10 md:h-12 rounded-md bg-primary text-white font-bold font-nunito btn-ripple">
    Learn more
    <Link height="20" width="20" class="ml-1 translate-x-1" />
  </a>

</div>
{/snippet}



<section class="pb-20">
  <div class="container">

    <h2 class="section-title mb-8 lg:mb-12 viewport indicator lg:after:-bottom-4 lg:before:-bottom-4" use:viewport>How we can help you?</h2>
    <p class="text-center mb-8 lg:mb-16 text-slate-600 viewport" use:viewport>Immigration support for your business <br> — all through a single platform</p>

    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
      {@render servicesCard(Star, "Sponsor Licence", "lg:delay-[200ms]", "We guide you through every step of sponsor licence application, so you can bring in the skilled talent your team needs — without the hassle")}
      {@render servicesCard(Send, "Skilled Worker Visa", "lg:delay-[400ms]", "We’ll take care of the whole visa process — from eligibility checks to paperwork — making it easy for your chosen candidates to join your team")}
      {@render servicesCard(Check, "Compliance and Audit", "lg:delay-[600ms]", "We provide ongoing support to keep your sponsor status safe and avoid costly penalties — from record —keeping to prepping for Home Office audits")}
    </div>
  </div>
</section>