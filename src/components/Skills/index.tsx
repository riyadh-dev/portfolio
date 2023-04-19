import { For, createSignal } from 'solid-js';
import SKILLS from './data';
import './styles.css';

const Skills = () => {
	const [selectedTab, setSelectedTab] = createSignal(0);
	return (
		<section class='skills section' id='skills'>
			<div class='container'>
				<h2 class='section-title px-15'>Skills</h2>

				<div class='skills-container'>
					<div class='skills-tabs'>
						<For each={SKILLS}>
							{(skill, index) => (
								<div
									onClick={() => setSelectedTab(index())}
									class='skills-tab'
									classList={{ 'skills-active': index() === selectedTab() }}
								>
									<i class={skill.fontAwesomeClasses} />

									<div>
										<h1 class='skills-title'>{skill.categoryName}</h1>
									</div>
								</div>
							)}
						</For>
					</div>

					<div class='skills-content'>
						<div class='skills-group'>
							<For each={SKILLS[selectedTab()].skills}>
								{(skill) => (
									<div class='skill-container'>
										<img
											classList={{ 'skill-image-lighten': skill.dark }}
											src={skill.image}
											alt={skill.name}
											crossorigin='anonymous'
										/>
										<h3 class='skill-name'>{skill.name}</h3>
									</div>
								)}
							</For>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
