import React from "react";
import { TaskCard } from "./TaskCard";

export const ShowAddedList = () => {
  return (
    <>
      <div className="container my-6 flex flex-col lg:flex-row flex-wrap mx-auto lg:max-w-[70%]">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </>
  );
};
