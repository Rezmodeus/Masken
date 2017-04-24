export default {

	update () {
		return {
			type: 'UPDATE'
		};
	},
	setDirection (direction) {
		return {
			type: 'SET_DIRECTION',
			direction
		};
	}
};
