import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBottomComponent } from './header-bottom.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderBottomComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderBottomComponent],
})
export class HeaderBottomModule {}
