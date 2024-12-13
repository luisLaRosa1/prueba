import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontpopover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  @Input() position: string;
}
