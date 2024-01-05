import { useState } from "react";

const PlayerForm = ({setPlayerX, setPlayerO}) => {
  const [x, setX] = useState('');
  const [o, setO] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayerX(x);
    setPlayerO(o);
  }

  return(
    <div>
      <h2>Welcome to play tic tac toe!</h2>
      <p>To start the game, enter the names of the players:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='xName'>Player X:</label>
          <input name='x' value={x} id="xName" onChange={(event) => setX(event.target.value)} maxLength={20} minLength={1} required/>
        </div>
        <div>
          <label htmlFor="oName">Player O: </label>
          <input name='o' value={o} id="oName" onChange={(event) => setO(event.target.value)} maxLength={20} minLength={1} required/>
        </div>
        <button type='submit'>OK</button>
      </form>
    </div>
  )
}

export default PlayerForm;