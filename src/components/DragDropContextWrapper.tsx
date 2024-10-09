"use client";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import React, { useState } from "react";
import DropArea from "./DropArea";

const DragDropContextWrapper: React.FC = () => {
  const [areas, setAreas] = useState<any>({
    area1: [
      { id: "1", content: "Item 1" },
      { id: "2", content: "Item 2" },
    ],
    area2: [{ id: "3", content: "Item 3" }],
    area3: [
      { id: "4", content: "Item 4" },
      { id: "5", content: "Item 5" },
    ],
  });

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    if (result.source.droppableId === result.destination.droppableId) {
      return;
    }

    const sourceArea = [...areas[result.source.droppableId]];
    const [movedItem] = sourceArea.splice(result.source.index, 1);

    const destinationArea = [...areas[result.destination.droppableId]];
    destinationArea.splice(result.destination.index, 0, movedItem);

    setAreas({
      ...areas,
      [result.source.droppableId]: sourceArea,
      [result.destination.droppableId]: destinationArea,
    });
  };

  const addItemToArea = (areaId: string) => {
    const newItem = {
      id: `${Date.now()}`,
      content: `Novo Item ${Math.floor(Math.random() * 1000)}`,
    };

    setAreas((prevAreas: any) => ({
      ...prevAreas,
      [areaId]: [...prevAreas[areaId], newItem],
    }));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="grid grid-cols-3 gap-4">
        <DropArea
          id="area1"
          items={areas.area1}
          title="A iniciar"
          onAddItem={() => addItemToArea("area1")}
        />
        <DropArea
          id="area2"
          items={areas.area2}
          title="Em andamento"
          onAddItem={() => addItemToArea("area2")}
        />
        <DropArea
          id="area3"
          items={areas.area3}
          title="Concluídos"
          onAddItem={() => addItemToArea("area3")}
        />
      </div>
    </DragDropContext>
  );
};

export default DragDropContextWrapper;
