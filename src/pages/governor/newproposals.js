import React,{useState,useEffect} from 'react'
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../reach-app/build/index.main.mjs'
import { AccountState,TimeoutState,PollState, DaoState ,ExternalFunctionState ,PollCountState} from '../../recoilState/globalState';
import { useRecoilValue,useRecoilState } from 'recoil';
import Modal from "../../components/modal"
import {AiOutlineCloseCircle} from "react-icons/ai" 
import { collection, setDoc,doc,getDoc,addDoc} from  'firebase/firestore'
import { db } from '../../firebase/firebase.util.js';

const reach = loadStdlib('ALGO');

export default function NewProposals() {
    const account =useRecoilValue(AccountState)
    const [ctcInfo,setCtcInfo] =useState("")
    const [calledFun,setCalledFunc] =useRecoilState(ExternalFunctionState )
    const [pollCount,setPollCount] =useRecoilState(PollCountState )
    const [ArrayctcInfo,setArrayctcInfo]=useState([])
    const [Id,setID]=useState("")
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [timeout,setTimeout]=useRecoilState(TimeoutState )
    const [daoState,setDaostate]=useRecoilState( DaoState )
    const [pollOutcome,setPollOutcome]=useRecoilState(PollState  )
    const [price,setPrice]=useState("")
    const [proposalReady,setReady]=useState("")
    const [trigger,setTrigger] =useState(false)
    const [ErrorMsg,setErrorMsg]=useState("")
    
    console.log(Id,title,description,price,">>>>>>")

    useEffect(()=>{
      const getBal =async()=>{
       //const amt=await stdlib.formatCurrency(await stdlib.balanceOf(account ))
       //console.log(amt)
      }


    },[])


    const deployContract = async () => {

        console.log("deploying")
      const deployerInteract = {
        getProposal: () => ({
          proposalID:Number(Id),
          ticketPrice:reach.parseCurrency(Number(price)),
          deadline: 50,
          
        }),
     proposalReady:()=>{
         setReady("Poll is open for voting")
      },
    showOutcome:(title, forProposal, againstProposal)=>{
       console.log(` alice saw proposal ${title} poll outcome: ${ forProposal} to ${againstProposal}`)
       const dao=forProposal >2?"passed":"rejected"
       setDaostate(dao)
       setPollOutcome(`${ forProposal} to ${againstProposal}`)
       setPollCount({
          yes:forProposal,
          no:againstProposal
       })
      },
    showTimeout:(timeout)=>{
       console.log(`${timeout} dealine reach `)
       setTimeout("Dealine reached")
    },
    callFunction:()=>{
      console.log("External function has been called")
      setCalledFunc("External function has been called")
    },
   }
   setTrigger(true)
  try{
    const contract = account.contract(backend);
    backend.Governor(contract, deployerInteract);
      const cInfo = await contract.getInfo();
      setArrayctcInfo([JSON.stringify(cInfo,null,2)])
      setCtcInfo(JSON.stringify(cInfo,null,2))
    
      
    }catch(e){
  console.log(e)
  setErrorMsg(e.message)
   }

   
   

  
  }
  const AddToProposal= async()=>{
     console.log("pushing to firebase")
     setTrigger(false)
    const docRef = await addDoc(collection(db, "proposals"), {
      proposalId:Id,
      title:title,
      description:description,
      ctcInfo:ctcInfo,
      price:price,
      date:Number(Date.now())
     
     
      });
      console.log("pushed to firebase")
      console.log(docRef)
    
       

   setID("")
   setTitle("")
   setDescription("")
 
   setPrice("")
  

  }
  console.log(ctcInfo,account,"accccccc")
  console.log(proposalReady)
  return (
    <div className='newproposal flex justify-center text-white px-10 py-4'>
        <div className='proposal-form flex flex-col space-y-4 shadow w-3/4 h-96 rounded-md px-4 py-2'>
             <main>
                <label>Proposal ID</label>
                <div className='w-full h-8 bg-slate-900 rounded-md '>
                <input placeholder={Id} 
                 type="text"
                 name="Id"
                 value={Id}
                 className="w-10/12 h-8 px-4 py-0.5 rounded-md bg-slate-900 "
                
                />
                <button className='text-xs hover:text-rose-900 rounded-full border py-0.5 px-3'
                  onClick={()=>setID(Math.floor(Math.random()*100))}
                >Generate</button>
                </div>
             </main>

             <main>
                <label>Proposal Title</label>
                
                <input placeholder='' 
                 type="text"
                 className="w-full h-8 px-4 py-0.5 rounded-md bg-slate-900 "
                 name="title"
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                />
            </main>

            <main>
                <label>Proposal Description</label>
                
                <textarea placeholder='' 
                 type="text"
                 className="w-full h-20 px-4 py-0.5 rounded-md bg-slate-900 "
                 name="description"
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                />
            </main>

            <main>
                <label>Ticket Price</label>
                <div className='flex justify-between w-full h-8 bg-slate-900 rounded-md '>
                <input placeholder='' 
                 type="text"
                 name="price"
                 value={price}
                 className="w-10/12 h-8 px-4 py-0.5  rounded-md bg-slate-900 "
                 onChange={(e)=>setPrice(e.target.value)}
                />
                <button className='text-xs px-2'>Algo</button>
                </div>
             </main>
              <main className='flex w-full justify-center'>
                <button className='rounded-full hover:text-black py-0.5 px-3 text-sm border hover:bg-white'
                 onClick={deployContract}
                >Deploy</button>
              </main>
        </div> 

           <Modal trigger={trigger} cname="h-72 w-1/2 shadow rounded-lg py-4 px-4">
           <div className='modal-div '>
                <main className='flex justify-end'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md" /></button>
                </main>

                 <div  className='flex flex-col justify-center items-center space-y-4'>
                    <h5>Contract information</h5>
                    
                       <h5>{ArrayctcInfo[0]}</h5>
                       <h5>{ErrorMsg}</h5>
                      <h5>{proposalReady}</h5>
                      <button className='rounded-full hover:text-black py-0.5 px-3 text-sm border hover:bg-white'
                       onClick={AddToProposal}
                      >ok</button>
                 </div>
            </div>
           </Modal>
    </div>
  )
}
