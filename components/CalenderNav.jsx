import React from "react";

export default function CalenderNav() {
  return (
    <div className="bg-[#0e0e0e] h-[60px] rounded-t-md py-3 px-3 flex items-center justify-between">
      <p className="text-[#bdbdbd]">Economic Calender</p>

      <div className="fliter flex items-center">
        <select id="filterBy" className="p-2 rounded-md w-[150px]  px-3  mx-2 text-[#bdbdbd] bg-[#000]">
        {optdata.map((item)=>(
          <option >{item}</option>
        ))}
        </select>
            <input type="text" id='selectDate' placeholder="Select Date" className="p-2 px-3 rounded-md w-[150px]  mx-2 text-[#bdbdbd] bg-[#000]"/>
      </div>
    </div>
  );
}



const optdata = ['Filter By', 'option1', 'option2', 'option3']