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
  




