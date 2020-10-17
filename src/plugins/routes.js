export const pathNames = Object.freeze({
	home: "/",
	stroll: "/lets-walk",
});

export default (_, inject) => {
	// This will make $pathNames available in all the templates
	inject("pathNames", pathNames);
};
