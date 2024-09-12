const centerItem = document.querySelector('.center-item');
const menu = document.querySelector('.menu');

// creating the hover atribute so we can get the transition on the page 
centerItem.addEventListener('mouseover', () => {
    menu.classList.add('change');
})

// this is reversing the transition we added to see the opposite effect 
menu.addEventListener('mouseleave', () => {
    menu.classList.remove('change');
})