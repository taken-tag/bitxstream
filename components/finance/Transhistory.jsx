import React from 'react'

export default function Transhistory() {
  return (
    <>
<div className='transitonhistory w-[100%] flex items-center justify-between'>
          <p className="text-[#bdbdbd]">Your Transition history</p>

          <div className='flex items-center bg-[#202020] p-3 rounded-3xl'>
            <p className='text-[#bdbdbd] mx-2 pr-2'>Pending <span className='text-red-500'>$00</span></p>
            <p className='text-[#bdbdbd] mx-2 pr-2'>Wallet Balance<span className='text-green-500'> $1231.00</span></p>
          </div>
      </div>

    </>
  )
}
