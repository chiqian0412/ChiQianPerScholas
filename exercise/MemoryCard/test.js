const cards = document.querySelectorAll('.front-view');
const backCards = document.querySelectorAll('.back-view');
// create the flipCard function.
console.log(cards)
console.log(backCards)
var keys = [];
var index = [];
const flipCard = (i,key) =>{
        backCards[i].classList.toggle('hidden');
        cards[i].classList.toggle('hidden');
        keys.push(key);
        index.push(i);
        if(keys.length === 2){
            console.log(keys)
            if(keys[0]===keys[1]){
                console.log('matched')
                }
            }else{
                for(let a=0; a<2; a++){
                    num = index[a];
                    backCards[num].classList.toggle('hidden');
                    cards[num].classList.toggle('hidden');
            }
        }
}