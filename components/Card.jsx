import React from "react";
import Arrow from "../Icons/Arrow";

function Card() {
  return (
    <>
      {data.map((item) => (
        <div className="text-white bg-[#1b1d1c] w-[100%] py-3 px-2 rounded-xl my-5" key={item.name}>
          <div className="">
            <div className="icon">
              <img
                src={item.icon}
                className="w-[56px] h-[36px] object-contain "
              />
            </div>
            <div className="flex items-center mt-1 ml-2">
              {item.name}
              <div className="">
                {" "}
                <svg
                  stroke="#1dd0a3"
                  fill="#1dd0a3"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;

const data = [
  {
    name: "Deposit Funt",
    icon: "right1.png",
  },

  {
    name: "Withdraw Funds",
    icon: "right2.png",
  },

  {
    name: "Transfer Funds",
    icon: "right3.png",
  },

  {
    name: "Ledger Overview",
    icon: "right4.png",
  },
];
