import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { config } from "~/src/helpers/node_modules/~/assets/config";

import ground from "~/assets/images/stroll/ground.jpg";
import clouds from "~/assets/images/stroll/clouds.png";
import robot1 from "~/assets/images/stroll/player/robot-1.png";
import robot2 from "~/assets/images/stroll/player/robot-2.png";
import robot3 from "~/assets/images/stroll/player/robot-3.png";
import robot4 from "~/assets/images/stroll/player/robot-4.png";
import robot5 from "~/assets/images/stroll/player/robot-5.png";
import robot6 from "~/assets/images/stroll/player/robot-6.png";
import robot7 from "~/assets/images/stroll/player/robot-7.png";
import robot8 from "~/assets/images/stroll/player/robot-8.png";
import robot9 from "~/assets/images/stroll/player/robot-9.png";
import robot10 from "~/assets/images/stroll/player/robot-10.png";
import robot11 from "~/assets/images/stroll/player/robot-11.png";
import robot12 from "~/assets/images/stroll/player/robot-12.png";
import walking1 from "~/assets/images/stroll/player/walk-1.png";
import walking2 from "~/assets/images/stroll/player/walk-2.png";
import walking3 from "~/assets/images/stroll/player/walk-3.png";
import walking4 from "~/assets/images/stroll/player/walk-4.png";
import walking5 from "~/assets/images/stroll/player/walk-5.png";
import walking6 from "~/assets/images/stroll/player/walk-6.png";
import walking7 from "~/assets/images/stroll/player/walk-7.png";
import walking8 from "~/assets/images/stroll/player/walk-8.png";
import walking9 from "~/assets/images/stroll/player/walk-9.png";
import walking10 from "~/assets/images/stroll/player/walk-10.png";
import walking11 from "~/assets/images/stroll/player/walk-11.png";
import walking12 from "~/assets/images/stroll/player/walk-12.png";
import walking13 from "~/assets/images/stroll/player/walk-13.png";
import walking14 from "~/assets/images/stroll/player/walk-14.png";
import walking15 from "~/assets/images/stroll/player/walk-15.png";
import walking16 from "~/assets/images/stroll/player/walk-16.png";
import walking17 from "~/assets/images/stroll/player/walk-17.png";
import walking18 from "~/assets/images/stroll/player/walk-18.png";
import walking19 from "~/assets/images/stroll/player/walk-19.png";
import walking20 from "~/assets/images/stroll/player/walk-20.png";

const robotLooping = [
	robot1,
	robot2,
	robot3,
	robot4,
	robot5,
	robot6,
	robot7,
	robot8,
	robot9,
	robot10,
	robot11,
	robot12,
];

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
	walking20,
];

let app = null;
export const sprites = {};

const logger = (text, success) => {
	// eslint-disable-next-line no-console
	console.log(`%c${text}`, `color: ${success ? "#0be881" : "#ffd32a"}`);
};

const initPixi = () => {
	logger("Initializing PIXI...");

	PIXI.utils.skipHello();

	logger("PIXI initialized!", true);
};

const setupPixi = () => {
	logger("Setting up PIXI...");

	app = new PIXI.Application({
		antialias: true,
		autoDensity: true,
		resizeTo: window,
	});

	// use the GSAP ticker instead of the one from PIXI
	app.ticker.stop();
	gsap.ticker.add(() => {
		app.ticker.update();
	});

	logger("PIXI setup completed!", true);
};

const loadAssets = () => {
	logger("Loading PIXI assets...");

	return new Promise((resolve) => {
		app.loader
			.add("ground", ground)
			.add("clouds", clouds)
			.add("robot", robotLooping)
			.add("playerWalking", playerWalking)
			.load((_, assets) => {
				logger("PIXI assets loaded", true);
				setupSprites(assets);
				resolve();
			});
	});
};

const setupSprites = (assets) => {
	logger("Setting up PIXI sprites...");

	sprites.background = new PIXI.Graphics();
	sprites.futureBackground = new PIXI.Graphics();
	sprites.groundOverlay = new PIXI.Graphics();

	sprites.ground = new PIXI.TilingSprite(assets.ground.texture, app.screen.width, assets.ground.texture.height);
	sprites.clouds = new PIXI.TilingSprite(assets.clouds.texture, app.screen.width, assets.clouds.texture.height);

	const robotFrames = robotLooping.map((frame) => {
		return PIXI.Texture.from(frame);
	});
	sprites.robot = new PIXI.AnimatedSprite(robotFrames);

	const walkFrames = playerWalking.map((frame) => {
		return PIXI.Texture.from(frame);
	});
	sprites.walkingPlayer = new PIXI.AnimatedSprite(walkFrames);

	logger("PIXI sprites finished!", true);
};

const setupScene = () => {
	logger("Setting up scene...");

	sprites.background.beginFill(0xBAE8E8);
	sprites.background.drawRect(0, 0, app.screen.width, app.screen.height);
	sprites.background.endFill();

	sprites.futureBackground.beginFill(0x022727);
	sprites.futureBackground.drawRect(0, 0, app.screen.width, app.screen.height);
	sprites.futureBackground.endFill();

	sprites.groundOverlay.beginFill(0x022727);
	sprites.groundOverlay.drawRect(0, 0, app.screen.width, sprites.ground.height);
	sprites.groundOverlay.endFill();

	sprites.clouds.y = 50;

	sprites.ground.anchor.set(0, 1);
	sprites.ground.y = app.screen.height;

	sprites.groundOverlay.y = -sprites.ground.height;
	sprites.groundOverlay.alpha = 0;

	sprites.robot.anchor.set(0.5, 1);
	sprites.robot.scale.set(config.robotScale);
	sprites.robot.x = -100;
	sprites.robot.y = app.screen.height - sprites.ground.height + 15;
	sprites.robot.animationSpeed = 0.1;
	sprites.robot.play();

	sprites.walkingPlayer.anchor.set(0.5, 1);
	sprites.walkingPlayer.scale.set(config.playerScale);
	sprites.walkingPlayer.x = (app.screen.width / 2);
	sprites.walkingPlayer.y = app.screen.height - sprites.ground.height + 18;
	sprites.walkingPlayer.animationSpeed = 0;
	sprites.walkingPlayer.play();

	logger("Scene setup successfully", true);
};

const renderScene = () => {
	logger("Rendering scene...");

	app.stage.addChild(sprites.futureBackground);
	app.stage.addChild(sprites.background);
	app.stage.addChild(sprites.clouds);
	app.stage.addChild(sprites.ground);
	sprites.ground.addChild(sprites.groundOverlay);
	app.stage.addChild(sprites.walkingPlayer);
	app.stage.addChild(sprites.robot);

	const noiseFilter = new PIXI.filters.NoiseFilter(0.03);
	app.stage.filters = [noiseFilter];

	logger("Scene fully rendered", true);
};

export default async(_, inject) => {
	await initPixi();
	await setupPixi();
	await loadAssets();
	await setupScene();
	await renderScene();

	// This will make $PIXI available in the context
	inject("PIXI", app);
};
