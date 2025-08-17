
const searchLocation = document.querySelector('.search');
const searchIcon = document.querySelector('.fa-search');

let inputVisible = false;

searchIcon.addEventListener('click', () => {

 if(!inputVisible) {
  const input = document.createElement('input');
  input.classList.add('inp');
  input.setAttribute('id', 'searchInput');
  searchLocation.appendChild(input);
  inputVisible = true;
 }
 else {
  // remove input
  const input = document.querySelector('#searchInput');
  if (input) {
    input.remove();
  }
  inputVisible = false;
}
});

