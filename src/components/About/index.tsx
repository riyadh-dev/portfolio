import ABOUT from './data';
import './styles.css';
const About = () => (
	<section className='about section' id='about'>
		<div className='container'>
			<h2 className='section-title px-15'>About Me</h2>
			<div className='about-content'>
				<p className='about-text'>{ABOUT.introduction}</p>
				<div className='btn btn-default'>
					<a
						href='./documents/baatchia-resume.pdf'
						download='baatchia-resume.pdf'
					>
						DOWNLOAD RESUME
					</a>
				</div>
			</div>

			<div className='row stats-items'>
				<div className='stats-item px-15'>
					<a href='#projects'>
						<i className='fa-solid fa-circle-check' />
					</a>
					<div className='details'>
						<h3>{ABOUT.projectsDone}</h3>
						<p>Projects Done</p>
					</div>
				</div>
				<div className='stats-item px-15'>
					<i className='fa-solid fa-code-commit' />
					<div className='details'>
						<h3>{ABOUT.gitHubCommits}</h3>
						<p>GitHub Commits</p>
					</div>
				</div>
				<div className='stats-item px-15'>
					<i className='fa-solid fa-briefcase' />
					<div className='details'>
						<h3>{ABOUT.yearsOfExperience}</h3>
						<p>Years of Experience</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
