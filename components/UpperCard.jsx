import React from "react";
import Avatar from "../Icons/Avatar"
import Document from "../Icons/Document"
import Dollar from "../Icons/Dollar"

function UpperCard() {
  return (
    <div className="flex flex-col w-[100%]  md:flex-row  md:items-center md:justify-between ">
        {data.map((item, ind)=>(
          <div className="text-white bg-[#1b1d1c] my-2 cursor-pointer w-[100%]   md:w-[180px] px-4 py-3  rounded-2xl h-[80px]" 
          key={item.name + ind + ' '}>
        <div className="flex items-center">
          <div className="icon  mr-[4px]">
            {item.icon}
          </div>
          <div className="">
            <p className="text-base text-[#bdbdbd]">{item.name}</p>
            <div className="flex items-center">
            <p className={`text-white text-sm  ${item.name == 'IB Accounts' && 'text-blue-500 underline'} ${item.name == 'KYC Status' && 'bg-green-500 text-white px-[2px] rounded-sm'}` }  >{item.extraDetails[0]}</p>
            {item.extraDetails[1]  &&  <p className="text-white mx-1">{item.extraDetails[1]}</p> }
            </div>
          </div>
        </div>
      </div>
        ))}
      
    </div>
  );
}

export default UpperCard;



const data = [
  {
    name: 'IB Accounts',
    icon: <Avatar/>,
    extraDetails: ['ViewDetails']
  },


  {
    name: 'KYC Status',
    icon: <Document/>,
    extraDetails: ['Approved', <Avatar/>]
  },

  {
    name: 'IB Accounts',
    icon: <Dollar/>,
    extraDetails: [<Dollar/>, '1231.00']
  },

  {
    name: 'Pending Balance',
    icon: <Avatar/>,
    extraDetails: [<Dollar/>, '0.00']
  }
]