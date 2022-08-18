import React,{useState,useEffect,useRef}from 'react'
import proposalImg from "../../assests/proposal.png"
import Modal from '../../components/modal'
import {AiOutlineCloseCircle } from "react-icons/ai"
import {GiVote} from "react-icons/gi"
import {  BiRadioCircleMarked} from "react-icons/bi"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../reach-app/build/index.main.mjs'
import { AccountState} from '../../recoilState/globalState';
import { useRecoilValue} from 'recoil';
import { collection, onSnapshot, doc,getDocs,query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase/firebase.util'
import "./polls.css"


const reach = loadStdlib('ALGO');

export default function Voting() {
 const connectedCtc = useRef();
  const [trigger,setTrigger] =useState(false)
  const [outCome,setOutcome] =useState(NaN)
  const [canVote,setCanVote] =useState(false)
  const [Arrayproposal,Arraysetproposal] =useState([])
  const [proposal,setProposal]=useState({})
  const [myVote,setMyvote]=useState(false)
   const [hasVoted,setHasvoted]=useState(false)
   const [choice,setChoice]=useState(false)
  const account =useRecoilValue(AccountState)
  const [ctcInfo,setctcInfo]=useState({})
  const ticketPrice=0.0
  const deadline=0
  const proposalId="xs7bc6"

  useEffect(()=>{
      const getProposals=async()=>{
         const q = query(collection(db, "proposals"), orderBy("date", "desc"), limit(1));
         const querySnapshot = await getDocs(q);
         // console.log(querySnapshot)
         querySnapshot.docs.map((doc)=>{
            // console.log(doc.data())
            setProposal({...doc.data(),id:doc.id})
            Arraysetproposal([{...doc.data(),id:doc.id}])
          })
        // setproposal( querySnapshot.docs)
      }

      getProposals()
  },[])
    console.log()

     const attach=(contractInfo) => {
     
       connectedCtc.current = account.contract(backend, JSON.parse(contractInfo));
       //console.log(connectedCtc.current)
       setCanVote(true)
    }

    const submitVote=async()=>{
      try{
         const value = await connectedCtc.current.apis.Voter.vote(myVote)
         setChoice(value)
         console.log(value,"resultfrom")
      }catch(e){
         console.log(e)
      }
          
      setHasvoted(true)
         
    }
     const ok=()=>{
         setCanVote(false)

          setTrigger(false)
     }
     const showVoteOutcome=()=>{
      try{
         const outcome =connectedCtc.current.apis.Voter.showOutcome()
         setOutcome(outcome)
      }catch(e){
         console.log(e)
      }
     
     }

    console.log(ctcInfo,typeof(ctcInfo))
    const Outcomes=["Motion supported ","Motion rejected"]

  return (
    <div>

        <div className="vote shadow-md shadow-slate-800 rounded-lg min-h-min  p-4">
           {Arrayproposal.length>0&&(
              <div className=''>
                 <div className='flex flex-col items-center justify-center space-y-4'>
                     <img src={proposalImg} alt="" className='bg-white h-8 w-8 rounded-full'/>
                     <h5>Proposal ID: #{proposal.proposalId}</h5>
                     <h5>Title: {proposal.title}</h5>
                     <p>Description: {proposal.description}</p>
                     <button onClick={()=>setTrigger(true)} className='border rounded-full py-0.5 text-sm px-3 hover:bg-rose-800 hover:border-0'>Vote</button>
                 </div>
              </div>
           )

           }
             {Arrayproposal.length===0&&(
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
                <h5 className='text-sm font-light'>{`${proposal.price} Algo`}</h5>
             </main>
             <main className='flex flex-col items-center'>
                <h5 className='text-sm '>Maximum voting period</h5>
                <h5 className='text-sm font-light'>{" 10 days"}</h5>
             </main>
             <main onClick={ showVoteOutcome} className='flex flex-col items-center bg-slate-700 px-3 py-0.5 rounded-lg shadow-lg hover:bg-slate-900 active:bg-white'>
                <h5 className='text-sm text-slate-400 '>Voting Outcome</h5>
                <h5 className='text-sm font-light'>{Outcomes[Number(outCome)]}</h5>
             </main>

           </div>

        </div>
           <Modal trigger={trigger} cname="h-72 w-1/2 shadow rounded-lg py-4 px-4">
               <div className='modal-div '>
                <main className='flex justify-end'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md" /></button>
                </main>
                {canVote===false&&
                  <div>
                      <div className='flex flex-col justify-center items-center space-y-4'>
                          <h5>Contract information</h5>
                          <h5>{proposal.ctcInfo}</h5>
                           <textarea 
                             type='text'
                             onChange={(e)=>setctcInfo(e.target.value)}
                             name="ctcInfo"
                             value={ctcInfo}
                             className="text-white rounded-lg bg-slate-900"
                           />
                          <button onClick={()=>attach(ctcInfo)} className='hover:bg-slate-700 px-3 py-0.5 border rounded-full'>Attach</button>
                        </div>
                  </div>
                  }
                {canVote===true&&
                 <div className='flex flex-col justify-center items-center space-y-4'>
                    <GiVote  className='text-7xl'/>
                    {hasVoted===false&&
                      <>
                    <h5>Your Vote</h5>
                   
                    <main className='radio-item flex space-x-4'>
                      <h5 className='h-5 w-5  hover:bg-green-900 active:bg-white rounded-full flex justify-center items-center' onClick={()=>setMyvote(true)}>< BiRadioCircleMarked className='text-3xl text-green-500'/></h5>
                      <h5 className='h-5 w-5 hover:bg-rose-900 rounded-full flex justify-center items-center active:bg-white ' onClick={()=>setMyvote(false)}>< BiRadioCircleMarked  className='text-3xl text-rose-700'/></h5>
                      
                    </main>
                       
                       <button onClick={submitVote} className="rounded-full py-0.5 px-3 hover:bg-white hover:text-black border text-sm">Submit</button>
                       <h5 className='text-xs'>Deposit Needed: {`${proposal.price} Algo`}</h5>
                       </>
                    }

                    {hasVoted===true&&
                      <>
                      <p className='px-2 text-sm'>{`You voted in  ${choice==true?"support":"against"} of proposal ID:#{proposal.proposalId}`}</p>
                      <button className="px-3 py-0.5 border text-sm" onClick={ok}>Ok</button>
                      </>

                     }
                 </div>
                }  
               </div>
           </Modal>
   </div>
  )
}
