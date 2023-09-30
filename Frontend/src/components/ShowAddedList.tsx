import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserTask } from "../api/services";
import { TaskCard } from "./TaskCard";

export const ShowAddedList = () => {
   const { user_id } = useParams();
   const [task, setTask] = useState<any[]>();
   useEffect(() => {
      (async () => {
         if (user_id) {
            try {
               const response = await getUserTask(user_id);
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
            <div className="w-full h-full flex justify-center items-center ">
               <h1 className="text-2xl text-red-500">
                  Oops!! Nothign To Do Here
               </h1>
            </div>
         </div>
      </Fragment>
   );
};
