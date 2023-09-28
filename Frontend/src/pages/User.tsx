import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLogedUsers } from "../api/services";

export const User = () => {
   const [usersName, setUsersName] = useState<string[]>();

   useEffect(() => {
      (async () => {
         try {
            const response = await getLogedUsers();
            setUsersName(response.data.user);
         } catch (e) {
            console.error(e);
         }
      })();
   }, []);
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div className="container">
               {usersName?.map((name, key) => (
                  <Fragment key={key}>
                     <Link to={name}>{name}</Link>
                     <br />
                  </Fragment>
               ))}
            </div>
         </Suspense>
      </Fragment>
   );
};
