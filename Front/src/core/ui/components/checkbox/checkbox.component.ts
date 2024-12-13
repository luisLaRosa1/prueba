import { Component, EventEmitter, Input, Output } from '@angular/core';

type TypesValueCheckbox = any | string | boolean;
let checkboxTempId = 0;

@Component({
  selector: 'frontcheckbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() checked: TypesValueCheckbox;
  @Output() checkedChange: EventEmitter<TypesValueCheckbox> = new EventEmitter<TypesValueCheckbox>();
  @Input()
  set inputId(value: string) {
    this.inputCheckboxId = value;
  }
  get inputId(): string {
    return this.inputCheckboxId || this.inputTempId;
  }
  protected inputTempId: string;
  protected inputCheckboxId: string;

  constructor() {
    this.inputTempId = `frontcheckbox-${checkboxTempId++}`;
  }
}
