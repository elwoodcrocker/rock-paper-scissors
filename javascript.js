/*
Plan: 

Interface: 

    No interface, Game will be played from the console. 
    will revisit this later. 

Inputs: 

    User input - prompt "Rock? Paper? Scissors?" - 
    Randomly generated computer input of either Rock, Paper, scissors. 

Outputs:

    boolean value to update a counter for each player 
    first count to 5 wins will win the game and the game will refresh.
    
Steps.

      1. Computer generates random response of either Rock, paper or scissors
      2. user inputs a response of either Rock, paper or scissors
      3. responses are compared
      4. comparison function updates user counter or computer counter.
      5. first counter to 5 stops the game and announces the winner. 
      6. prompt will ask user to play agin or quit. -use confirm prompt. 


PsuedoCode:

Variable:

computerCounter = 0
userCounter = 0
computerChoice = ""
userChoice = ""
    
Computer uses Math.floor(Math.random()*3) to generate either and output of 0 || 1 || 2
     alert(Math.floor(Math.random()*3) )
     
Use random number generated from Math.floor to assign values to a varible.     
    The value from 0 Value = Rock, 1 Value = Paper, 2 value = Scissors.  

Ask user a question "What do you choose-Rock? Paper? Scissors?" using a prompt.
    convert strings to numbers so they can be compared with the computer variable
    convert "Rock" = 0, Paper = 1 and Scissors = 2

compare variable function
    if (computerChoice == 2 && userChoice == 1) 
        return computerCounter = computerCounter++

    
*/


alert(Math.floor(Math.random()*3) )