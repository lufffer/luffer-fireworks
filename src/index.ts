import 'luffer-carousel-vanilla/dist/main.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import 'spin.js/spin.css';
import 'toastify-js/src/toastify.css';
import './global.css';

import Carousel from 'luffer-carousel-vanilla';
import Bouncer from 'formbouncerjs';
import {Spinner} from 'spin.js';
import Toastify, { Options } from 'toastify-js';

import send from './services/emailjs';

import images from './data/images';
import profiles from './data/profiles';

import spinnerConfig from './config/spinner';
import formConfig from './config/form';
import { toastifyConfigError, toastifyConfigSuccess } from './config/toastify'; 

document.addEventListener('DOMContentLoaded', (): void => {
  // Add carousel
  document.getElementById('gallery')!.appendChild(new Carousel(images, { class: 'carousel' }).getCarousel());

  // Add testimonies
  const testimonies = document.getElementById('testimonies')!;
  const content = document.getElementsByTagName('template')[0].content.querySelector('div')!;
  profiles.map(profile => {
    const copy = document.importNode(content, true);
    copy.querySelector('img')!.setAttribute('src', profile.img);
    copy.querySelector('img')!.setAttribute('alt', profile.alt);
    copy.querySelector('h3')!.innerText = profile.title;
    copy.querySelector('p')!.innerText = profile.testimony;
    testimonies.appendChild(copy);
  });

  // Validate form
  const form = document.getElementById('form')!;
  new Bouncer('form', formConfig);
  const spinner = new Spinner(spinnerConfig);
  const button = document.querySelector('#button')!;

  form.addEventListener('bouncerFormValid', async (e) => {
    button.classList.add('text-light');
    spinner.spin(button as HTMLElement);
    
    const form = e.currentTarget as HTMLFormElement;
    try {
      await send(form);
      Toastify(toastifyConfigSuccess as Options).showToast();
    } catch (err) {
      console.error(err);
      Toastify(toastifyConfigError as Options).showToast();
    }
    (e.target as HTMLFormElement).reset();
    
    spinner.stop();
    button.classList.remove('text-light');
  });
});

