const attackMario = () =>{
    let shroomDude = document.querySelector('.shroom');
    shroomDude.classList.toggle('initiateAttack');
}
const jump =() =>{
    let mario = document.querySelector('.plumber');
    mario.classList.toggle('bunnies');
    addPoints();
}
let scores=0;
const addPoints = () =>{
    let mario = document.querySelector('.plumber');
    let curPoints = document.querySelector('.scores');
    mario.classList.value.includes('bunnies')? scores += 1:scores;
    curPoints.innerHTML = 'Scores:'+scores;
}
