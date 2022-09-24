# Tutorial : Reach Basic DAO

This is a web3 project developed as part of Umoja3 Decentralzed Bounty hack.

In this tutorial, i would work you through the  creation of  my submitted hack project "Reach Basic DAO".
This project assumes no prior experience with building decentralized applications.

## Table of contents

1. Project Description
2.  Prerequisites/ Stack requirements
3.  Software Requirements
4. Installation aand initialization
5. Scaffolding and setup
6. Getting Started

## Project Description

A DAO, decentarlized autonomous organization is an emerging form of legal structure. With no central governing body, every member within a DAO typically shares a common goal and attempt to act in the best interest of the entity.

Our project simulate or runs as a voting platform whereby each members that hold certain or particular type of network or non-network token can vote on proposals submitteor created by governors.

Our dapp contracts is designed in such a way as to allow keeping track of counts on both sides i.e for or against proposals. The governor calls an external function when the voting deadline is reached.

##  Prerequisites/ Stack requirements

1. Only a  basic understanding of the javascript language and Reactjs framework is required to complete this tutorial.
2. Firebase(optional)

## Software Requirements

1. A Linux OS (Ubuntu) or a Windows 10 OS installed with version 2004 or higher
2. Docker and Docker Compose
3. Docker Desktop(optional)
4. Make

