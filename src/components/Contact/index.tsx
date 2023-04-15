import CONTACTS from './data';
import './styles.css';

const Contact = () => {
	return (
		<section class='section contact' id='contact'>
			<div class='container'>
				<h2 class='section-title px-15'>Contact Me</h2>
				<div class='contact-container'>
					<div class='contact-box px-15'>
						<div class='contact-data'>
							<div class='contact-info'>
								<h3 class='contact-subtitle'>Text Me</h3>
								<a
									href={`tel:${CONTACTS.phoneNumber}`}
									class='contact-description'
								>
									<i class='fa-solid fa-phone' />
									{CONTACTS.phoneNumber}
								</a>
							</div>

							<div class='contact-info'>
								<h3 class='contact-subtitle'>Email Me</h3>
								<a
									href={`mailto:${CONTACTS.email}`}
									class='contact-description'
								>
									<i class='fa-solid fa-envelope' />
									{CONTACTS.email}
								</a>
							</div>
						</div>
					</div>

					<form action={`mailto:${CONTACTS.email}`} class='contact-form px-15'>
						<div class='contact-inputs'>
							<div class='contact-content'>
								<input type='email' name='email' class='contact-input' />
								<label class='contact-label'>Email</label>
								<span />
							</div>

							<div class='contact-content'>
								<input type='text' name='subject' class='contact-input' />
								<label class='contact-label'>Subject</label>
								<span />
							</div>

							<div class='contact-content contact-area'>
								<textarea
									name='body'
									cols={30}
									rows={10}
									class='contact-input'
								/>
								<label class='contact-label'>Message</label>
								<span />
							</div>
						</div>
						<button type='submit' class='btn btn-default'>
							Sent
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
