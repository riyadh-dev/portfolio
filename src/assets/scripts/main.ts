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
	filterMode: Shuffle.FilterMode.ALL,
});

const clearFilterButton = document.querySelector<HTMLDivElement>(
	'.projects-clear-filter'
);

const tagButtons = document.querySelectorAll<HTMLLIElement>(
	'.projects-tags-items li[data-filter]'
);

clearFilterButton?.addEventListener('click', () => {
	shuffleInstance.filter('all');
	tagButtons.forEach((tabContent) => {
		tabContent.classList.remove('active');
	});
});

const tagMap = new Map<string, boolean>();

tagButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		console.log(shuffleInstance.lastFilter);

		const key = btn.dataset.filter;

		if (key && !tagMap.get(key)) {
			tagMap.set(key, true);
			btn?.classList.add('active');
		} else if (key && tagMap.get(key)) {
			tagMap.set(key, false);
			btn?.classList.remove('active');
		}

		const tags: string[] = [];
		tagMap.forEach((val, key) => {
			if (val) tags.push(key);
		});

		shuffleInstance.filter(tags);
	});
});

const projectPopupOpenButtons = document.querySelectorAll<HTMLDivElement>(
	'.open-project-popup'
);

const projectPopupCloseButtons = document.querySelectorAll<HTMLDivElement>(
	'.project-popup-close'
);

const toggleProjectPopup = (selector: string = '.project-popup-container') =>
	document.querySelector<HTMLDivElement>(selector)?.classList.toggle('open');

projectPopupOpenButtons.forEach((btn) => {
	btn.addEventListener('click', () => toggleProjectPopup(btn.dataset.model));
});

projectPopupCloseButtons.forEach((btn) => {
	btn.addEventListener('click', () => toggleProjectPopup());
});
