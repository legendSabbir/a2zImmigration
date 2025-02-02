<script>

  import { viewport } from "$lib/utils/viewport";
  import ArrowRight from '~icons/tabler/arrow-right';
</script>


{#snippet stepByStepCard(num, title, description1, description2, cta)}
<div class="">
  <figure class="mb-4">
    <img src="./images/step-{num}.png" alt="step by step" class="w-full h-full object-cover">
  </figure>

  <p class="mb-4 text-lg text-slate-600">{description1}</p>

  <p class="text-lg mb-6 text-slate-600">{description2}</p>

  <a href="/" class="group text-2xl font-bold text-primary flex items-center gap-1">
    {cta}
    <ArrowRight class="ml-1 text-primary group-hover:translate-x-2 duration-500 transition-all" height="28" width="28" />
  </a>
</div>
{/snippet}

{#snippet arrowIcon(_class)}
<div class="relative hidden md:block">
  <svg xmlns="http://www.w3.org/2000/svg" width="183" height="208" viewBox="0 0 183 208" fill="none" class={_class}>
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M0.0161331 1.70401C0.136564 0.884388 0.898631 0.317577 1.71826 0.438008C38.4395 5.8336 90.2708 22.5296 126.294 55.203C144.328 71.5604 158.433 91.9542 164.645 116.959C170.618 140.998 169.265 169.177 157.265 201.954L180.416 188.341C181.13 187.922 182.049 188.16 182.469 188.874C182.889 189.588 182.651 190.508 181.936 190.927L155.122 206.694L153.556 207.615L152.948 205.903L142.953 177.766C142.676 176.985 143.084 176.127 143.864 175.85C144.645 175.573 145.502 175.981 145.78 176.762L154.404 201.04C166.275 168.679 167.546 141.076 161.734 117.682C155.693 93.3686 141.967 73.4695 124.278 57.4251C88.8545 25.2951 37.6694 8.75265 1.28214 3.40614C0.462513 3.28571 -0.104298 2.52364 0.0161331 1.70401Z" fill="#06a3da"/>
  </svg>
</div>
{/snippet}


<section class="py-10 mt-10 lg:mt-40">
  <div class="container">

    <h2 class="section-title mb-20 lg:mb-32 indicator viewport" use:viewport>
      Step-by-Step Guide to UK
      <br> Skilled Worker Visa Sponsorship
    </h2>

    <div class="max-w-[940px] mx-auto space-y-6 md:space-y-2">
      <div class="grid md:grid-cols-2">
        {@render stepByStepCard(1, "Become a Licenced Sponsor", "Apply for a sponsor licence to hire international talent.", "We guide you through preparing and submitting the application, ensuring all documentation meets Home Office requirements.", "Get your sponsor licence")}
        {@render arrowIcon("absolute top-28 left-6")}
      </div>
      <div class="grid md:grid-cols-2">
        {@render arrowIcon("absolute top-28 right-6 scale-x-[-1]")}
        {@render stepByStepCard(2, "Become a Licenced Sponsor", "Assign a CoS to candidates who meet job and skill requirements.", "We help secure and allocate the correct type of CoS, ensuring your candidate satisfies salary and skill criteria to avoid delays in the visa process.", "Assign a CoS")}
      </div>
      <div class="grid md:grid-cols-2">
        {@render stepByStepCard(3, "Become a Licenced Sponsor", "With the CoS assigned, your candidate can then apply for their Skilled Worker Visa.", "A2zImmigrations takes care of the entire process, keeping you updated along the way. We also provide a free candidate eligibility check to avoid visa rejections.", "Stay Compliant and Audit-Ready")}
        {@render arrowIcon("absolute top-28 left-6")}
      </div>
      <div class="grid md:grid-cols-2">
        {@render arrowIcon("absolute top-28 right-6 scale-x-[-1] hidden")}
        {@render stepByStepCard(4, "Become a Licenced Sponsor", "As a sponsor, you have to track employee records, report any changes in employment status, and monitor visa expiration dates.", "A2zImmigrations keeps you ready for Home Office audits and helps with essential compliance management to avoid costly penalties", "Stay Compliant and Audit-Ready")}
      </div>
    </div>

  </div>
</section>