
let user;   
// arrays are a collection of values that can be accessed by indices 
let choices = ["rock", "paper", "scissors"]; 

/**
 * assigns choices to user and calls compare method 
 */
function userChoice(choice) {
    user = choice;
    compare();
}

/**
 * @return the randomized input the cpu selects 
 */
function cpuChoice(things) {   
    let randNum = Math.floor(Math.random() * things.length);
    return choices[randNum(choices)];
}

/**
 * draws an image on screen 
 */
 function drawImg(pic, width, height, alt, id) {
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    document.getElementById("myID").appendChild(x); 
}

// I got this from https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeChild(id){
    let identity = document.getElementById(id);
    while(identity.firstChild) {
        identity.removeChild(identity.firstChild);
    }
}

/**
 * draws the user's selection on screens
 */
function drawUserImg() {
    switch(user) { 
        case user == "rock": drawImg("_images/rock"); 
        case user == "paper": drawImg("_images/paper"); 
        case user == "scissors": drawImg("_images/scissors"); 
    }
    switch(cpu) {
        case cpu == "rock": drawImg("_images/rock"); 
        case cpu == "paper": drawImg("_images/paper"); 
        case cpu == "scissors": drawImg("_images/scissors"); 
    }
}

/**
 * comparison between the user and the computer
 */
function compare() {
    switch(cpu) {
        case cpu == "scissors" && user == "paper": console.log("You lose");    
        case cpu == "paper" && user ==  "rock": console.log("You lose"); 
        case cpu == "rock" && user == "scissors": console.log("You lose"); 
        case cpu == "paper" && user == "scissors": console.log("You win");    
        case cpu == "rock" && user == "paper": console.log("You win"); 
        case cpu == "scissors" && user == "rock": console.log("You win");
        default: console.log("It's a tie"); 
    }
}

// prompt() forces the user to enter something, should only be use for urgent tasks

/*
createImage(); 
console.log("computer chose rock...");
const para = document.createElement("p");
para.innerText = 'computer chose rock...';
document.body.appendChild(para);
*/