import React from "react";
import Deposit from "./Deposit";
import FinanceBtn from "./FinanceBtn";
import FinanceNav from "./FinanceNav";
import Ledger from "./Ledger";
import Transition from "./Transition";
import Withdrawcard from "./Withdrawcard";

export default function FinanceRight({value}) {
  return (
    <div className="md:translate-x-[230px] w-[100%]  h-[100%] md:w-[calc(100%-230px)]">
      <FinanceNav value={value}/>
      <div className="w-[95%]  md:w-[90%]  m-auto mt-8">
       {value == 'deposit' && <FinanceBtn/> }
        {value == 'ledger'  &&  <Ledger/> }
        {value == 'transfer' &&  <Transition/> }
        {value == 'withdraw' && <Withdrawcard/> }
        
        {(value == 'deposit' || value == 'withdraw' || value == 'transfer' ) &&  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-7 ">
        <Deposit/>
        <Deposit/>
        <Deposit/>
        <Deposit/>
        <Deposit/>
        <Deposit/>
          </div>
        }
      </div>
    </div>
  );
}


// {id: 'deposit'},
// {id: 'withdraw'},
// {id: 'transfer'},
// {id: 'ledger'}