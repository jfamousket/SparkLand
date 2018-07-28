import { FormControl } from '@angular/forms';

function checkPhone(phone: FormControl) {

    if (!phone.value.startsWith('6') && phone.value !== '') {
        return{
            startValueError : {
                phone: phone,
            }
        };
    }

    if (isNaN(phone.value) && phone.value !== '') {
        return {
            integerError: {
                phone: phone
            }
        };
    }
    return null;
  }
  function checkBadWords(control: FormControl) {
    if (control) {
        control.value.replace(/<|script|\|>/gi, '');
        return control;
    }
      return control;
  }
export { checkPhone, checkBadWords };
