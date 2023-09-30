import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/services";

export const ShowAddedList = () => {
   const { user_id } = useParams();
   console.log(user_id, typeof user_id);
   useEffect(() => {
      (async () => {
         const response = await getUserById(user_id);
         console.log(response.data);
      })();
   }, []);
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
