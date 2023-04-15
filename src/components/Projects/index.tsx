import { For, Show, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import GallerySlider from '../GallerySlider';
import PROJECTS from './data';
import './styles.css';

const Projects = () => {
	const [images, setImages] = createSignal<string[]>([]);
	const [showGallerySlider, setShowGallerySlider] = createSignal(false);
	const closeGallerySlider = () => setShowGallerySlider(false);
	const openGallerySlider = (images: string[]) => () => {
		setImages(images);
		setShowGallerySlider(true);
	};

	return (
		<section class='projects section' id='projects'>
			<div class='container'>
				<h2 class='section-title px-15'>Projects</h2>

				<div class='projects-container'>
					<For each={PROJECTS}>
						{(project) => (
							<div>
								<div class='project-card'>
									<img
										src={project.thumbnail}
										alt={project.name}
										class='project-img'
									/>
									<div class='project-card-hover'>
										<h3 class='project-title'>{project.name}</h3>
										<div class='project-buttons'>
											<div class='project-buttons-group'>
												<span class='circular-Button-no-hover'>
													<i class='fa-solid fa-link' />
												</span>
												<div class='project-buttons-group-links'>
													<For each={project.links}>
														{(link, index) => (
															<a href={link} rel='noreferrer' target='_blank'>
																{index() + 1}
															</a>
														)}
													</For>
												</div>
											</div>

											<a href={project.repo} rel='noreferrer' target='_blank'>
												<i class='fa-brands fa-github' />
											</a>
											<span
												class='circular-Button'
												onClick={openGallerySlider(project.images)}
											>
												<i class='fa-solid fa-images' />
											</span>
										</div>
									</div>
								</div>

								<ul class='project-tags-container'>
									<For each={project.tags}>
										{(tag) => <li class='project-tag'>{tag}</li>}
									</For>
								</ul>
							</div>
						)}
					</For>
				</div>
			</div>

			<Show when={showGallerySlider()}>
				<Portal>
					<GallerySlider
						images={images()}
						closeGallerySlider={closeGallerySlider}
					/>
				</Portal>
			</Show>
		</section>
	);
};

export default Projects;
