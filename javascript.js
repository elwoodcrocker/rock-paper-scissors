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
     The value from 0 Value = Rock, 1 Value = Paper, 2 value = Scissors.
     
     
     
     
     prompt must be able to accept either uppercase, lowercase and a mixture.
     use .lowerCase before converting to strings
     convert strings to numbers so they can be compared to the computer random generated variable
     convert "Rock" = 0, Paper = 1 and Scissors = 2     */  

     /*End of Round:
     console.log each round. alert (You loose/Win winner beats looser. )

End Game:
     Use console.log to log each score after loop is ran.
     End program when either userCounter of computerCounter = 5.
     Use confirm to ask for replay. on OK. restart game on cancle, exit the game.     

    
*/
    let computerCounter = 0
    let userCounter = 0
    
    
    function getComputerChoice(){
        let computerChoice = (Math.floor(Math.random()*3))
        return computerChoice;

    }

    
    const buttonRock = document.querySelector('.button-rock')

    buttonRock.addEventListener('click', () =>{
        playRound(getComputerChoice(),0)
    } );

    const buttonPaper = document.querySelector('.button-paper')

    buttonPaper.addEventListener('click', () =>{
        playRound(getComputerChoice(),1)
    } );

    const buttonScissors = document.querySelector('.button-scissors')

    buttonScissors.addEventListener('click', () =>{
        playRound(getComputerChoice(),2)
    } );




        
            
    
    function playRound(computerSelection, playerSelection){
        
        if (computerSelection === playerSelection){
            alert('TryAgain!!')
            return

        }else if ((computerSelection === 2 && playerSelection ===1) || 
                  (computerSelection === 1 && playerSelection ===0) ||
                  (computerSelection === 0 && playerSelection ===2)){
                
                computerCounter++;


        }else{
         
            userCounter++;
             
        }
            updateScore(userCounter,computerCounter)
        
    }    
    
        
    function updateScore(player,computer){
        
        if(player < 5 && computer < 5){
            console.log(userCounter,computerCounter)
            return
            
        }else if (player === 5){
        console.log(`Great Job, you beat the computer with a score of ${userCounter} to ${computerCounter}`)
        
        }else if(computer === 5){
        console.log(`You loose to computer with a score of ${userCounter} to ${computerCounter}`)
        
        }
        return   
    }


    