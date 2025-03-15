
interface CourseProgressProps{
    Percentage: string;
    Logo: string;
    Heading: string;
    Paragraph: string;
    PercentageColor:string;
}
// Percentage={""} Logo={""} Heading={""} Paragraph={""} PercentageColor={}


export default function CourseProgress({Percentage, Logo, Heading, Paragraph, PercentageColor}:CourseProgressProps) {
  return (

    <>
   <div className=" border-[0.95625px] flex items-center gap-3.5 p-4 border-[#d2d4d4] h-[84.15px] w-[283.05px] rounded-[11.475px] mb-3">
                        <div>
                        <h3 className={`${PercentageColor} tracking-[-0.3825px]`}>{Percentage}</h3>
                      </div>
                      <div className="cursor-pointer">
                        <img src={Logo} alt="" loading="lazy"/>
                      </div>
                      <div>
                        <h3 className="text-[]">{Heading}</h3>
                        <p className="text-[#1818196b] tracking-[-0.478125px] text-[11.475px]">{Paragraph}</p>
                      </div>

                      </div>
      
    </>
  )
}
