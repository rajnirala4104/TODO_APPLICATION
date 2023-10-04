import React, { Fragment, Suspense, useState } from "react";
import { sendUserInfoToTheBackend } from "../api/services";

interface Prop {
   isPopupOnFunction: any;
}

export const PoupForm: React.FC<Prop> = ({ isPopupOnFunction }) => {
   const [userId, setUserId] = useState<number>();
   const [userName, setUserName] = useState<string>();

   const addHandler = async () => {
      await sendUserInfoToTheBackend(userId, userName);
      isPopupOnFunction(false);
   };

   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div className="w-[100%] bg-neutral-500 h-[100%] absolute top-0 flex justify-center items-center ">
               <div className="form w-[50%] h-[50%] bg-white flex flex-col justify-center items-center">
                  <span
                     onClick={() => isPopupOnFunction(false)}
                     className="relative top-[-15%] left-[47%] transform -translate-y-1/2 -translate-x-1/2 hover:text-gray-600 cursor-pointer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        ></path>
                     </svg>
                  </span>
                  <div className="w-72">
                     <div className="relative h-10 w-full min-w-[200px]">
                        <input
                           className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder=" "
                           type="number"
                           onChange={(e) => setUserId(parseInt(e.target.value))}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           ID
                        </label>
                     </div>
                  </div>
                  <div className="w-72 mt-3">
                     <div className="relative h-10 w-full min-w-[200px]">
                        <input
                           className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder=" "
                           onChange={(e) => setUserName(e.target.value)}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Name
                        </label>
                     </div>
                  </div>
                  <button
                     onClick={addHandler}
                     className="my-4 bg-blue-400 py-1 px-4 rounded hover:bg-blue-300"
                  >
                     Add
                  </button>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
