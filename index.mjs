import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accGovernor=await stdlib.newTestAccount(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');

const ctcGovernor = accGovernor.contract(backend);
//const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');

const voters=[]
const  startingVoting=()=>{
  
  const acc =await stdlib.newTestAccount(startingBalance)
}




await ctcGovernor.p.Governor({
  getProposal: () => ({
          proposalID:1,
          exists:true,
          title:"Good",
          description:"A good thing",
          ticketPrice: stdlib.parseCurrency(5),
          deadline: 10,
          
        }),
  proposalReady:()=>{
    startingVoting()
  },
  showOutcome:(title, forProposal, againstProposal)=>{
    console.log(`${title} poll outcome: ${ forProposal} to ${againstProposal}`)
  }

})

console.log('Goodbye, Alice and Bob!');
