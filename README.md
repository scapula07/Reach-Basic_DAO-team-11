# Workshop: Reach Basic DAO



This is a web3 project  developed as part of Umoja3 Decentralzed Bounty hack.

In this workshop I will walk you through the details of my project "Reach Basic DAO" which I submitted for the hack.

This project builds substantially on  a lot of concept from the Reach Lang tutorial and some of its workshop examples. It assumes you have indeed completed at least the rock-paper-scissors reach tutorial.

---

## Project Description
---

A DAO, decentarlized autonomous organization is an emerging form of legal structure. With no central governing body, every member within a DAO typically shares a common goal and attempt to act in the best interest of the entity. 

Our project simulate or runs as a voting platform whereby each members that hold certain or particular type of network or non-network token can vote on proposals created and then submitted by governors. 

The DApp contracts is designed in such a way as to allow keeping track of counts on both sides i.e for or against proposals. The governor calls an external function when the voting deadline is reached.


## Prerequisites/Stack requirements
---

1. A basic understanding of the Reach Language
2. A basic undestanding of Javascript Programming Language
3. Must have completed at least the basic Reach Language tutorial found at [Reach Docs](https://docs.reach.sh/tut/#tutshttps://docs.reach.sh/tut/#tuts) 

## Software Requirements
---

1. A Linux OS (Ubuntu) or a Windows 10 OS installed with version 2004 or higher
2. Docker and Docker Compose
3. Docker Desktop(optional)
4. Make

## Getting Started
---

Installation steps for the above software is well written and provided in the [reach docs](https://docs.reach.sh/tut/#tutshttps://docs.reach.sh/tut/#tuts) 

Check all tools are installed and working correctly with the commands below:

```
  $ make --version
```
``` 
  $ docker --version
```

```
 $ docker-compose --version
 ```

Now, to get the project started, we assume that you’ll go through this workshop in a directory named ~/reach/workshop-basic-dao:

```
   $ mkdir -p ~/reach/workshop-basic-dao
```

```
   $ cd ~/reach/workshop-basic-dao
```

Now download the latest version of Reach commandline utility as follows:
```
    $ curl https://docs.reach.sh/reach -o ../reach ; chmod +x ../reach
```

Run below command to verify reach is properly installed in your machine:
```
  ../reach version
```

This should run and print your version of reach successfuly
 ```
    reach 1.1.7
 ```

It is best to start off by scaffolding a basic reach program by running the following:

```
    $.../reach init

    Writing index.rsh...
    Writing index.mjs...
    Done.
```
../reach init create a index.rsh file which is the file where our backend code will be written, and index.mjs file where our frontend code will be written. If you open these files, you will see the scaffolding structure for reach that Reach Init has created for us.

 Lets run our program to check if everything is installed correctly:

 ```
   $ REACH_CONNECTOR_MODE=ALGO ../reach run

   Hello, Alice and Bob!
   Launching...
   Starting backends...
   Goodbye, Alice and Bob!
 ```

## Problem Analysis

In implementing any application, we firstly must perform what is called problem analytics. This defines the general scope of the issue, how we intend to solve the problem with our application and includes an analysis of the set of participants involved in a computation.

The problem analysis depends on the objective of our project which is: Governors submit a proposal within a predetermined deadline. And voters vote for or against the proposal. The side of vote with the most count wins.

Now try to write down your own answers in your Reach backend program(index.rsh) using comments block using the following guiding questions:

```
  Who is involved in this application?

  What information do they know at the start of the program?

  What actions can who perform in this application?


```

Stop! Write down the problem analysis of this program as a comment.

Compare those answers with our answers below:

```

    This program involves two roles: a Governor who deploys the DAO contract and the voters who votes for or against a proposal .

    The Governor knows the set of properties for each proposal and the ticket price at the start of the voting period as well as deadline for the voting period.

    The voter are aware of the properties of each proposal at the beggining of the application such as proposal ID, ticket price and deadline for voting.

    Each Voter  makes a  choice between for or against or simply YES/NO decision

    The Governor counts  the votes of each voter, compares them and publish the poll result.

    The Governor calls an external function if more voter vote in support than against.

```

It is alright if your answers differs from mine, if you are confident your answers are correct you can proceed with this workshop.

## Data Definition
---

In this step of the workshop, we would focus on going through definition of data types equivalents of the values we used in our answers from the previous section. 

So, for this program, we should decide:

1. What data type will represent the proposal id ?
1. What data type will represent the ticket price and deadline?

 Also, we'll be deciding what functions our participants will have.

 ```
    What functions  does the Governor  needs to start the poll or voting?

    What functions does a Voter  need to vote for a proposal?

 ```

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

Write down the data definitions for this program as definitions.

```rs
        const Governor= Participant('Governor', {
    
        getProposal:  Fun([], Object({
        proposalID:UInt,
        ticketPrice: UInt,
        deadline: UInt,


        })),
        
        proposalReady: Fun([],Null), 
        showOutcome: Fun([UInt, UInt, UInt], Null),
        callFunction:Fun([],Null),
        showTimeout:Fun([UInt],Null)

        })
        const Voter= API('Voter', {  
            // Specify Bob's interact interface here
            vote: Fun([Bool], Bool),
            showOutcome:Fun([],UInt)
        })



```

We are going to represent the data defintion as;
 - proposalId as UInt,
 - ticketprice as UInt, 
 - deadline as UInt, 
 - the getProposal function as Fun([], Object({proposalID:UInt,ticketPrice: UInt,deadline: UInt, })), that takes nothing and return an object of properties.
 - proposalReady as Fun([],Null), that takes nothing and return nothing and is used to start the voting process thus each voter can submit their vote; 
 - showOutcome as Fun([UInt, UInt, UInt], Null), that takes three argument but returns nothing. This function shows the outcome to the governor.
 - callFunction as Fun([],Null), that takes three argument but returns nothing. This act as an external function  that is called by the governor.
 - showTimeout as Fun([UInt],Null), that takes a argument but returns nothing. which is used to inform the governor that a timeout has occured.

 - vote as Fun([Bool], Bool), that takes a argument and returns a boolean. 
 - showOutcome as Fun([],UInt), that takes a argument and returns a boolean. 

## Communication construction
---
A fundamental aspect of a decentralized application is the pattern of communication and transfer among the participants, including the consensus network. Try to write this part considering how the process of Governor creating a proposal, the ticket price and the voters will use to vote.

Write down the  structure for this program as comments.

```
    The Governor create  the properties of a proposal i.e define the proposal id, ticket price and deadline.

    The Governor wait for all the voters to submit their choice of vote:

    Each voter is given a period to submit their choice of vote.

    The Governor keeps track of counts of votes.

    The Governor and Voters are informed of voting outcome at the end of voting period or deadline.

    The Governor calls an external function when the vote count is in favor of the proposal

    The total ticket price is transfer to th Governor.

```
 Write down the communication pattern for this program as code.

 Main logic of our contract should now look like:

 ```rs     
          
            const [ _, MOTION_WINS, MOTION_LOSE, TIMEOUT ] = makeEnum(3);

            const showOutcome = ( proposalID,  voteFor, voteAgainst) => {
          
            Governor.interact.showOutcome( proposalID, voteFor, voteAgainst)};



            Governor.only(()=>{
              const {  ticketPrice, deadline, proposalID}= declassify(interact.getProposal())
            })
            Governor.publish(ticketPrice,deadline, proposalID);
            commit();
            Governor.publish()
            Governor.interact.proposalReady()
            const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
            
            const [voteFor, voteAgainst] =
            parallelReduce([0, 0])
                .invariant(balance() == (voteFor + voteAgainst) * ticketPrice)
                .while(keepGoing())
                .api_(Voter.vote, (vote) => {
                    return [ticketPrice, (k) => {
                      k(true)
                        const [nF, nA] = vote ? [1, 0] : [0, 1]
                        return [voteFor + nF, voteAgainst + nA]
                    }]

                })
                .timeout(timeRemaining(), () => {
                    Anybody.publish();
                    commit()
                  // showOutcome(TIMEOUT , voteFor, voteAgainst);
                  Governor.interact.showTimeout(TIMEOUT)
                    const [ [], k ] = call(Voter.showOutcome);
                    k( TIMEOUT );
                  
                    return [voteFor , voteAgainst]

                  
                });
              
              showOutcome( proposalID, voteFor, voteAgainst);
              commit()

              Governor.publish()
              if(voteFor >voteAgainst){
                Governor.interact.callFunction()
              }
              transfer(balance()).to(Governor);
              commit();
            exit();
          });




 ```
In the code, we  ensure each voter get a chance to submit their choice of vote. The Governor keeps track of vote count, and the contract keeps this step in a loop.

At the end of the voting period(deadline) , the votes are calculated and result published to the blockchain.

The last part of the logic, is that, the balance is transfered to the Governor account. Of course in real life application, one should create a better logic of distributing the balance such as using community pools, etc. Since our application is simple, then we haven't implimented it yet.

## Assertion Insertion
---
To simplify the code, no assertion of the contract is implimented, aside from the invariant definition itself, but one should consider ensuring that, each player actually chooses a unique number from the predefined list only.

## Possible code additions
---
 Our code works fine but there are some points we need to improve. One improvement is to enforce a way to show voting outcome to  all our voters. For that, we will define a function as:

 ```rs
    const outcome = voteFor>= voteAgainst ? MOTION_WINS : MOTION_LOSE
    const [ [], k ] = call(Voter.showOutcome);
      k(outcome);
     commit()

 ```

 ## Interaction Introduction

 Now we have a completed the contract we can write the frontend.

  The frontend produce the following data for the backend:

  1. The Governor creates the props of the proposal. This is implimented on frontend using Javascript since its much more simpler than creating in the backend with current knowledge of Reach Language.
  2. Each voter will provide their choice of vote i.e yes/no
 
  Insert interact calls to the frontend into the program (index.mjs).

 ```js
    import React,{useState} from 'react'
    import Modal from "../modal"
    import {AiOutlineCloseCircle} from "react-icons/ai"
    import { AccountState } from '../../recoilState/globalState';
    import { loadStdlib } from '@reach-sh/stdlib';
    import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

    import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
    import { ALGO_PeraConnect as PeraConnect } from '@reach-sh/stdlib';
    import {useRecoilState} from "recoil"
    const reach = loadStdlib('ALGO');

    const ConnectAccount= () =>{

    const [trigger,setTrigger] =useState(false)
    const [account,setAccount] =useRecoilState( AccountState)
    const [address,setAddress] =useState("")

    const useMyAlgo=async(secret, mnemonic = false)=>{
      delete window.algorand;
      const reach = loadStdlib('ALGO');
      reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        console.log(account.getAddress(),"acc>>>")
        setAccount(account)
        setAddress(account.getAddress())
      } catch (error) {
      
      }
    }
    const usePera=async(secret, mnemonic = false)=>{
      delete window.algorand;
      const reach = loadStdlib('ALGO');
      reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', PeraConnect } ));

      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        console.log(account.getAddress(),"acc>>>")
        setAccount(account)
        setAddress(account.getAddress())
      } catch (error) {
      
      }
    }
    const useWalletConnect=async(secret, mnemonic = false)=>{
      delete window.algorand;
      const reach = loadStdlib('ALGO');
      reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet',  WalletConnect } ));
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        console.log(account.getAddress(),"acc>>>")
        setAccount(account)
        setAddress(account.getAddress())
      } catch (error) {
        console.log(error)
      }
    }
    }
     
    function NewProposals() {
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
    

    }
      
   
    function Voting() {

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

        const showVoteOutcome=async()=>{
          try{
            const outcome = await connectedCtc.current.apis.Voter.showOutcome()
            console.log(outcome,"outcome ")
            setOutcome(outcome)
          }catch(e){
            console.log(e)
          
        
        }
      }
        const Outcomes=["Motion supported ","Motion rejected"]
```
Provided that you have a basic understanding of javascript, you can easily understand the logic of the game.

##  Discussion
Congratulation for implimenting your own unique numbers game in reach.

Please take into consideration that this workshop gives you the overview functionality with respect to code structure of our project. To best and fully understand the code please review the github repo [github repo](https://github.com/scapula07/Reach-Basic_DAO-team-11/tree/main) 

If you found this workshop helpful, please let us know on the Discord community!



