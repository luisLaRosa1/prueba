import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProp } from 'src/core/shared/helpers/boolean.helper';
import { EventRadioOption, RadioOption } from './radio-options.model';
let radioOptionsTempId = 0;

@Component({
  selector: 'pmf-radio-options',
  templateUrl: './radio-options.component.html',
  styleUrls: ['./radio-options.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioOptionsComponent), multi: true }],
})
export class RadioOptionsComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() name: string;

  @Output() changeOption: EventEmitter<EventRadioOption> = new EventEmitter<EventRadioOption>();

  @Input()
  get options(): Array<RadioOption> {
    return this.inputOptions;
  }
  set options(items: Array<RadioOption>) {
    if (Array.isArray(items)) {
      this.inputOptions = items;
    }
  }

  protected inputOptions: Array<RadioOption>;

  @Input()
  get value(): string {
    return this.inputValue;
  }
  set value(value: string) {
    this.inputValue = value;
    if (!this.disabled) {
      this.propagateChange(this.value);
    }
  }

  protected inputValue: string;

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

  constructor() {
    if (!this.name) {
      this.name = `pmf-radio-options-${radioOptionsTempId++}`;
    }
  }

  changeRadioOption(event: Event, radrioOption: RadioOption, value: string): void {
    this.value = value;
    this.changeOption.emit({
      originalEvent: event,
      radrioOption,
      value,
    });
  }

  propagateChange: any = () => {
    // propagate
  };

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerOnTouched(fn: any): void {
    // register;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
