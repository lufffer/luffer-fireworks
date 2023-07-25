import './global.css';
import traductor from './services/internationalization';

async function fillDom(locale: string) {
  const $TITLE = document.getElementById('title')!;
  $TITLE.innerText = (await traductor(locale, 'home'))['title'];
}

document.addEventListener('DOMContentLoaded', () => {
  fillDom('en');
  document.getElementById('en')!.addEventListener('click', () => fillDom('en'));
  document.getElementById('es')!.addEventListener('click', () => fillDom('es'));
});


