const gameBoard = document.querySelector('.gameBoard');
const score = document.querySelectorAll('.scores');//array
console.log(score[0].innerHTML)
var playerOneScore = 0;
var playerTwoScore = 0;
var totle = 0;
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
        // this.wasMatch = false
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
                var totle = totle+ maxtime;
                score[player-1].innerHTML= `Player${player} Scores:+ ${totle}`
            } else if(maxtime === 0 ) {
                alert("Time Over!");
            } 
        }
    }, 1000); 
} 
// create a generate function.
const generateCards = () => {
    

    cards.forEach((card,index) => {
        const cardItem = document.createElement('div');
        cardItem.classList = 'cardItem';
        const frontView = document.createElement('img');
        frontView.classList = 'front';
        // add the click event to every cards.
        frontView.addEventListener("click",(e) => {
            curCards.push(e.target);
            flipCard(card,index);
        });
        // const backView = document.createElement('img');
        // backView.classList = 'back';
        gameBoard.appendChild(cardItem);
        cardItem.appendChild(frontView);
        // cardItem.appendChild(backView);
        // frontView.src = index.src;
        frontView.src = backCard.src;
        // frontView.src = card.src;
        // backView.src = backCard.src;
    })

    var frontViews = document.querySelectorAll(".front");
    var curCards = []; // two flip cards' array.
    function flipCard(card,index){
        frontViews[index].src = cards[index].src; // click the card to show the animals.
        
        if(curCards.length === 2){
            console.log('222',curCards[0].src,curCards[1].src)
            
            // if(frontViews[curCards[0]] !== frontViews[curCards[1]]){

                // two cards not match then cover again.
            setTimeout(()=>{
                if(curCards[0] !== curCards[1] && curCards[0].src === curCards[1].src ){
                       // match than add scores.
                    totle += 10;
                    curCards[0].style.pointerEvents = "none";
                    curCards[1].style.pointerEvents = "none";
                    score[0].innerHTML = 'Player1 Scores:'+ totle;        
                }else {
                    curCards[0].src = backCard.src;
                    curCards[1].src = backCard.src;
                }
                curCards.splice(0,2);
            },800); 
        }
    }   
}


var playerOneStart = () => {
    shuffle()
    gameBoard.innerHTML = "";
    generateCards()
    timing()
}

var playerTwoStart = () => {
    generateCardsTwo()
    // score[1].innerHTML = 'Player2 Scores:'+ totle;
}

