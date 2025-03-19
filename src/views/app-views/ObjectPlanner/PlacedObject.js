import { useDrag } from 'react-dnd';

const PlacedObject = ({ obj, onMove, onClick }) => {
  const [, drag] = useDrag({
    type: 'OBJECT',
    item: { id: obj.id, type: 'OBJECT' }, 
    end: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        const x = Math.round(obj.x + delta.x);
        const y = Math.round(obj.y + delta.y);
        onMove(item.id, x, y);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <img
      ref={drag}
      src={obj.image}
      alt={obj.name}
      style={{
        left: obj.x,
        top: obj.y,
        transform: `rotate(${obj.angle}deg)`,
        height: `${obj.height * 50}px`,
        width: `${obj.width * 50}px`,
        position: 'absolute',
        cursor: 'move',
      }}
      onClick={onClick}
    />
  );
};

export default PlacedObject;