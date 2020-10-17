import arrow from "~/assets/icons/arrow.svg?inline";
import walking from "~/assets/icons/walking.svg?inline";
import running from "~/assets/icons/running.svg?inline";

export default {
	props: {
		name: {
			type: String,
			required: true,
		},
	},

	components: {
		arrow,
		walking,
		running,
	},
};
