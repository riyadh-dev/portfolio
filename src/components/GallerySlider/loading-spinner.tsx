import { Show, createSignal, onCleanup, onMount } from 'solid-js';

export default function loadingSpinner() {
	const [debouncedShow, setDebouncedShow] = createSignal(false);

	// eslint-disable-next-line no-undef
	let timer: NodeJS.Timeout | undefined = undefined;

	onMount(() => {
		timer = setTimeout(() => {
			setDebouncedShow(true);
		}, 500);
	});

	onCleanup(() => clearTimeout(timer));

	return (
		<Show when={debouncedShow()}>
			<div class='loader' />
		</Show>
	);
}
