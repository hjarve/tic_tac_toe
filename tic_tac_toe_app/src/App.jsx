import { useState, useEffect } from 'react';
import PlayerForm from './components/PlayerForm';
import Grid from './components/Grid';
import GameOver from './components/GameOver';
import Winner from './components/Winner';
import History from './components/History';
import RestartButtons from './components/RestartButtons';
import Notification from './components/Notification';
import historyService from './services/history';
import './app.css';

function App() {
  const initializeGridValues = () => {
    return [['free', 'free', 'free'],['free', 'free', 'free'],['free', 'free', 'free']]
  }

  const [historyArray, setHistoryArray] = useState([]);
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [xTurn, setXTurn] = useState(true);
  const [playing, setPlaying] = useState('');
  const [gridValues, setGridValues] = useState(initializeGridValues());
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [message, setMessage] = useState(null);

  const showNotification = (notificationMessage) => {
    setMessage(notificationMessage);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }

  useEffect(() => {
    historyService
      .getAll()
      .then(response => {
        setHistoryArray(response.data);
      })
      .catch(error =>{
        console.log(error.message);
        showNotification('History could not be retreived. Do you have the server running?');
      })
  }, []);

  const restart = () => {
    setPlayerX('');
    setPlayerO('');
    setXTurn(false);
    setGridValues(initializeGridValues());
    setGameOver(false);
    setWin(false);
  };
  
  useEffect(() => {
    if(xTurn) setPlaying(`X: ${playerX}`);
    else setPlaying(`O: ${playerO}`);
  }, [xTurn, playerX, playerO]);

  // Checks for possible win or tie after every turn
  useEffect(() => {
    const checkForWinning = () => {
      if (gridValues[0][0] !== 'free' && gridValues[0][0] === gridValues[1][1] && gridValues[0][0] === gridValues[2][2]) {
        setWin(true);
        return true;
      }
      if (gridValues[0][2] !== 'free' && gridValues[0][2] === gridValues[1][1] && gridValues[0][2] === gridValues[2][0]) {
        setWin(true);
        return true;
      }
      gridValues.map((row) => {
        if (row[0] !== 'free' && row[0] === row[1] && row[0] === row[2]) {
          setWin(true);
          return true;
        }
      })
      for (let i = 0; i < 3; i++) {
        if (gridValues[0][i] !== 'free' && gridValues[0][i] === gridValues[1][i] && gridValues[0][i] === gridValues[2][i] ) {
        setWin(true);
        return true;
      }
      }
      return false;
    }

    const checkForGameEnding = () => {
      let gameEnded = false
      if (win) return true;
      let freeSpotFound = false;
      gridValues.map((row) => {
        row.map((value) => {
          if (value === 'free') {
            freeSpotFound = true;
          } 
        });
      });
      if (!freeSpotFound) {
        setGameOver(true);
        gameEnded = true;
      }
      return gameEnded;
    }

    const winnerFound = checkForWinning();
    if ( !winnerFound) {
      const gameEnded = checkForGameEnding();
      if (!gameEnded) {
        setXTurn((prevTurn) => !prevTurn);
      } 
    }
  }, [gridValues, win]);

  const handleSave = (event) => {
    event.preventDefault();
    const result = win ? (xTurn ? playerX : playerO) : 'tie';
    const newObject = {playerX: playerX, playerO: playerO, winner: result, date: new Date().toJSON()};
    historyService
      .create(newObject)
      .then(response => {
        setHistoryArray([...historyArray, response.data]);
      })
      .catch(error => {
        console.log(error.message);
        showNotification('The game could not be saved.');
      });
    restart();
  }

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
        {!(win | gameOver) ? <h3 className={xTurn ? 'xPlaying' : 'oPlaying'}>Playing {playing}</h3> : null}
        {gameOver ? <GameOver/> : null}
        {win ? <Winner winner={xTurn ? playerX : playerO}/> : null} 
        {win | gameOver ? <RestartButtons save={handleSave} restart={restart}/> : null}
        <Grid 
          xTurn={xTurn}
          gridValues={gridValues}
          setGridValues={setGridValues}
          playingAllowed={!win}
        />
      </div>
      }
      <Notification message={message}/>
      <History historyArray={historyArray}/>
    </div>
  );
}

export default App;
