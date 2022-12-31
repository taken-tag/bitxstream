import React from 'react'
import Transhistory from './Transhistory'

export default function Transition() {
  return (
    <div className="transition">
     <div className='buttons flex items-center mt-7'>
           <p className="w-[200px] p-2 rounded-3xl border-green-500 bg-[#000] border-2 text-center text-green-500 mx-2">Transitions</p>
           <p className="w-[200px] p-2 rounded-3xl bg-[#202020] border-2 border-[#202020] text-[#bdbdbd] text-center mx-2">Account Transfer</p>
      </div>


      <div className="bg-[#202020] rounded-2xl  px-5 py-7 my-7">
            <p className='text-[#bdbdbd]'>Deposit <span></span> Withdraw fund</p>
            <p className='text-[#bdbdbd]'>All fields are required to transfer from account to wallet</p>


            <div >
            <p className='text-[#bdbdbd] my-1'>Transition Type</p>
             <select className='bg-black rounded-md text-[#bdbdbd] p-2 w-[40%]'>
                   {data.map((item)=>(
                <option className='text-[#bdbdbd]'>Select Type</option>
                   ))}
             </select>
           </div>
      </div>
      <Transhistory/>
    </div>
  )
}


const data = [10,20,30,40]