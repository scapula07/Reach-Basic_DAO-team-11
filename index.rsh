'reach 0.1';


const [ _, MOTION_WINS, MOTION_LOSE, TIMEOUT ] = makeEnum(3);
export const main = Reach.App(() => {
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
 

  init();
   
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
    const outcome = voteFor>= voteAgainst ? MOTION_WINS : MOTION_LOSE

    const [ [], k ] = call(Voter.showOutcome);
      k(outcome);
    commit()
    Governor.publish()
    if(voteFor >voteAgainst){
      Governor.interact.callFunction()
    }
    transfer(balance()).to(Governor);
    commit();
  exit();
});
