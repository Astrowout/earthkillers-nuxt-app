const timeout = (s) => {
	return new Promise(resolve => setTimeout(resolve, s));
};

export default async({ $config }) => {
	console.log($config.BASE_URL);
	// TODO: change this to 3000
	await timeout(1000);
};
