<script>
	import '../app.css';
  import { viewport } from '$lib/utils/viewport';
  import Menu from '~icons/heroicons-solid/menu-alt-3';
  import Location from '~icons/heroicons-solid/location-marker';
  import Phone from '~icons/heroicons-solid/phone';
  import Mail from '~icons/heroicons-solid/mail-open';
  import Calendar from '~icons/heroicons-solid/calendar';
  import Close from '~icons/heroicons-solid/x';
  import ArrowRight from '~icons/heroicons-solid/arrow-narrow-right';

	let { children } = $props();

  let isVisible = $state(true);
  let isNavOpen = $state(false);

  function viewportHeader(node, options) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
        } else {
          isVisible = false;
        }
      });
    }, options);
  
    io.observe(node);
  
    return {
      destroy() {
        io.disconnect();
      }
    };
  }

</script>
 
<div class="absolute h-16" use:viewportHeader></div>

<header class={[
  "top-0 left-0 w-full z-40 bg-white",
  isVisible ? "absolute" : "fixed shadow-md",
  !isVisible && "motion-translate-x-in-[0%] motion-translate-y-in-[-100%]"
]}>

  <div class={["py-2 pl-2 pr-0 lg:px-12 bg-slate-900 items-center gap-6 hidden lg:flex", !isVisible && "lg:hidden"]}>
    <div class="flex items-center gap-1 text-gray-100 hover:text-primary font-nunito font-medium">
      <Location />
      <span>123 Street, New York, NY 10012</span>
    </div>
    <div class="flex items-center gap-1 text-gray-100 hover:text-primary font-nunito font-medium">
      <Phone />
      <span>+1 (123) 456-7890</span>
    </div>
    <div class="flex items-center gap-1 text-gray-100 hover:text-primary font-nunito font-medium">
      <Mail />
      <span>info@example.com</span>
    </div>
  </div>

  <div class={["pl-2 pr-0 lg:px-12 flex items-center justify-between h-16 lg:h-[72px] transition-[height] border-none ease-in-out duration-300", !isVisible && "lg:h-[72px]"]}>

    <a href="/" class="text-xl font-bold">
      <img 
        src="/a2zimmigration-logo.png" 
        alt="A2Z ImmiMigration"  
        width="298" 
        height="91"
        class="w-40 xl:w-56"
      >
    </a>

    <nav class={[
      "h-screen lg:h-full lg:flex items-center justify-between fixed lg:static z-50 top-0 right-0 bg-white w-72 lg:w-auto lg:border-0 border-l border-gray-200 lg:translate-x-0 transition-transform",
      isNavOpen ? "translate-x-0" : "translate-x-full"
    ]}>
      <button class="mx-2 p-3 lg:hidden hover:text-primary" aria-label="close nav" onclick={() => isNavOpen = false}>
        <Close height="24" width="24" />
      </button>

      <div class="h-6 lg:hidden"></div>

      <ul class="lg:h-full flex flex-col lg:flex-row lg:items-center gap-2 xl:gap-4 w-full">
        <li class="lg:h-full">
          <a href="/" class="nav-link">Home</a>
        </li>
        <li class="lg:h-full">
          <a href="/" class="nav-link">Services</a>
        </li>
        <li class="lg:h-full">
          <a href="/" class="nav-link">About</a>
        </li>
        <li class="lg:h-full">
          <a href="/" class="nav-link">FAQs</a>
        </li>
        <li class="lg:h-full">
          <a href="/" class="nav-link">Blog</a>
        </li>
        <li class="lg:h-full">
          <a href="/" class="nav-link">Contact</a>
        </li>
      </ul>      
    </nav>

    <button class="px-6 py-3 bg-primary font-bold text-lg text-white rounded font-nunito btn-ripple transition-colors hidden lg:block shrink-0">Get in touch</button>

    <button class="fixed inset-0 h-screen w-screen bg-black/40 lg:hidden" class:hidden={!isNavOpen} aria-label="nav overlay" onclick={() => isNavOpen = false}></button>
    
    <button class="p-3 lg:hidden" onclick={() => isNavOpen = true}>
      <Menu width="24" height="24" />
    </button>

  </div>

