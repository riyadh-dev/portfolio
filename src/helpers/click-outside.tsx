import { Accessor, onCleanup } from 'solid-js';

export default function clickOutside(
	el: HTMLElement,
	value: Accessor<() => void>,
) {
	const onClick = (e: MouseEvent) =>
		!el.contains(e.target as Node) && value()?.();

	document.body.addEventListener('click', onClick);
	onCleanup(() => document.body.removeEventListener('click', onClick));
}
