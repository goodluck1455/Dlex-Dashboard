// import React from 'react'

import MainPage from "./MainPage";
// import RightSideBar from "./RightSideBar";
import SideBar from "./SideBar";

export default function DashBoard() {
  return (
    <div className="flex gap-8  max-sm:gap-0 overflow-hidden
   max-sm:bg-white max-xl:gap-1 max-2xl:gap-2">

   
<div className="">
<SideBar />
   
   {/* <MainPage /> */}

</div>
   
 
       

    

      <div className="flex-grow-1">
        {/* <RightSideBar /> */}
        <MainPage />
      </div>

      
    </div>
  )
}
