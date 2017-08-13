var userChoice = prompt("Do you choose rock, paper or scissors?");
document.write(userChoice+"</br>");
var computerChoice = Math.random();

if(0.33 > computerChoice > 0){
    computerChoice="rock";
}
 else if(0.66 > computerChoice > 0.34){
     computerChoice ="paper";
}
else{
     computerChoice ="scissors";
}
document.write(computerChoice+"</br>");

var compare = function(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return("The result is a tie!");
        } else if(userChoice === "rock"){
            if(computerChoice === "scissors")
            {
                return("rock wins");
                }else {
                    return("paper wins");
                    }
                    }
                    
        else if(userChoice === "paper"){
            if(computerChoice === "rock")
            {
                return("paper wins");
                }
                else if (computerChoice === "scissors"){
                    return("scissors wins");
                    }
                    }
        else if(userChoice === "scissors"){
            if(computerChoice === "rock")
            {
                return("rock wins");
                }else {
                    return("scissors wins");
                    }
                    }
}
document.write(compare(userChoice, computerChoice));
//instead of console.log