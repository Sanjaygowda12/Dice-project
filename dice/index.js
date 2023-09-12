var randNum1=Math.floor(Math.random()*6)+1;
var randImgName1=("dice"+randNum1+".png");
document.querySelectorAll("img")[0].setAttribute("src",randImgName1);

var randNum2=Math.floor(Math.random()*6)+1;
var randImgName2=("dice"+randNum2+".png");
document.querySelectorAll("img")[1].setAttribute("src",randImgName2);
 
if(randNum1>randNum2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randNum1<randNum2){
    document.querySelector("h1").textContent="player 2 Wins";
}
else{
        document.querySelector("h1").textContent="draw";
    }
