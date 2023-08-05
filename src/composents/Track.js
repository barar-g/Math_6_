import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

function Track({ weights }) {
  return (
    <div>
      <Droppable droppableId="left">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {weights.filter(weight => weight.side === 'left').map((weight, index) => (
              <Draggable key={weight.id} draggableId={weight.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div>{weight.value}kg</div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="right">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {weights.filter(weight => weight.side === 'right').map((weight, index) => (
              <Draggable key={weight.id} draggableId={weight.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div>{weight.value}kg</div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Track;






