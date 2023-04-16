import { Accessor, onCleanup } from 'solid-js';

declare module 'solid-js' {
	// eslint-disable-next-line no-unused-vars
	namespace JSX {
		// eslint-disable-next-line no-unused-vars
		interface Directives {
			clickOutside: Function;
		}
	}
}

export default function clickOutside(
	el: HTMLElement,
	value: Accessor<Function>
) {
	const onClick = (e: MouseEvent) =>
		!el.contains(e.target as Node) && value()?.();

	document.body.addEventListener('click', onClick);
	onCleanup(() => document.body.removeEventListener('click', onClick));
}
