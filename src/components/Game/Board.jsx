import './board.css';
import {
  indexToCoordinate,
  createEmptyBoard,
  placeShipOnBoard,
  canBePlaced,
} from '../../utils/boardTools';

const Board = ({
  setAvaliableShips,
  placingShip,
  setPlacingShip,
  placedShips,
  setPlacedShips,
}) => {
  let board = createEmptyBoard();

  // 向棋盘中添加已经放置的船
  if (placedShips.length) {
    placedShips.forEach((item) => {
      board = placeShipOnBoard(board, item);
    });
  }

  // 向棋盘中添加正在放置的船
  if (placingShip.length) {
    board = placeShipOnBoard(board, placingShip, true);
  }

  // 鼠标移动时，改变准备放置船的位置
  const handleMouseOver = (index) => {
    if (placingShip.length) {
      setPlacingShip((prev) => {
        return {
          ...prev,
          position: {
            row: indexToCoordinate(index).row,
            col: indexToCoordinate(index).col,
          },
        };
      });
    }
  };

  // 旋转
  const handleTurn = (e) => {
    // 右键
    if (e.button === 2) {
      setPlacingShip((prev) => {
        return {
          ...prev,
          direction:
            prev.direction === 'HORIZONTAL' ? 'VERTICAL' : 'HORIZONTAL',
        };
      });
    }
  };

  // 放船
  const handlePlace = () => {
    if (placingShip.length) {
      const {
        name,
        length,
        direction,
        position: { row, col },
      } = placingShip;
      if (canBePlaced(board, length, direction, row, col) === 'OK') {
        setPlacedShips((prev) => [...prev, placingShip]);
        setPlacingShip({});
        setAvaliableShips((prev) => prev.filter((item) => item.name != name));
      }
    }
  };

  return (
    // 阻止右键默认行为
    <div className='board' onContextMenu={(e) => e.preventDefault()}>
      {board.map((item, index) => (
        <div
          key={index}
          className={`block ${item}`}
          data-index={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseDown={(e) => handleTurn(e)}
          onClick={handlePlace}
        ></div>
      ))}
    </div>
  );
};

export default Board;
