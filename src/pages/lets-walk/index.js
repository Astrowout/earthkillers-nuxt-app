import gsap from 'gsap';
import { debounce, throttle } from 'lodash';
import { config } from '@/assets/config';
import { Year, Population, Hamburger } from '@/components';
import { sprites } from '@/plugins/pixi';
import { getScrollSpeed } from '@/utils/scrollSpeed';

let timer = null;

export default {
	head: {
		title: 'A Stroll Through History'
	},
	components: {
		Year,
		Population,
		Hamburger
	},
	async asyncData({ $axios }) {
		const res = await $axios.$get('https://d6wn6bmjj722w.population.io/1.0/population/World/today-and-tomorrow/');
		const totalPopulation = res.total_population[0].population;

		return {
			totalPopulation
		};
	},
	data() {
		return {
			currentYear: 0,
			currentPopulation: 0,
			lastScrollTop: 0,
			firstScroll: true,
			isScrolling: null,
			future: false
		};
	},
	created() {
		window.addEventListener('resize', this.handleResize);
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},
	mounted() {
		this.handleScroll();
		this.renderCanvas();
		this.loopScene();
	},
	methods: {
		handleScroll() {
			const controller = new this.$ScrollMagic.Controller();

			const scene = new this.$ScrollMagic.Scene({
				duration: config.totalDuration,
				triggerElement: this.$refs.container,
				triggerHook: 0
			})
				.setPin(this.$refs.container)
				.addTo(controller);

			const startScene = new this.$ScrollMagic.Scene({
				duration: config.hintDuration,
				triggerElement: this.$refs.container,
				triggerHook: 0
			})
				.addTo(controller);

			const futureScene = new this.$ScrollMagic.Scene({
				duration: config.futureDuration,
				triggerElement: this.$refs.container,
				triggerHook: 0
			})
				.addTo(controller);

			scene.on('progress', (e) => {
				this.animatePlayer(e.progress);
				this.animateScene(e.progress, e.scrollDirection);
			});

			startScene.on('end', (e) => {
				this.handleFirstScroll(e.scrollDirection);
			});

			futureScene.on('end', (e) => {
				this.handleFuture(e.scrollDirection);
			});
		},

		handleFirstScroll(scrollDirection) {
			if (scrollDirection === 'FORWARD') {
				this.firstScroll = false;
			}
		},

		handleFuture(scrollDirection) {
			if (scrollDirection === 'FORWARD') {
				this.future = true;
				this.changeScene(true);
			} else if (scrollDirection === 'REVERSE') {
				this.future = false;
				this.changeScene(false);
			}
		},

		changeScene(future) {
			const { walkingPlayer, background, clouds, groundOverlay, robot } = sprites;

			gsap.to(background, {
				alpha: future ? 0 : 1,
				duration: 3
			});

			gsap.to(clouds, {
				alpha: future ? 0.2 : 1,
				duration: 2
			});

			gsap.to(groundOverlay, {
				alpha: future ? 0.4 : 0,
				duration: 2
			});

			if (future) {
				gsap
					.timeline()
					.to(walkingPlayer, {
						y: this.$PIXI.screen.height + walkingPlayer.height,
						alpha: 0,
						duration: 0.6,
						ease: 'back.in(3)'
					})
					.fromTo(robot, {
						x: -robot.width,
						angle: -20
					}, {
						x: this.$PIXI.screen.width / 2,
						duration: 1,
						ease: 'back.out(0.8)'
					})
					.fromTo(robot, {
						angle: -20
					}, {
						angle: 0,
						duration: 2.5,
						ease: 'elastic.out(1, 0.3)'
					}, '<0.26');
			} else {
				gsap
					.timeline()
					.to(robot, {
						x: this.$PIXI.screen.width + robot.width,
						duration: 1,
						angle: -20,
						ease: 'power2.in'
					})
					.to(walkingPlayer, {
						y: this.$PIXI.screen.height - groundOverlay.height + 18,
						alpha: 1,
						duration: 0.6,
						ease: 'back.out(3)'
					});
			}
		},

		renderCanvas() {
			const { container } = this.$refs;

			container.insertBefore(this.$PIXI.view, container.firstChild);
		},

		animatePlayer: throttle(function(progress) {
			if (!this.future) {
				const { walkingPlayer } = sprites;
				const speedSetter = gsap.quickSetter(walkingPlayer, 'animationSpeed');
				const speed = getScrollSpeed(progress);

				speedSetter(speed);

				clearTimeout(timer);
				timer = setTimeout(() => {
					speedSetter(0);
				}, 300);
			}
		}, 100),

		loopScene() {
			const { clouds } = sprites;

			this.$PIXI.ticker.add(() => {
				clouds.tilePosition.x -= config.cloudSpeed;
			});
		},

		animateScene: throttle(function(progress, scrollDirection) {
			const { ground, walkingPlayer } = sprites;

			const year = gsap.utils.mapRange(0, 1, config.startYear, config.endYear, progress);
			this.currentYear = Math.round(year);

			const population = gsap.utils.mapRange(0, 1, config.startPopulation, this.totalPopulation, progress);
			this.currentPopulation = Math.round(population);

			gsap.to(ground.tilePosition, {
				x: gsap.utils.mapRange(0, 1, 0, config.groundSpeed, -progress),
				duration: 0.2,
				overwrite: true
			});

			// Reverse player position when scrolling backwards
			gsap.to(walkingPlayer.scale, {
				x: scrollDirection === 'REVERSE' ? -config.playerScale : config.playerScale,
				duration: 0.2,
				overwrite: true
			});
		}, 100),

		handleResize: debounce(function() {
			const { ground, walkingPlayer, robot, background, futureBackground } = sprites;

			ground.y = this.$PIXI.screen.height;
			ground.width = this.$PIXI.screen.width;

			background.width = this.$PIXI.screen.width;
			background.height = this.$PIXI.screen.height;

			futureBackground.width = this.$PIXI.screen.width;
			futureBackground.height = this.$PIXI.screen.height;

			robot.y = this.$PIXI.screen.height - ground.height + 15;

			walkingPlayer.x = (this.$PIXI.screen.width / 2);
			walkingPlayer.y = this.$PIXI.screen.height - ground.height + 18;
		}, 300)
	}
};
