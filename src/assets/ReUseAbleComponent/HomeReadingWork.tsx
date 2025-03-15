// import React from 'react'
import {motion } from "framer-motion";

import { fadeIn } from "../Components/Variant";



export default function HomeReadingWork() {
  return (
    <>
     <div className="flex gap-8 w-full max-sm:gap-4 max-xl:gap-4">

                <motion.div 
                  variants={fadeIn("up", 0.3, "scale")}
                  initial="hidden"
                  whileInView={"show"}
                
                className="bg-[#FFF8E1] w-full h-[177.86px] rounded-[7.65px] px-[1rem] ">
                    <div className="mt-3">
                      <img src="/images/homeWorkLogo.svg" alt="" />
                    </div>
                      <div>
                        <h3 className="text-[#181819e6] tracking-[-0.3825px] mt-2 text-[1.1rem] font-bold">Homework</h3>
                        <p className="text-[#1818196b] tracking-[-0.286875px] text-[0.9rem]">For today’s lesson</p>

    
                      </div>
                      <div className="mt-9">
                        <h3 className="uppercase text-[#181819e6] ">35 min ago</h3>
                      </div>
                  </motion.div>

                  <motion.div 
                  variants={fadeIn("up", 0.3, "zoom")}
                  initial="hidden"
                  whileInView={"show"}

                  className="bg-[#E1F5FD] w-full h-[177.86px] px-[1rem]" >

                  <div className="mt-3">
                      <img src="/images/reading.svg" alt="" />
                    </div>
                      <div>
                        <h3 className="text-[#181819e6] tracking-[-0.3825px] mt-2 text-[1.1rem] font-bold">Reading</h3>
                        <p className="text-[#1818196b] tracking-[-0.286875px] text-[0.9rem]">For today’s lesson</p>

    
                      </div>
                      <div className="mt-9">
                        <h3 className="uppercase text-[#181819e6] ">2h ago</h3>
                      </div>
                  </motion.div>


                </div>
      
    </>
  )
}
