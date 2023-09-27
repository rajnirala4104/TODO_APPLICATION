import React from "react";

export const InputSection = () => {
  return (
    <>
      <section className="my-4 flex flex-col lg:max-w-[60%] lg:px-4 mx-auto justify-between py-4 space-y-5">
        <div className="flex flex-col lg:mx-0 items-center justify-between lg:items-start">
          <label htmlFor="userInputTask" className="text-xl ">
            <span>Add Task</span>
          </label>
          <input
            type="text"
            placeholder="Enter Task Here.."
            className="outline-none shadow-md p-4 bg-blue-50 min-w-[85%] lg:min-w-[100%] rounded-lg focus:bg-blue-100"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-between">
          <label htmlFor="userTaskDescription" className="text-xl">
            Description
          </label>
          <textarea
            placeholder="Description here.."
            className="outline-none shadow-md p-4 min-w-[85%] lg:min-w-[100%] bg-blue-50 rounded-lg focus:bg-blue-100"
          />
        </div>
        <div className="btns flex my-4 space-x-7 lg:justify-start justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Darft
          </button>
        </div>
      </section>
    </>
  );
};
