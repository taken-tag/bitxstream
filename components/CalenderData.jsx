import React from "react";

export default function CalenderData() {
  return (
    <div className="px-[1px] pt-2 bg-[#000]  h-[calc(400px-60px)] overflow-x-scroll md:overflow-x-hidden overflow-y-scroll  pr-3 " id="mydiv">
      {/* static */}
      <div className="flex items-center space-between text-[#bdbdbd] h-[auto] md:h-[20px] w-[100%]  pr-3 mb-4 mt-2">
        <div className="left w-[62%] flex items-center ">
          <p className="w-[20%] md:w-[35%] mx-3 uppercase md:text-base text-[10px]">Time</p>
          <p className="w-[30%]  md:w-[20%] mx-3 uppercase md:text-base text-[10px]">Currency</p>
          <p className="w-[50%]  md:w-[45%] mx-3 ml-[20px] uppercase md:text-base text-[10px]">Event</p>
        </div>
        <div className="right flex items-center justify-between  w-[33%]">
          <p className="uppercase mx-3 w-[10%] md:text-base text-[10px]">Actual</p>
          <p className="uppercase mx-3 w-[10%] md:text-base text-[10px]">Forecast</p>
          <p className="uppercase mx-3 w-[10%] md:text-base text-[10px]">Previous</p>
        </div>
      </div>
      {/* static */}

      {calenderCardData.map((item, ind) => (
        <div className="flex items-center space-between text-[#ffff] h-[60px] md:h-[30px] rounded-xl bg-[#1b1d1c]  w-[100%] my-1" key={ind + item.actual + 'calenderData'}>
          <div className="left w-[62%] flex items-center ">
            <div className="w-[20%]  md:w-[35%] mx-3 text-xs md:text-sm">{item.time}</div>
            <div className="w-[30%] md:w-[20%] mx-3 uppercase flex items-center">
              <img src={item.currency[0]} alt="" className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] object-contain mr-2" />
              <small className="text-[10px] md:text-[16px]">{item.currency[1]}</small>
            </div>
            <div className="w-[50%] md:w-[45%] mx-3 md:text-base text-sm">{item.event}</div>
          </div>
          <div className="right flex items-center justify-between  w-[33%]">
            <p className="text-[#61c559] mx-3 w-[10%] md:text-base text-[11px]">{item.actual}</p>
            <p className="text-[#61c559] mx-3 w-[10%] md:text-base text-[11px]">{item.foreCast}</p>
            <p className="text-[#61c559] mx-3 w-[10%] md:text-base text-[11px]">{item.previous}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const calenderCardData = [
  {
    time: "26-12-2022/10:00:00",
    currency: ["japan.png", "JPY"],
    event: "Boj Kuroda Speech",
    actual: "",
    foreCast: "",
    previous: "",
  },

  {
    time: "26-12-2022/12:30:00",
    currency: ["Turkey.png", "TRY"],
    event: "Business Confidence",
    actual: "97.8",
    foreCast: "97",
    previous: "97.9",
  },

  {
    time: "26-12-2022/12:30:00",
    currency: ["Turkey.png", "TRY"],
    event: "Business Confidence",
    actual: "76.4",
    foreCast: "75.5",
    previous: "75.9",
  },

  {
    time: "26-12-2022/12:30:00",
    currency: ["Turkey.png", "TRY"],
    event: "Business Confidence",
    actual: "$-394M",
    foreCast: "$-390M",
    previous: "$-317M",
  },


  {
    time: "26-12-2022/12:30:00",
    currency: ["Turkey.png", "TRY"],
    event: "Business Confidence",
    actual: "$-394M",
    foreCast: "$-390M",
    previous: "$-317M",
  },


  {
    time: "26-12-2022/12:30:00",
    currency: ["brl.png", "BRL"],
    event: "Business Confidence",
    actual: "$-394M",
    foreCast: "$-390M",
    previous: "$-317M",
  },


  {
    time: "26-12-2022/12:30:00",
    currency: ["brl.png", "BRL"],
    event: "Business Confidence",
    actual: "$-394M",
    foreCast: "$-390M",
    previous: "$-317M",
  },

  {
    time: "26-12-2022/12:30:00",
    currency: ["brl.png", "BRL"],
    event: "Business Confidence",
    actual: "$-394M",
    foreCast: "$-390M",
    previous: "$-317M",
  },


  {
    time: "26-12-2022/12:30:00",
    currency: ["brl.png", "BRL"],
    event: "Business Confidence",
    actual: "$-394M",
    foreCast: "$-390M",
    previous: "$-317M",
  },

  {
    time: "26-12-2022/12:30:00",
    currency: ["brl.png", "BRL"],
    event: "Business Confidence",
    actual: "$-394M",
    foreCast: "$-390M",
    previous: "$-317M",
  },
];
