import { useEffect, useState } from 'react';
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
	};

	const handleBack = () => {
		if (imageIndex === 0) return;
		setImageIndex(imageIndex - 1);
	};

	const handleChangeIndex = (index: number) => () => setImageIndex(index);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
			document.body.style.position = '';
		};
	}, []);

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
				<img
					src={images[imageIndex]}
					alt={'image ' + imageIndex}
					loading='lazy'
				/>

				<div className='gallery-slider-circles'>
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
		</div>
	);
};

export default GallerySlider;
