const icone = document.querySelector('i');
const modal = document.querySelector('.modal');
console.log(icone,modal);

icone.addEventListener('click',()=>{
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
})