
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var rnd1 = Math.floor(Math.random() * 6)+ 1; 
var rnd2 = Math.floor(Math.random() * 6)+ 1;

var result = document.querySelector("h1");
var output1 = "./images/dice" + rnd1 +".png";
var output2 = "./images/dice" + rnd2 +".png";
if (rnd1>rnd2) {
    result.textContent = "Player 1 Won !!";
} else if (rnd2>rnd1) {
    result.textContent = "Player 2 Won !!";
} else {
    result.textContent = "il n y a pas lost!! draw !! repeat please!";
}
img1.setAttribute("src", output1);
img2.setAttribute("src", output2);