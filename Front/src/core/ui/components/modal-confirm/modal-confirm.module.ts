import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { ModalConfirmComponent } from './modal-confirm.component';

@NgModule({
  declarations: [ModalConfirmComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ModalConfirmComponent],
})
export class ModalConfirmModule {}
