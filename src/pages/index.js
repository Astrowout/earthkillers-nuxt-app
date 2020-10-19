import { gsap } from "gsap";
import Cloud from "~/assets/images/cloud.svg?inline";

export default {
	head: {
		title: "Human History In A Nutshell",
	},

	components: {
		Cloud,
	},

	mounted() {
		this.handleReveal();
	},

	computed: {
		htmlTitle() {
			return this.$t("home.title").replace(/([A-Za-z0-9'<>/.]+)/g, `<span class='${this.$style.titleWord}'>$1</span>`);
		},

		htmlSubtitle() {
			return this.$t("home.subtitle").replace(/([A-Za-z0-9'<>/.]+)/g, `<span class='${this.$style.subtitleWord}'>$1</span>`);
		},
	},

	methods: {
		handleReveal() {
			const tl = gsap.timeline({
				delay: 1,
				onComplete: () => {
					this.$store.dispatch("updateTip", this.$t("home.tip"));
				},
			});

			tl
				.from(`.${this.$style.cloud}`, {
					y: "random(400, 800)",
					opacity: 0,
					ease: "power2.out",
					duration: 3,
					onComplete: this.handleClouds,
				})
				.fromTo(`.${this.$style.titleWord}`, {
					textShadow: "0px 0px 80px #39493D",
					opacity: 0,
				}, {
					textShadow: "0px 0px 0px #39493D",
					opacity: 1,
					ease: "power2.out",
					duration: 1.5,
					stagger: 0.3,
				}, "-=1.5")
				.fromTo(`.${this.$style.subtitleWord}`, {
					y: 16,
					opacity: 0,
				}, {
					y: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 0.8,
					stagger: 0.1,
				}, "-=1")
				.fromTo(this.$refs.cta.$el, {
					opacity: 0,
				}, {
					opacity: 1,
					duration: 0.8,
				}, "<")
				.fromTo(this.$refs.cta.$refs.content, {
					opacity: 0,
				}, {
					opacity: 1,
					duration: 0.5,
				}, "+=0.3")
				.fromTo(this.$refs.cta.$refs.content, {
					scale: 0.6,
				}, {
					scale: 1,
					ease: "back.out(5)",
					duration: 0.8,
				}, "<");
		},

		handleClouds() {
			gsap.to(`.${this.$style.cloud}`, {
				y: "random(8, 40)",
				duration: 6,
				repeat: -1,
				ease: "power2.inOut",
				yoyo: true,
			});

			gsap.to(`.${this.$style.bird}`, {
				opacity: 1,
				duration: 2,
				stagger: 0.5,
			});

			gsap.to(`.${this.$style.bird}`, {
				y: "random(8, 40)",
				duration: 6,
				repeat: -1,
				ease: "power2.inOut",
				yoyo: true,
			});
		},
	},
};
