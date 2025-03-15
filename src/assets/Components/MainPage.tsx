// import React from 'react'

import ExamUnit from "../ReUseAbleComponent/ExamUnit"
import GroupWork from "../ReUseAbleComponent/GroupWork"
import HomeReadingWork from "../ReUseAbleComponent/HomeReadingWork"
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import {motion } from "framer-motion";

import { fadeIn } from "../Components/Variant";

import RightSideBar from "./RightSideBar";
import { useNavbarContext } from "./NavbarContext";

export default function MainPage() {

  const { rightbar, setRightbar} = useNavbarContext();
  
  const showRightSideBar = ()=>{
   
    setRightbar(!rightbar);
   
    
     // setIsOpen(!isOpen);
  }



  return (
    <div className=" flex gap-8 SideBar___body  top-0 left-0 h-screen  max-xl:gap-1
    scrollbar-hide max-sm:justify-center max-sm:gap-0">

          

        <div className="SideBar___body flex-grow-1 scroll-smooth overflow-y-auto mb-3 mx-4">
                <Navbar  />
                <SearchBar />
       
          <div className="  mt-[2rem]">

            <section>
              <h4 className="text-[#181819e6] font-bold tracking-[-0.478125px] text-[22.95px]">Progress Dashboard</h4>
            </section>

            <section className="mt-8">
              <div className="flex gap-8 w-full max-sm:flex-col ">
               <ExamUnit />

               <HomeReadingWork />

               


              </div>
            </section>
            
            </div> 

            <section>

              <div className="mt-8 flex gap-6 items-center max-sm:flex-col">

               <GroupWork />



                <motion.div 

                 variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                
                className="bg-[#FFFFFF] border-[0.95625px] 
                h-[276.36px] border-[#E6E7E9] rounded-[7.65px] w-full px-4">
                    <h3 className="text-[#181819e6] tracking-[-0.3825px] mt-4 font-bold">Overall progress</h3>

                    <div className="flex items-center mt-8 justify-between">
                      <div>

                      <h3 className="text-[#181819e6] tracking-[-0.765px] 
                    text-[22.95px] leading-[120%] font-[400]">Germany for <br /> beginners</h3>
                      </div>
                      <div>
                        <img src="./images/overallLogo.svg" alt="" />
                      </div>

                    </div>
                  
                  
                    <div className="bg-[#F0F1F2] w-full h-[7.65px] rounded-[3.825px] mt-3">
                        <div className="h-full bg-[#3855B3] w-[236.19px]">

                        </div>
                  </div>
                  <p className="text-[#181819] mt-2">75%</p>

                  <hr  className="text-[#E6E7E9] mt-7"/>

                  <div className="float-right mt-2">
                    <div className="flex items-center cursor-pointer">

                      <div>
                      <p className="text-[#3855b3e6] tracking-[-0.286875px]">Explore more</p>
                      </div>
                      <div>
                        <img src="./images/arrowRightBlue.svg" alt="" />
                      </div>
                    </div>
                    
                  </div>


                </motion.div>  
                {/* bhdvbj */}

                
               
              </div>

            </section>

            <section>
              <div className="flex  mt-3 gap-6 items-center w-full max-sm:flex-col">

              <div className="bg-[#FFFFFF] flex items-center justify-between  px-4 border-[#E6E7E9] border-[0.95625px] rounded-[11.475px] w-full h-[84.15px]">
                <div className="flex gap-2 items-center mt-3">
                <div className="">
                  <img src="./images/Grammer.svg" alt="" />
                </div>
                <div>
                  <h3 className="text-[]">Grammer</h3>
                  <p className="text-[#1818196b] tracking-[-0.478125px] text-[11.475px]">+30 grammer rules</p>
                </div>
                </div>

                
                <div className="cursor-pointer">
                  <img src="./images/ArrowRightDic.png" alt="" loading="lazy"/>
                </div>

              </div>
              <div className="bg-[#FFFFFF] flex items-center justify-between px-4 border-[#E6E7E9] border-[0.95625px] rounded-[11.475px] w-full h-[84.15px]">
                <div className="flex items-center  gap-2 mt-3">
              <div className="">
                  <img src="./images/Dictionary.svg" alt="" />
                </div>
                <div>
                  <h3 className="text-[]">Dictionary</h3>
                  <p className="text-[#1818196b] tracking-[-0.478125px] text-[11.475px]">+10 new words</p>
                </div>
                </div>

                <div className="cursor-pointer">
                  <img src="./images/ArrowRightDic.png" alt="" loading="lazy"/>
                </div>

              </div>

              </div>
              
            </section>

       
         </div>

         <div className={`${rightbar ? "max-lg:block  max-lg:absolute": "max-lg:hidden"}  
         ${rightbar ? "max-sm:block  max-sm:absolute": "max-sm:hidden"} 
         ${rightbar ? "max-xl:block  max-xl:absolute": "max-xl:hidden"} max-lg:z-20`}>
       <RightSideBar  showRightSideBar={showRightSideBar}/>
         </div>


    </div>
  )
}
