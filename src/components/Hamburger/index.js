export default {
	computed: {
		isOpen() {
			return this.$store.state.isMenuOpen;
		}
	},

	methods: {
		handleOpen(state) {
			this.$store.dispatch('handleIsMenuOpen', {
				state
			});
		}
	}
};
