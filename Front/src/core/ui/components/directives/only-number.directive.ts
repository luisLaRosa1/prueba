/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[onlyNumber]',
})
export class OnlyNumberDirective {
  @Input() onlyNumber: boolean;

  constructor(private readonly el: ElementRef) {
    // ctor
  }

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent): void {
    if (this.onlyNumber) {
      if (
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        return;
      }

      if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
  }
}
