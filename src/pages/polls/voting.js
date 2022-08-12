import React,{useState}from 'react'
import proposalImg from "../../assests/proposal.png"
import Modal from '../../components/modal'
import {AiOutlineCloseCircle } from "react-icons/ai"
import {GiVote} from "react-icons/gi"
import {  BiRadioCircleMarked} from "react-icons/bi"
import "./polls.css"
export default function Voting() {
  const [recentProposal,setRecentProposal]=useState([])
  const [trigger,setTrigger] =useState(false)
  const ticketPrice=0.0
  const deadline=0
  const proposalId="xs7bc6"
  return (
    <div>

        <div className="vote shadow-md shadow-slate-800 rounded-lg min-h-min  p-4">
           {true&&(
              <div className=''>
                 <div className='flex flex-col items-center justify-center space-y-4'>
                     <img src={proposalImg} alt="" className='bg-white h-8 w-8 rounded-full'/>
                     <h5>Proposal ID: #{proposalId}</h5>
                     <h5>Title: {"Reach verification "}</h5>
                     <p>Description: {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                     <button onClick={()=>setTrigger(true)} className='border rounded-full py-0.5 text-sm px-3 hover:bg-rose-800 hover:border-0'>Vote</button>
                 </div>
              </div>
           )

           }
             {false&&(
              <div className='flex flex-col justify-center items-center space-y-4 py-6'>
                  <img src={proposalImg} alt="" className='h-16 w-16 bg-white rounded-full'/>
                  <h5>No proposal in voting period</h5>
              </div>
             )

            }
        </div>

        <div className='mt-7'>
           <div className='flex shadow-lg p-10 justify-center items-center justify-evenly rounded-lg'>
             <main className='flex flex-col items-center space-y-1'>
                <h5 className='text-sm '> Minimum deposit</h5>
                <h5 className='text-sm font-light'>{`${ticketPrice} Algo`}</h5>
             </main>
             <main className='flex flex-col items-center'>
                <h5 className='text-sm '>Maximum voting period</h5>
                <h5 className='text-sm font-light'>{" 10 days"}</h5>
             </main>
             <main className='flex flex-col items-center'>
                <h5 className='text-sm '>Voting period</h5>
                <h5 className='text-sm font-light'>{`${deadline} days`}</h5>
             </main>

           </div>

        </div>
           <Modal trigger={trigger} cname="h-72 w-1/2 shadow rounded-lg py-4 px-4">
               <div className='modal-div '>
                <main className='flex justify-end'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md" /></button>
                </main>
                 <div className='flex flex-col justify-center items-center space-y-4'>
                    <GiVote  className='text-7xl'/>
                    <h5>Your Vote</h5>
                    <main className='radio-item flex space-x-4'>
                      <h5 className='h-5 w-5  hover:bg-green-900 active:bg-white rounded-full flex justify-center items-center' onClick={""}>< BiRadioCircleMarked className='text-3xl text-green-500'/></h5>
                      <h5 className='h-5 w-5 hover:bg-rose-900 rounded-full flex justify-center items-center active:bg-white ' onClick={""}>< BiRadioCircleMarked  className='text-3xl text-rose-700'/></h5>
                      
                    </main>
                       
                       <button className="rounded-full py-0.5 px-3 hover:bg-white hover:text-black border text-sm">Submit</button>
                       <h5 className='text-xs'>Deposit Needed: {"50 Algo"}</h5>
                 </div>
                        
               </div>
           </Modal>
   </div>
  )
}
