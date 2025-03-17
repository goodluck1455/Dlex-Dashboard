// import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
// import { useState } from "react";
import { useNavbarContext } from "./NavbarContext";
import {motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
// import { fadeIn } from "../Components/Variant";


export default function SideBar() {
    const {navbar, setNavbar} = useNavbarContext();

    const showSideBar = ()=>{
    
       setNavbar(!navbar)
       // setIsOpen(!isOpen);
    }

    const menuItems = useMemo(
        () => [
          { name: "Dashboard", icon: "/images/Dashboard.png" },
          { name: "Overview", icon: "/images/overview.svg" },
          { name: "Chat", icon: "/images/Chat.svg", notification: 5 },
          { name: "User", icon: "/images/User.svg" },
        ],
        []
      );
    




  return (
    <AnimatePresence mode="wait">
    <motion.div 
    initial={{opacity:0, x:-100}}
    animate={{opacity:1, x:0}}
     exit={{opacity:0, x:-100}}
     transition={{ duration: 0.5, ease: "easeInOut" }} 
    
    
    className={`SideBar___body max-xl:absolute   max-xl:z-30 bg-[#3C38CE] 
        ${navbar ? "max-sm:block z-30":"max-sm:hidden"}  ${navbar ? "max-xl:block": "max-xl:hidden"} 
      
    w-[250px]  top-0 left-0 h-screen scroll-smooth overflow-y-auto scrollbar-hide`}>
      <section className="ml-[1rem] mr-[1rem] mt-[2rem] ">
          <div className="flex items-center text-white gap-1 place-items-center">
            <div>
                <img src="/images/Mlogo.png" alt=""  className="w-full" loading="lazy"/>
            </div>
            <div>
                <p className="text-2xl font-bold">Dlex</p>
            </div>

            <div className="hidden max-sm:block items-center ml-auto w-[30px] max-xl:block 
           cursor-pointer aspect-square border-white border-1 shadow  " onClick={showSideBar}>
                <div className="flex items-center w-full h-full justify-center">
                <LiaTimesSolid className="text-2xl max-2xl:text-3xl text-center" />
                </div>
                    
            </div>
            
            </div> 
            
            <div className="mt-10">
                <hr  className="text-[#E6E7E9] opacity-[0.2]"/>
                </div> 

                <section className="mt-4">
                    <div className="bg-[#4A4DE6] rounded-[6.41927px]
                     p-4 justify-between
                    w-full h-[56.17px] flex items-center gap-2">

                        <div className="bg-[#ECD348] rounded-full w-[26.68px] h-[26.68px]  flex items-center
                         justify-center py-5 px-5">
                            <p className="font-bold p-4">DW</p>
                        </div>

                        <div>
                            <p className="text-[0.9rem] text-[#FFFFFF] 
                            font-bold tracking-[-0.240723px]">Dlex Designs</p>
                            <p className="text-[#ffffff6b] tracking-[-0.240723px] text-[12px]">general team</p>
                        </div>

                        <div className="cursor-pointer">
                            <img src="/images/Button-icon.svg" alt="" className="w-[2rem]" loading="lazy"/>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="mt-8">
                    <ul>
                            {/* <li className="flex items-center gap-4 cursor-pointer mb-5">
                                <span>
                                    <img src="/images/Dashboard.png" alt=""className="w-[1.5rem]" loading="lazy"/></span>
                                <span>
                                    <h1 className="text-white font-bold text-[1.2rem]">Dashboard</h1>
                                </span>
                            </li>
                            <li className="flex items-center gap-4 cursor-pointer mb-5">
                                <span>
                                    <img src="/images/overview.svg" alt=""className="w-[1.5rem]" loading="lazy" /></span>
                                <span>
                                    <h1 className="text-[#ffffffb3]  text-[1.2rem] font-roboto">Overview</h1>
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-4 cursor-pointer mb-5">
                                <div className="flex items-center gap-4">
                                    <div>
                                    <img src="/images/Chat.svg" alt=""className="w-[1.5rem]" loading="lazy" />
                                    </div>
                                  
                                    <div>
                                    <h1 className="text-[#ffffffb3]  text-[1.2rem]">Chart</h1>
                                    </div>
                                    </div>
                                <div className="flex items-center ">
                                    
                                   
                                    <div className="rounded-full bg-[#FFA000] w-[15.25px] 
                                    h-[14.44px] flex justify-center  p-3 items-center text-white">5</div>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 cursor-pointer mb-3">
                                <span>
                                    <img src="/images/User.svg" alt=""className="w-[1.5rem]" loading="lazy" /></span>
                                <span>
                                    <h1 className="text-[#ffffffb3]  text-[1.2rem]">User</h1>
                                </span>
                            </li> */}

                {menuItems.map(({ name, icon, notification }) => (
                <li
                  key={name}
                  className="flex items-center justify-between cursor-pointer mb-5"
                >
                  <div className="flex items-center gap-4">
                    <img src={icon} alt={name} className="w-6" loading="lazy" />
                    <h1 className="text-white font-bold text-lg">{name}</h1>
                  </div>
                  {notification && (
                    <span className="bg-[#FFA000] text-white text-xs rounded-full px-2 py-1">
                      {notification}
                    </span>
                  )}
                </li>
              ))}





                           
                        </ul>

                    </div>
                     

                </section>

                <section>
                    <div className="mt-7">
                        <h3 className="text-[#ffffff6b] tracking-[0.240723px] uppercase">Shortcut</h3>

                        <ul className="mt-5">
                            <li className="flex items-center gap-4 cursor-pointer mb-5">
                                <span>
                                    <img src="/images/tasks.svg" alt=""className="w-[1.5rem]" loading="lazy"/></span>
                                <span>
                                    <h1 className="text-[#ffffffb3]  text-[1.2rem]">Tasks</h1>
                                </span>
                            </li>
                            <li className="flex items-center gap-4 cursor-pointer mb-5">
                                <span>
                                    <img src="/images/report.svg" alt=""className="w-[1.5rem]" loading="lazy" /></span>
                                <span>
                                    <h1 className="text-[#ffffffb3]  text-[1.2rem]">Report</h1>
                                </span>
                            </li>
                            <li className="flex items-center gap-4 cursor-pointer mb-5">
                                <span>
                                    <img src="/images/Setting.svg" alt=""className="w-[1.5rem]" loading="lazy" /></span>
                                <span>
                                    <h1 className="text-[#ffffffb3]  text-[1.2rem]">Settings</h1>
                                </span>
                            </li>
                            </ul>

                    </div>
                </section>

                <section className="">
                   
                    <div className="bg-[#342BC2] w-full h-[90px] rounded-[6.41927px] p-3 mt-auto">
                                        <div className="flex justify-between">
                                            <h3 className="text-white">Storage</h3>
                                            <p className="text-[#ffffffb3]">Upgrade</p>
                                        </div>
                                        <div className="mt-1">
                                            <h3 className="text-white text-[0.8rem]">3.4 GB <span className="text-[#ffffffb3] italic">of 15 GB </span></h3>
                                        </div>
                                        <div className="w-full bg-[#4544DA] h-1 relative mt-2">
                                                <div className="bg-white h-full w-5">

                                                </div>
                                        </div>

                    </div>
                </section>
                                                <section className="pb-4">
                                                <div className="mt-6">
                                                <hr  className="text-[#E6E7E9] opacity-[0.2]"/>
                                                </div>

                                                <div className="
                                        p-4 justify-between mt-1.5 
                                        w-full h-[56.17px] flex items-center gap-2">

                        <div className="flex items-center gap-2.5 ">
                            <img src="/images/img.svg" alt="" loading="lazy" />
                            <p className="text-[0.9rem] text-[#FFFFFF] 
                            font-bold tracking-[-0.240723px]">Jane Smith</p>
                        </div>

                       

                        <div className="cursor-pointer">
                            <img src="/images/Button-icon.svg" alt="" className="w-[2rem]" loading="lazy"/>
                        </div>

                    </div> 
                                                 
                                                </section>


      </section>
    </motion.div>
    </AnimatePresence>
  )
}








