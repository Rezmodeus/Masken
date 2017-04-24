import React, {Component} from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import Game from './Game.react';
import Reducer from './Reducer';




const store = createStore(Reducer, {
	gameState:'playing',
	board: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	player:[{x:8,y:8}],
	direction:{x:1,y:0}

});

class App extends Component {
	render() {
		console.log(store);
		return (
			<Provider store={store}>
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
						<h2>Welcome to React</h2>
					</div>
						<Game/>
				</div>
			</Provider>
		);
	}
}

export default App;
