'use strict';
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
menu.hidden = false;
links.classList.add('collapsible');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  links.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  links.classList.toggle('is-open', !expanded);
});
links.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
const copyButton = document.querySelector('#copy-email');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('bantpawan@gmail.com');
      status.textContent = 'Email copied.';
    } catch {
      status.textContent = 'Please select the email above to copy it.';
    }
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
