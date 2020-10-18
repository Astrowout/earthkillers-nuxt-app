export default {
	head: {
		title: "Human History In A Nutshell",
	},

	created() {
		setTimeout(() => {
			this.$store.dispatch("updateTip", "Dit is een <strong>nieuwe tip.</strong>");
		}, 1200);
	},
};
