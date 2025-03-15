// import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import CourseProgress from "../ReUseAbleComponent/CourseProgress";
// import { useNavbarContext } from "./NavbarContext";

export default function RightSideBar({showRightSideBar}:any) {
   
  return (
    <div className={` top-0  h-screen   `}>

      <div className="SideBar___body bg-[#E6E7E9] w-[344.25px] h-screen mt-4 mr-4 p-8 scroll-smooth overflow-y-auto">
            
             <div className=" hidden max-sm:block items-center ml-auto w-[30px] max-xl:block max-2xl:hidden
                       cursor-pointer aspect-square border-white border-1 shadow  " onClick={showRightSideBar}>
                            <div className="flex items-center w-full h-full justify-center">
                            <LiaTimesSolid className="text-2xl max-2xl:text-3xl text-center" />
                            </div>
                                
                        </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="p-7">
                <img src="./images/ProfileImage.png" alt="ProfileImage" className="w-full " loading="lazy"/>
              </div>
              <div className="text-center leading-[140%] mt-[-1rem]">
                <h3 className="tracking-[-0.478125px] text-[#181819e6] font-bold">Harrison Philips</h3>
                <p className="text-[#1818196b] tracking-[-0.478125px] text-[0.8rem]">Business analyst</p>
              </div>

            </div>

            <section className="mt-5">
                <div className=" border-[0.95625px] flex items-center justify-between p-4 border-[#d2d4d4] h-[84.15px] w-[283.05px] rounded-[11.475px]">
                      
                <div>
                  <h3 className="text-[]">Get - 10% sell price</h3>
                  <p className="text-[#1818196b] tracking-[-0.478125px] text-[11.475px]">for “spanish A2” course</p>
                </div>
                <div className="cursor-pointer">
                  <img src="./images/ArrowRightDic.png" alt="" loading="lazy"/>
                </div>

                </div>
            </section>

            <section className="mt-10">

              <h3 className="my-3 font-bold text-[#181819e6] tracking-[-0.478125px] text-[19.125px]">Course Progress</h3>

    
                      
                     <CourseProgress Percentage={"63%"} Logo={"./images/GrammarProgress.png"} Heading={"Grammar"} Paragraph={"Learn new rules"} PercentageColor={"text-[#4A4DE6]"} />
                     <CourseProgress Percentage={"78%"} Logo={"./images/CourseDictionary.png"} Heading={"Dictionary"} Paragraph={"Learn 4 new words"} PercentageColor={"text-[#FF8F00]"} />
                     <CourseProgress Percentage={"34%"} Logo={"./images/CourseReading.png"} Heading={"Reading"} Paragraph={"Train your skill"} PercentageColor={"text-[#E83274]"}/>
                    


            </section>
       

      </div>
    
      
    </div>
  )
}
