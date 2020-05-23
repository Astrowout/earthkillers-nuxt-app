import * as PIXI from 'pixi.js';
import gsap from 'gsap';

import ground from '@/assets/images/stroll/ground.jpg';
import clouds from '@/assets/images/stroll/clouds.jpg';
import walking1 from '@/assets/images/stroll/player/walk-1.png';
import walking2 from '@/assets/images/stroll/player/walk-2.png';
import walking3 from '@/assets/images/stroll/player/walk-3.png';
import walking4 from '@/assets/images/stroll/player/walk-4.png';
import walking5 from '@/assets/images/stroll/player/walk-5.png';
import walking6 from '@/assets/images/stroll/player/walk-6.png';
import walking7 from '@/assets/images/stroll/player/walk-7.png';
import walking8 from '@/assets/images/stroll/player/walk-8.png';
import walking9 from '@/assets/images/stroll/player/walk-9.png';
import walking10 from '@/assets/images/stroll/player/walk-10.png';
import walking11 from '@/assets/images/stroll/player/walk-11.png';
import walking12 from '@/assets/images/stroll/player/walk-12.png';
import walking13 from '@/assets/images/stroll/player/walk-13.png';
import walking14 from '@/assets/images/stroll/player/walk-14.png';
import walking15 from '@/assets/images/stroll/player/walk-15.png';
import walking16 from '@/assets/images/stroll/player/walk-16.png';
import walking17 from '@/assets/images/stroll/player/walk-17.png';
import walking18 from '@/assets/images/stroll/player/walk-18.png';
import walking19 from '@/assets/images/stroll/player/walk-19.png';
import walking20 from '@/assets/images/stroll/player/walk-20.png';

const playerWalking = [
	walking1,
	walking2,
	walking3,
	walking4,
	walking5,
	walking6,
	walking7,
	walking8,
	walking9,
	walking10,
	walking11,
	walking12,
	walking13,
	walking14,
	walking15,
	walking16,
	walking17,
	walking18,
	walking19,
	walking20
];

let app = null;
export const sprites = {};

const logger = (text, success) => {
	// eslint-disable-next-line no-console
	console.log(`%c${text}`, `color: ${success ? '#0be881' : '#ffd32a'}`);
};

const initPixi = () => {
	logger('Initializing PIXI...');

	PIXI.utils.skipHello();

	logger('PIXI initialized!', true);
};

const setupPixi = () => {
	logger('Setting up PIXI...');

	app = new PIXI.Application({
		backgroundColor: '0xBAE8E8',
		antialias: true,
		autoStart: false,
		resizeTo: window
	});

	// use the GSAP ticker instead of the one from PIXI
	app.ticker.stop();
	gsap.ticker.add(() => {
		app.ticker.update();
	});

	logger('PIXI setup completed!', true);
};

const loadAssets = () => {
	logger('Loading PIXI assets...');

	return new Promise((resolve) => {
		app.loader
			.add('ground', ground)
			.add('clouds', clouds)
			.add('playerWalking', playerWalking)
			.load((_, assets) => {
				logger('PIXI assets loaded', true);
				setupSprites(assets);
				resolve();
			});
	});
};

const setupSprites = (assets) => {
	logger('Setting up PIXI sprites...');

	sprites.ground = new PIXI.TilingSprite(assets.ground.texture, app.screen.width, assets.ground.texture.height);
	sprites.clouds = new PIXI.TilingSprite(assets.clouds.texture, app.screen.width, assets.clouds.texture.height);

	const walkFrames = playerWalking.map((frame) => {
		return PIXI.Texture.from(frame);
	});
	sprites.walkingPlayer = new PIXI.AnimatedSprite(walkFrames);

	logger('PIXI sprites finished!', true);
};

const setupScene = () => {
	const background = new PIXI.Graphics();

	background.beginFill(0xBAE8E8);
	background.drawRect(0, 0, app.screen.width, app.screen.height);
	background.endFill();
	app.stage.addChild(background);

	const noiseFilter = new PIXI.filters.NoiseFilter(0.02);
	app.stage.filters = [noiseFilter];
};

export default async(_, inject) => {
	await initPixi();
	await setupPixi();
	await loadAssets();
	await setupScene();

	// This will make $PIXI available in the context
	inject('PIXI', app);
};
