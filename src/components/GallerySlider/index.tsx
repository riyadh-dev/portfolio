import { useEffect, useState } from 'preact/hooks';
import './styles.css';

const GallerySlider = ({
	handleCloseGallerySlider,
	images,
}: {
	handleCloseGallerySlider: () => void;
	images: string[];
}) => {
	const [imageIndex, setImageIndex] = useState(0);

	const handleForward = () => {
		if (images.length - 1 <= imageIndex) return;
		setImageIndex(imageIndex + 1);
		setImageLoaded(false);
	};

	const handleBack = () => {
		if (imageIndex === 0) return;
		setImageIndex(imageIndex - 1);
		setImageLoaded(false);
	};

	const handleChangeIndex = (index: number) => () => setImageIndex(index);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
			document.body.style.position = '';
		};
	}, []);

	const [imageLoaded, setImageLoaded] = useState(false);
	const handleLoading = () => {
		setImageLoaded(true);
	};

	return (
		<div className='gallery-slider-container'>
			<div
				className='close-button circular-Button'
				onClick={handleCloseGallerySlider}
			>
				<i className='fa-solid fa-xmark' />
			</div>

			<div className='back-button circular-Button' onClick={handleBack}>
				<i className='fa-solid fa-arrow-left' />
			</div>

			<div className='forward-button circular-Button' onClick={handleForward}>
				<i className='fa-solid fa-arrow-right' />
			</div>

			<div className='gallery-slider-middle-section'>
				<div className={`loader ${imageLoaded ? 'hide' : 'show'}`} />
				<img
					src={images[imageIndex]}
					alt={`image ${imageIndex}`}
					loading='eager'
					onLoad={handleLoading}
					className={imageLoaded ? 'show' : 'hide'}
				/>
			</div>
			<div className='gallery-slider-circles bottom-section'>
				{images.map((_, index) => (
					<span
						className={
							index === imageIndex ? 'gallery-slider-circle-active' : ''
						}
						key={index}
						onClick={handleChangeIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default GallerySlider;
