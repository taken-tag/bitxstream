import React from "react";

export default function LedgerTable() {
  return (
    <div className="my-7">
 
 <div className="bg-[#000] flex items-center justify-between p-2">
 <div className="w-[60%] flex items-center text-[#fff]">
     <p className="w-[40%] ">Payment Mode</p>
     <p className="w-[30%]">Transition Id</p>
     <p className="w-[30%]">TimesTamp</p>
 </div>
     <div className="w-[40%] flex items-center justify-between text-[#bdbdbd]">
     <p className="w-[25%]">Withdraw</p>
     <p className="w-[25%]">Deposit</p>
     <p className="w-[25%]">status</p>
     <p className="">Remark</p>
     </div>
 </div>




   {data.map((item)=>(
 <div className="bg-[#202020] my-2 rounded-md flex items-center justify-between p-2">
 <div className="w-[60%] flex items-center text-[#bdbdbd]">
     <p className="w-[40%] ">RazorPay</p>
     <p className="w-[30%]">Adm_Trans</p>
     <p className="w-[30%]">28-12-2022 10:21 AM</p>
 </div>
     <div className="w-[40%] flex items-center justify-between text-[#bdbdbd]">
     <p className="w-[25%] ml-3">-</p>
     <p className="w-[25%]">1231</p>
     <p className="w-[25%]">Success</p>
     <p className="">Remark</p>
     </div>
 </div>
 ))}
    </div>
  );
}
				



const data = [1,2,3,4,5,6,7,8,9,10]