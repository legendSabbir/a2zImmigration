<script>
  import { viewport } from "$lib/utils/viewport";
  import Person from "~icons/ic/round-person";
  import Mail from "~icons/heroicons-solid/mail";
  import Message from "~icons/ic/round-message";
  import Check from "~icons/heroicons-solid/check";


  const inputs = {
    name: {
      label: 'Your Name',
      placeholder: 'Your Name',
      type: 'text',
      required: true,
      Icon: Person,
    },
    email: {
      label: 'E-mail',
      placeholder: 'Your E-mail',
      type: 'email',
      required: true,
      Icon: Mail,
    },
    message: {
      label: 'Message',
      placeholder: 'Leave a message',
      type: 'text',
      required: true,
      Icon: Message,
    }
  }
</script>

{#snippet reasonItem(text)}
<li class="font-nunito font-bold flex gap-4">
  <Check class="size-6 text-emerald-500 shrink-0" />
  {text}
</li>
{/snippet}

{#snippet inputBox(tag, {Icon, ...opts})}
  <label class='flex-1'>
    <span class="inline-block font-nunito font-bold ml-2 mb-1 text-slate-600">{opts.label}</span>
    <div class="relative">
      <span class="absolute top-0 left-0 h-14 w-14 grid place-items-center">
        <Icon height="20" width="20" class="text-slate-400" />
      </span>
      <svelte:element this={tag} {...opts} class={[
        "w-full border-2 pl-12 pr-4 border-slate-200 rounded-lg focus:outline-none focus:border-primary transition-colors",
        tag === 'input' ? 'h-14' : 'h-28 pt-3 resize-none'
      ]} />
    </div>
  </label>
{/snippet}

<section class="py-20">
  <div class="container">
    <div class="grid md:grid-cols-2 gap-20 lg:gap-14 mx-auto max-w-[1024px]">

      <div>
        <h2 class="section-title text-left mb-10 scale-100 viewport" use:viewport>Why Choose Us</h2>
        <ul use:viewport class="viewport text-slate-600 space-y-4 mb-10">
          {@render reasonItem('Immigration Services From Expert Agents')}
          {@render reasonItem('Experience')}
          {@render reasonItem('Affordable Prices')} 
          {@render reasonItem('Customised service')} 
          {@render reasonItem('Dependable')} 
        </ul>
        <button class="bg-primary text-white px-8 py-3 font-medium rounded hover:bg-sky-400 viewport" use:viewport>Get in touch</button>
      </div>
  
      <form class="w-full max-w-xl">
        <h2 class="section-title text-left mb-10 scale-100 viewport" use:viewport>Message us</h2>
  
        <div class="flex flex-col gap-6 viewport" use:viewport>
          {@render inputBox('input', inputs.name)}
          {@render inputBox('input', inputs.email)}
          {@render inputBox('textarea', inputs.message)}
          <button class="h-14 uppercase font-bold font-nunito rounded-md bg-primary text-white hover:bg-sky-400" type="submit">Submit</button>
        </div>
      </form>

    </div>
  </div>
</section>