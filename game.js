console.log("hello world")
// this funtion is for the user to play a small gmae of rock, paper, or scissors.
function begingame(){
    //this gets the html element with the id of result
    var result = document.getElementById("result")
    //this is only gave us a random number between 0 and 1
    var aichoice = Math.random();
    //we multiplied this so it could give us the number between 0 and 2
    aichoice = aichoice*2
    //we had to round it into a whole number so it would not give us a decimal
    aichoice = Math.round(aichoice);
    
    //this will promt an alert that will ask the user to input a value
    var userchoice = prompt("enter rock paper or scissors");
    //we had to define it to set it to null because we are setting the value in a condition
    var usernum;
    //we changed the users string into a number 
    if(userchoice == "rock"){
        usernum = 0
    }else if(userchoice == "paper"){
        usernum = 1
    }else if(userchoice == "scissors"){
        usernum = 2
    }else{
        //return was for us to exit the function
        return;
    }

    //this handles the logic for winning
    //this handles the logic for a tie
    //this 
    if(aichoice == usernum){
        result.innerHTML = "IT WAS A TIE"
    }
    //when the user loses they will get a message on the screen that will say that they have lost
    else if (usernum == 0 && aichoice == 1){
        result.innerHTML = "YOU LOSE"
    }else if(usernum == 1 && aichoice == 2){
        result.innerHTML = " YOU LOSE"
    }else if (usernum == 2 && aichoice == 0){
        result.innerHTML = "YOU LOSE"
    }
    //since the user did not lose or get a tie then the user has won
    else {
        result.innerHTML = "YOU WIN"
    }

}