import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'frontheader-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent {
  @Input() showLogout = true;
  @Input() initials = '';
  @Output() logout = new EventEmitter();

  onLogout(): void {
    this.logout.emit();
  }
}
