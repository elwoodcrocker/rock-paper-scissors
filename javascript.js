/*
Plan: 

Interface: 

    No interface, Game will be played from the console. 
    will revisit this later. 

Inputs: 

    User input - prompt "Rock? Paper? Scissors?" - 
    Randomly generated computer input of either Rock, Paper, scissors. 

Outputs:

    boolean value derived from condition to update a counter for each player
    Console log results after each round. console. 
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
     use function getComputerChoice()
     alert(Math.floor(Math.random()*3) )
     use output to assign value to computerChoice.
     
Use random number generated from Math.floor to assign values to a varible.     
     The value from 0 Value = Rock, 1 Value = Paper, 2 value = Scissors.*/  

    function getComputerChoice(){
        return (Math.floor(Math.random()*3) )
        }

    let computerSelection = getComputerChoice()

     
/*Ask user a question "What do you choose-Rock? Paper? Scissors?" using a prompt.

     prompt must be able to accept either uppercase, lowercase and a mixture.
        use .lowerCase before converting to strings
     convert strings to numbers so they can be compared to the computer random generated variable
     convert "Rock" = 0, Paper = 1 and Scissors = 2
*/
    function getUserChoice(){ 
    let userSelection = prompt("Rock Paper or Scissors?","Enter Choice Here")
    userSelection = userSelection.toLowerCase()

        if (userSelection === "rock"){
            userSelection = 0
        }else if (userSelection ==="paper"){
            userSelection = 1
        }else if (userSelection ==="scissors"){
            userSelection = 2
        }else{
            alert("Plese Check spelling and try agian")
        }
    return userSelection     
    }
    
    getUserChoice()

/*
compare input-variable function:
    if (computerChoice === 2 && userChoice ===1) {
        return computerCounter = computerCounter++
        alert("You Loose!!! Scissors beats Paper" )
    }else if (computerChoice === 2 && userChoice === 0) {
        return userCounter = userCounter++
    }
    else

End of Round:
     console.log each round. alert (You loose/Win winner beats looser. )

End Game:
     Use console.log to log each score after loop is ran.
     End program when either userCounter of computerCounter = 5.
     Use confirm to ask for replay. on OK. restart game on cancle, exit the game.     

    
*/

