'reach 0.1';

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
  showOutcome:Fun([Bytes(100),UInt,UInt],Null)

})
  const Voter= API('Voter', {  
      // Specify Bob's interact interface here
      vote: Fun([], Bool),
      showOutcome:Fun([Bytes(100),UInt,UInt],Null)
  })
 

  init();
   
  const showOutcome = (title, forProposal, againstProposal) => () => {
    each([Governor, Voter], () =>
      interact.showOutcome(title, forProposal, againstProposal)); };

   Governor.only(()=>{
     const { title, ticketPrice, deadline}= declassify(interact.getProposal())
   })
  Governor.publish(title,ticketPrice,deadline);
  commit();
  Governor.publish()
  Governor.interact.proposalReady()
  const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
  
  const[ voteFor,voteAgainst]=
   parallelReduce([ 0, 0 ])
     .invariant(balance() == (voteFor + voteAgainst) * ticketPrice)
     .while(keepGoing() )
    .api_( Voter.vote,(vote)=>{ 
    const [ nF, nA ]= vote? [ 1, 0 ] : [ 0, 1 ]
   
    return[voteFor +nF,voteAgainst +nA]
    })
      .timeout(timeRemaining(), () => {
        Anybody.publish();
        showOutcome(TIMEOUT,n_forProposal, n_againstProposal)();
      });

      showOutcome(title, forProposal, againstProposal)();
  exit();
});
