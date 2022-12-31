import React from "react";

function Deposit() {
  return (
    <>
      <div className=" bg-[#1b1d1c]  rounded-2xl text-white">
        <div className="px-5 py-4 border-b-2 border-white bg-[#262626] rounded-t-2xl">
          <img
            src="https://client.bitxtream.com/assets/images/payment_gateway/ethereum.png"
            className="w-[140px]"
          />
        </div>
        <div className="flex justify-between px-5 py-4">
          <div className="">
            <p>Fee/Commission</p>
            <p className="mb-2">No</p>
            <p>Commission</p>
            <p>Processing Time</p>
            <p>Instant</p>
          </div>
          <div className="">
            <p>Payment Type</p>
            <p className="bg-[#6464b0] w-fit px-2 rounded-md text-[12px]">
              MANUAL
            </p>
          </div>
        </div>
        <div className="px-5 pb-3">
          <button className="bg-[#1de9b6] p-2 text-center w-full rounded-2xl cursor-pointer text-black">
            Deposit
          </button>
        </div>
      </div>
    </>
  );
}

export default Deposit;
