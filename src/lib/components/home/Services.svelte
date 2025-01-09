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
  import ArrowRight from '~icons/ic/round-arrow-right';
</script>

{#snippet servicesCard(Icon, title, description)}
<div class="hover:outline outline-primary">
  <div class="bg-white px-4 sm:px-6 md:px-4 xl:px-6 pt-8 pb-2 flex flex-col items-center justify-center gap-8 viewport" use:viewport>
    <div class="p-3 lg:p-5 bg-primary text-white flex items-center justify-center rotate-45">
      <Icon height="40" width="40" class="-rotate-45 size-8 lg:size-10" />
    </div>
  
    <div>
      <h3 class="text-center text-xl font-bold text-slate-800 mb-2">{title}</h3> 
      <p class="line-clamp-2 text-slate-600 font-nunito font-medium mb-2">{description}</p>
      <div class="flex items-center justify-center">
        <a href="/" class="text-slate-600 text-sm uppercase font-bold p-2 flex items-center justify-center hover:text-primary">
          Learn more
          <ArrowRight height="24" width="24" />
        </a>
      </div>
    </div>
  </div>
</div>
{/snippet}

<section class="pb-20">
  <div class="container">

    <h2 class="section-title mb-12 viewport" use:viewport>Our Services</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {@render servicesCard(Passport, "Visit Visa", "The Visit Visa is designed for individuals who wish to visit the UK for tourism, leisure, business, or to meet family and friends. It allows you to stay in the UK for a limited period, typically up to six months, depending on the purpose of your visit.")}
      {@render servicesCard(Worker, 'Skilled Worker Visa', "The Skilled Worker Visa is part of the UK’s Points-Based Immigration System, designed to enable employers to hire skilled workers from overseas. This visa replaced the Tier 2 (General) Visa and is open to both EU and non-EU citizens.")}
      {@render servicesCard(Student, 'Student Visa', "We offer comprehensive services to helping aspiring students achieve their academic dreams by providing expert assistance in securing offers.")}
      {@render servicesCard(Graduate, 'Graduate Visa', "The UK Graduate visa allows international students to remain in the UK for a limited period after completing their studies. We provide specialist Home Office application support.")}
      {@render servicesCard(Passport, 'Spouse Visa', "The Spouse Visa allows British citizens and settled individuals (those with Indefinite Leave to Remain) in the UK to bring their foreign spouses.")}
      {@render servicesCard(Passport, 'ADR Visa', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(Renew, 'Renew Passport', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family.")}
      {@render servicesCard(Check, 'Indefinite Leave to Remain', "The UK Graduate visa allows international students to remain in the UK for a limited period after completing their studies. We provide specialist Home Office application support.")}
      {@render servicesCard(Euro, 'EU Settlement Scheme', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(License, 'Sponsor License', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(Hand, 'Naturalisation', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
      {@render servicesCard(Business, 'Entrepreneur Extension Visa', "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.")}
    </div>

  </div>
</section>