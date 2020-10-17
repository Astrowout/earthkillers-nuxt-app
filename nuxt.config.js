import enTranslations from "./src/assets/translations/en.json";
import head from "./head.js";

export default {
	target: "static",
	ssr: false,
	/*
	** Env variables
	*/
	publicRuntimeConfig: {
		BASE_URL: process.env.BASE_URL,
	},
	/*
	** Headers of the page
	*/
	head,
	/*
	** Customize the progress-bar color
	*/
	loading: {
		color: "#07806A",
	},
	/*
	** Customize the SPA loading indicator
	*/
	loadingIndicator: "~/loader.html",
	/*
	** Global CSS
	*/
	css: [
		"~/scss/main.scss",
	],
	/*
	** Auto import components
	*/
	components: [
		{ path: "~/components", extensions: ["vue"] },
	],
	/*
	** Source code directory
	*/
	srcDir: "./src",
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{
			src: "~/plugins/loader-timeout.js",
			mode: "client",
		},
		{
			src: "~/plugins/pixi.js",
			mode: "client",
		},
		{
			src: "~/plugins/routes.js",
		},
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		"@nuxtjs/eslint-module",
		// Doc: https://github.com/nuxt-community/stylelint-module
		"@nuxtjs/stylelint-module",
		// Doc: https://github.com/nuxt-community/svg-module
		"@nuxtjs/svg",
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		"@nuxtjs/axios",
		"@nuxtjs/pwa",
		"nuxt-i18n",
	],
	/*
	** PWA config
	*/
	pwa: {
		icon: {
			plugin: false,
		},
		meta: {
			mobileAppIOS: true,
			theme_color: "#293D4A",
		},
		manifest: {
			name: "Population Growth Through History",
			short_name: "Human Nature",
			display: "standalone",
			lang: "en",
		},
	},
	/*
	** i18n config
	*/
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
		vueI18n: {
			fallbackLocale: "en",
			messages: {
				en: enTranslations,
			},
		},
	},
};
