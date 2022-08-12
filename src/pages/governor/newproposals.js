import React from 'react'

export default function NewProposals() {
  return (
    <div className='newproposal flex justify-center text-white px-10 py-4'>
        <div className='proposal-form flex flex-col space-y-4 shadow w-3/4 h-96 rounded-md px-4 py-2'>
             <main>
                <label>Proposal ID</label>
                <div className='w-full h-8 bg-slate-900 rounded-md '>
                <input placeholder='' 
                 type="text"
                 className="w-10/12 h-8 px-4 py-0.5 rounded-md bg-slate-900 "
                />
                <button className='text-xs hover:text-rose-900 rounded-full border py-0.5 px-3'>Create</button>
                </div>
             </main>

             <main>
                <label>Proposal Title</label>
                
                <input placeholder='' 
                 type="text"
                 className="w-full h-8 px-4 py-0.5 rounded-md bg-slate-900 "
                />
            </main>

            <main>
                <label>Proposal Description</label>
                
                <textarea placeholder='' 
                 type="text"
                 className="w-full h-20 px-4 py-0.5 rounded-md bg-slate-900 "
                />
            </main>

            <main>
                <label>Proposal ID</label>
                <div className='flex justify-between w-full h-8 bg-slate-900 rounded-md '>
                <input placeholder='' 
                 type="text"
                 className="w-10/12 h-8 px-4 py-0.5  rounded-md bg-slate-900 "
                />
                <button className='text-xs px-2'>Algo</button>
                </div>
             </main>
              <main className='flex w-full justify-center'>
                <button className='rounded-full hover:text-black py-0.5 px-3 text-sm border hover:bg-white'>Submit</button>
              </main>
        </div>
    </div>
  )
}
