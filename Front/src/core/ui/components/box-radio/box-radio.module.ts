import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxRadioComponent } from './box-radio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BoxRadioComponent],
  imports: [CommonModule, FormsModule],
  exports: [BoxRadioComponent],
})
export class BoxRadioModule {}
