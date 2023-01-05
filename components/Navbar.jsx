import React, { useState } from "react";
import Hamburger from "../Icons/Hamburger";
import Wallet from "../Icons/Wallet";

import Avatar from "../Icons/Avatar";
import Download from "../Icons/Download";
import Password from "../Icons/Password";
import Logout from "../Icons/Logout";
import Logo from "./Logo";
export default function Navbar({showMenu, setShowMenu}) {
  
  const desktoplogo = 'w-[150px] hidden  md:block  h-[75px] object-contain'
  return (
    <>
      <div className="NavbarDashboard bg-[#1b1d1c] flex items-center justify-between p-3 h-[70px] top-[0px]  fixed w-[100%] z-40">
        <div className="logoBox md:w-[220px]    flex items-center justify-between">
          <Logo style={desktoplogo}/>
          <div
            className="hamburgerMenu text-white cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Hamburger />
          </div>
        </div>

        <div className="Profile_account_details flex items-center">
          <div className="balance text-white font-medium w-fit-content  px-3 flex items-center">
            <div className="mx-2 bg-[#3b3e3c] rounded-md w-[34px] h-[34px] flex items-center justify-center">
              <Wallet />
            </div>
            <span className="p-0 m-0 text-sm">$150000</span>
          </div>

          <div className="profileDetails flex items-center justify-center w-fit relative">
            <div className="border-2 rounded-md border-[#3b3e3c] mx-2">
              <img
                src="/navavtar.png"
                alt="navavtar"
                className="w-[34px] h-[34px] object-contain"
              />
            </div>
            <div className="name_email leading-[12px] text-white ">
              <p className="p-0 m-0 text-sm">Karan</p>
              <small className="text-xs">mrmayreddyforex@gmail.com</small>
            </div>

               {false &&
             <div className="absolute top-12 w-[100%] h-[150px]  justify-center bg-[#282828] left-3 rounded-md p-2">
              <p className="text-[#bdbdbd] flex items-center my-1">
                <Avatar /> My Profile
              </p>
              <p className="text-[#bdbdbd]  flex items-center my-1">
                <Download /> Download
              </p>
              <p className="text-[#bdbdbd]  flex items-center my-1">
                <Password />
                Chage Password
              </p>
              <p className="text-[#bdbdbd]  flex items-center my-2 py-2 border-t-2 border-gray-300">
                <Logout/>
                Logout
              </p>
            </div>
               }
          </div>
        </div>
      </div>

      {/* // LeftSide */}
      
    </>
  );
}
