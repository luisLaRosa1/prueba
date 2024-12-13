import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { InputModule } from 'src/core/ui/components/input/input.module';
import { RadioButtonModule } from 'src/core/ui/components/radio-button/radio-button.module';
import { RadioOptionsModule } from 'src/core/ui/components/radio-options/radio-options.module';
import { ButtonModule } from 'src/core/ui/components/button/button.module';
import { LoaderModule } from 'src/core/ui/components/loader/loader.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputModule,
    RadioButtonModule,
    RadioOptionsModule,
    ButtonModule,
    LoaderModule,
  ],
})
export class HomeModule {}