##  Installation and initialization

 Installation steps for the above software is well written and provided in the [reach docs](https://docs.reach.sh/quickstart/)
 
 Check all the tools are installed and working correctly with the below commands:
 
 ```
    $ make --version
 
 ```
 ```
     $ docker --version
 ```
 ```
    $ docker-compose --version
 
 ```
  Now, to get the project started,we assume that you’ll go through this workshop in a directory named ~/reach/tut-basic-dao:
    
    
 ```
       $ mkdir -p ~/reach/tut-basic-dao

 ```
 
 ```
        $ cd ~/reach/tut-basic-dao
 
 ```
 
   Now download the latest version of Reach as follows:
   
   ```
         $ curl https://docs.reach.sh/reach -o ../reach ; chmod +x ../reach
   ```
   
   Run the below to verify reach is properly installed in your machine:
   
   ```
      ../reach version
   ```
    This should run and print your version of reach successfuly
   
   ```
      reach 1.1.7
   
   ```
   
   
   ## Scaffolding and setup
   
  In this tutorial, we'll be walking you step-by-step on how to build your own version of our dapp. We'll start simple and slowly make the application more fully-featured.Okay!
   
 You should follow along by copying-pasting or coding  each part of the program ,to get a feel of writing a reach program.
   
 Our first step is inside the project folder, initialize our project to create index.mjs and index.rsh with some boilerplate code. Do this by running the below command in the terminal.
 
 ```
     $.../reach init

    Writing index.rsh...
    Writing index.mjs...
    Done.
 
 
 ```
 
 ../reach init create a index.rsh file which is the file where our backend code will be written, and index.mjs file where our frontend code will be written. If you open these files, you will see the scaffolding structure for reach that Reach Init has created for us.
  

Here is the index.rsh which is the backend of our Dapp.

```
      'reach 0.1';
   1 export const main = Reach.App(() => {
   2  const Alice = Participant('Alice', {
   3    // Specify Alice's interact interface here
   4 });
   5  const Bob   = Participant('Bob', {
   6   // Specify Bob's interact interface here
   7  });
   8  init();
   9  // write your program here
   10 });


```
    Snippet above is a shell of a program that doesn't do much, but it has a few important components,below is an  explanation of what it does.

   - Line 1 indicates that this is a Reach program. You'll always have this at the top of every program
   - Line 3 defines the main export from the program. When you compile, this is what the compiler will look at
   - Lines 4 through 9 specify the two participants to this application, Alice and Bob.25
   - Line 10 marks the deployment of the the Reach program, which allows the program to start doing things

 A similar shell is created  for our JavaScript frontend code. 
 
 ```
   1   import { loadStdlib } from '@reach-sh/stdlib';
   2   import * as backend from './build/index.main.mjs';
   3   const stdlib = loadStdlib();
   4   const startingBalance = stdlib.parseCurrency(100);
   5   const accAlice = await stdlib.newTestAccount(startingBalance);
   6   const accBob = await stdlib.newTestAccount(startingBalance);
   7   const ctcAlice = accAlice.contract(backend);
   8   const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
   9   await Promise.all([
   10    ctcAlice.p.Alice({
   11      // implement Alice's interact object here
   12     }),
   13     ctcBob.p.Bob({
   14       // implement Bob's interact object here
   15     }),
   16   ]);

 ```
 
   This JavaScript code is similarly schematic and will be consistent across all of your test programs.28

   - Line 1 imports the Reach standard library loader.
   - Line 2 imports your backend, which ./reach compile will produce.
   - Line 3 loads the standard library dynamically based on the REACH_CONNECTOR_MODE environment variable.
   - Line 4 defines a quantity of network tokens as the starting balance for each test account.
   - Lines 5 and 6 create test accounts with initial endowments for Alice and Bob. This will only work on the Reach-provided developer testing network.33
   - Line 8 has Alice deploy the application.
   - Line 9 has Bob attach to it.
   - Lines 10 through 12 initialize a backend for Alice.
   - Lines 13 through 15 initialize a backend for Bob.
   - Line 9 waits for the backends to complete.

  This is now enough for Reach to compile and run our program. Let's try by running
 
  ```
    $ ./reach run
  
  ```
 Reach should now build and launch a Docker container for this application. Since the application doesn't do anything, you'll just see a lot of diagnostic messages though, so that's not very exciting.
 
 
 
 ## Getting Started : Reach Basic DAO implementation

In this section, We will implement the logic of the Reach Basic DAO. We will start by modifying the index.rsh file to better suit our dapp.

We will represent the two major participants in our Dapp as ;

- Governor : who create and submit a proposal for voting.
- Voter  : who votes in favor or against a certain proposal.

Our modified reach program would look like the below;

   ``` 
      1  export const main = Reach.App(() => {
      2 const Governor= Participant('Governor', {
      3  // Specify Governor's interact interface here
      4   })
      5  const Voter= API('Voter', {  
      6     // Specify Voter's interact interface here
      7   
      8  })

      9  init();
       })

   ```
   
  - Line 2 ,defines a participant called the Governor .You can check the [reach docs](https://docs.reach.sh/rsh/appinit/#participant-definition) for more details.

 - Line 5, defines an API class called Voter. API is used to represent a group of participant that share common roles or functions, in our case ,all voters are a   set . for more details check reach docs  [reach docs](https://docs.reach.sh/rsh/appinit/#ref-programs-appinit-api).



  Next ,We define the most basic functions of a Governor and of a Voter, which are to submit a proposal,start the voting process, see voting outcome and vote respectively. These are functions are passed or defined in the interact interface of the Governor and Voter.
  
  Below shows our new addition;
  
  ```
   1  'reach 0.1';
   2
   3  export const main = Reach.App(() => {
   4 
   5     const Governor= Participant('Governor', {
   6
   7       getProposal:  Fun([], Object({
   8          proposalID:UInt,
   9          ticketPrice: UInt,
   10        deadline: UInt,
   11
   12         })),
   13       proposalReady: Fun([],Null), 
   14       showOutcome: Fun([UInt, UInt, UInt], Null),
   13
   14      })
   15      const Voter= API('Voter', {  
   16        // Specify Bob's interact interface here
   17        vote: Fun([Bool], Bool),
   18
   19        })
   20
   21
   22
   23      init();
   24
   25
   26         })
  
  
  ```
  
- Lines 6 through 12 define the Governor participant interact interface. In this case, it provides the below methods:

    1. getProposal : returns a reach object  containing the props of a proposal e.g proposaID,ticketPrice and deadline which are all unsigned integers
    
    2. proposalReady: takes nothing and returns nothing .It used to start the voting process or period
    
    3. showOutcome : takes three unsigned integers but returns nothing. This function is used to show the result of voting to the Governor
    
- Lines 15 through 19 define the Voter API interact interface. In this case, it provides only one function ,vote which takes a boolean value and returns a boolean value.


 Before continuing with our Reach application, let's move over to the JavaScript interface and implement these methods in our frontend index.mjs
 
 ```
  1  import {loadStdlib} from '@reach-sh/stdlib';
  2  import * as backend from './build/index.main.mjs';
  3  const stdlib = loadStdlib(process.env);
  4
  5  const startingBalance = stdlib.parseCurrency(100);
  6
  7  const accGovernor= await stdlib.newTestAccount( startingBalance);
  8  console.log('Hello, Alice and Bob!');
  9
  10  console.log('Launching...');
  11 
  12    console.log('Starting backends...');
  13
  14      const voters=[]
  15
  16      let done = false; // <---------------------------- This was added to ensure the code will wait
  17
  18       const  startingVoting=async()=>{
  19       const newAcc=async(who)=>{
  20      const acc = await stdlib.newTestAccount(startingBalance)
  21       const ctc = acc.contract(backend,ctcGovernor.getInfo())
  22        voters.push({who,acc})
  23
  24        const randomBoolean = Math.random() >= 0.5;
  25
  26        try{
  27          const value = await ctc.apis.Voter.vote(randomBoolean)
  28          const word = value ? "voted for" : "voted against"
  29
  30          console.log(`${who}  ${word} proposal`)
  31        }catch(e){
  32         console.log(e)
  33        }
  34        }
  35
  36       await newAcc("Bob")
  37        await newAcc("Thomas")
  38        await newAcc("Nick")
  39      await newAcc("sam")
  40       await newAcc("James")
  41        await newAcc("Joy")
  42       await newAcc("Jane")
  43
  44     ///---------- Here is the actual waiting code
  45       while ( ! done ) {
  46         await stdlib.wait(1);
  47     }
  48
  49     }
  50
  51  
  52     await ctcGovernor.p.Governor({
  53         getProposal: () => ({
  54              proposalID:1,
  55              ticketPrice: stdlib.parseCurrency(5),
  56              deadline: 25,
  57
  58            }),
  59       proposalReady:()=>{
  60       startingVoting()
  61       },
  62      showOutcome:(  proposalID,forProposal, againstProposal)=>{
  63        console.log(` alice saw proposal #${ proposalID} poll outcome: ${ forProposal} to ${againstProposal}`)
  64      },
  65     
  66   })
  67
  68  console.log('Goodbye, Alice and Bob!');
  69
  70   /// And here is where it is cleared
  71    done = true;
 

 ```
 
- Line 7 create an account for our Governor ,instantiated with a starting balance of Algo
- Line 14 defines an array of voters, which is use to hold the addresses of every voter
- Line 16 defines a variable called done, which is used to indicate when all voters has voted
- Lines 18 through 49 defines a function,startVoting.This function create new account instance of a voter ,initialized with a starting balance of algo.
- Line  21 create a contract instance in which each voter has attach to the contract deployed by Governor.
- Line 24 defines a randomBoolean variable which represent the choice of a voter i.e yes or no
- Line 26 through 34 ,is a try-catch block that exposes the api function(vote) of our reach program to the frontend
- Line 36 thhrough 42 ,create several account instance of a voter.
- Line 53 through 64, declares the implementation of the Governors function.And these are the actual objects that will be bound to interact in the Reach program.


The logic of voting proceeds as below;

```
 20   Governor.only(()=>{
 21   const {  ticketPrice, deadline, proposalID}= declassify(interact.getProposal())
 23   })
 24   Governor.publish(ticketPrice,deadline, proposalID);
 25   commit();

