import React,{useState} from 'react'

export default function Passed() {
  const [passedProposals,setPassed]=useState([1,2,3,4])
  return (
    <div className='passed'>
       <div className='grid grid-flow-row grid-cols-2 gap-x-8 gap-y-10'>
         {passedProposals.map((passed)=>{
            return(
              <div className='flex flex-col shadow-md p-4 rounded-lg '>
                 <main className='flex justify-between'>
                  <h5 className='text-sm'>ID:{"xs7bc6"}</h5>
                  <h5 className='text-sm text-green-300'>Passed</h5>
                  </main>
                 <main className='flex flex-col py-4 space-y-5'>
                    <h5 className='text-3xl'>{"Lorem ipsum dolor sit"}</h5>
                    <h5 className='text-sm'>Submitted {"17 days"} ago</h5>
                 </main>
              </div>
            )
         })

         }
       </div>
    </div>
  )
}
