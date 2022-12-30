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
						<div key={index} className='project-card'>
							<img
								src={project.thumbnail}
								alt={project.name}
								className='project-img'
							/>
							<div className='project-card-hover'>
								<h3 className='project-title'>{project.name}</h3>
								<div className='project-actions'>
									<a href={project.link} rel='noreferrer' target='_blank'>
										<i className='fa-solid fa-link' />
									</a>
									<a href={project.repo} rel='noreferrer' target='_blank'>
										<i className='fa-brands fa-github' />
									</a>
									<div
										className='circular-Button'
										onClick={handleOpenGallerySlider(project.images)}
									>
										<i className='fa-solid fa-images' />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
