(function () {
  const select = document.querySelector('#menu');
  const nav = document.querySelector('.containerSummaryList');
  nav.style.overflowY = 'hidden';
  const classname = 'containerSummaryList-on';

  select.addEventListener('click', ({ target: { value } }) => {
    document.querySelector(`#${value}`).scrollIntoView({
      behavior: 'smooth',
    });
  });

  nav.addEventListener('mouseleave', () => {
    nav.classList.remove(classname);
    nav.style.overflowY = 'hidden';
  });
  nav.addEventListener('click', () => {
    nav.classList.add(classname);
    nav.style.overflowY = 'auto';
  });
})();
