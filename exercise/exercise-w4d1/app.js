const cardOne = document.querySelector('.card1');
const screen = document.querySelector('.output');

var score = 0;

const flipCardOne = () =>{
    cardOne.classList.toggle('insideImg');
    let question = prompt('2+2=?');
    if(question === '4'){
        screen.innerHTML = 'You are ringht!';
        score++;
        document.querySelector('.Score').innerHTML='Score:'+score;
    }else{
         screen.innerHTML ='Wrong answer!';

    }
}