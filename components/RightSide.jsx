import React from 'react'
import UpperCard from './UpperCard'
import Calender from "./Calender"
import RightSideRight from './RightSideRight'
export default function RightSide({showMenu}) {
  return (
    <div className={` w-[100%]  h-[100%] ${showMenu && "md:w-[calc(100%-230px)] md:translate-x-[230px]" }  ${!showMenu && "md:w-[calc(100%-80px)] md:translate-x-[80px]" }`}>
     <div className="w-[95%]  md:w-[90%]  md:flex  md:justify-between m-auto pt-4 h-[100%]">
        <div className="left bg:red-500 w-[100%] md:w-[70%] h-[100%] mr-3">
          <UpperCard/>
          <Calender/>
        </div>


        <div className="Right hidden md:block w-[100%] md:w-[30%] ml-3">
           <RightSideRight/>
        </div>
     </div>
    </div>
  )
}



