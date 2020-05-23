import gsap from 'gsap';
import { throttle, debounce } from 'lodash';
import { config } from '@/assets/config';
import { Year, Population, Hamburger } from '@/components';
import { sprites } from '@/plugins/pixi';

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
			maxScroll: 0,
			lastScrollTop: 0,
			firstScroll: true,
			future: false
		};
	},
	created() {
		window.addEventListener('scroll', this.animateScene);
		window.addEventListener('resize', this.handleResize);
	},
	destroyed() {
		window.removeEventListener('scroll', this.animateScene);
		window.removeEventListener('resize', this.handleResize);
	},
	mounted() {
		this.renderCanvas();
		this.renderScene();

		this.maxScroll = Math.max(
			document.body.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight
		) - window.innerHeight;
	},
	methods: {
		renderCanvas() {
			const { container } = this.$refs;

			container.insertBefore(this.$PIXI.view, container.firstChild);
		},

		renderScene() {
			const { ground, walkingPlayer, clouds } = sprites;

			ground.anchor.set(0, 1);
			ground.y = this.$PIXI.screen.height;

			clouds.y = 50;

			walkingPlayer.anchor.set(0.5, 1);
			walkingPlayer.scale.set(0.4);
			walkingPlayer.x = (this.$PIXI.screen.width / 2);
			walkingPlayer.y = this.$PIXI.screen.height - ground.height + 12;

			this.$PIXI.stage.addChild(ground);
			this.$PIXI.stage.addChild(clouds);
			this.$PIXI.stage.addChild(walkingPlayer);
		},

		animateScene: throttle(function() {
			if (this.firstScroll) {
				this.firstScroll = false;
			}

			const { ground, walkingPlayer, clouds } = sprites;

			const scrollPos = window.pageYOffset;

			const year = gsap.utils.mapRange(0, this.maxScroll, config.startYear, config.endYear, scrollPos);
			this.currentYear = Math.round(year);

			const population = gsap.utils.mapRange(0, this.maxScroll, config.startPopulation, this.totalPopulation, scrollPos);
			this.currentPopulation = Math.round(population);

			gsap.to(ground.tilePosition, {
				x: gsap.utils.mapRange(0, this.maxScroll, 0, 10000, -scrollPos),
				overwrite: true
			});

			gsap.to(clouds.tilePosition, {
				x: gsap.utils.mapRange(0, this.maxScroll, 0, 1000, -scrollPos),
				overwrite: true
			});

			walkingPlayer.gotoAndStop(walkingPlayer.currentFrame + 1);

			const st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > this.lastScrollTop) {
				walkingPlayer.scale.set(0.4);
			} else {
				walkingPlayer.scale.set(-0.4, 0.4);
			}
			this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
		}, 100),

		resizeScene() {
			const { ground, walkingPlayer } = sprites;

			ground.y = this.$PIXI.screen.height;
			ground.width = this.$PIXI.screen.width;

			walkingPlayer.x = (this.$PIXI.screen.width / 2);
			walkingPlayer.y = this.$PIXI.screen.height - ground.height + 12;
		},

		handleResize: debounce(function() {
			this.resizeScene();
		}, 300)
	}
};
