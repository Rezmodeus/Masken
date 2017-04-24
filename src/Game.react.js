import React from 'react';
import Actions from './Actions';
import {connect} from 'react-redux';


const Game = React.createClass({
	componentDidMount(){

		document.onkeydown = this.checkKey;


		setInterval(() => this.props.update(), 500);

	},

	checkKey(e) {

		let direction = {...this.props.direction};
		e = e || window.event;

		if (e.keyCode === 38) {
			// up arrow
			direction.y = -1;
			direction.x = 0;
		}
		else if (e.keyCode === 40) {
			// down arrow
			direction.y = 1;
			direction.x = 0;
		}
		else if (e.keyCode === 37) {
			// left arrow
			direction.x = -1;
			direction.y = 0;
		}
		else if (e.keyCode === 39) {
			// right arrow
			direction.x = 1;
			direction.y = 0;
		}
		this.props.setDirection(direction);

	},

	render() {
		console.log('render', this.props);

		const containerStyle = {
			display: 'flex',
			flexDirection: 'column',
			width: 500,
			margin: '20px auto'
		};

		const rowStyle = {
			display: 'flex',
			flex: 1
		};

		const cellStyle = {
			display: 'flex',
			flex: 1
		};
		const cstyle0 = {
			height:27,
			display: 'flex',
			flex: 1,
			padding: 0,
			backgroundColor: 'black',
			border: '.02em solid white'
		};
		const cstyle1 = {
			height:27,
			display: 'flex',
			flex: 1,
			padding: 0,
			backgroundColor: 'grey',
			border: '.02em solid white'
		};
		const cstyle2 = {
			height:27,
			display: 'flex',
			flex: 1,
			backgroundColor: 'red',
			border: '.02em solid white'
		};
		const cStyles = [cstyle0, cstyle1, cstyle2];


		const board = this.props.board.map((row, index) => {
			return (
				<div key={index} style={rowStyle}>
					{row.map((cell, index) => {
						return (
							<div key={index} style={cStyles[cell]}></div>
						)
					})}
				</div>
			)

		});
		return (
			<div style={containerStyle}>{this.props.gameState}
				{board}

			</div>
		)
	}
});

const mapStateToProps = (state) => {
	return {
		...state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		update: () => dispatch(Actions.update()),
		setDirection: (direction) => dispatch(Actions.setDirection(direction))
	}
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Game)




