import { getContext, setContext } from 'svelte';

let formKey = Symbol('contact-form');

export function setFormContext(form) {
	setContext(formKey, form);
}

export function getFormContext() {
	return getContext(formKey);
}