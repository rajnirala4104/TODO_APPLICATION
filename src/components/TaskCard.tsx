import React from "react";

export const TaskCard = () => {
  return (
    <>
      <div className="taskCard flex justify-around shadow-lg lg:max-w-[45%] lg:mx-auto mb-8 flex-col mx-2 bg-gray-100">
        <div className="bg-gray-300 flex justify-between px-2 py-2">
          <span className="text-blue-950">Todo Task</span>
          <samp>6:00am</samp>
        </div>
        <div className="taskText my-2 px-2">
          <h1 className="text-xl">Task Heading</h1>
          <p className="text-gray-800">
            task Description Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fugit, alias!
          </p>
        </div>
        <hr />
        <div className="btns flex space-x-4 px-1 py-2">
          <button className="bg-blue-500 rounded-md text-white py-1 px-3 hover:bg-blue-700">
            Edit
          </button>
          <button className="bg-blue-500 rounded-md text-white py-1 px-3 hover:bg-blue-700">
            Completed
          </button>
          <button className="bg-red-500 rounded-md text-white py-1 px-3 hover:bg-blue-700">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
