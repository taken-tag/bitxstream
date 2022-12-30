import React from 'react'
import CalenderNav from './CalenderNav'
import CalenderData from "./CalenderData"
import Latest from './Latest'
export default function Calender() {
  return (
    <div className=" mt-5 w-[100%] h-[400px] rounded-t-md">
           <CalenderNav/>
           <CalenderData/>
           <Latest/>
    </div>
  )
}
