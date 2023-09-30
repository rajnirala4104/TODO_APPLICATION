import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLogedUsers } from "../api/services";

export const User = () => {
   const [userInfo, setUserInfo] = useState<any[]>();

   useEffect(() => {
      (async () => {
         try {
            const response = await getLogedUsers();
            setUserInfo(response.data.data);
         } catch (e) {
            console.error(e);
         }
      })();
   }, []);
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div className="container flex flex-col my-4 justify-center items-center">
               {userInfo?.map((userSingleObjct, i) => (
                  <Fragment key={i}>
                     <Link to={userSingleObjct.id}>{userSingleObjct.name}</Link>
                  </Fragment>
               ))}
            </div>
         </Suspense>
      </Fragment>
   );
};
