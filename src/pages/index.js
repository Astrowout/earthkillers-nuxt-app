import { gsap } from "gsap";

export default {
	head: {
		title: "Human History In A Nutshell",
	},

	created() {
		setTimeout(() => {
			this.$store.dispatch("updateTip", "Dit is een <strong>nieuwe tip.</strong>");
		}, 1200);
	},

	mounted() {
		this.handleReveal();
	},

	computed: {
		htmlTitle() {
			return this.$t("home.title").replace(/([A-Za-z0-9'<>/]+)/g, `<span class='${this.$style.titleWord}'>$1</span>`);
		},

		htmlSubtitle() {
			return this.$t("home.subtitle").replace(/([A-Za-z0-9'<>/]+)/g, `<span class='${this.$style.subtitleWord}'>$1</span>`);
		},
	},

	methods: {
		handleReveal() {
			const tl = gsap.timeline({ delay: 1 });

			tl
				.fromTo(`.${this.$style.titleWord}`, {
					textShadow: "0px 0px 80px #39493D",
					opacity: 0,
				}, {
					textShadow: "0px 0px 0px #39493D",
					opacity: 1,
					ease: "power2.out",
					duration: 1.2,
					stagger: 0.2,
				})
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
					scale: 0.5,
					opacity: 0,
				}, {
					scale: 1,
					opacity: 1,
					ease: "power2.out",
					duration: 0.8,
				}, "-=1")
				.fromTo(this.$refs.cta.$refs.content, {
					scale: 1.5,
					opacity: 0,
				}, {
					scale: 1,
					opacity: 1,
					ease: "power2.out",
					duration: 0.8,
				});
		},
	},
};
