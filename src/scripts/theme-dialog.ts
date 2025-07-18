const [fontBtns, primaryBtns, bgBtns] = [
	document.querySelectorAll<HTMLButtonElement>('.font-size-btn'),
	document.querySelectorAll<HTMLButtonElement>('.primary-btn'),
	document.querySelectorAll<HTMLButtonElement>('.bg-btn'),
]

updateBgBtns()
updateFontSizeBtns()
updatePrimaryBtns()

for (const btn of fontBtns)
	btn.addEventListener('click', () => {
		localStorage.setItem('font-size', btn.dataset.fontSize ?? 'base')
		document.documentElement.setAttribute(
			'data-font-size',
			btn.dataset.fontSize ?? 'base'
		)
		updateFontSizeBtns()
	})

for (const btn of primaryBtns)
	btn.addEventListener('click', () => {
		localStorage.setItem('primary', btn.dataset.primary ?? 'rose')
		document.documentElement.setAttribute(
			'data-primary',
			btn.dataset.primary ?? 'rose'
		)
		updatePrimaryBtns()
	})

for (const btn of bgBtns)
	btn.addEventListener('click', () => {
		localStorage.setItem('bg', btn.dataset.bg ?? 'dark')
		document.documentElement.setAttribute(
			'data-bg',
			btn.dataset.bg ?? 'dark'
		)
		updateBgBtns()
	})

function updateFontSizeBtns() {
	const fontSize = document.documentElement.dataset.fontSize
	for (const btn of fontBtns)
		btn.classList[fontSize === btn.dataset.fontSize ? 'add' : 'remove'](
			'active'
		)
}

function updatePrimaryBtns() {
	const primary = document.documentElement.dataset.primary
	for (const btn of primaryBtns)
		btn.classList[primary === btn.dataset.primary ? 'add' : 'remove'](
			'active'
		)
}

function updateBgBtns() {
	const bg = document.documentElement.dataset.bg
	for (const btn of bgBtns)
		btn.classList[bg === btn.dataset.bg ? 'add' : 'remove']('active')
}
const themeDialog = document.querySelector<HTMLDialogElement>('#theme-dialog')
themeDialog?.addEventListener('click', (e) => {
	if (e.target === e.currentTarget) themeDialog.close()
})
