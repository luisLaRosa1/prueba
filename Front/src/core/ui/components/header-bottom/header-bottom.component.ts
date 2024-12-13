import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IOptionsHeader } from './header-bottom.interface';

@Component({
  selector: 'frontheader-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
})
export class HeaderBottomComponent {
  @Input() showLogo = true;
  @Input() options: IOptionsHeader = [];
  @ViewChild('headBottom', { static: false }) headBottom: ElementRef;
  @ViewChild('menuMobileAlt', { static: false }) menuMobile: ElementRef;
  @ViewChildren('menuMobile') menusMobile: QueryList<ElementRef>;
  @HostListener('window:resize')
  onResize() {
    this.closeMenuMobile();
    this.menusMobile.forEach((menu: ElementRef) => menu.nativeElement.classList.remove('head__menu__mobile--active'));
  }

  openMenuMobile(): void {
    this.menuMobile.nativeElement.classList.add('head__menu--alt--active');
  }

  closeMenuMobile(): void {
    this.menuMobile.nativeElement.classList.remove('head__menu--alt--active');
  }

  openSubMenuMobile($event: Event, isMain: boolean, submenu: string): void {
    if (!isMain) {
      $event.preventDefault();
      $event.stopPropagation();
      const menuSelected = this.menusMobile.find((menu: ElementRef) => menu.nativeElement.id === submenu);
      if (menuSelected) {
        menuSelected.nativeElement.classList.add('head__menu__mobile--active');
      }
    }
  }

  closeSubMenuMobile(submenu: string, closeMain = false): void {
    if (closeMain) {
      this.closeMenuMobile();
    }
    const menuSelected = this.menusMobile.find((menu: ElementRef) => menu.nativeElement.id === submenu);
    if (menuSelected) {
      menuSelected.nativeElement.classList.remove('head__menu__mobile--active');
    }
  }

  showSubMenu(show: boolean): void {
    this.headBottom.nativeElement.classList[show ? 'add' : 'remove']('head__bottom--active');
  }
}
