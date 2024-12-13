export class RadioOption {
  label?: string;
  value?: string;
  checked = false;

  constructor(item?: any) {
    if (item.label) {
      this.label = item.label;
    }
    if (item.value) {
      this.value = item.value;
    }
    if (item.checked) {
      this.checked = item.checked;
    }
  }
}

export type EventRadioOption = {
  originalEvent?: Event;
  radrioOption?: RadioOption;
  value?: string;
};
