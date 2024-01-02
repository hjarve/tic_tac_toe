import React from "react";

const GameOver = ({restart}) => {
  return(
    <div>
      <h2>It's a tie</h2>
      <button className="restartButton" onClick={restart}>Start a new game</button>
    </div>
  );
};

export default GameOver;