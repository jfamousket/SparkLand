import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
   
function checkStart(control: AbstractControl): ValidationErrors | null {
    const startValueError = !control.value.startsWith('6');
    return startValueError ? {'startValueError': true } : null;
}
function checkNum(control: AbstractControl): ValidationErrors | null {
    const checkNumError = (isNaN(control.value) || (control.value as string).includes('.'));
    return checkNumError ? {'checkNumError': true } : null;
}
function checkBadWords(control: FormControl): ValidationErrors | null {

    const checkBadWordsError = control.value.match(/<|[.,;"'{}|`!^*_+@#$%&()1234567890]|script|\|>/gi, '');
    return checkBadWordsError ? {'checkBadWordsError': true } : null;
}
function checkWordStart(control: FormControl): ValidationErrors | null {
    const checkWordStartError = control.value.startsWith(' ');
    return checkWordStartError ? {'checkWordStartError': true } : null;
}

export { checkStart, checkNum, checkBadWords, checkWordStart}