</header>

{@render children()}


<footer class="bg-secondary text-white viewport" use:viewport>
  <div class="container grid md:grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-16 xl:gap-20 xl:grid-cols-4 lg:max-w-[1280px]">

    <div class="p-6 bg-primary text-white">
      <a href="/" class="block py-3 mb-2">
        <img src="/a2zimmigration-logo.png" alt="A2Z ImmiMigration" width="298" height="91" class="w-40 xl:w-56">
      </a>

      <p class="font-medium mb-6">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>

      <div class="flex h-12">
        <input type="text" class="min-w-0 flex-1">
        <button class="px-4 shrink-0 bg-secondary">Sign up</button>
      </div>

    </div>

    <div class="py-4 lg:py-10">
      <h2 class="text-2xl font-nunito font-bold mb-10 indicator-sm">Get in touch</h2>

      <ul class="space-y-2">
        <li>
          <a href="/" class="flex items-center gap-1.5">
            <Phone width="16" height="16" class="text-primary" />
            <span>+44 7441 398273</span>
          </a>
        </li>
        <li>
          <a href="/" class="flex items-center gap-1.5">
            <Calendar width="16" height="16" class="text-primary" />
            <span>Mon-Fri: 9:00 – 17:00</span>
          </a>
        </li>
        <li>
          <a href="/" class="flex items-center gap-1.5">
            <Mail width="16" height="16" class="text-primary" />
            <span>info@example.com</span>
          </a>
        </li>
        <li>
          <a href="/" class="flex items-center gap-1.5">
            <Location width="16" height="16" class="text-primary" />
            <span>123 Street, New York, NY 10012</span>
          </a>
        </li>
        <li class="text-sm ml-5 pt-1">
          Registered Company in the UK – Company Number SC659958
        </li>
      </ul>
    </div>

    <div class="py-4 lg:py-10">
      <h2 class="text-2xl font-nunito font-bold mb-10 indicator-sm">Services</h2>

      <ul class="space-y-2">
        <li class="hover:translate-x-2 transition-transform ease-linear">
          <a href="/" class="flex items-center gap-1.5">
            <ArrowRight width="16" height="16" class="text-primary" />
            <span>Visit Visa</span>
          </a>
        </li>
        <li class="hover:translate-x-2 transition-transform ease-linear">
          <a href="/" class="flex items-center gap-1.5">
            <ArrowRight width="16" height="16" class="text-primary" />
            <span>Skilled Worker Visa</span>
          </a>
        </li>
        <li class="hover:translate-x-2 transition-transform ease-linear">
          <a href="/" class="flex items-center gap-1.5">
            <ArrowRight width="16" height="16" class="text-primary" />
            <span>Graduate Visa</span>
          </a>
        </li>
        <li class="hover:translate-x-2 transition-transform ease-linear">
          <a href="/" class="flex items-center gap-1.5">
            <ArrowRight width="16" height="16" class="text-primary" />
            <span>Student Visa</span>
          </a>
        </li>
        <li class="hover:translate-x-2 transition-transform ease-linear">
          <a href="/" class="flex items-center gap-1.5">
            <ArrowRight width="16" height="16" class="text-primary" />
            <span>Spouse Visa</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="py-4 lg:py-10 xl:-translate-x-10 max-w-max">
      <img src="/images/OISC-icon.png" height="432" width="578" class="block w-24" alt="oisc icon">
      <p class="text-sm mt-1">OISC Member</p>
      <p class="text-sm">F202100303</p>
    </div>

  </div>
</footer>


<style>
  .nav-link {
    @apply h-full flex items-center px-6 lg:px-2 py-3 lg:py-0 font-medium font-nunito text-lg transition-colors hover:text-primary relative
      after:hidden lg:after:block after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:bg-primary after:scale-x-0 hover:after:scale-x-100;
  }
</style>