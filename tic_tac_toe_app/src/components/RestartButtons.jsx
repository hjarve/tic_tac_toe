
// Shown when the game ends
const RestartButtons = ({save, restart}) => {

  return(
    <div>
      <button className="restartButton" onClick={restart}>Restart without saving</button>
      <button className="restartButton" onClick={save}>Save game</button>
    </div>
  )
}

export default RestartButtons;