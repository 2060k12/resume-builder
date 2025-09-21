import { CustomButton } from "@/app/components/Buttons";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import React, { useState } from "react";
import { closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItems";

interface Props {
  sensors: [];
}

const DraggableComponents = () => {
  const [sections, setSections] = useState([
    "Education",
    "Experience",
    "Project",
    "Technical Skills",
  ]);

  const sensors = useSensors(useSensor(PointerSensor));
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = sections.indexOf(active.id);
      const newIndex = sections.indexOf(over.id);
      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  };
  return (
    <div className="w-1/3">
      <div className="bg-[#2c2c2c] text-white rounded-2xl m-4 pt-2 shadow-md h-fit border-1 border-[#444444]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sections}
            strategy={verticalListSortingStrategy}
          >
            {sections.map((title) => (
              <SortableItem key={title} id={title} />
            ))}
          </SortableContext>
          <div className="px-3 pt-1 pb-3">
            <CustomButton
              onClick={() => {}}
              label="Add"
              style="text-white bg-blue-400 p-2"
            />
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default DraggableComponents;
