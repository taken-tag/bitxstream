import React from "react";
import Check from "../Icons/Check"
import Minus from "../Icons/Minus"
import Red from "../Icons/Red"
function BottomCard({value}) {
  return (
    <>
      <div className="text-white bg-[#1b1d1c] w-[100%] p-5 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="icon mr-3">
              {value == 'success' &&  <Check/> }
              {value == 'warn' &&  <Minus/> }
              {value == 'red' && <Red/> }
            </div>
            <div className="">
              <p className="text-[14px]">TXTId#ADM_TRANS</p>
              <p className="text-[12px]">Dec 28, 2022</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="icon mr-3">

            </div>
            <div className="">
              <p className="text-[16px] tracking-wider">RAZORPAY</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <p className="text-[14px]">+$1231.00</p>
              {value == 'success' && <p className="text-green-500 text-[12px] text-center">Success</p>}
              {value == 'warn' && <p className="text-yellow-500 text-[12px] text-center">Success</p>}
              {value == 'red' && <p className="text-red-600 text-[12px] text-center">low</p>}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomCard;
