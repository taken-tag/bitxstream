import React, { useState } from "react";

export default function Withdrawcard() {
  const [optionval, setOptionval] = useState("");
  const [amount, setAmount] = useState("");

  const setEmpty = function () {
    setAmount("");
  };

  return (
    <div className="my-7 w-[35%] h-fit py-2 ">
      <div className="w-[80%] bg-[#202020] p-3 flex items-center justify-between rounded-3xl">
        <p className="text-[#bdbdbd]">Fee 0</p>
        <span className="text-[#bdbdbd] mr-3">Processing Time 24 hrs</span>
      </div>

      <div className=" my-5 w-[100%] bg-[#202020] p-5 rounded-2xl">
        <div>
          <p className="text-[#bdbdbd] my-1">Amount($)</p>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount in USD"
            className="bg-black text-white rounded-md w-[100%]  p-2"
          />
        </div>

        <div>
          <p className="text-[#bdbdbd] my-1">Select Type</p>
          <select
            className="bg-black rounded-md text-[#bdbdbd] p-2 w-[100%]"
            onChange={(e) => setOptionval(e.target.value)}
          >
            {optionData.map((item) => (
              <option className="text-[#bdbdbd]">{item}</option>
            ))}
          </select>

          <div className="mt-2">
            <input
              type="text"
              readonly
              value={`withdraw from ${optionval}`}
              className={`text-[#bdbdbd] cursor-pointer rounded-md text-center bg-black p-2 ${
                !optionval && "w-[80px]"
              }  m-auto ${optionval && "w-[60%]"}`}
              onClick={setEmpty}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center px-1">
        <p className="text-[#bdbdbd] mx-1">Show</p>
        <select className="bg-[#202020] mx-1 rounded-md text-[#bdbdbd] p-2  w-[80px]">
          {data.map((item) => (
            <option className="text-[#bdbdbd]">{item}</option>
          ))}
        </select>
        <p className="text-[#bdbdbd] mx-1">Entries</p>
      </div>

      <div className="buttons flex items-center mt-7">
        <p className="w-[100px] p-2 rounded-3xl border-green-500 bg-[#000] border-2 text-center text-green-500 mx-2">
          Ledger
        </p>
        <p className="w-[100px] p-2 rounded-3xl bg-[#202020] border-2 border-[#202020] text-[#bdbdbd] text-center mx-2">
          Voucher
        </p>
      </div>
    </div>
  );
}

const data = [5, 10, 15, 20, 25, 30, 50, 100];

const optionData = [
  "Select Type",
  "ETHEREUM",
  "DEFAULT BANK",
  "BANKWIRE2",
  "USDT TRC20",
  "USDT ERC20",
  "Make Withdraw by Voucher",
  "Cash",
];
