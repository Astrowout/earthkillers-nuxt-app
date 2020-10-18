// import { gsap } from "gsap";

export default {
	computed: {
		tip() {
			return this.$store.getters.getTip;
		},
	},
};
