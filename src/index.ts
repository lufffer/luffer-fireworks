import './global.css';
import traductor from './services/internationalization';

async function fillDom(locale: string): Promise<void> {
  const $TITLE = document.getElementById('title')!;
  $TITLE.innerText = (await traductor(locale, 'home'))['title'];
}

document.addEventListener('DOMContentLoaded', (): void => {
  fillDom('en');
  document.getElementById('en')!.addEventListener('click', () => fillDom('en'));
  document.getElementById('es')!.addEventListener('click', () => fillDom('es'));
});
