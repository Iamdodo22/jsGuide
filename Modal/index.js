"use strict";

const btnOpen = document.querySelectorAll(".show-modal");
const btnClose= document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
 
    for(let i = 0; i < btnOpen.length; i++){
        btnOpen[i].addEventListener('click', openModal)
    }

    btnClose.addEventListener('click', closeModal)

    overlay.addEventListener('click', closeModal)

    document.addEventListener('keydown', (e)=>{
        if(e.key==='Escape' && !modal.classList.contains('hidden')){
           closeModal()
        }
    })