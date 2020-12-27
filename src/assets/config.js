import gsap from "gsap";

const config = {
	startPopulation: 0,
	startYear: 0,
	endYear: 8080,
	totalDuration: 100000,
	hintDuration: 2000,
};

config.futureDuration = gsap.utils.mapRange(config.startYear, config.endYear, 0, config.totalDuration, new Date().getFullYear());

export {
	config,
};
