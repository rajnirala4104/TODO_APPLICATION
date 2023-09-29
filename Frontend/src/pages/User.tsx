import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLogedUsers } from "../api/services";

export const User = () => {
   const [usersName, setUsersName] = useState<string[]>();

   useEffect(() => {
      (async () => {
         try {
            const response = await getLogedUsers();
            setUsersName(response.data.data);
         } catch (e) {
            console.error(e);
         }
      })();
   }, []);
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div className="container flex flex-col my-4 justify-center items-center">
               {usersName?.map((name, key) => (
                  <Fragment key={key}>
                     <Link
                        className="text-2xl px-3 rounded-sm hover:bg-gray-200"
                        to={name}
                     >
                        {name}
                     </Link>
                     <br />
                  </Fragment>
               ))}
            </div>
         </Suspense>
      </Fragment>
   );
};
