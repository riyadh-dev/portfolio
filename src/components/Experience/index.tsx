import EXPERIENCE from './data';
import './styles.css';
const Experience = () => {
	return (
		<section className='experience section' id='experience'>
			<div className='container'>
				<h2 className='section-title px-15'>Experience</h2>
				<div className='experience-container'>
					<div className='experience-card'>
						{EXPERIENCE.slice(0, 3).map((item, index) => (
							<div key={index} className='timeline-item'>
								<i className={item.fontAwesomeIcon} />
								<h3 className='timeline-date'>
									<i className='fa-solid fa-calendar-days' /> {item.period}
								</h3>
								<h3 className='timeline-title'>{item.company}</h3>
								<h4 className='timeline-subtitle'>{item.jobTitle}</h4>
								<ul className='timeline-text'>
									{item.description.map((point, index) => (
										<li key={index}>{point}</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className='experience-card'>
						{EXPERIENCE.slice(3, 6).map((item, index) => (
							<div key={index} className='timeline-item'>
								<i className={item.fontAwesomeIcon} />
								<h3 className='timeline-date'>
									<i className='fa-solid fa-calendar-days' /> {item.period}
								</h3>
								<h3 className='timeline-title'>{item.company}</h3>
								<h4 className='timeline-subtitle'>{item.jobTitle}</h4>
								<ul className='timeline-text'>
									{item.description.map((point, index) => (
										<li key={index}>{point}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
