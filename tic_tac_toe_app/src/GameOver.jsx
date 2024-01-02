import React from "react";
import './gameOver.css';

const GameOver = ({restart}) => {
  return(
    <div>
      <h2>It's a tie</h2>
      <button className="gameOverButton" onClick={restart}>Start a new game</button>
    </div>
  );
};

export default GameOver;