var userName = prompt("Introduce your name"); 
var displayName = document.getElementById("name");
var displayResult = document.getElementById("result");
var playButton = document.getElementById("play");
var dice1User = document.getElementById("dice1User");
var dice2User = document.getElementById("dice2User");
var dice1Computer = document.getElementById("dice1Computer");
var dice2Computer = document.getElementById("dice2Computer");

function roll(){ 
    return Math.floor(Math.random() * 6) + 1; 
}

if(userName!=""){ 
    displayName.innerText = userName; 
}else{
    displayName.innerText = "guest";   
}

playButton.addEventListener("click",()=>{
    result1User = roll(); 
    result2User = roll();   
    result1Computer = roll();
    result2Computer = roll();

    dice1User.src = "img/"+result1User+".jpg"; 
    dice2User.src = "img/"+result2User+".jpg";

    dice1Computer.src = "img/"+result1Computer+".jpg";
    dice2Computer.src = "img/"+result2Computer+".jpg";

    result1 = result1User + result2User; 
    result2 = result1Computer + result2Computer;
    if(result1>result2){
        displayResult.innerText = "You Win !!!!";
    }
    else if(result1<result2){
        displayResult.innerText = "Computer Wins :(";
    }else{
        displayResult.innerText = "It's a tie";
    }
});