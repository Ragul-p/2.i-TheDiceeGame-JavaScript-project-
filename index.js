console.log("Dice Project");


// img 1
var randomNumber1 = Math.floor((Math.random()*6)+1);
console.log(randomNumber1);

var attributeValue ="";

switch (randomNumber1) {
    case 1:
        attributeValue="images/dice1.png";
        break;
    case 2:
        attributeValue="images/dice2.png";
        break;
    case 3:
        attributeValue="images/dice3.png";
        break;       
    case 4:
        attributeValue="images/dice4.png";
        break;
    case 5:
        attributeValue="images/dice5.png";
        break;
    case 6:
        attributeValue="images/dice6.png";
        break;
    default:
        break;
}


document.querySelector(".img1").setAttribute("src",attributeValue);


// img 2

var randomNumber2 = Math.floor((Math.random()*6)+1);
console.log(randomNumber2);

var attributeValue ="";

switch (randomNumber2) {
    case 1:
        attributeValue="images/dice1.png";
        break;
    case 2:
        attributeValue="images/dice2.png";
        break;
    case 3:
        attributeValue="images/dice3.png";
        break;       
    case 4:
        attributeValue="images/dice4.png";
        break;
    case 5:
        attributeValue="images/dice5.png";
        break;
    case 6:
        attributeValue="images/dice6.png";
        break;
    default:
        break;
}


document.querySelector(".img2").setAttribute("src",attributeValue);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML="Draw";
} else if(randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML="Player 1 Wins"; 
} else{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}