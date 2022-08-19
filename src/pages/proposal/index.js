import React,{useState} from 'react'
import algoImg from "../../assests/algo.png"
import LayOut from '../../layout/layout'
import { useLocation,useParams} from "react-router-dom";


export default function Proposal() {
  const location =useLocation()
  const [locationState,setlocationState] = useState(location.state)
  return (
    <LayOut>
    <div className='proposal-detail text-white px-20 py-4'>
      <main className='py-4'>
        <h5 className='text-3xl'>Proposal Details</h5>
      </main>
     
    <div>
        <main>
            <div className='flex flex-col shadow-md p-4 rounded-lg '>
                 <main className='flex justify-between'>
                  <h5 className='text-sm'>ID:{locationState.proposal.id}</h5>
                  <h5 className='text-sm text-yellow-300'>{"Ongoing"}</h5>
                  </main>
                 <main className='flex flex-col py-4 space-y-2'>
                    <h5 className='text-3xl'>{"Lorem ipsum dolor sit"}</h5>
                    <h5 className='text-sm'>Submitted {"17 days"} ago</h5>
                 </main>

                 <main className='py-4'>
                    <p className='px-2'>{locationState.proposal.description}</p>
                 </main>
              </div>
        </main>
        <main className='flex w-full gap-x-4 mt-5'>
             <div className='deposit w-2/6 shadow-md rounded-lg min-h-min '>
                <main className='px-4 border-b border-slate-500 py-2'> <h5 className='font-semibold'>Deposit</h5></main>
                <main className='flex flex-col items-center justify-center py-8 space-y-1' >
                    <div className='rounded-full h-24 w-24  bg-slate-900 flex items-center justify-center'>
                          <h5 className='flex space-x-1 items-center'>
                            <span>{locationState.proposal.price} </span>
                            <img src={algoImg} alt="algo" className='bg-slate-600 h-4 w-4 rounded-full'/>
                          </h5>
                    </div>
                    <h5 className='font-bold text-xl'>{"0.00"}%</h5>
                </main>
                <main className='flex px-4 justify-center space-x-12 items-center pb-3 '>
                   <h5 className='flex flex-col space-y-1'>
                       <span className='text-sm font-semibold'>Deposited</span>
                       <span className='text-xs'>{`${locationState.proposal.price} Algo`}</span>
                   </h5>
                   <h5 className='flex flex-col space-y-1'>
                       <span className='text-sm font-semibold'>Recipient</span>
                       <span className='text-xs'>{"ILtfab456327...87"}</span>
                   </h5>

                </main>
             </div>
             <div className='vote-count w-4/6 shadow-md rounded-md min-h-min'>
                 <main className=' px-4 border-b border-slate-500 py-2'> 
                     <h5 className='font-semibold'>Votes</h5>
                 </main> 
                  <div className='flex  items-center justify-between px-4 py-3'>
                     <main className='w-1/4'>
                        <h5 className='flex flex-col items-center'>
                          <span className='text-sm font-semibold'>Total votes</span>
                          <span className='text-sm font-light'>{"0"}</span>
                        </h5>
                     </main>
                     <div className='flex w-3/4 gap-x-6 '>
                       <main className='border w-1/2 min-h-min px-4 py-4 rounded-md shadow-md border-green-800'>
                          <h5 className='flex flex-col space-y-1'>
                            <span className='text-sm font-bold'>Yes</span>
                            <span className='text-lg font-semibold'>{"0.00"}%</span>
                            <span className='text-sm font-light'>{"000"}</span>
                          </h5>
                       </main>
                       <main className='border w-1/2 min-h-min px-4 py-4 rounded-md shadow-md border-rose-900'>
                          <h5 className='flex flex-col space-y-1'>
                            <span  className='text-sm font-bold'>No</span>
                            <span  className='text-lg font-semibold'>{"0.00"}%</span>
                            <span  className='text-sm font-light'>{"000"}</span>
                          </h5>
                       </main>
                     </div>
                     
                  </div>

             </div>
        </main>
       
    </div>
        

    </div>
    </LayOut>
  )
}
