import { useState, useEffect } from 'react';
import PlayerForm from './PlayerForm';
import Grid from './Grid';

function App() {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [xTurn, setXTurn] = useState(true);
  const [playing, setPlaying] = useState('');
  const [gridValues, setGridValues] = useState([['free', 'free', 'free'],['free', 'free', 'free'],['free', 'free', 'free']]);

  useEffect(() => {
    if(xTurn) setPlaying(`X: ${playerX}`);
    else setPlaying(`O: ${playerO}`);
  }, [xTurn, playerX, playerO]);

  useEffect(() => {
    setXTurn(!xTurn);
  }, [gridValues])

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {!playerX && !playerO ? <PlayerForm setPlayerX={setPlayerX} setPlayerO={setPlayerO}/>
      :
      <div>
        <p>Player X: {playerX}</p>
        <p>Player O: {playerO}</p> 
        <p>Playing {playing}</p>
        <button onClick={() => setXTurn(!xTurn)}>Change turn</button>
        <Grid 
          xTurn={xTurn}
          gridValues={gridValues}
          setGridValues={setGridValues}
          />
      </div>
      }
    </>
  )
}

export default App
