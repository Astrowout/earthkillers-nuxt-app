import gsap from "gsap";

const config = {
	startPopulation: 0,
	startYear: 0,
	endYear: 8080,
	groundSpeed: 6000,
	cloudSpeed: 0.5,
	playerScale: 0.7,
	robotScale: 0.9,
	robotAngle: 20,
	maxPlayerSpeed: 0.6,
	totalDuration: 100000,
	hintDuration: 2000,
};

config.futureDuration = gsap.utils.mapRange(config.startYear, config.endYear, 0, config.totalDuration, new Date().getFullYear());

export {
	config,
};
