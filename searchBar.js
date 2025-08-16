
const searchLocation = document.querySelector('.search');

document.querySelector('.fa-search').addEventListener('click', () => {
 const input = document.createElement('input');
 input.classList.add('inp');
 searchLocation.appendChild(input);
 console.log('worked');
});

