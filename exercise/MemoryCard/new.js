const gameBoard = document.querySelector('.gameBoard');
const score = document.querySelector('.score span');

// Classes the cards and back card.
class card{
    constructor(name,src){
        this.name = name
        this.src = src
    }
}
const card1 = new card('card1', './Image/1.jpeg')
const card2 = new card('card2', './Image/2.jpeg')
const card3 = new card('card3', './Image/3.jpeg')
const card4 = new card('card4', './Image/4.jpeg')
const card5 = new card('card5', './Image/5.jpeg')
const card6 = new card('card6', './Image/6.jpeg')
const card7 = new card('card7', './Image/7.jpeg')
const card8 = new card('card8', './Image/8.jpeg')
const card9 = new card('card9', './Image/1.jpeg')
const card10 = new card('card10', './Image/2.jpeg')
const card11 = new card('card11', './Image/3.jpeg')
const card12 = new card('card12', './Image/4.jpeg')
const card13 = new card('card13', './Image/5.jpeg')
const card14 = new card('card14', './Image/6.jpeg')
const card15 = new card('card15', './Image/7.jpeg')
const card16 = new card('card16', './Image/8.jpeg')
const cards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16]
const backCard = new card('backCard','./Image/questionMark.jpeg')


// create a shuffle card function.
const shuffle = () =>{
    cards.sort(() => Math.random() - 0.5);
    console.log(cards)
    return cards;
}


// create a generate function.
const generateCards = () => {
    // gameBoard.innerHTML = '';
    shuffle()

    cards.forEach((a) => {
        const cardItem = document.createElement('div');
        cardItem.classList = 'cardItem';
        const frontView = document.createElement('img');
        frontView.classList = 'front';
        const backView = document.createElement('img');
        backView.classList = 'back';
        gameBoard.appendChild(cardItem);
        cardItem.appendChild(frontView);
        cardItem.appendChild(backView);
        frontView.src = a.src;
        backView.src = backCard.src;
    })

}
generateCards()
console.log(gameBoard.innerHTML)
// 