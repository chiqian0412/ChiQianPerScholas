const gameBoard = document.querySelector('.gameBoard');
const score = document.querySelectorAll('.scores');//array
<<<<<<< HEAD
// var playerOneScore = 0;
// var playerTwoScore = 0;
var totle = 0;
var playerScores = [];
var curCards = [];
// the start website.
=======
console.log(score[0].innerHTML)
var playerOneScore = 0;
var playerTwoScore = 0;
var totle = 0;
>>>>>>> refs/remotes/origin/main
gameBoard.innerHTML = 
`<div class="rules">
<h3> Memory Game Rules:</h3>
<p>Click two cards to match the same pictures.</p>
<p>Match one pair to get 10 points;</p>
<p>Every remaining second get 1 extra point.</p>
</div>`

// Classes the cards and back card.
class Card{
    constructor(name,src){
        this.name = name
        this.src = src
        this.wasMatch = false
    }
}
const card1 = new Card('card1', './Image/1.jpeg')
const card2 = new Card('card2', './Image/2.jpeg')
const card3 = new Card('card3', './Image/3.jpeg')
const card4 = new Card('card4', './Image/4.jpeg')
const card5 = new Card('card5', './Image/5.jpeg')
const card6 = new Card('card6', './Image/6.jpeg')
const card7 = new Card('card7', './Image/7.jpeg')
const card8 = new Card('card8', './Image/8.jpeg')
const card9 = new Card('card9', './Image/1.jpeg')
const card10 = new Card('card10', './Image/2.jpeg')
const card11 = new Card('card11', './Image/3.jpeg')
const card12 = new Card('card12', './Image/4.jpeg')
const card13 = new Card('card13', './Image/5.jpeg')
const card14 = new Card('card14', './Image/6.jpeg')
const card15 = new Card('card15', './Image/7.jpeg')
const card16 = new Card('card16', './Image/8.jpeg')
const cards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16]
const backCard = new Card('backCard','./Image/questionMark.jpeg')


// create a shuffle card function.
const shuffle = () =>{
    cards.sort(() => Math.random() - 0.5);
    console.log(cards)
    return cards;
}
// create the timing function.
var timer= document.querySelector('.timer');    
timer.innerHTML = "Limite time:20s"
var maxtime = 1000;  
function timing(){
    countDown = setInterval(() =>{
        maxtime -= 1;
        if (maxtime >= 0) {
            msg = "Limite time:" + maxtime + "s";
            timer.innerHTML = msg;
            if(totle===80){
                clearInterval(countDown);
                totle = totle+ maxtime;
                // score[player-1].innerHTML= `Player${player} Scores:+ ${totle}`
            } else if(maxtime === 0 ) {
                alert("Time Over!");
            } 
        }
    }, 1000); 
} 

//create the flip card function.



var timer= document.querySelector('.time');   
var scoresall = document.querySelector('.scoresall') ;
var maxtime = 60; 
var timestart;
const startGame = () =>{
    gameBoard.innerHTML = "";
    timer.innerHTML = "Limite time:60s";
    scoresall.innerHTML = 'Scores:0';
}
const countDown = () =>{
    maxtime -= 1;
    if (maxtime >= 0) {
        msg = "Limite time:" + maxtime + "s";
        timer.innerHTML = msg;
    }
    else{
        
        clearInterval(timestart);
        playerScores.push(totle);
        scoresall.innerHTML = 'Scores:'+ totle;
        totle = 0;
        maxtime = 30;
        comparePlayers();
        
    }
}

const notMatch = () =>{
    curCards.forEach((a)=>{
        a.src = backCard.src;
    })
    curCards.splice(0,2);
}

