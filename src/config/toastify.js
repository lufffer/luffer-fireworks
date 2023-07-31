const LANG = document.documentElement.lang;

const toastifyConfig = {
  duration: 3000,
  destination: 'https://github.com/apvarun/toastify-js',
  newWindow: true,
  close: true,
  gravity: 'top', // `top` or `bottom`
  position: 'center', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
};

export const toastifyConfigError = Object.assign(toastifyConfig, {
  text: LANG === 'en' ? 'There was an error, try again' : 'Ocurrion un error, intente nuevamente',
  style: {
    background:
      'linear-gradient(to right, hsl(346, 100%, 25%), hsl(346, 100%, 15%)',
  },
});

export const toastifyConfigSuccess = Object.assign(toastifyConfig, {
  text: LANG === 'en' ? 'Mail sent successfully' : 'Mail enviado exitosamente',
  style: {
    background:
      'linear-gradient(to right, 	hsl(174, 100%, 29%), 	hsl(174, 100%, 19%))',
  },
});
