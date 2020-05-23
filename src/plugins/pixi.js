import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';

import ground from '@/assets/images/stroll/ground.jpg';
import clouds from '@/assets/images/stroll/clouds.jpg';
import walk1 from '@/assets/images/stroll/player/walk/walk1.png';
import walk2 from '@/assets/images/stroll/player/walk/walk2.png';
import walk3 from '@/assets/images/stroll/player/walk/walk3.png';
import walk4 from '@/assets/images/stroll/player/walk/walk4.png';
import walk5 from '@/assets/images/stroll/player/walk/walk5.png';
import walk6 from '@/assets/images/stroll/player/walk/walk6.png';
import walk7 from '@/assets/images/stroll/player/walk/walk7.png';
import walk8 from '@/assets/images/stroll/player/walk/walk8.png';
import walk9 from '@/assets/images/stroll/player/walk/walk9.png';
import walk10 from '@/assets/images/stroll/player/walk/walk10.png';

import idle1 from '@/assets/images/stroll/player/idle/idle1.png';
import idle2 from '@/assets/images/stroll/player/idle/idle2.png';
import idle3 from '@/assets/images/stroll/player/idle/idle3.png';
import idle4 from '@/assets/images/stroll/player/idle/idle4.png';
import idle5 from '@/assets/images/stroll/player/idle/idle5.png';
import idle6 from '@/assets/images/stroll/player/idle/idle6.png';
import idle7 from '@/assets/images/stroll/player/idle/idle7.png';
import idle8 from '@/assets/images/stroll/player/idle/idle8.png';
import idle9 from '@/assets/images/stroll/player/idle/idle9.png';
import idle10 from '@/assets/images/stroll/player/idle/idle10.png';

const idlePlayer = [
	idle1,
	idle2,
	idle3,
	idle4,
	idle5,
	idle6,
	idle7,
	idle8,
	idle9,
	idle10
];

const walkingPlayer = [
	walk1,
	walk2,
	walk3,
	walk4,
	walk5,
	walk6,
	walk7,
	walk8,
	walk9,
	walk10
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

	gsap.registerPlugin(PixiPlugin);

	PixiPlugin.registerPIXI(PIXI);

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

	app.loader
		.add('ground', ground)
		.add('clouds', clouds)
		.add('walkingPlayer', walkingPlayer)
		.add('idlePlayer', idlePlayer)
		.load(onAssetsLoaded);
};

const onAssetsLoaded = (_, assets) => {
	logger('PIXI assets loaded', true);

	setupSprites(assets);
};

const setupSprites = (assets) => {
	logger('Setting up PIXI sprites...');

	sprites.ground = new PIXI.TilingSprite(assets.ground.texture, app.screen.width, assets.ground.texture.height);
	sprites.clouds = new PIXI.TilingSprite(assets.clouds.texture, app.screen.width, assets.clouds.texture.height);

	const idleFrames = idlePlayer.map((frame) => {
		return PIXI.Texture.from(frame);
	});
	sprites.idlePlayer = new PIXI.AnimatedSprite(idleFrames);

	const walkFrames = walkingPlayer.map((frame) => {
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

	const noiseFilter = new PIXI.filters.NoiseFilter(0.05);
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
