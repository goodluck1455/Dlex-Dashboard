// import React from 'react'

import { lazy, Suspense } from "react";
// import MainPage from "./MainPage";
// import RightSideBar from "./RightSideBar";
// import SideBar from "./SideBar";

const MainPage = lazy(() => import("./MainPage"))
const SideBar = lazy(() => import("./SideBar"))


// Skeleton Placeholder UI
const SkeletonLoader = () => (
  <div className="skeleton-container">
    <div className="skeleton-box"></div>
  </div>
);




export default function DashBoard() {
  return (
    <Suspense fallback={<SkeletonLoader />}>
    <div className="flex gap-8  max-sm:gap-0 overflow-hidden
   max-sm:bg-white max-xl:gap-1 max-2xl:gap-2">

   
<div className="">
<SideBar />
   
   {/* <MainPage /> */}

</div>
   
 
       

    

      <div className="flex-grow-1 ">
        {/* <RightSideBar /> */}
        <MainPage />
      </div>

      
    </div>
    </Suspense>
  )
}
