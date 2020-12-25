import { gsap } from "gsap";
import Cloud from "~/assets/images/cloud.svg?inline";

export default {
	head: {
		title: "Human History In A Nutshell",
	},

	components: {
		Cloud,
	},

	data() {
		return {
			revealComplete: false,
		};
	},

	beforeCreate() {
		this.$store.dispatch("updateTip", null);
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
				})
				.from(`.${this.$style.bird}`, {
					y: "random(2000, 2500)",
					ease: "power2.out",
					duration: 3,
					onComplete: () => {
						this.revealComplete = true;
					},
				}, 0)
				.fromTo(`.${this.$style.titleWord}`, {
					textShadow: "0px 0px 80px #39493D",
					opacity: 0,
				}, {
					textShadow: "0px 0px 0px #39493D",
					opacity: 1,
					ease: "power2.out",
					duration: 1.5,
					stagger: 0.2,
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
					duration: 0.8,
				});
		},
	},
};
