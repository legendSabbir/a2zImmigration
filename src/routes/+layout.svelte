<script>
	import '../app.css';
  import Menu from '~icons/heroicons-solid/menu-alt-3';
  import Location from '~icons/heroicons-solid/location-marker';
  import Phone from '~icons/heroicons-solid/phone';
  import Mail from '~icons/heroicons-solid/mail-open';
  import Close from '~icons/heroicons-solid/x';
	let { children } = $props();

  let isVisible = $state(false);
  let isNavOpen = $state(false);

  function viewport(node, options) {
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
 
<div class="absolute h-16" use:viewport></div>

<header class={[
  "top-0 left-0 w-full z-40 bg-white",
  isVisible ? "absolute" : "fixed shadow-md",
  !isVisible && "motion-translate-x-in-[0%] motion-translate-y-in-[-100%]"
]}>

  <div class={["py-2 pl-2 pr-0 lg:px-12 border-b border-gray-200 items-center gap-5 hidden lg:flex", !isVisible && "lg:hidden"]}>
    <div class="flex items-center gap-1 text-gray-500 hover:text-gray-950 text-sm font-medium">
      <Location />
      <span>123 Street, New York, NY 10012</span>
    </div>
    <div class="flex items-center gap-1 text-gray-500 hover:text-gray-950 text-sm font-medium">
      <Phone />
      <span>+1 (123) 456-7890</span>
    </div>
    <div class="flex items-center gap-1 text-gray-500 hover:text-gray-950 text=sm font-medium">
      <Mail />
      <span>info@example.com</span>
    </div>
  </div>

  <div class={["pl-2 pr-0 lg:px-12 flex items-center justify-between h-16 lg:h-24 transition-[height] border-none ease-in-out duration-300", !isVisible && "lg:h-[72px]"]}>

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

    <button class="px-6 py-3 bg-primary font-bold text-lg text-white rounded font-nunito hover:bg-sky-400 transition-colors hidden lg:block shrink-0">Get in touch</button>

    <button class="fixed inset-0 h-screen w-screen bg-black/40 lg:hidden" class:hidden={!isNavOpen} aria-label="nav overlay" onclick={() => isNavOpen = false}></button>
    
    <button class="p-3 lg:hidden" onclick={() => isNavOpen = true}>
      <Menu width="24" height="24" />
    </button>

  </div>

</header>

{@render children()}


<style>
  .nav-link {
    @apply h-full flex items-center px-6 lg:px-2 py-3 lg:py-0 font-medium font-nunito text-lg transition-colors hover:text-primary relative
      after:hidden lg:flex after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:bg-primary after:scale-x-0 hover:after:scale-x-100;
  }
</style>