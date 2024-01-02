import { useState, useEffect } from 'react';
import PlayerForm from './PlayerForm';
import Grid from './Grid';
import GameOver from './GameOver';
import './app.css';

function App() {
  const initializeGridValues = () => {
    return [['free', 'free', 'free'],['free', 'free', 'free'],['free', 'free', 'free']]
  }

  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [xTurn, setXTurn] = useState(false);
  const [playing, setPlaying] = useState('');
  const [gridValues, setGridValues] = useState(initializeGridValues());
  const [gameOver, setGameOver] = useState(false);

  const restart = () => {
    console.log('restart');
    setPlayerX('');
    setPlayerO('');
    setGridValues(initializeGridValues());
    setGameOver(false);
  }


  const checkForGameEnding = () => {
    let freeSpotFound = false;
    gridValues.map((row) => {
      row.map((value) => {
        if (value === 'free') {
          freeSpotFound = true;
        } 
      });
    });
    if (!freeSpotFound) {
      console.log('game over');
      setGameOver(true);
    }
  }

  useEffect(() => {
    if(xTurn) setPlaying(`X: ${playerX}`);
    else setPlaying(`O: ${playerO}`);
  }, [xTurn, playerX, playerO]);

  useEffect(() => {
    checkForGameEnding();
    setXTurn(!xTurn);
  }, [gridValues]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {!playerX && !playerO ? <PlayerForm setPlayerX={setPlayerX} setPlayerO={setPlayerO}/>
      :
      <div>
        <div>
          <p>Player X: {playerX}</p>
          <p>Player O: {playerO}</p>  
        </div>
        {!gameOver ? <h3 className={xTurn ? 'xPlaying' : 'oPlaying'}>Playing {playing}</h3> : null} 
        {gameOver ? <GameOver restart={restart}/> : null}
        <Grid 
          xTurn={xTurn}
          gridValues={gridValues}
          setGridValues={setGridValues}
          />
      </div>
      }
    </div>
  )
}

export default App
