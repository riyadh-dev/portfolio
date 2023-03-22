import { useState } from 'preact/hooks';
import SKILLS from './data';
import './styles.css';
const Skills = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	return (
		<section className='skills section' id='skills'>
			<div className='container'>
				<h2 className='section-title px-15'>Skills</h2>

				<div className='skills-container'>
					<div className='skills-tabs'>
						{SKILLS.map((skill, index) => (
							<div
								key={index}
								className={`skills-tab ${
									index === selectedTab ? 'skills-active' : ''
								}`}
								onClick={() => setSelectedTab(index)}
							>
								<i className={skill.fontAwesomeClasses} />

								<div>
									<h1 className='skills-title'>{skill.categoryName}</h1>
								</div>
								<i className='fa-solid fa-chevron-down skills-arrow' />
							</div>
						))}
					</div>

					<div className='skills-content'>
						<div className='skills-group'>
							{SKILLS[selectedTab].skills.map((skill, index) => (
								<div key={index} className='skill-container'>
									<img src={skill.image} alt={skill.name} />
									<h3>{skill.name}</h3>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
