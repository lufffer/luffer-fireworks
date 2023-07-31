const LANG = document.documentElement.lang;

export default {
  disableSubmit: true,
  messages: {
    errorClass: 'errorMessage',
    missingValue: {
      default: LANG === 'en' ? 'This field is required' : 'Este campo es obligatorio'
    },
    wrongLength: {
      over: LANG === 'en' ? 'Too long, max 20 characters' : 'Demasiado largo, maximo 20 caracteres',
      under: LANG === 'en' ? 'Too short, mim 2 characters' : 'Demasiado corto, minimo 2 caracteres'
    }
  }
};
