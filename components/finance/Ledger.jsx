import React from 'react'
import LedgerTable from './LedgerTable'
import Transhistory from './Transhistory'

export default function Ledger() {
  return (
    <div>
        <Transhistory/>

         <div className="flex items-center justify-between mt-7">
        <div className='flex items-center '>
        <p className='text-[#bdbdbd] mx-1'>Show</p>
        <select className='bg-[#202020] mx-1 rounded-md text-[#bdbdbd] p-2  w-[80px]'>
                   {data.map((item)=>(
                <option className='text-[#bdbdbd]'>{item}</option>
                   ))}
             </select>
        <p className='text-[#bdbdbd] mx-1'>Entries</p>
      </div>


      <div>
        <input type="search"  className="bg-[#202020] text-[#bdbdbd] p-2   px-4 w-[350px] rounded-md" placeholder="Enter Keyword to Search"/>
      </div>

      </div>
      <LedgerTable/>
    </div>
  )
}



const data = [10,20,30,40]