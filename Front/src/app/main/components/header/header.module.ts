import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderTopModule } from 'src/core/ui/components/header-top/header-top.module';
import { HeaderBottomModule } from 'src/core/ui/components/header-bottom/header-bottom.module';
import { ButtonModule } from 'src/core/ui/components/button/button.module';
import { LoaderModule } from 'src/core/ui/components/loader/loader.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HeaderTopModule, HeaderBottomModule, ButtonModule, LoaderModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
