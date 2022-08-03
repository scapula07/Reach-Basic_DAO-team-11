'reach 0.1';


const [ _, MOTION_WINS, MOTION_LOSE, TIMEOUT ] = makeEnum(3);
export const main = Reach.App(() => {
  const Governor= Participant('Governor', {
  
    getProposal:  Fun([], Object({
      proposalID:UInt,
      title:Bytes(200),
      exists:Bool,
      description:Bytes(200),
      ticketPrice: UInt,
      deadline: UInt,


     })),
  
  proposalReady: Fun([],Null), 
  showOutcome: Fun([UInt, UInt, UInt], Null),

})
  const Voter= API('Voter', {  
      // Specify Bob's interact interface here
      vote: Fun([Bool], Bool),
      showOutcome:Fun([],UInt)
  })
 

  init();
   
  const showOutcome = ( proposalID,  voteFor, voteAgainst) => () => {
 
   Governor.interact.showOutcome( proposalID, voteFor, voteAgainst)() };

   Governor.only(()=>{
     const { title, ticketPrice, deadline, proposalID}= declassify(interact.getProposal())
   })
  Governor.publish(title,ticketPrice,deadline, proposalID);
  commit();
  Governor.publish()
  Governor.interact.proposalReady()
  const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
  
  const [voteFor, voteAgainst] =
  parallelReduce([0, 0])
      .invariant(balance() == (voteFor + voteAgainst) * ticketPrice)
      .while(keepGoing())
      .api_(Voter.vote, (vote) => {
          return [0, (k) => {
              const [nF, nA] = vote ? [1, 0] : [0, 1]
              return [voteFor + nF, voteAgainst + nA]
          }]

      })
      .timeout(timeRemaining(), () => {
          Anybody.publish();
          commit()
          showOutcome(TIMEOUT , voteFor, voteAgainst)();
          const [ [], k ] = call(Voter.showOutcome);
          k( TIMEOUT );
          return [voteFor , voteAgainst]
      });
     
    showOutcome( proposalID, voteFor, voteAgainst)();
    commit()
    const outcome = voteFor>= voteAgainst ? MOTION_WINS : MOTION_LOSE

    const [ [], k ] = call(Voter.showOutcome);
      k(outcome);
    commit()
  exit();
});
