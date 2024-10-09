import { Droppable } from "@hello-pangea/dnd";
import React from "react";
import DraggableItem from "./DraggableItem";

interface DropAreaProps {
  id: string;
  items: { id: string; content: string }[];
  title: string;
  onAddItem: () => void;
}

const DropArea: React.FC<DropAreaProps> = ({ id, items, title, onAddItem }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="font-semibold text-lg mb-3 text-zinc-900">{title}</h2>
          <ul className="space-y-2 mb-4">
            {items.map((item, index) => (
              <DraggableItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </ul>
          {/* Botão para adicionar um item */}
          <button
            onClick={onAddItem}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Adicionar Item
          </button>
        </div>
      )}
    </Droppable>
  );
};

export default DropArea;
