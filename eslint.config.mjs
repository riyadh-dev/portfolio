import js from '@eslint/js'
import prettier from 'eslint-config-prettier/flat'
import astro from 'eslint-plugin-astro'
import ts from 'typescript-eslint'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
	js.configs.recommended,
	...ts.configs.recommendedTypeChecked,
	...ts.configs.stylisticTypeChecked,
	...astro.configs.recommended,
	...astro.configs['jsx-a11y-recommended'],
	prettier,
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	},
	{ ignores: ['dist', '.astro'] },
]
