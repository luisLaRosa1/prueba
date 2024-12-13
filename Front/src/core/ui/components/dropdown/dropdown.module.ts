import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
  imports: [CommonModule, DropdownModule, FormsModule],
})
export class DropdownsModule {}
