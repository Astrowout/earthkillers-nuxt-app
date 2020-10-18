export default {
	handleIsMenuOpen({ commit }, payload) {
		commit("setIsMenuOpen", payload.state);
	},

	updateTip({ commit }, tip) {
		commit("setTip", tip);
	},
};
