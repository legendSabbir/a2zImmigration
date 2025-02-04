<script>
  import { viewport } from '$lib/utils/viewport';
  import GetInTouch from '../GetInTouch.svelte';
</script>

{#snippet listItem(content)}
  <li class="mb-5 md:mb-4 flex lg:items-center gap-4 text-slate-500 group">
    <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="7b7b72ce0f"><path d="M 31 6.328125 L 375 6.328125 L 375 351 L 31 351 Z M 31 6.328125 " clip-rule="nonzero"/></clipPath><clipPath id="9de0733e40"><path d="M 0 16 L 352 16 L 352 368.578125 L 0 368.578125 Z M 0 16 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#7b7b72ce0f)"><path fill="#00a2fb" d="M 203.09375 6.347656 C 297.980469 6.347656 375 83.265625 375 178.253906 C 375 273.136719 297.980469 350.15625 203.09375 350.15625 C 108.105469 350.15625 31.085938 273.136719 31.085938 178.253906 C 31.085938 83.265625 108.105469 6.347656 203.09375 6.347656 Z M 179.75 206.972656 C 166.40625 190.511719 146.179688 163.296875 130.488281 173.945312 C 120.488281 180.722656 115.742188 188.464844 119.945312 197.078125 C 124.359375 206.117188 164.058594 244.960938 174.164062 250.652344 C 187.929688 258.390625 197.402344 248.707031 206.003906 232.035156 C 226.230469 192.980469 251.621094 141.5625 310.027344 103.054688 C 288.835938 106.925781 247.734375 135.222656 236.878906 144.367188 C 209.976562 167.167969 186.109375 199.882812 179.75 206.972656 Z M 179.75 206.972656 " fill-opacity="1" fill-rule="evenodd"/></g><g clip-path="url(#9de0733e40)"><path fill="#000000" d="M 175.878906 16.890625 C 222.675781 16.890625 267.210938 35.28125 300.34375 68.414062 C 333.371094 101.441406 351.761719 145.976562 351.761719 192.769531 C 351.761719 239.566406 333.371094 284.101562 300.34375 317.128906 C 267.210938 350.261719 222.675781 368.652344 175.878906 368.652344 C 129.085938 368.652344 84.65625 350.261719 51.523438 317.128906 C 18.386719 284.101562 0 239.566406 0 192.769531 C 0 145.976562 18.386719 101.441406 51.523438 68.414062 C 84.65625 35.28125 129.085938 16.890625 175.878906 16.890625 Z M 294.652344 74.015625 C 263.023438 42.390625 220.625 24.859375 175.878906 24.859375 C 131.242188 24.859375 88.738281 42.390625 57.109375 74.015625 C 25.585938 105.644531 7.949219 148.027344 7.949219 192.789062 C 7.949219 237.429688 25.585938 279.933594 57.109375 311.558594 C 88.738281 343.082031 131.222656 360.71875 175.878906 360.71875 C 220.625 360.71875 263.023438 343.082031 294.652344 311.558594 C 326.28125 279.933594 343.808594 237.445312 343.808594 192.789062 C 343.808594 148.027344 326.28125 105.644531 294.652344 74.015625 Z M 294.652344 74.015625 " fill-opacity="1" fill-rule="evenodd"/></g><g fill="#00a2fb" fill-opacity="1"><g transform="translate(187.499992, 155.987039)"><g><path d="M 2.109375 0.078125 C 1.804688 0.078125 1.566406 -0.00390625 1.390625 -0.171875 C 1.222656 -0.335938 1.140625 -0.5625 1.140625 -0.84375 C 1.140625 -1.113281 1.222656 -1.332031 1.390625 -1.5 C 1.566406 -1.675781 1.804688 -1.765625 2.109375 -1.765625 C 2.410156 -1.765625 2.644531 -1.679688 2.8125 -1.515625 C 2.988281 -1.347656 3.078125 -1.128906 3.078125 -0.859375 C 3.078125 -0.578125 2.988281 -0.347656 2.8125 -0.171875 C 2.632812 -0.00390625 2.398438 0.078125 2.109375 0.078125 Z M 2.109375 0.078125 "/></g></g></g></svg>
    <p class="font-medium text-sm md:text-base lg:text-lg group-hover:text-slate-950 group-hover:translate-x-2 transition-all duration-300">{content}</p>
  </li>
{/snippet}


<section class="py-10 lg:py-16 mt-10 lg:mt-32">
  <div class="container grid gap-10 lg:gap-20 lg:grid-cols-2">

    <div class="grid place-items-center viewport-left" use:viewport>
      <img src="/images/banner-1.svg" alt="hero banner" loading="lazy" class="w-full max-w-md">
    </div>

    <div class="grid place-items-center viewport-right" use:viewport>
      <div>
        <h2 class="section-title relative lg:text-left mb-12 lg:mb-14">
          Why You Need Sponsor Licence?
          <span class="indicator lg:indicator-left lg:w-full lg:after:[animation-duration:7000ms]"></span>
        </h2>
        <ul class="mb-8">
          {@render listItem("Recruit Skilled Workers from Outside UK to fill talent gaps.")}
          {@render listItem("Hire Right Talent to drive Innovation and Business Growth.")}
          {@render listItem("Support your Business Expansion Plan")}
          {@render listItem("Stay Competitive in your Industry with Highly Skilled Workers")}
          {@render listItem("Allow you to legally employ non-UK workers")}
          {@render listItem("Long term Staff Retention & Peace of Mind")}
        </ul>

        <GetInTouch class="inline-flex items-center justify-center px-6 h-10 md:h-12 rounded-md bg-primary text-white font-bold font-nunito text-sm lg:text-base hover:text-black btn-ripple transition-colors duration-500" />
      </div>
    </div>

  </div>
</section>