import tippy from 'tippy.js';

export default {
	created() {
		tippy('[data-tippy-tooltip]');
		console.log(tippy);
	}
};
