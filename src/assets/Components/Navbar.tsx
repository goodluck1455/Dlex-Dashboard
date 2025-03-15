// import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useNavbarContext } from "./NavbarContext";

export default function Navbar() {
    const {navbar, setNavbar, rightbar, setRightbar} = useNavbarContext();

    const showSideBar = ()=>{

        setNavbar(!navbar)

        // setIsOpen(!isOpen);
     }

  
     const showRightSideBar = ()=>{
     
       setRightbar(!rightbar)
       setNavbar(false);
        // setIsOpen(!isOpen);
     }
    

  return (
    <div className="hidden max-sm:block sticky top-0 z-10 w-full max-lg:block bg-white   max-lg:bg-[#F5F5F5]">
        <div className=" flex justify-between items-center mx-2 max-lg:mt-2">
        <div className="flex items-center gap-1">
            <div onClick={showSideBar} className="cursor-pointer">
                <img src="./images/NavBar.svg" alt="" className="w-[3rem]"/>
            </div>
            <div>
            <CiSearch size={25} className="text-[637381]" />
            </div>
            {/* <FaBarsStaggered size={30}/> */}

               
        </div>
        <div className="flex items-center gap-0 ">
            <div className="">
                <img src="./images/PrileFlag.png" alt="" className="w-full"/>
            </div>
                <div className="p-3 max-lg:p-1 cursor-pointer" onClick={showRightSideBar}>
                    <img src="./images/MobileProfileLogo.png" alt="" className="w-full" />
                </div>
        </div>
        </div>
      
    </div>
  )
}
