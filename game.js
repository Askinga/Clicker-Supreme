document.addEventListener('DOMContentLoaded', () => {
  const clickElement = document.querySelector('.clicks');

  if (!clickElement) {
    console.error('Click element not found');
    return;
  }

  function incrementClick() {
    clickElement.innerHTML = parseFloat(clickElement.innerHTML) + 1;
  }

  document.querySelector('.click-button').addEventListener('click', incrementClick);
});
