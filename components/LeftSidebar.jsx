import React, { useState } from "react";
import Avatar from "../Icons/Avatar";
import Dashboard from "../Icons/Dashboard";
import Tag from "../Icons/Tag";
import Dollar from "../Icons/Dollar";
import Download from "../Icons/Download";
import Square from "../Icons/Square";
import Account from "../Icons/Account";
import Document from "../Icons/Document";
import Arrow from "../Icons/Arrow";
import Logo from "./Logo";
export default function LeftSidebar({ showMenu, value }) {
  const [show, setShow] = useState("");
  const [active, setActive] = useState("Dashboard");
  const mobile = `w-[120px]  block  md:hidden  h-[60px] object-contain`;
  function ToggleChild(id) {
    setActive(id);
    if (!showMenu) {
      return;
    }
    if (show == id) {
      return setShow("");
    }
    setShow(id);
  }

  return (
    <div
      className={`leftSide h-[calc(100vh-70px)]     px-3 bg-[#202020]  ${
        !showMenu && "hidden"
      } ${showMenu && "block w-[230px]"} md:block ${
        showMenu && "md:w-[230px]"
      } ${!showMenu && "md:w-fit px-2"} fixed`}
    >
      <Logo style={mobile} />
      <p className="my-3 mb-0 font-semibold text-base uppercase text-white ">
        Client {showMenu && "Area"}
      </p>

      {SidebarData.map((item) => {
        return (
          <div key={item.name}>
            <div
              className={`sideBarMenu flex items-center py-2 cursor-pointer text-white   my-2 px-3 rounded-full ${
                showMenu ? "w-[100%]" : "w-fit"
              } ${active == item.name && "text-[#1de9b6] bg-[#2c2c2c]"}`}
              onClick={() => ToggleChild(item.name)}
            >
              {item.Icon}
              {showMenu && (
                <div className="flex items-center justify-between w-[100%]">
                  <p className="mx-2 font-medium text-lg">{item.name}</p>
                  {item.Child.length && <Arrow show={show} id={item.name} />}
                </div>
              )}
            </div>  
            

            {showMenu && (
              <>
                {item.Child.length &&
                  show === item.name &&
                  item.Child.map((item) => (
                    <a href={item.link && `${item.link}`}>
                      <p
                        className="mx-2 font-medium text-lg  my-1 px-3 rounded-full py-2 ml-5 text-[#1de9b6] cursor-pointer hover:bg-[#2c2c2c] flex items-center justify-between"
                        key={item.name}
                      >
                        {item.name}
                        {item.balance && 
                        <span className="text-xs">{item.balance}</span>
                        }
                      </p>
                    </a>
                  ))}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

const SidebarData = [
  {
    name: "Dashboard",
    Icon: <Dashboard />,
    Child: false,
    link: 'dashboard',
  },

  {
    name: "Account",
    Icon: <Account />,
    Child: [
      { name: "Equity", balance: "100000" },
      { name: "Today Profit", balance: "300" },
      { name: "Net Profit", balance: "100000" },
    ],
    link: '',
  },

  {
    name: "Finance",
    Icon: <Dollar />,
    Child: [
      { name: "Deposit funds", link: "deposit" },
      { name: "Withdraw funds", link: "withdraw" },
      { name: "Transfer funds", link: "transfer" },
      { name: "Ledger overview", link: "ledger" },
    ],
    link: false
  },

  {
    name: "Reports",
    Icon: <Document />,
    Child: [{ name: "Reports" }, { name: "Reports 2" }],
    link: ''
  },

  {
    name: "Download",
    Icon: <Download />,
    Child: false,
    link: ''
  },

  {
    name: "KYC",
    Icon: <Square />,
    Child: false,
  },

  {
    name: "Profile",
    Icon: <Avatar />,
    Child: false,
  },

  {
    name: "Ticket",
    Icon: <Tag />,
    Child: false,
  },
];
