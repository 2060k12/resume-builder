"use client";
import React, { useState } from "react";
import EditResumePage from "./page";
import {
  CustomButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TextFileld from "../components/TextFileld";
import { RiBold, RiItalic, RiLink, RiText } from "@remixicon/react";

const Layout = () => {
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
    <div className="flex w-full bg-[#1e1e1e] h-screen box-border ">
      <div className=" w-1/3  ">
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
      <div className="col-span-7 w-full ">
        <EditResumePage />
      </div>
      <div className="bg-[#2c2c2c] text-white w-1/3 rounded-2xl m-4 border-1 border-[#4c4c4c] px-2 py-4 flex flex-col gap-3">
        <div className="flex gap-2">
          <SecondaryButton label="Back" onClick={() => {}} />
          <PrimaryButton label="Save" onClick={() => {}} />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="border-1 p-2 rounded-lg bg-gray-400">
            <RiText color="white" />
          </div>
          <TextFileld label="Edit here.." type="text" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="border-1 p-2 rounded-lg bg-gray-400">
            <RiLink color="white" />
          </div>
          <TextFileld label="Link" type="text" />
        </div>

        <div className="flex gap-2">
          <div className="border-1 p-1 rounded-lg">
            <RiBold />
          </div>
          <div className="border-1 p-1 rounded-lg">
            <RiItalic />
          </div>
        </div>
      </div>
    </div>
  );
};

const SortableItem = ({ id }: { id: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-3 my-2 mx-3 bg-[#3a3a3a] rounded-md cursor-move"
    >
      {id}
    </div>
  );
};

export default Layout;
