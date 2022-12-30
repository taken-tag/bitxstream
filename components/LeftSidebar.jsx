import React, {useState} from "react";
import Avatar from "../Icons/Avatar";
import Dashboard from "../Icons/Dashboard";
import Tag from "../Icons/Tag";
import Dollar from "../Icons/Dollar";
import Download from "../Icons/Download";
import Square from "../Icons/Square";
import Account from "../Icons/Account";
import Document from "../Icons/Document";
import Arrow from "../Icons/Arrow";
export default function LeftSidebar({showMenu}) {
    const [show, setShow] = useState('')
    const [active, setActive] = useState('Dashboard')
    function ToggleChild(id){
        setActive(id)
        if(!showMenu){
            return;
        }
        if(show == id){
            return setShow('')
        }
        setShow(id)
    }
  return (
    <div className={`leftSide   px-3 bg-[#202020] h-[100%] ${showMenu && 'w-[230px]'} ${!showMenu && 'w-fit px-2'} fixed`}>
     <p className="my-3 mb-0 font-semibold text-base uppercase text-white ">Client {showMenu && 'Area'}</p> 

        {SidebarData.map((item)=>{
            return(
                <>
        <div className={`sideBarMenu flex items-center py-2 cursor-pointer text-white   my-2 px-3 rounded-full ${showMenu ? 'w-[100%]' : 'w-fit'} ${active == item.name && 'text-[#1de9b6] bg-[#2c2c2c]'}`} 
        onClick={()=>ToggleChild(item.name)}>
         {item.Icon}

        {showMenu && 
         <div className="flex items-center justify-between w-[100%]">
        <p className="mx-2 font-medium text-lg">{item.name}</p>
         {item.Child.length &&  <Arrow show={show} id={item.name}/> }
        </div>
        }
        </div>

        {showMenu && 
        <>
        {(item.Child.length && show === item.name) &&  item.Child.map((item)=>(
        <p className="mx-2 font-medium text-lg bg-gray-300  my-2 px-3 rounded-full py-2 ml-5">{item.name}</p>
        )) }
        </>
            }
        </>
            )
         })}
      
    </div>
  );
}




const SidebarData = [
    {
      name: 'Dashboard',
      Icon: <Dashboard/>,
      Child: false,
    },
  
  
    {
      name: 'Account',
      Icon: <Account/>,
      Child: false,
    },
  
    {
      name: 'Finance',
      Icon: <Dollar/>,
      Child: [{name: 'Child 1'},{name: 'Child 2'} ],
    },
  
    
    {
      name: 'Reports',
      Icon: <Document/>,
      Child: [{name: 'Reports'},{name: 'Reports 2'} ],
    },
  
  
    {
      name: 'Download',
      Icon: <Download/>,
      Child: false,
    },
  
  
    {
      name: 'KYC',
      Icon: <Square/>,
      Child: false,
    },
  
  
    {
      name: 'Profile',
      Icon: <Avatar/>,
      Child: false,
    },
  
  
    {
      name: 'Ticket',
      Icon: <Tag/>,
      Child: false,
    },
  
  ]  
  
  