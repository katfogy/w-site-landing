const open=document.getElementById('open');
const close=document.getElementById('close');
const menu=document.getElementById('menu');

open.addEventListener('click',()=>{
open.classList.toggle('hide');
close.classList.toggle('hide');
menu.classList.toggle('slide');
})

close.addEventListener('click',()=>{
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    menu.classList.toggle('slide');
    })