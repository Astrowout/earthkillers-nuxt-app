import throttle from "lodash/throttle";
import gsap from "gsap";

export default {
	props: {
		currentPopulation: {
			type: Number,
			required: true,
			default: 0,
		},
		isFuture: {
			type: Boolean,
			required: false,
			default: false,
		},
	},

	data() {
		return {
			throttledPopulation: "0",
			throttledPopulationArray: ["0"],
		};
	},
	watch: {
		currentPopulation: throttle(function(newValue, oldValue) {
			if (newValue === oldValue) {
				return;
			}

			this.throttledPopulation = newValue.toString();
			this.throttledPopulationArray = newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").split("");
		}, 1800, {
			leading: false,
		}),
	},

	methods: {
		leave(_, done) {
			gsap.to(`.${this.$style.char}`, {
				duration: 0.1,
				y: "-30%",
				opacity: 0,
				stagger: "0.03",
				onComplete: done,
			});
		},

		enter(_, done) {
			gsap.from(`.${this.$style.char}`, {
				duration: 0.6,
				y: "30%",
				opacity: 0,
				stagger: "0.03",
				ease: "elastic.out(1.3, 0.5)",
				onComplete: done,
			});
		},
	},
};
