module.exports = {
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	semi: true,
	trailingComma: 'es5',
	printWidth: 80,
	tabWidth: 2,
	useTabs: false,
	singleQuote: true,
}
