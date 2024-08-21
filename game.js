console.log("hello world")
function begingame(){
    var aichoice = Math.random();
    aichoice = aichoice*2
    aichoice = Math.round(aichoice);

    var userchoice = prompt("enter rock paper or scissors");
    var usernum;
    if(userchoice == "rock"){
        usernum = 0
    }else if(userchoice == "paper"){
        usernum = 1
    }else if(userchoice == "scissors"){
        usernum = 2
    }else{
        return;
    }

    if(aichoice == usernum){
        alert("IT WAS A TIE")
    }
    else if (usernum == 0 && aichoice == 1){
        alert("YOU LOSE")
    }else if(usernum == 1 && aichoice == 2){
        alert("YOU LOSE")
    }else if (usernum == 2 && aichoice == 0){
        alert("YOU LOSE")
    }else {
        alert("YOU WON")
    }

}