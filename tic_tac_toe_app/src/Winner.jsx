import React from "react";

const Winner = ({winner, restart}) => {
  return (
    <div>
      <h2>{winner} won!</h2>
      <button className="restartButton" onClick={restart}>Start a new game</button>
    </div>
    
  )
}

export default Winner;