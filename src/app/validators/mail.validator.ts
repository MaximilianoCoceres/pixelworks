import { AbstractControl } from "@angular/forms";


export function ValidarEmail(control:AbstractControl){
  const emailValue = control.value;
  if (emailValue && (!emailValue.includes('@') || (!emailValue.includes('.com') && !emailValue.includes('.es')))) {
    return { validEmail: true };
  }

  return null;
}

