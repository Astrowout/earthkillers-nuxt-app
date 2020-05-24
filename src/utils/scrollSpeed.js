// import gsap from 'gsap';
import gsap from 'gsap';
import { config } from '@/assets/config';

let lastPos = 0;
const minSpeed = 0;
const maxSpeed = config.maxPlayerSpeed;
const minAngle = 0;
const maxAngle = config.robotAngle;
const minDelta = 0;
const maxDelta = 0.005;

export const getScrollSpeed = (progress, robot) => {
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

	const angleTransformer = gsap.utils.pipe(
		gsap.utils.snap(0.001),
		gsap.utils.mapRange(minDelta, maxDelta, minAngle, maxAngle),
		gsap.utils.clamp(-maxAngle, maxAngle)
	);

	if (robot) {
		return angleTransformer(delta.current);
	} else {
		return Math.abs(speedTransformer(delta.current));
	}
};