```

- Line 20 states that this block of code is something that only Goveernor performs.
  That means that the variables, ticketPrice, deadline, proposalID, destructured or bound  on line 21 is known only to Governor.
- Line 21 binds these variables to the result of interacting with Governor through the getProposal method, which was implement in the frontend.
This also declassifies the value, because in Reach, all information from frontends is secret until it is explicitly made public.
- Line 24 has the Governor join the application by publishing the value to the consensus network, so it can be used to begin the vote process. Once this happens, the code is in a "consensus step" where all participants act together.
- Line 25 commits the state of the consensus network and returns to "local step" where individual participants can act alone.


Next step is for our Governor to begin the vorting process:


```
 26  Governor.publish()
 27  Governor.interact.proposalReady()

```
- Line 26 the Governor publish inorder to enter a local step
- Line 27, the Governor start the voting process by interacting with the proposalReady function.

The proposalReady informs the all participantthe poll is open voting ,thus voting process proceeds.

A very crucial part of our DAO dapp is the mechanism of voting. Inorder to allow participation of voters in dapp ,we employ a concept in Reach called parallelReduce.

parallelReduce is a kind of consensus transfer in reach.It is just an abbreviation of a fork within a while loop. A fork is a kind consensus transfer  for when many participants want to each do a different thing, in our case ,each Voter want to submit different choice of votes . We used a parallelReduce instead of a fork because we  want voting to happen over and over until some condition is met i.e until the deadline of voting is over. for more details ,[reach docs](https://docs.reach.sh/guide/ctransfers/#guide-ctransfers)

We create a two helper functions from reach [makeDeadline](https://docs.reach.sh/rsh/compute/#rsh_makeDeadline) as seen below;

```
  28 const [ timeRemaining, keepGoing ] = makeDeadline(deadline);

```
- Line 28 , destructures two helper functions from makeDeadline ,which takes a UInt(deadline) as an argument and returns a pair of functions that can be used for dealing with absolute deadlines. It internally determines the end time based off of the deadline and the last consensus time
    
    1. timeRemaining will calculate the difference between the end time and the current last consensus time
    2. keepGoing determines whether the current last consensus time is less than the end time.


For our parallelReduce block, we want to monitor and change the values of two variables **voteFor, voteAgainst**. These variables helps us keep track of vote counts in our dapp.

```
   29 const [voteFor, voteAgainst] =
   30 parallelReduce([0, 0])
   31   .invariant(balance() == (voteFor + voteAgainst) * ticketPrice)
   32  .while(keepGoing())
   33  .api_(Voter.vote, (vote) => {
   34      return [ticketPrice, (k) => {
   35         k(true)
   36          const [nF, nA] = vote ? [1, 0] : [0, 1]
   37          return [voteFor + nF, voteAgainst + nA]
   38      }]
   39
   40   })



```

- Lines 29 and 30 ,defines the parallReduce variables **voteFor, voteAgainst**, which are initialized with 0.
- Line 31 declares an invariant, the condition of the variant is that , at the start and end of the parallelReduce block , the balance of the contract must be equals to the sum all votes multiplied by the ticketPrice.
- Line 32 ,is a while statement that keeps the parallelReduce in loop until the keepGoing() returns false ,meaning deadline is reached.
- Lines 33 through 40 is the .api_ block,which represent the point where each user can perform an action i.e vote.

.api_ takes two argument , an expression that evaluate to a function in the API interface i.e vote and a callBack function. 

The first callback function of the .api_ block returns an array of 



