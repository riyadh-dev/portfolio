import ABOUT from './data';
import './styles.css';
const About = () => (
	<section class='about section' id='about'>
		<div class='container'>
			<h2 class='section-title px-15'>About Me</h2>
			<div class='about-content'>
				<p class='about-text'>{ABOUT.introduction}</p>
				<div class='btn btn-default'>
					<a
						href='./docs/baatchia-resume.pdf'
						download='baatchia-resume.pdf'
						target='_blank'
					>
						DOWNLOAD RESUME
					</a>
				</div>
			</div>

			<div class='row stats-items'>
				<div class='stats-item px-15'>
					<a href='#projects'>
						<i class='fa-solid fa-circle-check' />
					</a>
					<div class='details'>
						<h3>{ABOUT.projectsDone}</h3>
						<p>Projects Done</p>
					</div>
				</div>
				<div class='stats-item px-15'>
					<i class='fa-solid fa-code-commit' />
					<div class='details'>
						<h3>{ABOUT.gitHubCommits}</h3>
						<p>GitHub Commits</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
