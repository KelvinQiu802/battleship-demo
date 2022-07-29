import React from 'react';
import Board from './Board';
import Harbour from './Harbour';
import * as SHIPS from '../../utils/ships';

const Game = () => {
  const [p1AvaliableShips, setP1AvaliableShips] = React.useState([
    SHIPS.CARRIER,
    SHIPS.BATTLESHIP,
    SHIPS.DESTROYER,
    SHIPS.SUBMARINE,
    SHIPS.PATROL,
  ]);
  const [p1PlacingShip, setP1PlacingShip] = React.useState({});
  const [p1PlacedShips, setP1PlacedShips] = React.useState([]);

  return (
    <div className='Game'>
      <Board
        avaliableShips={p1AvaliableShips}
        setAvaliableShips={setP1AvaliableShips}
        placingShip={p1PlacingShip}
        setPlacingShip={setP1PlacingShip}
        placedShips={p1PlacedShips}
        setPlacedShips={setP1PlacedShips}
      />
      <br />
      <Harbour
        avaliableShips={p1AvaliableShips}
        placingShip={p1PlacingShip}
        setPlacingShip={setP1PlacingShip}
      />
    </div>
  );
};

export default Game;
