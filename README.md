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
   
   In this tutorial, we'll be building a version of Rock, Paper, Scissors! where two players, Alice and Bob, can wager on the result of the game. We'll start simple and slowly make the application more fully-featured


