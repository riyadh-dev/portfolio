const tabs = document.querySelectorAll<HTMLDivElement>('.skills-tab');
const tabsContent = document.querySelectorAll<HTMLDivElement>('.skills-group');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector<HTMLDivElement>(
			tab.dataset.target ?? ''
		);

		tabsContent.forEach((tabContent) => {
			tabContent.classList.remove('skills-active');
		});

		target?.classList.add('skills-active');

		tabs.forEach((tab) => {
			tab.classList.remove('skills-active');
		});

		tab?.classList.add('skills-active');
	});
});

const projectsContainer = document.querySelector<HTMLDivElement>(
	'.projects-container'
);

const shuffleInstance = new Shuffle(projectsContainer, {
	itemSelector: '.project-card',
	isCentered: true,
});

const filterButtons = document.querySelectorAll<HTMLLIElement>(
	'.projects-filter-items li[data-filter]'
);

const tagButtons = document.querySelectorAll<HTMLLIElement>(
	'.projects-tags-items li[data-filter]'
);

filterButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		shuffleInstance.filter(btn.dataset.filter);

		filterButtons.forEach((tabContent) => {
			tabContent.classList.remove('active');
		});

		if (btn.dataset.filter === 'all')
			tagButtons.forEach((tabContent) => {
				tabContent.classList.remove('active');
			});

		btn?.classList.add('active');
	});
});

tagButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		shuffleInstance.filter(btn.dataset.filter);
		btn?.classList.add('active');
	});
});
