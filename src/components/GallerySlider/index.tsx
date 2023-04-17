import {
	Accessor,
	For,
	Show,
	batch,
	createSignal,
	onCleanup,
	onMount,
} from 'solid-js';
import LoadingSpinner from './loading-spinner';
import './styles.css';

const GallerySlider = (props: {
	closeGallerySlider: () => void;
	images: string[];
}) => {
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
			<div
				class='close-button circular-Button'
				onClick={() => props.closeGallerySlider()}
			>
				<i class='fa-solid fa-xmark' />
			</div>

			<div class='back-button circular-Button' onClick={handleBack}>
				<i class='fa-solid fa-arrow-left' />
			</div>

			<div class='forward-button circular-Button' onClick={handleForward}>
				<i class='fa-solid fa-arrow-right' />
			</div>

			<div class='gallery-slider-middle-section'>
				<Show when={!imageLoaded()}>
					<LoadingSpinner />
				</Show>
				<img
					src={props.images[imageIndex()]}
					alt={`image ${imageIndex()}`}
					loading='eager'
					onLoad={() => setImageLoaded(true)}
					classList={{ show: imageLoaded(), hide: !imageLoaded() }}
					crossorigin='anonymous'
				/>
			</div>
			<div class='gallery-slider-circles bottom-section'>
				<For each={props.images}>
					{(_, index) => (
						<span
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
};

export default GallerySlider;
