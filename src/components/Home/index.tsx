import imageSources from '~/image-sources';
import CONTACTS from '../Contact/data';
import './styles.css';

const Home = () => (
	<section class='home section' id='home'>
		<div class='intro'>
			<img src={imageSources.logo} alt='logo' />
			<h1>RIYADH BAATCHIA</h1>
			<span>FULL STACK WEB DEVELOPER</span>
			<ul class='social-icons'>
				<li>
					<a href={CONTACTS.github} rel='noreferrer' target='_blank'>
						<i class='fa-brands fa-github' />
					</a>
				</li>
				<li>
					<a href={CONTACTS.linkedin} rel='noreferrer' target='_blank'>
						<i class='fa-brands fa-linkedin' />
					</a>
				</li>
				<li>
					<a href={CONTACTS.twitter} rel='noreferrer' target='_blank'>
						<i class='fa-brands fa-twitter' />
					</a>
				</li>
				<li>
					<a href={`mailto:${CONTACTS.email}`} rel='noreferrer' target='_blank'>
						<i class='fa-solid fa-envelope' />
					</a>
				</li>
				<li>
					<a
						href={`tel:${CONTACTS.phoneNumber}`}
						rel='noreferrer'
						target='_blank'
					>
						<i class='fa-brands fa-whatsapp' />
					</a>
				</li>
			</ul>

			<div class='btn btn-default'>
				<a href='#contact'>Contact me</a>
			</div>

			<div class='scroll-down'>
				<h3>Scroll For More</h3>
				<i class='fa-solid fa-angles-down' />
			</div>
		</div>
	</section>
);

export default Home;
