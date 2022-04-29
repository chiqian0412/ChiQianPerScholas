
const player = document.querySelector(".player")
var upMove = 0;

var leftMove = 0;

const clickUp =() =>{
    upMove>=50 ? upMove -=50: upMove=0;
    // player.classList.toggle('faceUp');
    player.style.paddingTop = upMove+"px";
}
const clickDown =() =>{
    upMove<=300? upMove +=50: upMove=350;
    player.style.paddingTop = upMove+"px";
}
const clickLeft =() =>{
    leftMove>=50? leftMove -=50: leftMove=0;
    player.style.paddingLeft = leftMove+"px";
    // player.style.transform = "rotatey(180deg)"
    // player.style.transform = `translateX(${leftMove}px)rotatey(180deg)`;
    // console.log(player.style.transform )
}
const clickRight =() =>{
    leftMove<=700? leftMove +=50: leftMove=750;
    player.style.paddingLeft = leftMove+"px";
    // player.style.transform = `translateX(${leftMove}px)rotatey(0deg)`;
    // console.log(player.style.transform )
}