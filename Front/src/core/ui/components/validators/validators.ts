import { FormControl, ValidationErrors } from '@angular/forms';
import { rutValidator } from './rut.validator';

type BooleanFunc = () => boolean;

export class NumberValidator {
  static isValid(control: FormControl): ValidationErrors {
    const numbRegExp = /^\d*$/;
    if (!!control.value && !numbRegExp.test(control.value)) {
      return { invalidNumber: { valid: false } };
    }

    return null;
  }

  static isDecimalValid(control: FormControl): ValidationErrors {
    const decRegExp = /^[0-9]*([,][0-9]{1,2})?$/;
    if (!!control.value && !decRegExp.test(control.value)) {
      return { invalidDecimal: { valid: false } };
    }

    return null;
  }
}

export class EmailValidator {
  static isValid(control: FormControl): ValidationErrors {
    if (!!control.value && !emailIsValid(control.value)) {
      return { invalidEmail: { valid: false } };
    }

    return null;
  }

  static isValidBhp(control: FormControl): ValidationErrors {
    if (!!control.value && !emailBhpIsValid(control.value)) {
      return { invalidEmail: { valid: false } };
    }

    return null;
  }

  static existEmail(control: FormControl): ValidationErrors {
    if (control.value) {
      return { emailExistSystem: true };
    }

    return null;
  }

  static existEmailFunc(exist: BooleanFunc) {
    return (control: FormControl): ValidationErrors => {
      if (!!control.value && exist()) {
        return { emailExistSystem: true };
      }

      return null;
    };
  }
}

export class CalendarValidator {
  static isValidRange(control: FormControl): ValidationErrors {
    if (!!control.value && Array.isArray(control.value) && control.value.filter((v) => v).length !== 2) {
      return { invalidCalendarValidRange: { valid: false } };
    }

    return null;
  }
}

export const emailIsValid = (email: string): boolean => {
  const re = new RegExp(
    [
      '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)',
      '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])',
      '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    ].join(''),
    'g',
  );
  return re.test(email);
};

export const emailBhpIsValid = (email: string): boolean => {
  const emailBhpRegExp = /^[^<>()[\]\\,;:#^\s@]+@(bhp.com|extbhp.com)$/;
  return emailBhpRegExp.test(email);
};

export class RutValidator {
  static isValid(control: FormControl): ValidationErrors {
    if (!!control.value && !rutValidator.validate(control.value)) {
      return { invalidRut: { valid: false } };
    }

    return null;
  }
}

export class CustomValidator {
  static requiredConditional(valid: BooleanFunc) {
    return (control: FormControl): ValidationErrors => {
      if (!control.value && valid()) {
        return { required: true };
      }

      return null;
    };
  }

  static customConditional(exist: BooleanFunc) {
    return (control: FormControl): ValidationErrors => {
      if (!!control.value && exist()) {
        return { custom: true };
      }

      return null;
    };
  }
}
