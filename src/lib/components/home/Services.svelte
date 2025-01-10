<script>
  import { viewport } from '$lib/utils/viewport';
  import Passport from '~icons/mdi/passport-check';
  import Worker from '~icons/ic/round-construction';
  import Graduate from '~icons/fa-solid/user-graduate';
  import Renew from '~icons/wpf/renew-subscription';
  import Check from '~icons/heroicons-solid/badge-check';
  import Euro from '~icons/heroicons-solid/currency-euro';
  import Apartment from '~icons/ic/round-apartment';
  import Student from '~icons/ic/round-school';
  import License from '~icons/mdi/drivers-license';
  import Hand from '~icons/fa-solid/hand-holding-heart';
  import Business from '~icons/mdi/business-outline';
  import ArrowRight from '~icons/heroicons-solid/arrow-right';
</script>

{#snippet servicesCard(Icon, title, _class, description)}
<div class="relative group rounded-xl">
  <div class="bg-sky-100 px-4 sm:px-6 md:px-4 xl:px-6 pt-8 pb-8 flex flex-col items-center justify-center gap-8 rounded-lg relative viewport-scale {_class}" use:viewport>
    <div class="p-3 lg:p-5 bg-primary text-white flex items-center justify-center rotate-45">
      <Icon height="40" width="40" class="-rotate-45 size-8 lg:size-10" />
    </div>
  
    <div>
      <h3 class="text-center text-xl font-bold text-slate-800 mb-2">{title}</h3> 
      <p class="line-clamp-2 text-slate-600 font-nunito font-medium mb-2">{description}</p>
    </div>

  </div>
  <a href="/" class="px-4 py-3 bg-primary text-white absolute z-20 bottom-0 left-1/2 -translate-x-1/2 translate-y-[100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-[500ms] ease-out">
    <ArrowRight height="24" width="24" />
  </a>
</div>
{/snippet}

<section class="pb-20">
  <div class="container">

    <h2 class="section-title mb-12 lg:mb-20 viewport indicator" use:viewport>Our Services</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
      {@render servicesCard(Passport, "Visit Visa", "lg:delay-[200ms]", "The Visit Visa is designed for individuals who wish to visit the UK for tourism, leisure, business, or to meet family and friends. It allows you to stay in the UK for a limited period, typically up to six months, depending on the purpose of your visit.")}
      {@render servicesCard(Worker, 'Skilled Worker Visa', 'lg:delay-[400ms]',"The Skilled Worker Visa is part of the UK’s Points-Based Immigration System, designed to enable employers to hire skilled workers from overseas. This visa replaced the Tier 2 (General) Visa and is open to both EU and non-EU citizens.")}
      {@render servicesCard(Student, 'Student Visa', 'lg:delay-[600ms]', "We offer comprehensive services to helping aspiring students achieve their academic dreams by providing expert assistance in securing offers.")}
      {@render servicesCard(Graduate, 'Graduate Visa', 'lg:delay-[200ms]', "The UK Graduate visa allows international students to remain in the UK for a limited period after completing their studies. We provide specialist Home Office application support.")}
      {@render servicesCard(Passport, 'Spouse Visa', 'lg:delay-[400ms]', "The Spouse Visa allows British citizens and settled individuals (those with Indefinite Leave to Remain) in the UK to bring their foreign spouses.")}
      {@render servicesCard(Passport, 'ADR Visa', 'lg:delay-[600ms]', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(Renew, 'Renew Passport', 'lg:delay-[200ms]', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family.")}
      {@render servicesCard(Check, 'Indefinite Leave to Remain', 'lg:delay-[400ms]', "The UK Graduate visa allows international students to remain in the UK for a limited period after completing their studies. We provide specialist Home Office application support.")}
      {@render servicesCard(Euro, 'EU Settlement Scheme', 'lg:delay-[600ms]', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(License, 'Sponsor License', 'lg:delay-[200ms]', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(Hand, 'Naturalisation', 'lg:delay-[400ms]', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(Business, 'Entrepreneur Extension Visa', 'lg:delay-[600ms]', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
    </div>

  </div>
</section>