export default {
	props: {
		currentYear: {
			type: Number,
			required: true,
			default: 0
		},
		isFuture: {
			type: Boolean,
			required: false,
			default: false
		}
	}
};
