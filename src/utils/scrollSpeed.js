// import gsap from 'gsap';
import gsap from 'gsap';
import { config } from '@/assets/config';

let lastPos = 0;
const minSpeed = 0;
const maxSpeed = config.maxPlayerSpeed;
const minDelta = 0;
const maxDelta = 0.005;

export const getScrollSpeed = (progress) => {
	const delta = {
		current: 0
	};

	if (lastPos && progress < 1) {
		delta.current = progress - lastPos;
	}

	lastPos = progress;

	const speedTransformer = gsap.utils.pipe(
		gsap.utils.snap(0.001),
		gsap.utils.mapRange(minDelta, maxDelta, minSpeed, maxSpeed)
	);

	return Math.abs(speedTransformer(delta.current));
};
