// import { gsap } from "gsap";

import { gsap } from "gsap";

export default {
	computed: {
		tip() {
			return this.$store.getters.getTip || "placeholder";
		},
	},

	methods: {
		beforeEnter(el) {
			gsap.set(el, {
				opacity: 0,
			});
		},
		enter(el, done) {
			gsap.to(el, {
				opacity: 1,
				onComplete: done,
			});
		},
		leave(el, done) {
			gsap.to(el, {
				x: "30px",
				opacity: 0,
				onComplete: done,
			});
		},
	},
};
