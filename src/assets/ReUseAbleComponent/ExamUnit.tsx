// import React from 'react'

import {motion } from "framer-motion";

import { fadeIn } from "../Components/Variant";
import AvatarGround from "./AvatarGround";

export default function ExamUnit() {
  return (
    <>
    
      <motion.div
      
      variants={fadeIn("down", 0.3, "scale")}
      initial="hidden"
      whileInView={"show"}
      
      className="shadow  h-[177.86px] bg-[#28439D] rounded-[11.475px] w-full px-[2rem] cursor-pointer hover:scale-101">
                  <h2 className="text-[#D9D9D9]  uppercase tracking-[0.286875px] mt-[1rem] ">Deadline</h2>
                  <h3 className="text-[#FFFFFF]  text-2xl py-2">Exam - Unit 5</h3>
                  <p className="text-[#ffffffb3]   tracking-[-0.478125px] ">Spanish for beginners</p>

                  {/* <div className="mt-4 cursor-pointer">
                    <img src="/images/Group 1011.png" alt="" />
                  </div> */}
                  <AvatarGround />
          
                </motion.div> 
    </>
  )
}
