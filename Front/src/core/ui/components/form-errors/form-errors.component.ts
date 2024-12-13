import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'frontform-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
})
export class FormErrorsComponent {
  @Input() messageCustom: string;
  @Input() private readonly control: AbstractControlDirective | AbstractControl;

  readonly errorMessages = {
    required: () => 'Este campo es obligatorio',
    requiredFn: () => 'Este campo es obligatorio',
    invalidNumber: () => 'Solo se admiten números',
    invalidDecimal: () => 'Solo se admiten números con decimales',
    invalidEmail: () => 'El correo electrónico es incorrecto',
    isValid: () => 'El formato no es valido',
    isEmailValid: () => 'Este correo no es valido',
    email: () => 'El formato del correo no es valido',
    messageEvent: () => 'Este correo ya existe en el sistema',
    emailExistSystem: () => 'Este correo ya existe en el sistema',
    invalidCalendarValidRange: () => 'Seleccione un rango de fecha',
    invalidRut: () => 'El RUT ingresado no es valido',
    minlength: (params) => `EL número mínimo de caracteres es ${params.requiredLength}`,
    maxlength: (params) => `EL número máximo de caracteres es ${params.requiredLength}`,
    custom: () => `${this.messageCustom}`,
    pattern: () => 'Debe tener la ruta correcta',
  };

  shouldShowErrors(): boolean {
    return (
      (this.control && this.control.errors && (this.control.dirty || this.control.touched)) ||
      (this.control && this.control.invalid && !!this.control.value)
    );
  }

  listOfErrors(): Array<string> {
    let errors: Array<string> = [];
    if (this.control.errors) {
      errors = Object.keys(this.control.errors).map((field) => this.getMessage(field, this.control.errors[field]));
    }

    return errors;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trackByFn(index, item): any {
    return index;
  }

  protected getMessage(type: string, params: any): string {
    return this.errorMessages[type](params);
  }
}
