import React from 'react'
import ConnectAccount from '../connectAccount'
 const  Header=()=> {
  return (
    <div className='header-main text-white py-1 border-b'>
       <div className='nav flex flex-row justify-evenly items-center w-full space-x-28 py-4'>
          <h5 className='text-rose-600 p-2 text-xs font-medium rounded-md shadow bg-slate-500 '>Team-11</h5>
          <main className='period-div p-1 border border-slate-400 px-36 text-md rounded-md'>
            <h5>Period:Governance period #{"1"}</h5>
          </main>
          <ConnectAccount />
       </div>
    </div>
  )
}
export default Header