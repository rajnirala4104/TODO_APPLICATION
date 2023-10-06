import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLogedUsers } from "../api/services";
import { PoupForm } from "../components/PoupForm";

export const User = () => {
   const [userInfo, setUserInfo] = useState<any[]>();
   const [isPopupOn, setIsPopupOn] = useState<boolean>(false);

   const toggalPopup = (value: boolean) => {
      setIsPopupOn(value);
      something();
   };

   const something = async () => {
      try {
         const response = await getLogedUsers();
         setUserInfo(response.data.data);
      } catch (e) {
         console.error(e);
      }
   };

   useEffect(() => {
      something();
   }, []);
   console.log(userInfo);
   return (
      <Fragment>
         <Suspense fallback="loading..">
            {isPopupOn ? (
               <PoupForm isPopupOnFunction={toggalPopup} />
            ) : (
               <div className="container flex flex-col my-4 justify-center items-center">
                  {userInfo ? (
                     userInfo?.map((userSingleObjct, i) => (
                        <Fragment key={i}>
                           <Link to={`/user/${userSingleObjct.id}`}>
                              {userSingleObjct.name}
                           </Link>
                        </Fragment>
                     ))
                  ) : (
                     <h1 className="text-2xl text-red-600">
                        !!! nobady loged here
                     </h1>
                  )}

                  <div className="btn">
                     <button
                        onClick={() => setIsPopupOn(!isPopupOn)}
                        className="py-2 px-4 bg-blue-400 rounded mt-10 hover:bg-blue-300"
                     >
                        Add Member
                     </button>
                  </div>
               </div>
            )}
         </Suspense>
      </Fragment>
   );
};
