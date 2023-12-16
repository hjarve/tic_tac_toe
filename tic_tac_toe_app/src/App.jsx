import { useState } from 'react';
import PlayerForm from './PlayerForm';

function App() {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [xTurn, setXTurn] = useState(true);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {!playerX && !playerO ? <PlayerForm setPlayerX={setPlayerX} setPlayerO={setPlayerO}/>
      :
      <div>
        <p>Player X: {playerX}</p>
        <p>Player O: {playerO}</p> 
      </div>
      }
    </>
  )
}

export default App
