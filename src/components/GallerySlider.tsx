import {
	For,
	Show,
	batch,
	createSignal,
	onCleanup,
	onMount,
	type Accessor,
} from 'solid-js';
import LoadingSpinner from './LoadingSpinner';

import '@/styles/gallery-slider.css';

export default function GallerySlider(props: {
	closeGallerySlider: () => void;
	images: string[];
}) {
	const [imageIndex, setImageIndex] = createSignal(0);
	const [imageLoaded, setImageLoaded] = createSignal(false);

	const handleForward = () => {
		if (props.images.length - 1 <= imageIndex()) return;
		batch(() => {
			setImageIndex(imageIndex() + 1);
			setImageLoaded(false);
		});
	};

	const handleBack = () => {
		if (imageIndex() === 0) return;
		batch(() => {
			setImageIndex(imageIndex() - 1);
			setImageLoaded(false);
		});
	};

	const handleChangeIndex = (index: Accessor<number>) => setImageIndex(index());

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});

	onCleanup(() => {
		document.body.style.overflow = 'auto';
		document.body.style.position = '';
	});

	return (
		<div class='gallery-slider-container'>
			<button
				aria-label='close'
				class='close-button circular-Button'
				onClick={() => props.closeGallerySlider()}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
					<path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
				</svg>
			</button>

			<button
				aria-label='back'
				class='back-button circular-Button'
				onClick={handleBack}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
					<path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
				</svg>
			</button>

			<button
				aria-label='next'
				class='forward-button circular-Button'
				onClick={handleForward}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
					<path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
				</svg>
			</button>

			<div class='gallery-slider-middle-section'>
				<Show when={!imageLoaded()}>
					<LoadingSpinner />
				</Show>
				<img
					src={props.images[imageIndex()]}
					alt={imageIndex().toString()}
					loading='eager'
					onLoad={() => setImageLoaded(true)}
					classList={{ show: imageLoaded(), hide: !imageLoaded() }}
					crossorigin='anonymous'
				/>
			</div>
			<div class='gallery-slider-circles bottom-section'>
				<For each={props.images}>
					{(_, index) => (
						<button
							aria-label={`image ${index()}`}
							classList={{
								'gallery-slider-circle-active': index() === imageIndex(),
							}}
							onClick={[handleChangeIndex, index]}
						/>
					)}
				</For>
			</div>
		</div>
	);
}
