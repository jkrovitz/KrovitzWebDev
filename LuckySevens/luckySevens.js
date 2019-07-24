do{
  userInput = prompt("How many dollars do you have to bet");
  if(userInput <= 0.00){
    alert("The bet must be more than $0.00");
  }
}while(userInput <=0.00);

var moneyLeft = userInput;

// do{
//   moneyLeft
// }
document.getElementById("playBtn").onclick= function(){getSumOfDiceRolls(moneyLeft)};

function getSumOfDiceRolls(){
  diceRoll1 = rollDice();
  diceRoll2 = rollDice();
  sumOfDiceRolls = diceRoll1 + diceRoll2;
  if (sumOfDiceRolls != 7){
    moneyLeft = moneyLeft - 1.00;
    console.log(moneyLeft);
    return moneyLeft;
  }
  else{
    moneyLeft = moneyLeft + 4.00;
    console.log(moneyLeft);
    return moneyLeft;
  }

}
function rollDice(){
  return Math.floor(Math.random()*6) +1;
}
