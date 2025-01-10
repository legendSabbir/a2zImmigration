<script>
  import People from '~icons/ic/round-people';
  import Star from '~icons/ic/round-star';
  import Check from '~icons/ic/round-check';
  import { Tween } from "svelte/motion";
  import { linear } from "svelte/easing";
  import { viewport } from '$lib/utils/viewport';


  const clients = new Tween(0, {
    duration: 2500,
    easing: linear,
  });

  const reviews = new Tween(0, {
    duration: 2500,
    delay: 300,
    easing: linear,
  });

  const success = new Tween(0, {
    duration: 2500,
    delay: 600,
    easing: linear,
  });
</script>

<section class="pt-16 lg:pt-0 lg:pb-16">
  <div class="container relative">
    <div class="w-full max-w-[968px] z-10 lg:absolute top-0 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex">
      <div class="h-[120px] lg:h-[150px] flex pl-10 pr-4 items-center gap-6 bg-primary flex-1 scale-0 data-[visible]:scale-100 transition-transform duration-[900ms] ease-out shadow-xl" onenterViewport={() => clients.target = 60} use:viewport>
        <div class="p-3.5 bg-white text-primary">
          <People height="32" width="32" />
        </div>
  
        <div>
          <h3 class="font-nunito text-xl font-bold text-white">Clients</h3>
          <p class="text-white font-nunito font-extrabold text-3xl lg:text-4xl">{Math.floor(clients.current)}+</p>
        </div>
      </div>
  
      <div class="h-[120px] lg:h-[150px] flex pl-10 pr-4 items-center gap-6 bg-slate-200 flex-1 scale-0 data-[visible]:scale-100 duration-[900ms] delay-[200ms] transition-transform ease-out shadow-xl" onenterViewport={() => reviews.target = 60}  use:viewport>
        <div class="p-3.5 bg-primary text-white">
          <Star height="32" width="32" />
        </div>
  
        <div>
          <h3 class="font-nunito text-xl font-bold text-primary">Positive Reviews</h3>
          <p class="font-nunito font-extrabold text-3xl lg:text-4xl text-slate-800">{Math.floor(reviews.current)}+</p>
        </div>
      </div>
  
      <div class="h-[120px] lg:h-[150px] flex pl-10 pr-4 items-center gap-6 bg-primary flex-1 scale-0 data-[visible]:scale-100 duration-[900ms] delay-[400ms] transition-transform ease-out shadow-xl" onenterViewport={() => success.target = 100} use:viewport>
        <div class="p-3.5 bg-white text-primary">
          <Check height="32" width="32" />
        </div>
  
        <div>
          <h3 class="font-nunito text-xl font-bold text-white">Sucess Rate</h3>
          <p class="text-white font-nunito font-extrabold text-3xl lg:text-4xl">{Math.floor(success.current)}%</p>
        </div>
      </div>
    </div>

  </div>
</section>