<script>
  import { viewport } from '$lib/utils/viewport';
  import Star from '~icons/tabler/star';
  import Link from '~icons/tabler/external-link';
  import Send from '~icons/tabler/send';
  import Check from '~icons/tabler/discount-check';
</script>

{#snippet servicesCard(Icon, title, _class, description)}
<div class="p-4 md:p-6 bg-sky-50 rounded-xl shadow viewport-scale flex flex-col {_class}" use:viewport>
  <div class="mt-6 md:mt-0 mb-3 md:mb-4 flex items-center justify-center md:justify-start">
    <span class="p-2.5 bg-sky-200 text-sky-800 inline-flex items-center justify-center rounded-md border border-sky-100">
      <Icon height="20" width="20" />
    </span>
  </div>

  <h2 class="text-sky-950 text-lg md:text-xl font-nunito leading-tight font-bold xl:font-black text-center md:text-left mb-3">{title}</h2>

  <p class="text-slate-600 text-center mb-6 text-sm md:text-left md:text-base xl:text-lg">{description}</p>

  <a href="/" class="mt-auto flex items-center justify-center w-full h-10 md:h-12 rounded-md bg-primary text-white font-bold font-nunito btn-ripple">
    Learn more
    <Link height="20" width="20" class="ml-1 translate-x-1" />
  </a>

</div>
{/snippet}


<section class="py-10 mt-4 md:mt-10 lg:mt-40">
  <div class="container">

    <h2 class="section-title mb-12 lg:mb-20 indicator viewport" use:viewport>
      How we can help you?
      <br>
      Immigration support for your business <br> — all through a single platform
    </h2>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
      {@render servicesCard(Check, "Expert Eligibility Assessment", "lg:delay-[200ms]", "We evaluate your business to ensure it meets Home Office requirements.")}
      {@render servicesCard(Check, "Comprehensive Application Support", "lg:delay-[400ms]", "We handle the entire application process, minimising errors and delays.")}
      {@render servicesCard(Check, "Support Maintenance and Guidance on Compliance & Record-Keeping", "lg:delay-[600ms]", "We help you meet all legal obligations to maintain your licence.")}
      <!-- {@render servicesCard(Check, "Tailored Advice on Skilled Worker Sponsorship", "lg:delay-[200ms]", "We assist in identifying roles that qualify under the UK visa system.")}
      {@render servicesCard(Check, "Mock Audits & Home Office Readiness Checks", "lg:delay-[400ms]", "We provide intensive training and prepare you for Home Office inspections to ensure a successful outcome.")}
      {@render servicesCard(Check, "Ongoing Licence Management Support", "lg:delay-[600ms]", "We assist with licence renewals, reporting duties, and HR compliance updates.")}
      {@render servicesCard(Check, "Help with Certificate of Sponsorship (CoS) Allocation", "lg:delay-[200ms]", "We guide you through assigning sponsorship certificates to employees.")}
      {@render servicesCard(Check, "Support with Appeals & Reapplications", "lg:delay-[400ms]", "If your application is refused, we provide strategic assistance to rectify issues and eventually your Licence will be granted.")} -->
    </div>
  </div>
</section>