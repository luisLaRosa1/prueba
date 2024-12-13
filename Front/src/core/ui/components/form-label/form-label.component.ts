import { Component, Input } from '@angular/core';
import { coerceBooleanProp } from 'src/core/shared/helpers/boolean.helper';

@Component({
  selector: 'frontform-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss'],
})
export class FormLabelComponent {
  @Input() label: string;
  @Input()
  get disabled(): boolean {
    return this.inputDisabled;
  }
  set disabled(value: boolean) {
    const disabled = coerceBooleanProp(value);
    if (this.inputDisabled !== disabled) {
      this.inputDisabled = disabled;
    }
  }

  protected inputDisabled = false;

  @Input()
  get error(): boolean {
    return this.inputError;
  }
  set error(value: boolean) {
    this.inputError = coerceBooleanProp(value);
  }

  protected inputError = false;
}
