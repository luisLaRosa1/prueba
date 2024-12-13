import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'frontbox-radio',
  templateUrl: './box-radio.component.html',
  styleUrls: ['./box-radio.component.scss'],
})
export class BoxRadioComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() title: string;
  @Input() value: string;
  @Input() description: string;
  @Input()
  get icon(): string {
    return this.iconName ? `icon-${this.iconName}` : 'icon-edit';
  }
  set icon(name: string) {
    this.iconName = name;
  }
  @Input() ngModel: string;
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  private iconName: string;
}
