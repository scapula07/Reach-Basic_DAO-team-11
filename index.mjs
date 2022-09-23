import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accGovernor= await stdlib.newTestAccount( startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');

const ctcGovernor = accGovernor.contract(backend);
//const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');

const voters=[]

let done = false; // <---------------------------- This was added to ensure the code will wait

const  startingVoting=async()=>{
  const newAcc=async(who)=>{
  const acc = await stdlib.newTestAccount(startingBalance)
  const ctc = acc.contract(backend,ctcGovernor.getInfo())
  voters.push({who,acc})

  const randomBoolean = Math.random() >= 0.5;

  try{
    const value = await ctc.apis.Voter.vote(randomBoolean)
    const word = value ? "voted for" : "voted against"

    console.log(`${who}  ${word} proposal`)
  }catch(e){
    console.log(e)
  }
  }

  await newAcc("Bob")
  await newAcc("Thomas")
  await newAcc("Nick")
  await newAcc("sam")
  await newAcc("James")
  await newAcc("Joy")
  await newAcc("Jane")

///---------- Here is the actual waiting code
  while ( ! done ) {
    await stdlib.wait(1);
}

}




await ctcGovernor.p.Governor({
  getProposal: () => ({
          proposalID:1,
          exists:true,
          title:"Good",
          description:"A good thing",
          ticketPrice: stdlib.parseCurrency(5),
          deadline: 25,
          
        }),
  proposalReady:()=>{
    startingVoting()
  },
  showOutcome:(  proposalID,forProposal, againstProposal)=>{
          console.log(` alice saw proposal #${ proposalID} poll outcome: ${ forProposal} to ${againstProposal}`)
    },
  showTimeout:(timeout)=>{
    console.log(`${timeout} dealine reach `)
  }
})

console.log('Goodbye, Alice and Bob!');

/// And here is where it is cleared
done = true; 
