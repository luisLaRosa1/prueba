import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { InputModule } from 'src/core/ui/components/input/input.module';
import { RadioButtonModule } from 'src/core/ui/components/radio-button/radio-button.module';
import { RadioOptionsModule } from 'src/core/ui/components/radio-options/radio-options.module';
import { ButtonModule } from 'src/core/ui/components/button/button.module';
import { LoaderModule } from 'src/core/ui/components/loader/loader.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputModule,
    RadioButtonModule,
    TableModule,
    RadioOptionsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
  ],
})
export class HomeModule {}
