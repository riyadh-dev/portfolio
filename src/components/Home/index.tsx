import CONTACTS from '../Contact/data';
import './styles.css';

const Home = () => (
	<section className='home section' id='home'>
		<div className='intro'>
			<img src='./logo512.png' alt='Logo' />
			<h1>RIYADH BAATCHIA</h1>
			<span>FULL STACK WEB DEVELOPER</span>
			<ul className='social-icons'>
				<li>
					<a href={CONTACTS.github}>
						<i className='fa-brands fa-github' />
					</a>
				</li>
				<li>
					<a href={CONTACTS.linkedin}>
						<i className='fa-brands fa-linkedin' />
					</a>
				</li>
				<li>
					<a href={CONTACTS.twitter}>
						<i className='fa-brands fa-twitter' />
					</a>
				</li>
				<li>
					<a href={`mailto:${CONTACTS.email}`}>
						<i className='fa-solid fa-envelope' />
					</a>
				</li>
				<li>
					<a href={`tel:${CONTACTS.phoneNumber}`}>
						<i className='fa-brands fa-whatsapp' />
					</a>
				</li>
			</ul>

			<div className='btn btn-default'>
				<a href='#contact'>Contact me</a>
			</div>

			<div className='scroll-down'>
				<h3>Scroll For More</h3>
				<i className='fa-solid fa-angles-down' />
			</div>
		</div>
	</section>
);

export default Home;
