import PROJECTS from './data';
import './styles.css';

const Projects = ({
	handleOpenGallerySlider,
}: {
	handleOpenGallerySlider: (images: string[]) => () => void;
}) => {
	return (
		<section className='projects section' id='projects'>
			<div className='container'>
				<h2 className='section-title px-15'>Projects</h2>

				<div className='projects-container'>
					{PROJECTS.map((project, index) => (
						<div key={index}>
							<div className='project-card'>
								<img
									src={project.thumbnail}
									alt={project.name}
									className='project-img'
								/>
								<div className='project-card-hover'>
									<h3 className='project-title'>{project.name}</h3>
									<div className='project-buttons'>
										<div className='project-buttons-group'>
											<span className='circular-Button-no-hover'>
												<i className='fa-solid fa-link' />
											</span>
											<div className='project-buttons-group-links'>
												{project.links.map((link, index) => (
													<a
														key={index}
														href={link}
														rel='noreferrer'
														target='_blank'
													>
														{index + 1}
													</a>
												))}
											</div>
										</div>

										<a href={project.repo} rel='noreferrer' target='_blank'>
											<i className='fa-brands fa-github' />
										</a>
										<span
											className='circular-Button'
											onClick={handleOpenGallerySlider(project.images)}
										>
											<i className='fa-solid fa-images' />
										</span>
									</div>
								</div>
							</div>

							<ul className='project-tags-container'>
								{project.tags.map((tag, index) => (
									<li key={index} className='project-tag'>
										{tag}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
