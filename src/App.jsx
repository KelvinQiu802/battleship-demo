import './App.css';
import React from 'react';
import * as GAME_STATE from './utils/gameState';
import Welcome from './components/Welcome/Welcome';
import Game from './components/Game/Game';

const App = () => {
  const [gameState, setGameState] = React.useState(GAME_STATE.WELCOME);
  return (
    <div className='App'>
      {gameState === GAME_STATE.WELCOME ? (
        <Welcome setGameState={setGameState} />
      ) : (
        <Game />
      )}
    </div>
  );
};

export default App;
