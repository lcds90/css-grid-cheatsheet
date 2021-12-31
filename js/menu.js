(function () {
  const select = document.querySelector('#menu');
  const h1 = document.querySelector('#title');
  const nav = document.querySelector('.containerSummaryList');
  h1.textContent = 'CSS Cheatsheet';
  nav.style.overflowY = 'hidden';
  const classname = 'containerSummaryList-on';

  select.addEventListener('click', ({ target: { value } }) => {
    document.querySelector(`#${value}`).scrollIntoView({
      behavior: 'smooth',
    });
  });

  nav.addEventListener('mouseleave', () => {
    nav.classList.remove(classname);
    h1.textContent = 'Select a section';
    nav.style.overflowY = 'hidden';
  });
  nav.addEventListener('click', () => {
    nav.classList.add(classname);
    h1.textContent = 'Welcome to CSS Cheatsheet';
    nav.style.overflowY = 'auto';
  });
})();
