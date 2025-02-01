<script>
  import Users from '~icons/tabler/users';
  import Coins from '~icons/tabler/coins';
  import Leaf from '~icons/tabler/leaf';
  import { viewport } from '$lib/utils/viewport';
</script>

<section class="pt-16 lg:pt-0">
  <div class="container relative">
    <div class="w-full max-w-[1024px] z-10 lg:absolute -top-16 left-1/2 lg:-translate-x-1/2 lg:-translate-y-full lg:flex">
      <div class="h-[100px] flex pl-7 pr-4 items-center gap-4 bg-primary flex-1 scale-0 data-[visible]:scale-100 transition-transform duration-[900ms] delay-[200ms] ease-out shadow-xl" use:viewport>
        <div class="p-3 bg-white text-primary">
          <Coins height="24" width="24" />
        </div>
  
        <div>
          <h3 class="font-nunito text-2xl font-bold text-white">Affordable Services</h3>
        </div>
      </div>
  
      <div class="h-[100px] flex pl-7 pr-4 items-center gap-4 bg-slate-200 flex-1 scale-0 data-[visible]:scale-100 duration-[900ms] delay-[400ms] transition-transform ease-out shadow-xl" use:viewport>
        <div class="p-3 bg-primary text-white">
          <Leaf height="24" width="24" />
        </div>
  
        <div>
          <h3 class="font-nunito text-2xl font-bold text-primary">Peace of Mind</h3>
        </div>
      </div>
  
      <div class="h-[100px] flex pl-7 pr-4 items-center gap-4 bg-primary flex-1 scale-0 data-[visible]:scale-100 duration-[900ms] delay-[600ms] transition-transform ease-out shadow-xl" use:viewport>
        <div class="p-3 bg-white text-primary">
          <Users height="24" width="24" />
        </div>
  
        <div>
          <h3 class="font-nunito text-2xl font-bold text-white">Customer Focus</h3>
        </div>
      </div>
    </div>
  </div>
</section>