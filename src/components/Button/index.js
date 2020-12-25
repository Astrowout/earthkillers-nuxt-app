import { gsap } from "gsap";

export default {
	props: {
		url: {
			type: String,
			default: null,
			required: false,
		},
		secondary: {
			type: Boolean,
			default: false,
			required: false,
		},
		iconBefore: {
			type: String,
			default: null,
			required: false,
		},
		iconAfter: {
			type: String,
			default: null,
			required: false,
		},
		hoverIcon: {
			type: String,
			default: null,
			required: false,
		},
	},

	methods: {
		handleMouseMove(e) {
			const xMovement = 0.25;
			const yMovement = 0.5;

			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const boundingRect = this.$el.getBoundingClientRect();
			const relX = e.pageX - boundingRect.left;
			const relY = e.pageY - boundingRect.top;

			gsap.to(this.$refs.content, {
				x: (relX - boundingRect.width / 2) * xMovement,
				y: (relY - boundingRect.height / 2 - scrollTop) * yMovement,
				duration: 0.5,
			});
		},

		handleMouseLeave() {
			gsap.to(this.$refs.content, {
				x: 0,
				y: 0,
				ease: "power3.out",
				duration: 0.5,
				clearProps: "all",
			});
		},
	},
};
