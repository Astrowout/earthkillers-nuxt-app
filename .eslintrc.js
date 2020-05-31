module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	// add your custom rules here
	rules: {
		"no-tabs": ["warn", { allowIndentationTabs: true }],
		"indent": ["error", "tab"],
		"semi": ["error", "always"],
		"space-before-function-paren": ["error", "never"],
		"vue/html-indent": ["error", "tab"],
		"vue/no-v-html": ["off"],
	}
}
