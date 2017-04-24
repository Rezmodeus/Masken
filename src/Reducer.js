function setInBoard(x, y, value, board) {
	return [
		...board.slice(0, y),
		[...board[y].slice(0, x), ...[value], ...board[y].slice(x + 1)],
		...board.slice(y + 1)
	]

}

export default function (state, action) {
	let newState;
	switch (action.type) {
		case 'UPDATE':
			let newBoard;
			const player = state.player[state.player.length - 1];
			let newPlayer;
			switch (state.gameState) {

				case 'playing':
					const nextPos = {x: player.x + state.direction.x, y: player.y + state.direction.y};
					switch (state.board[nextPos.y][nextPos.x]) {
						case 0:
							newBoard = setInBoard(nextPos.x, nextPos.y, 1, state.board);
							newBoard = setInBoard(state.player[0].x, state.player[0].y, 0, newBoard);
							newPlayer = [...state.player.slice(1, state.player.length), nextPos];
							// console.log(newPlayer)
							state = {
								...state,
								board: newBoard,
								player: newPlayer
							};

							break;
						case 1:
							state = {
								...state,
								gameState: 'gameOver'
							};
							break;
						case 2:
							// food
							newBoard = setInBoard(nextPos.x, nextPos.y, 1, state.board);
							// newBoard = setInBoard(player.x,player.y,0,newBoard);
							newPlayer = [...state.player, nextPos];
							const rx = Math.floor(Math.random() * state.board[0].length - 2) + 1;
							const ry = Math.floor(Math.random() * state.board.length - 2) + 1;
							newBoard = setInBoard(rx, ry, 2, newBoard);
							state = {
								...state,
								board: newBoard,
								player: newPlayer
							};
							break;

						default:
							state = state;
							break;
					}

					break;
				case 'gameOver':
					break;
				default:
					break;
			}


			break;
		case 'SET_DIRECTION':
			state = {
				...state,
				direction: {...action.direction}
			};
			break;
		default:
			break;
	}
	return state;
}
