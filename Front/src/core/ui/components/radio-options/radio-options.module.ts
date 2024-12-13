import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioOptionsComponent } from './radio-options.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioOptionsComponent],
  imports: [CommonModule, FormsModule],
  exports: [RadioOptionsComponent],
})
export class RadioOptionsModule {}
