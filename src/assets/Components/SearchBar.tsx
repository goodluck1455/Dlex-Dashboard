// import React from 'react'
import NavBar from "/images/NavBar.svg"


import { useNavbarContext } from "./NavbarContext"



export default function SearchBar() {

  const {navbar, setNavbar} = useNavbarContext();

  const showSideBar = ()=>{
  
     setNavbar(!navbar)
     // setIsOpen(!isOpen);
  }
  return (
    <div className="hidden max-xl:block max-sm:hidden  max-lg:hidden">
    <div className="flex items-center gap-1.5 max-2xl:mt-2">
        <div onClick={showSideBar} >
        <img src={NavBar} alt="navbar" className="w-[3rem] max-2xl:w-[4rem]" loading="lazy"/>
        </div>
          <div>
                <input className=" pl-2 border-[#E6E7E9] border-[0.95625px] max-2xl:py-2 outline-none" 
                type="text"  placeholder="Search"/>
                </div>
      
    </div>
    </div>
  )
}
