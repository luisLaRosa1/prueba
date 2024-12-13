import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'frontcheck-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.scss'],
})
export class CheckButtonComponent {
  @Input() label: string;
  @Input() ngModel: string;
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();
}
