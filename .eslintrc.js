module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	extends: [
		"@nuxtjs",
		"plugin:nuxt/recommended",
	],
	// add your custom rules here
	rules: {
		"no-tabs": ["warn", { allowIndentationTabs: true }],
		indent: ["error", "tab"],
		"comma-dangle": ["error", "always-multiline"],
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"space-before-function-paren": ["error", "never"],
		"vue/html-indent": ["error", "tab"],
		"vue/no-v-html": ["off"],
	},
};
