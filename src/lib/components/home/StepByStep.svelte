<script>

  import { viewport } from "$lib/utils/viewport";

</script>


{#snippet stepByStepCard(num, title, description1, description2, cta)}
<div class="">
  <div class="h-[220px] p-6 bg-sky-100 flex flex-col rounded-xl relative overflow-hidden">
    <span class="font-nunito font-bold text-4xl absolute top-0 left-0 size-14 bg-white grid place-items-center rounded-ee-xl after:absolute after:size-5 after:bottom-0 after:left-0 after:bg-sky-100 after:translate-y-full after:rounded-full after:shadow-[-2px_-2px_0px_0px_rgb(255,255,255)] before:absolute before:size-5 before:top-0 before:right-0 before:bg-sky-100 before:translate-x-full before:rounded-full before:shadow-[-2px_-2px_0px_0px_rgb(255,255,255)]">{num}</span>
    <h3 class="mt-auto font-nunito font-bold text-2xl md:text-3xl max-w-sm text-slate-700">{title}</h3>
  </div>
</div>
{/snippet}


<section class="py-20">
  <div class="container">

    <h2 class="section-title mb-12 lg:mb-20 indicator viewport" use:viewport>
      Step-by-Step Guide to UK
      <br> Skilled Worker Visa Sponsorship
    </h2>

    <div class="grid grid-cols-2 max-w-4xl">
      {@render stepByStepCard(1, "Become a Licenced Sponsor", "Apply for a sponsor licence to hire international talent.", "We guide you through preparing and submitting the application, ensuring all documentation meets Home Office requirements.", "Get your sponsor licence")}
    </div>

  </div>
</section>