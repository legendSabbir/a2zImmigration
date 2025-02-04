<script>
  import { getFormContext } from "$lib/form-context";
  const props = $props();

  const formState = getFormContext();
</script>


<button 
  onclick={() => formState.isOpen = true}
  {...props}
>Get in touch</button>