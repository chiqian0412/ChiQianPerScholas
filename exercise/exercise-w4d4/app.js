const ship = document.querySelector('.ship');
const alienItem = document.querySelectorAll('.alienItem');//array
const alienPerant = document.querySelector(".alienContainer")
const uss_scores = document.querySelector('#uss_score span')
const us = document.querySelector('.us')
// Set the classes about ship and aliens.
class items{
    constructor(life, firepower,max,min){
        this.life = life
        this.firepower = firepower
        this.accuracy = Math.random()*(max-min)+min;
    }
}
// creates the aliens and ship.
const alien1 = new items(20,3,0.8,0.6);
const alien2 = new items(20,3,0.8,0.6);
const alien3 = new items(20,3,0.8,0.6);
const alien4 = new items(20,3,0.8,0.6);
const alien5 = new items(20,3,0.8,0.6);
const alien6 = new items(20,3,0.8,0.6);
const aliens = [alien1,alien2,alien3,alien4,alien5,alien6];
const shipInfo = new items(20,5,0.7,0.7);

var pointer = 0;
var uss_score = 0;
// creates the attack button function.
const shipAttack = () =>{
    ship.classList.toggle('ship_attack_alien');
    // Only when the ship moves and the attack hit the alien, then the alien lost life.
    if(ship.classList.value.includes('ship_attack_alien') && Math.random()< aliens[pointer].accuracy){
        aliens[pointer].life -= shipInfo.firepower; 
        document.querySelector('.alienActive').innerHTML = `Alien${pointer+1} remainning lift is ${aliens[pointer].life}`
    }
    // Only the alien hits the ship, then ship lost life.
    if(ship.classList.value.includes('ship_attack_alien') && Math.random()< shipInfo.accuracy){
        shipInfo.life-=aliens[pointer].firepower; 
        document.querySelector('.ussActive').innerHTML = `Your remainning lift is ${shipInfo.life}`  
    }
    // If the alien still alives, continue to attack.
    if(shipInfo.life>0){
        console.log(pointer + 'a')
        // console.log(aliens[3].life)
        if(aliens[pointer].life>0){
            alienItem[pointer].classList.toggle('alien_attack_ship')
        }else{
            // If the alien is dead, show the explode pic and add scores.
             alienItem[pointer].src = "https://bestanimations.com/media/explosions/933419296explosion-animation-1.gif"
             uss_score +=100;
            uss_scores.innerHTML = uss_score;
            aliens.shift();
            pointer++;
        }
    }else{
        gameOver();
    }
}
// set the game over function.
const gameOver = () => {
    us.innerHTML = "Game Over!!!"
   uss_scores.innerHTML = 'Game Over';
   document.querySelector('#alien_score span').innerHTML = 'Win';
}