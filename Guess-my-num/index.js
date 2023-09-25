'use strict';
const scoreElement = document.querySelector('.score');
let random = Math.floor(Math.random() * 20)+1;
let highscore = 0;
let score =20;

const displayMessage = (message)=>{
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage(`❌ no number`)
    }
    else if(guess === random){
        displayMessage(`🍾 correct answer `)
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=random;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent= highscore;
        }

    }
    else if(guess !== random){
        displayMessage(guess > random?`Too High`:`Too Low`)
        if (score > 1){
            score--;
            scoreElement.textContent=score;
            displayMessage(guess > random?`Too High`:`Too Low`)
        }else{displayMessage(`lost the game 😭`)
        scoreElement.textContent=0;}
    }
})

    document.querySelector('.again').addEventListener('click', ()=>{
        score=20;
        random = Math.floor(Math.random() * 20)+1;
        scoreElement.textContent=score;
        document.querySelector('.guess').value=null;
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.number').textContent="?";
        document.querySelector('.message').textContent="Start guessing...";
    })