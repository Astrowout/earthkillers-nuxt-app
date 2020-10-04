export default {
	handleIsMenuOpen({ commit }, payload) {
		commit("setIsMenuOpen", payload.state);
	},
};
