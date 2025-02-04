<script>
  import Person from "~icons/ic/round-person";
  import Mail from "~icons/heroicons-solid/mail";
  import Message from "~icons/ic/round-message";
  import Check from "~icons/heroicons-solid/check";
  import Close from "~icons/heroicons-solid/x";
  import { getFormContext } from "$lib/form-context";
  import { fade } from "svelte/transition";
  import { flyAndScale } from "$lib/utils/transition";

  const formState = getFormContext();

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

{#snippet inputBox(tag, {Icon, ...opts})}
  <label class="flex-1">
    <span class="inline-block text-sm md:text-base font-nunito font-bold ml-2 mb-1 text-slate-600">{opts.label}</span>
    <div class="relative">
      <span class="absolute top-0 left-0 size-12 md:size-14 grid place-items-center">
        <Icon height="20" width="20" class="text-slate-400" />
      </span>
      <svelte:element this={tag} {...opts} class={[
        "w-full border-2 pl-10 font-nunito font-medium md:pl-12 pr-4 text-sm md:text-base border-slate-200 rounded-lg focus:outline-none focus:border-primary bg-slate-100 transition-colors",
        tag === 'input' ? 'h-12 md:h-14' : 'h-24 pt-3 resize-none'
      ]} />
    </div>
  </label>
{/snippet}

{#if formState.isOpen}
<button 
  transition:fade={{ duration: 300 }}
  class="fixed inset-0 z-40 bg-black/70"
  onclick={() => formState.isOpen = false}
  aria-label="close form"></button>
<form transition:flyAndScale class="fixed top-1/2 z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow border rounded-lg p-4 w-11/12 md:p-6 max-w-xl">
  <div class="relative mb-6">
    <h2 class="text-2xl font-nunito font-bold text-center relative">Message us</h2>
    <button onclick={() => formState.isOpen = false} class="absolute p-2 right-0 top-1/2 -translate-y-1/2">
      <Close height="20" width="20" />
    </button >
  </div>

  <div class="flex flex-col gap-4 md:gap-6">
    {@render inputBox('input', inputs.name)}
    {@render inputBox('input', inputs.email)}
    {@render inputBox('textarea', inputs.message)}
    <button class="h-12 uppercase font-bold font-nunito rounded-md bg-primary text-white btn-ripple text-sm" type="submit">Submit</button>
  </div>
</form>
{/if}