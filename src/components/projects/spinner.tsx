import { Show, createSignal, onCleanup, onMount } from 'solid-js'

export default function LoadingSpinner() {
	const [debouncedShow, setDebouncedShow] = createSignal(false)
	let timer: NodeJS.Timeout | undefined = undefined

	onMount(() => {
		timer = setTimeout(() => {
			setDebouncedShow(true)
		}, 500)
	})

	onCleanup(() => clearTimeout(timer))

	return (
		<Show when={debouncedShow()}>
			<div class='loader' />
		</Show>
	)
}
