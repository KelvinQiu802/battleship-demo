import './harbour.css';
import Ship from './Ship';
import uuid from 'react-uuid';

const Harbour = ({ avaliableShips, placingShip, setPlacingShip }) => {
  return (
    <div className='harbour'>
      {avaliableShips.map((item) => (
        <Ship
          key={uuid()}
          ship={item}
          placingShip={placingShip}
          setPlacingShip={setPlacingShip}
        />
      ))}
    </div>
  );
};

export default Harbour;
