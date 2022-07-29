import * as GAME_STATE from '../../utils/gameState';

const Welcome = ({ setGameState }) => {
  const handleClick = () => {
    setGameState(GAME_STATE.PLACING);
  };
  return (
    <div className='welcome'>
      <h1>Battleship Demo</h1>
      <button onClick={handleClick}>Start Game</button>
    </div>
  );
};

export default Welcome;
