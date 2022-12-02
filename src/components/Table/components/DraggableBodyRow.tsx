import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface DraggableBodyRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableBodyRow: React.FC<DraggableBodyRowProps> = (props) => {
  const { index, moveRow, className, style, ...restProps } = props;

  const ref = useRef<HTMLTableRowElement>(null);

  const [, drag] = useDrag({
    type: 'DraggableBodyRow',
    item: { index },
  });

  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: 'DraggableBodyRow',
    collect: (monitor) => {
      const { index: dragIndex }: any = monitor.getItem() || {};

      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: (item: { index: number }) => {
      moveRow(item.index, index);
    },
  });

  drop(drag(ref));

  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

export default DraggableBodyRow;
