import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserTask } from "../api/services";
import { TaskCard } from "./TaskCard";

export const ShowAddedList = () => {
   const { userName } = useParams();
   const [task, setTask] = useState<any[]>();
   useEffect(() => {
      (async () => {
         if (userName) {
            try {
               const response = await getUserTask(userName);
               setTask(response.data.userInfos.task);
            } catch (e) {
               console.error("someting is wrong: ", e);
            }
         }
      })();
   }, []);
   //  console.log(task);
   return (
      <Fragment>
         <div className="container my-6 flex flex-col lg:flex-row flex-wrap mx-auto lg:max-w-[70%]">
            {task?.length !== 0 ? (
               task?.map((singleTaskObject, key) => {
                  return (
                     <Fragment key={key}>
                        <TaskCard {...singleTaskObject} />
                     </Fragment>
                  );
               })
            ) : (
               <div className="w-full h-full flex justify-center items-center ">
                  <h1 className="text-2xl text-red-500">
                     Oops!! Nothign To Do Here
                  </h1>
               </div>
            )}
         </div>
      </Fragment>
   );
};
