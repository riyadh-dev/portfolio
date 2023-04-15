import CONTACTS from './data';
import './styles.css';

const Contact = () => {
	return (
		<section className='section contact' id='contact'>
			<div className='container'>
				<h2 className='section-title px-15'>Contact Me</h2>
				<div className='contact-container'>
					<div className='contact-box px-15'>
						<div className='contact-data'>
							<div className='contact-info'>
								<h3 className='contact-subtitle'>Text Me</h3>
								<a
									href={`tel:${CONTACTS.phoneNumber}`}
									className='contact-description'
								>
									<i className='fa-solid fa-phone' />
									{CONTACTS.phoneNumber}
								</a>
							</div>

							<div className='contact-info'>
								<h3 className='contact-subtitle'>Email Me</h3>
								<a
									href={`mailto:${CONTACTS.email}`}
									className='contact-description'
								>
									<i className='fa-solid fa-envelope' />
									{CONTACTS.email}
								</a>
							</div>
						</div>
					</div>

					<form
						action={`mailto:${CONTACTS.email}`}
						className='contact-form px-15'
					>
						<div className='contact-inputs'>
							<div className='contact-content'>
								<input type='email' name='email' className='contact-input' />
								<label className='contact-label'>Email</label>
								<span />
							</div>

							<div className='contact-content'>
								<input type='text' name='subject' className='contact-input' />
								<label className='contact-label'>Subject</label>
								<span />
							</div>

							<div className='contact-content contact-area'>
								<textarea
									name='body'
									cols={30}
									rows={10}
									className='contact-input'
								/>
								<label className='contact-label'>Message</label>
								<span />
							</div>
						</div>
						<button type='submit' className='btn btn-default'>
							Sent
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
