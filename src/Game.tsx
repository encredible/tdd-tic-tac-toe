import React from 'react';
import './Game.css';

const Square = ({i}: {i: number}) => {
  return (
    <button className="square">
      {/* TODO */}
    </button>
  );
}

const Board = () => {
  const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square i={0} />
          <Square i={1} />
          <Square i={2} />
        </div>
        <div className="board-row">
          <Square i={3} />
          <Square i={4} />
          <Square i={5} />
        </div>
        <div className="board-row">
          <Square i={6} />
          <Square i={7} />
          <Square i={8} />
        </div>
      </div>
    );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;

