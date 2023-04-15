import { For } from 'solid-js';
import EXPERIENCE from './data';
import './styles.css';
const Experience = () => {
	return (
		<section class='experience section' id='experience'>
			<div class='container'>
				<h2 class='section-title px-15'>Experience</h2>
				<div class='experience-container'>
					<div class='experience-card'>
						<For each={EXPERIENCE.slice(0, 3)}>
							{(item) => (
								<div class='timeline-item'>
									<i class={item.fontAwesomeIcon} />
									<h3 class='timeline-date'>
										<i class='fa-solid fa-calendar-days' /> {item.period}
									</h3>
									<h3 class='timeline-title'>{item.company}</h3>
									<h4 class='timeline-subtitle'>{item.jobTitle}</h4>
									<ul class='timeline-text'>
										<For each={item.description}>
											{(point) => <li>{point}</li>}
										</For>
									</ul>
								</div>
							)}
						</For>
					</div>

					<div class='experience-card'>
						<For each={EXPERIENCE.slice(3, 6)}>
							{(item) => (
								<div class='timeline-item'>
									<i class={item.fontAwesomeIcon} />
									<h3 class='timeline-date'>
										<i class='fa-solid fa-calendar-days' /> {item.period}
									</h3>
									<h3 class='timeline-title'>{item.company}</h3>
									<h4 class='timeline-subtitle'>{item.jobTitle}</h4>
									<ul class='timeline-text'>
										<For each={item.description}>
											{(point) => <li>{point}</li>}
										</For>
									</ul>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
