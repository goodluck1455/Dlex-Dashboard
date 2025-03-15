// import React from 'react'

import {motion } from "framer-motion";

import { fadeIn } from "../Components/Variant";

export default function GroupWork() {
  return (
    <>
         <motion.div 

            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
         
         
         className="bg-[#FFFFFF]  border-[0.95625px] rounded-[7.65px] px-[2rem]
                 h-[276.36px] border-[#E6E7E9] w-full">
                      <div className="flex justify-between items-center">
                <div>
                <h3 className="text-[#181819e6] tracking-[-0.3825px] mt-4 font-bold">Group info</h3>
                      <p className="text-[#1818196b] text-[13.3875px] mt-1 ">13 students in the group</p>


                </div>
                <div className="cursor-pointer ">
                  <img src="./images/notificationsBell.svg" alt="" />
                </div>

                      </div>

                     
                      <div className="bg-[#FF9365] rounded-[11.475px] w-full 
                       h-[109.97px] mt-4 px-4 flex items-center justify-between"> 
                        <div className="cursor-pointer">
                        <h3 className="tracking-[-0.3825px] text-[#FFFFFF] ">Group homework</h3>
                       <p className="text-[#ffffffb3] text-wrap tracking-[-0.478125px] text-[13.3875px] mt-2.5">4 students from your group <br /> online now</p>
                        </div>

                        <div className="cursor-pointer">
                          <img src="./images/arrowLeft.svg" alt="" />
                        </div>
             
                      </div>

                      <div className="mt-4">
                        <h3 className="text-[#181819e6] tracking-[-0.3825px]  font-bold">Today’s lesson</h3>
                        <p className="text-[#181819b3] tracking-[-0.478125px] text-[13.3875px] mt-1">unit 6 - Article</p>
                      </div>

                </motion.div>


    </>
  )
}
