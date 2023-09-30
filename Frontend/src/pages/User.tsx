import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLogedUsers } from "../api/services";
import { PoupForm } from "../components/PoupForm";

export const User = () => {
   const [userInfo, setUserInfo] = useState<any[]>();
   const [isPopupOn, setIsPopupOn] = useState<boolean>(false);

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
   console.log(userInfo);
   return (
      <Fragment>
         <Suspense fallback="loading..">
            {isPopupOn ? (
               <PoupForm isPopupOnFunction={setIsPopupOn} />
            ) : (
               <div className="container flex flex-col my-4 justify-center items-center">
                  {!userInfo ? (
                     <h1 className="text-2xl text-red-600">
                        !!! nobady loged here
                     </h1>
                  ) : (
                     userInfo?.map((userSingleObjct, i) => (
                        <Fragment key={i}>
                           <Link to={`/user/${userSingleObjct.id}`}>
                              {userSingleObjct.name}
                           </Link>
                        </Fragment>
                     ))
                  )}

                  <div className="btn">
                     <button
                        onClick={() => setIsPopupOn(!isPopupOn)}
                        className="py-2 px-4 bg-blue-400 rounded mt-10 hover:bg-blue-300"
                     >
                        Add Mmember
                     </button>
                  </div>
               </div>
            )}
         </Suspense>
      </Fragment>
   );
};
