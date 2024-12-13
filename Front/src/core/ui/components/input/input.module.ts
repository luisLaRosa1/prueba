import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, DirectivesModule],
  exports: [InputComponent],
})
export class InputModule {}
