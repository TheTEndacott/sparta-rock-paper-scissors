console.log("Wanna play game?!");

// Score
var userScore = 0;
var comScore = 0;

alert("Welcome to the fight against the machines! We're taking them on in a real duel... of rock, paper scissors! \nBest of 5. \nRock beats scissors. \nScissors beats paper \nPaper beats rock.");

// Players choice
function rps() {
  var userChoice = prompt("Make your choice: \n(r)ock \n(p)aper \n(s)cissors");
  var comArray = ["rock", "paper", "scissors"];
  var comChoice = comArray[Math.floor(Math.random()*comArray.length)];
  // UserCom-result RR-d / RP-l / RS-w / PR-w / PP-d / PS-l / SR-l / SP-w / SS-d
  if (userChoice == "r" && comChoice == "rock") {
    draw();
  } else if (userChoice == "r" && comChoice == "paper") {
    comVictory();
  } else if (userChoice == "r" && comChoice == "scissors") {
    userVictory();
  } else if (userChoice == "p" && comChoice == "rock") {
    userVictory();
  } else if (userChoice == "p" && comChoice == "paper") {
    draw();
  } else if (userChoice == "p" && comChoice == "scissors") {
    comVictory();
  } else if (userChoice == "s" && comChoice == "rock") {
    comVictory();
  } else if (userChoice == "s" && comChoice == "paper") {
    userVictory();
  } else if (userChoice == "r" && comChoice == "scissors") {
    draw();
  }
}

// User victory
function userVictory() {
  userScore +=1;
  alert("Another victory against the machines! \nPlayer: " + userScore + "\nMachine: " + comScore)
  if (userScore == 3) {
    alert("WE HAVE DEFEATED THE MACHINES!");
  } else {
    rps();
  }
}

// Com victory
function comVictory() {
  comScore +=1;
  alert("The machines are fighting against us! \nPlayer: " + userScore + "\nMachine: " + comScore)
  if (comScore == 3) {
    alert("The machines... they're...they're too strong... too... clever. WHHHYYYYYYY!!")
  } else {
    rps();
  }
}

// Draw
function draw() {
  alert("A draw and a true battle of wits. ANOTHER! \nPlayer: " + userScore + "\nMachine: " + comScore);
  rps();
}

rps();
