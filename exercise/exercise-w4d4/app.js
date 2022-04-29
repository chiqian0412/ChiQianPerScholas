const ship = document.querySelector('.ship');
const alienItem = document.querySelectorAll('.alienItem');//array
const alienPerant = document.querySelector(".alienContainer")
const uss_scores = document.querySelector('#uss_score span')
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
// set the alien remainning life.
var alienLife = 0;
var pointer = 0;
// set the ship remainning life.
var shipLife = 0;
// set the uss's score.
var uss_score = 0;

// creates the attack button function.
const shipAttack = () =>{
    ship.classList.toggle('ship_attack_alien');
    // for(let i =0; i<6; i++){
    // Only when the ship moves and the attack hit the alien, then the alien lost life.
    if(ship.classList.value.includes('ship_attack_alien') & Math.random()< aliens[pointer].accuracy){
        alienLife = aliens[pointer].life - shipInfo.firepower; 
        console.log('yeeee')     
    }else{
        alienLife =aliens[pointer].life;
    }  

    // Only the alien hits the ship, then ship lost life.
    if(Math.random()< shipInfo.accuracy){
        shipLife = shipInfo.life-aliens[pointer].firepower; 
        console.log('aaaaaaa')     
    }else{
        shipLife =shipInfo.life;
        
    }  
    console.log(alienLife,shipLife)

    // If the alien still alives, continue to attack.
    if(shipLife>0){
        if(alienLife>0){
            alienItem[pointer].classList.toggle('alien_attack_ship')
            aliens[pointer].life = alienLife;
            shipInfo.life = shipLife;
        }else{
            // If the alien is dead, show the explode pic and add scores.
             alienItem[pointer].src = "https://bestanimations.com/media/explosions/933419296explosion-animation-1.gif"
             uss_score +=100;
            uss_scores.innerHTML = 'USS ASSEMBLY :' + uss_score;
            aliens.shift();
            pointer++;
            console.log(alienItem)
        }
    }else{
        gameOver();
    }
}
console.log(alienItem)
// set the game over function.
const gameOver = () => {
   return uss_scores.innerHTML = 'Game Over'
}