import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './blank-layout.component';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlankLayoutComponent],
  imports: [CommonModule, HeaderModule, FooterModule, RouterModule],
})
export class BlankLayoutModule {}
