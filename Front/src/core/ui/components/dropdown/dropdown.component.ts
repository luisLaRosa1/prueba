import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dropdown } from 'primeng/dropdown';
import { coerceBooleanProp } from 'src/core/shared/helpers/boolean.helper';
import { DropdownItem, EventDropdown } from './dropdown.model';

type DropdownItemType = string | number | DropdownItem | any;

@Component({
  selector: 'frontdropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DropdownComponent), multi: true }],
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder = 'Seleccione una opción';
  @Input() optionValue = 'value';
  @Input() optionLabel = 'label';
  @Input() filter = false;

  @Output() changeOption: EventEmitter<EventDropdown> = new EventEmitter<EventDropdown>();

  @ViewChild(Dropdown, { static: true }) dropdown: Dropdown;

  selected: DropdownItemType;

  @Input()
  get options(): Array<DropdownItem> {
    return this.inputOptions;
  }
  set options(items: Array<DropdownItem>) {
    if (Array.isArray(items)) {
      this.inputOptions = items;
    }
  }

  protected inputOptions: Array<DropdownItem>;

  @Input()
  get value(): DropdownItemType {
    return this.inputValue;
  }
  set value(value: DropdownItemType) {
    if (typeof value === 'object' && value?.value) {
      value = value.value;
    }
    this.inputValue = value;
    if (!this.inputValue && this.dropdown) {
      this.dropdown.onModelChange(null);
      this.dropdown.updateSelectedOption(null);
    } else if (typeof value === 'string' && value && this.dropdown && this.options) {
      if (!this.selected || this.selected.value !== value) {
        this.selected = this.options.find((o) => o.value === value);
      }
    }
    if (!this.disabled) {
      this.propagateChange(this.value);
    }
  }

  protected inputValue: DropdownItemType;

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
    // ctor
  }

  changeDropdown(event: any): void {
    this.value = event?.value?.value;
    this.changeOption.emit({
      originalEvent: event?.originalEvent,
      dropdownItem: event?.value,
      value: event?.value?.value,
    });
  }

  propagateChange: any = () => {
    // propagate
  };

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = typeof value === 'object' ? value?.value : value;
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
