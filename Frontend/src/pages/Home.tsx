import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserTask } from "../api/services";
import { InputSection } from "../components/InputSection";
import { ShowAddedList } from "../components/ShowAddedList";

export const Home = () => {
   const { userName } = useParams();

   useEffect(() => {
      (async () => {
         if (userName) {
            try {
               const response = await getUserTask(userName);
               console.log(response);
            } catch (e) {
               console.log("someting is wrong: ", e);
            }
         }
      })();
   }, []);

   return (
      <React.Fragment>
         <section className="min-h-[80vh]">
            <InputSection />
            <hr className="max-w-[65%] mx-auto" />
            <ShowAddedList />
         </section>
      </React.Fragment>
   );
};
