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
