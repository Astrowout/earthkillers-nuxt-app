
export default {
	mode: 'spa',
	/*
	** Headers of the page
	*/
	head: {
		title: 'Loading...',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: false,
	/*
	** Customize the SPA loading indicator
	*/
	loadingIndicator: '@/loader.html',
	/*
	** Global CSS
	*/
	css: [
		'@/assets/scss/main.scss'
	],
	/*
	** Source code directory
	*/
	srcDir: './src',
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{
			src: '@/plugins/loader-timeout.js',
			mode: 'client'
		},
		{
			src: '@/plugins/pixi.js',
			mode: 'client'
		},
		{
			src: '@/plugins/scrollmagic.js',
			mode: 'client'
		},
		{
			src: '@/plugins/routes.js',
			mode: 'client'
		}
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv'
	],
	/*
	** dotenv module options
	*/
	dotenv: {
		path: './'
	},
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'nuxt-i18n'
	],
	/*
	** i18n config
	*/
	i18n: {
		locales: [
			{
				code: 'en',
				file: 'en.js'
			}
		],
		lazy: true,
		langDir: 'assets/translations/',
		defaultLocale: 'en'
	},
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
};
