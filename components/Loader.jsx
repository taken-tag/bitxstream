import React from 'react'

export default function Loader() {
  return (
    <div className="fixed w-[100%] h-[100%]  flex flex-col items-center justify-center ">
    <div className="w-[120px] h-[120px] border-[10px] rounded-full border-white  flex loaderfirst items-center justify-center text-white ">
     <div className="w-[100px] h-[100px] border-[10px] rounded-full border-white animate-pulse loader text-white ">
     </div>
     </div>
     <h5 className="text-white  mt-3 text-3xl ">Loading...</h5>
    </div>
  )
}