// create a generate function.
const generateCards = () => {
    shuffle()
<<<<<<< HEAD
    startGame()
    timestart = setInterval(countDown,1000);
=======
    gameBoard.innerHTML = "";

>>>>>>> refs/remotes/origin/main
    cards.forEach((card,index) => {
        const cardItem = document.createElement('div');
        cardItem.classList = 'cardItem';
        const frontView = document.createElement('img');
        frontView.classList = 'front';
<<<<<<< HEAD
        // add the click event to every cards.
        frontView.addEventListener("click",(e) => {
            curCards.push(e.target);
            flipCard(card,index)});
        gameBoard.appendChild(cardItem);
        cardItem.appendChild(frontView);
        frontView.src = backCard.src;
    })
    // var curCards = [];
    var frontViews = document.querySelectorAll(".front");
    function flipCard(card,index){
        // click the card to show the animals.
        frontViews[index].src = cards[index].src; 
        // when click two times.
        if(curCards.length === 2){
            // if two click aren't the same card and two cards matched.
                if(curCards[0] !== curCards[1] && curCards[0].src === curCards[1].src ){
                    // match than add scores.
                    totle += 10;
                    scoresall.innerHTML = 'Scores:'+ totle;
                    curCards[0].style.pointerEvents = "none";
                    curCards[1].style.pointerEvents = "none"; 
                    curCards.splice(0,2);  
                    // if all cards matched, than reset the time and scores.
                    if(totle === 80){
                        clearInterval(timestart);
                        totle += maxtime;
                        playerScores.push(totle);
                        scoresall.innerHTML = 'Scores:'+ totle;
                        totle = 0;
                        maxtime = 60;
                        
                        // compare two players scores.
                        comparePlayers();
                    }
                   
                }else {
                    setTimeout(notMatch,600);
                }
        }
    }   
}

const comparePlayers = () =>{
    if(playerScores.length===1){
        score[0].innerHTML = 'Player One:'+playerScores[0];
    }else if(playerScores.length === 2){
        score[1].innerHTML =  'Player two:'+playerScores[1];
        if(playerScores[0]>playerScores[1]){
            score[0].innerHTML = `
            <p>Player One: ${playerScores[0]}</p>
            <h3>I Win!!!</h3>
            `
            document.querySelector('#player1').src = './Image/player1.gif';
        }else if(playerScores[1]>playerScores[0]){
            score[1].innerHTML = `
            <p>Player One: ${playerScores[1]}</p>
            <h3>I Win!!!</h3>
            `
            document.querySelector('#player2').src = './Image/player2.gif';
        }else{
            score[0].innerHTML = `
            <p>Player One: ${playerScores[0]}</p>
            <h3>No one wins!</h3>
            `
            score[1].innerHTML = `
            <p>Player One: ${playerScores[1]}</p>
            <h3>No one wins!</h3>
            `
        }
    }
}
=======
        frontView.addEventListener("click",() => {flipCard(card,index)});
        // const backView = document.createElement('img');
        // backView.classList = 'back';
        gameBoard.appendChild(cardItem);
        cardItem.appendChild(frontView);
        // cardItem.appendChild(backView);
        // frontView.src = index.src;
        frontView.src = backCard.src;
        // backView.src = backCard.src;
    })

    var frontViews = document.querySelectorAll(".front");
    var curCards = []; // two flip cards' index array.
    function flipCard(card,index){
        console.log(index);
        frontViews[index].src = cards[index].src; // click the card to show the animals.
        curCards.push(index);
        if(curCards.length === 2){
            console.log('bbb',curCards[0])
            console.log('aaa',frontViews[0])
            if(cards[curCards[0]].wasMatch ===false &&cards[curCards[1]].wasMatch ===false && (frontViews[curCards[0]] !== frontViews[curCards[1]])){

                // two cards not match then cover again.
                if(frontViews[curCards[0]].src !== frontViews[curCards[1]].src ){
                   
                        console.log(frontViews[0], backCard.src,curCards[1])
                        frontViews[curCards[0]].src = backCard.src;
                        setTimeout(()=>{
                            this.frontViews[curCards[1]].src = backCard.src;
                        },1000);
                   
                }else {
                    // match than add scores.
                    totle += 10;
                    console.log('score',totle)
                    cards[curCards[0]].wasMatch = true;
                    cards[curCards[1]].wasMatch = true;
                // score[0].innerHTML = 'Player1 Scores:'+ playerOneScore;
                } 
            }
            else{
                flipCard(card,index);
            }
            
            curCards.splice(0,2);
        }
    }
    //  when player click the start, the timer will count down.
    countDown = setInterval(() =>{
        maxtime -= 1;
        if (maxtime >= 0) {
            msg = "Limite time:" + maxtime + "s";
            timer.innerHTML = msg;
            if(totle===80){
                clearInterval(countDown);
                totle = totle+ maxtime;
                console.log('intiming',totle)
                // score[player-1].innerHTML= `Player${player} Scores:+ ${totle}`
            } else if(maxtime === 0 ) {
                alert("Time Over!");
            } 
        }
    }, 1000); 
}

const playerOneStart = () => {
    generateCards()
    
    console.log('last',totle)
    console.log(score[0])
    // score[0].innerHTML = 'Player1 Scores:'+ totle;
}

const playerTwoStart = () => {
    generateCards()
    score[1].innerHTML = 'Player2 Scores:'+ totle;
}
>>>>>>> refs/remotes/origin/main
