"use strict";

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

let currentSCore,score,activePlayer,playing;
const init = ()=>{
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    score0.textContent=0;
    score1.textContent=0;
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    dice.classList.add('hidden')
    currentSCore = 0;
    score = [0,0];
    activePlayer =0;
    playing = true;
}
  init();

 const switchPlayer = ()=>{
    currentSCore=0;
    document.querySelector(`#current--${activePlayer}`).textContent=currentSCore;
    activePlayer=activePlayer===0?1:0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
  }

  btnRoll.addEventListener('click', ()=>{
    if(playing){
        const random = Math.floor(Math.random()*6)+1;
        dice.classList.remove('hidden')
        dice.src=`./image/dice-${random}.png`
        if(random === 1){
            switchPlayer()
        }
        else{
            currentSCore+=random;
            document.querySelector(`#current--${activePlayer}`).textContent=currentSCore; 
        }
    }
  })
 

  btnHold.addEventListener('click', ()=>{
    if(playing){
        score[activePlayer]+=currentSCore;
        document.querySelector(`#score--${activePlayer}`).textContent= score[activePlayer];
        if(score[activePlayer] >=20){
            playing=false;
            dice.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }
      switchPlayer()
    }
  })

  

  btnNew.addEventListener("click", init)