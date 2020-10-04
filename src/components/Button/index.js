export default {
	props: {
		url: {
			type: String,
			default: null,
			required: false,
		},
		secondary: {
			type: Boolean,
			default: false,
			required: false,
		},
		iconBefore: {
			type: String,
			default: null,
			required: false,
		},
		iconAfter: {
			type: String,
			default: null,
			required: false,
		},
	},
};
