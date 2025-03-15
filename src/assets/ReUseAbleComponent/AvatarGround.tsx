// import React from 'react'

export default function AvatarGround() {
  return (
    <div>

<div className="flex items-center space-x-[-5px] py-3">
      <img
        className="w-[35px] h-[35px] rounded-full border-2 border-[#28439D] hover:border-white cursor-pointer"
        src="./images/groupAvata.png"
        alt="User 1"
      />
      <img
        className="w-[35px] h-[35px] rounded-full border-2 border-[#28439D] hover:border-white cursor-pointer"
        src="./images/avatarB.png"
        alt="User 2"
      />
      <img
        className="w-[35px] h-[35px] rounded-full border-2 border-[#28439D] hover:border-white cursor-pointer"
        src="./images/avatarC.png"
        alt="User 3"
      />
      <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full
      hover:border-white cursor-pointer bg-white text-[#28439D] tracking-[-0.286875px] text-[11.475px] font-bold border-2 border-[#28439D]">
        +99
      </div>
    </div>
      
    </div>
  )
}
