const timeout = (s) => {
	return new Promise(resolve => setTimeout(resolve, s));
};

export default async() => {
	// TODO: change this to 3000
	await timeout(1000);
};
