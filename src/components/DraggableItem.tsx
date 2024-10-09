import { Draggable } from "@hello-pangea/dnd";
import React from "react";

interface DraggableItemProps {
  item: { id: string; content: string };
  index: number;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-blue-500 text-white p-2 rounded-md shadow cursor-pointer"
          style={{ ...provided.draggableProps.style }}
        >
          {item.content}
        </li>
      )}
    </Draggable>
  );
};

export default DraggableItem;
