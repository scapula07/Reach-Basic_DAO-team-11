import React,{useEffect,useState} from 'react'
import { collection, onSnapshot, doc,getDocs,query, orderBy, limit, updateDoc,addDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase.util'
import proposalImg from "../../assests/proposal.png"

import {TimeoutState,PollState,  DaoState,ExternalFunctionState   } from '../../recoilState/globalState';
import { useRecoilValue } from 'recoil';

export default function Yourproposal() {
    const [Arrayproposal,Arraysetproposal] =useState([])
    const [proposal,setProposal]=useState({})
    const timeout=useRecoilValue(TimeoutState )
    const pollOutcome=useRecoilValue(PollState )
    const dao=useRecoilValue( DaoState )
    const externalfunc=useRecoilValue( ExternalFunctionState   )
    const [updated,setUpdate]=useState(false)

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
    const broadCast=async()=>{
        try{
            const docRef = doc(db, "proposals", proposal.id);
            await updateDoc(docRef, {
                pollResult:pollOutcome,
                timeout:timeout
              });
        }catch(e){
            console.log(e)
        }
       
          setUpdate(true)
          if(dao==="passed"){
            const docRef = await addDoc(collection(db, "passed"), {
                proposalId:proposal.proposalId,
                title:proposal.title,
                description:proposal.description,
                price:proposal.price,
                dao:"passed",
                pollResult:pollOutcome,
               
               
                });
          }else{
            const docRef = await addDoc(collection(db, "rejected"), {
                proposalId:proposal.proposalId,
                title:proposal.title,
                description:proposal.description,
                price:proposal.price,
                dao:"rejected",
                pollResult:pollOutcome,
               
               
                });
          }
    }
  return (
    <div>
         <div className=''>
              <main className='flex justify-end w-full items-center text-yellow-600'><h5>{timeout}</h5></main>
                 <div className='flex flex-col items-center justify-center space-y-4'>
                     <img src={proposalImg} alt="" className='bg-white h-8 w-8 rounded-full'/>
                     <h5>Proposal ID: #{proposal.proposalId}</h5>
                     <h5>Title: {proposal.title}</h5>
                     <p>Description: {proposal.description}</p>
                     <h5>Poll Result: {pollOutcome}</h5>
                    {updated===false&& <button onClick={broadCast} className='border rounded-full py-0.5 text-sm px-3 hover:bg-rose-800 hover:border-0'>Broadcast result</button>}
                    {updated===true&& <h5>Broadcasted</h5>}
                 </div>
              </div>
              <main  className='flex justify-start w-full items-center p-y-4'><h5>{externalfunc}</h5></main>

    </div>
  )
}
