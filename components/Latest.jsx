import React from 'react'
import BottomCard from './BottomCard'

export default function Latest() {
  return (
    <div className="rounded-t-lg  mt-5 bg-[#0e0e0e] ">
    <div className="flex items-center justify-between   px-3 py-4">
     <h5 className="font-semibold text-base text-white">Latest Transaction</h5>
     <small className="font-semibold text-sm underline text-blue-600">View All</small>
    </div>

         <BottomCard value="success"/>
         <BottomCard value="success"/>
         <BottomCard value="success"/>
         <BottomCard value="warn"/>
         <BottomCard value="red"/>
    </div>
  )
}
