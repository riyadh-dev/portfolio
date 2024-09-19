module.exports = {
	env: { browser: true },
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [
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
			files: ['*.{tsx}'],
			extends: [
				'plugin:solid/recommended',
				'plugin:jsx-a11y/recommended',
			],
		},
		{
			env: { node: true },
			files: ['.eslintrc.cjs', 'astro.config.mjs'],
		},
	],
	ignorePatterns: ['dist'],
}
