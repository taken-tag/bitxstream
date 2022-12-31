import React, {useState} from 'react'
import Navbar from '../Navbar'
import LeftSidebar from '../LeftSidebar';
import FinanceRight from './FinanceRight';
export default function Method({value}) {
  console.log(value, 'val')
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
        <div className="w-[100%] h-[calc(100vh-70px)]    flex mt-[70px]">
        <LeftSidebar showMenu={showMenu} />

        <FinanceRight value={value}/>
      </div>
    </div>
  )
}
