import React from 'react'

export default function FinanceNav({value}) {
  return (
    <div className="financeNav flex items-center justify-between  mx-3 mt-3 ">
        <h5 className="text-[#bdbdbd] uppercase text-[16px] font-semibold ">{value} funds</h5>
        <div className="text-white">
            <small className='text-[14px] font-medium tracking-wider'>Home / </small>
            <small className='text-[14px] font-medium tracking-wider'>Finance / </small>
            <small className='text-[14px] font-medium tracking-wider'>Deposit Funds / </small>
            <small className='text-[14px] font-medium tracking-wider    '>Deposit to Wallet</small>
        </div>
    </div>
  )
}
