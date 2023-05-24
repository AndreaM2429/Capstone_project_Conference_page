const menushow = document.getElementById('hambur');
const menu = document.getElementById('menu');
menushow.addEventListener('click', () => {
  menushow.style.display = 'none';
  menu.classList.add('show');
});

const closed = document.getElementById('close');
closed.addEventListener('click', () => {
  menushow.style.display = 'flex';
  menu.classList.remove('show');
});