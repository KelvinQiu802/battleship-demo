const Ship = ({ ship, placingShip, setPlacingShip }) => {
  const handleClick = () => {
    setPlacingShip({
      ...ship,
      direction: 'HORIZONTAL',
      position: { row: null, col: null },
    });
  };

  return (
    <div
      className={`ship--block ${
        placingShip.name === ship.name ? 'placing' : null
      }`}
      onClick={handleClick}
    >
      {[...new Array(ship.length)].map((item, index) => (
        <div className='ship--unit' key={index}></div>
      ))}
    </div>
  );
};

export default Ship;
