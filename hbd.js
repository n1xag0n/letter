document.addEventListener('DOMContentLoaded', () => {
  const env = document.querySelector('.envelope-container');
  env.addEventListener('click', () => {
    env.classList.toggle('open');
  });
});