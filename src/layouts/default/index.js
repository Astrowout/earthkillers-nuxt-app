import { gsap } from "gsap";

const speed = 0.2;
const mouse = {
	x: 0,
	y: 0,
};
const pos = {
	x: 0,
	y: 0,
};
let moved = false;

export default {
	mounted() {
		this.xSet = gsap.quickSetter(this.$refs.cursor, "x", "px");
		this.ySet = gsap.quickSetter(this.$refs.cursor, "y", "px");

		// this.handleGSAPTicker();
		// this.handleResetMouse();
	},

	methods: {
		handleMouseMove(e) {
			if (!moved) {
				this.handleMouseReveal();

				moved = true;
			}

			mouse.x = e.x;
			mouse.y = e.y;
		},

		handleGSAPTicker() {
			gsap.ticker.add(() => {
				const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

				pos.x += (mouse.x - pos.x) * dt;
				pos.y += (mouse.y - pos.y) * dt;
				this.xSet(pos.x);
				this.ySet(pos.y);
			});
		},

		handleMouseClick() {
			const tl = gsap.timeline();
			tl
				.to(this.$refs.cursor, {
					scale: 1.5,
					duration: 0.2,
				})
				.to(this.$refs.cursor, {
					scale: 1,
					duration: 0.3,
				});
		},

		handleResetMouse() {
			gsap.set(this.$refs.cursor, {
				xPercent: -50,
				yPercent: -50,
			});
		},

		handleMouseReveal() {
			gsap.to(this.$refs.cursor, {
				opacity: 1,
				delay: speed * 2,
			});
		},
	},
};
