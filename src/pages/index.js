export default {
	head: {
		title: "Human History In A Nutshell",
	},

	created() {
		this.$store.dispatch("updateTip", "Dit is een <strong>tip.</strong>");
	},
};
