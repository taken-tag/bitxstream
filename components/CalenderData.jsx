import React from "react";

export default function CalenderData() {
  return (
    <div className="px-[1px] pt-2 bg-[#000]  h-[calc(400px-60px)] overflow-y-scroll pr-3 " id="mydiv">
      {/* static */}
      <div className="flex items-center space-between text-[#bdbdbd] w-[100%]  pr-3 mb-4 mt-2">
        <div className="left w-[62%] flex items-center ">
          <p className="w-[35%] mx-3 uppercase">Time</p>
          <p className="w-[20%] mx-3 uppercase">Currency</p>
          <p className="w-[45%] mx-3 ml-[20px] uppercase">Event</p>
        </div>
        <div className="right flex items-center justify-between  w-[33%]">
          <p className="uppercase mx-3 w-[10%]">Actual</p>
          <p className="uppercase mx-3 w-[10%]">Forecast</p>
          <p className="uppercase mx-3 w-[10%]">Previous</p>
        </div>
      </div>
      {/* static */}

      {calenderCardData.map((item) => (
        <div className="flex items-center space-between text-[#ffff] h-[30px] rounded-xl bg-[#1b1d1c]  w-[100%] my-1">
          <div className="left w-[62%] flex items-center ">
            <div className="w-[35%] mx-3 text-sm">{item.time}</div>
            <div className="w-[20%] mx-3 uppercase flex">
              <img src={item.currency[0]} alt="" className="w-[28px] h-[28px] object-contain mr-2" />
              {item.currency[1]}
            </div>
            <div className="w-[45%] mx-3">{item.event}</div>
          </div>
          <div className="right flex items-center justify-between  w-[33%]">
            <p className="text-[#61c559] mx-3 w-[10%]">{item.actual}</p>
            <p className="text-[#61c559] mx-3 w-[10%]">{item.foreCast}</p>
            <p className="text-[#61c559] mx-3 w-[10%]">{item.previous}</p>
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
