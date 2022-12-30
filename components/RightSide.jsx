import React from 'react'
import UpperCard from './UpperCard'
import Calender from "./Calender"
import RightSideRight from './RightSideRight'
export default function RightSide({showMenu}) {
  return (
    <div className={`translate-x-[230px]   h-[100%] w-[calc(100%-230px)]`}>
     <div className="w-[90%] flex  justify-between m-auto pt-4 h-[100%]">
        <div className="left w-[70%] h-[100%] mr-3">
          <UpperCard/>
          <Calender/>
        </div>


        <div className="Right w-[30%] ml-3">
           <RightSideRight/>
        </div>
     </div>
    </div>
  )
}



