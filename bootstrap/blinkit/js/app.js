const dropdownOverlay = document.getElementById('dropdownOverlay');
const overlay = document.querySelector('.overlay');

dropdownOverlay.addEventListener('click', ()=>{
    overlay.style.display = 'block';
})

overlay.addEventListener('click', ()=>{
    overlay.style.display = 'none';
})

