const sections = document.querySelectorAll<HTMLElement>('section[id]')
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-item')
const navLinkMap = new Map<string, HTMLAnchorElement>()
for (const link of navLinks) navLinkMap.set(link.hash.slice(1), link)

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			const link = navLinkMap.get(entry.target.id)
			if (!link) return

			if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
				for (const l of navLinks) l.classList.remove('active-link')
				link.classList.add('active-link')
			}
		})
	},
	{
		root: null,
		threshold: 0.25,
		rootMargin: '0% 0px -25% 0px',
	}
)

for (const section of sections) observer.observe(section)

const btnOpenNav = document.getElementById('btn-open-nav')
const btnCloseNav = document.getElementById('btn-close-nav')
const navMenu = document.getElementById('nav-menu')

btnOpenNav?.addEventListener('click', () => navMenu?.classList.add('show'))
btnCloseNav?.addEventListener('click', () => navMenu?.classList.remove('show'))
navLinks.forEach((link) =>
	link.addEventListener('click', () => navMenu?.classList.remove('show'))
)
