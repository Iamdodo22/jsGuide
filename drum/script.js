"use strict";

const drumButton = document.querySelectorAll('.drum');

drumButton.forEach((e,index)=>{
    e.style.backgroundImage =`url(image/tom${index+1}.png)`
})


drumButton.forEach((b,index)=>{
   let audioElement = new Audio(`audio/tom-${index+1}.mp3`);
   b.addEventListener('click', ()=>{
    audioElement.play();
   })
})