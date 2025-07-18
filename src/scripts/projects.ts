const galleryDialog =
	document.querySelector<HTMLDialogElement>('.gallery-slider')
const openButtons = document.querySelectorAll('.gallery-opener')
const imageElement = galleryDialog?.querySelector('img')
const loader = galleryDialog?.querySelector<HTMLElement>('.loader')
const circlesContainer = galleryDialog?.querySelector('.gallery-slider-circles')

let images: string[] = []
let currentIndex = 0

const updateImage = () => {
	if (!imageElement || !loader || !circlesContainer) return

	loader.classList.remove('hide')
	imageElement.classList.add('hide')

	imageElement.src = images[currentIndex]
	imageElement.onload = () => {
		loader.classList.add('hide')
		imageElement.classList.remove('hide')
	}

	circlesContainer.childNodes.forEach((circle, i) => {
		;(circle as HTMLElement).classList.toggle(
			'gallery-slider-circle-active',
			i === currentIndex
		)
	})
}

openButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (!galleryDialog || !circlesContainer) return
		images = JSON.parse(
			(button as HTMLElement).dataset.images ?? '[]'
		) as string[]
		currentIndex = 0
		circlesContainer.innerHTML = ''
		images.forEach((_: string, i: number) => {
			const circle = document.createElement('button')
			circle.setAttribute('aria-label', `image ${i}`)
			circle.dataset.action = 'select'
			circle.dataset.index = i.toString()
			if (i === 0) {
				circle.classList.add('gallery-slider-circle-active')
			}
			circlesContainer.appendChild(circle)
		})
		updateImage()
		galleryDialog.showModal()
		document.body.style.overflow = 'hidden'
	})
})

galleryDialog?.addEventListener('click', (e) => {
	if (e.target === e.currentTarget) {
		galleryDialog.close()
	}
})

galleryDialog?.addEventListener('close', () => {
	document.body.style.overflow = 'auto'
})

galleryDialog?.addEventListener('click', (e) => {
	const target = (e.target as HTMLElement).closest('button')
	if (!target) return

	const action = target.dataset.action
	if (action === 'close') {
		galleryDialog.close()
	} else if (action === 'next') {
		if (currentIndex < images.length - 1) {
			currentIndex++
			updateImage()
		}
	} else if (action === 'back') {
		if (currentIndex > 0) {
			currentIndex--
			updateImage()
		}
	} else if (action === 'select') {
		currentIndex = parseInt(target.dataset.index ?? '0', 10)
		updateImage()
	}
})
