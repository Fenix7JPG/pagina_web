const input = document.getElementById('selectInput');
const options = document.querySelector('.options');

input.addEventListener('click', () => options.style.display = options.style.display === 'block' ? 'none' : 'block');

options.querySelectorAll('div').forEach(option => {
  option.addEventListener('click', () => {
    input.value = option.dataset.value;
    options.style.display = 'none';
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.custom-select')) options.style.display = 'none';
});
