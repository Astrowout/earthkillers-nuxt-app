// import { gsap } from "gsap";

import { gsap } from "gsap";

export default {
	computed: {
		tip() {
			return this.$store.getters.getTip || "placeholder";
		},

		hasTip() {
			return this.tip !== "placeholder";
		},

		htmlTip() {
			if (!this.hasTip) {
				return this.tip;
			}

			return this.tip.replace(/([A-Za-z0-9'<>/]+)/g, `<span class='${this.$style.tipWord}'>$1</span>`);
		},
	},

	methods: {
		beforeEnter() {
			if (!this.hasTip) {
				return;
			}

			this.$nextTick(() => {
				gsap.set(`.${this.$style.tipWord}`, {
					opacity: 0,
					y: "16px",
				});
			});
		},
		enter(_, done) {
			this.$nextTick(() => {
				gsap.to(`.${this.$style.tipWord}`, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					onComplete: done,
					stagger: 0.06,
				});
			});
		},
		leave(_, done) {
			this.$nextTick(() => {
				const words = document.querySelectorAll(`.${this.$style.tipWord}`);

				if (!this.hasTip || words.length === 0) {
					done();

					return;
				}

				gsap.to(words, {
					y: 16,
					opacity: 0,
					onComplete: done,
				});
			});
		},
	},
};
