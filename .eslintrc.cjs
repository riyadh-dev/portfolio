module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'solid', 'jsx-a11y'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:astro/recommended',
		'prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			extends: ['plugin:astro/jsx-a11y-recommended'],
		},
		{
			files: ['*.{ts,tsx}'],
			extends: ['plugin:solid/recommended', 'plugin:jsx-a11y/recommended'],
		},
	],
	rules: {},
};
