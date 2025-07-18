import '../.astro/types'
import 'astro/astro-jsx'
import 'astro/client'

declare global {
	namespace JSX {
		type Element = HTMLElement
	}
}
