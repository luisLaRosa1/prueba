import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOptionsModalConfirm } from './modal-confirm.interface';

@Component({
  selector: 'frontmodal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent {
  @Input() question: string;
  @Input() message: string;
  @Input() confirmLabel = 'Confirmar';
  @Input() processLabel: string;
  @Input() cancelLabel = 'Cancelar';
  @Input() inProcess = false;
  @Output() confirm = new EventEmitter<boolean>();

  get btnConfirmLabel(): string {
    return (this.inProcess && this.processLabel) || this.confirmLabel;
  }

  closeModalConfirm(): void {
    this.confirm.emit(false);
  }

  modalConfirm(): void {
    if (!this.inProcess) {
      this.inProcess = !this.inProcess;
      this.confirm.emit(true);
    }
  }

  setOptions(options?: IOptionsModalConfirm): void {
    this.question = options.question;
    this.message = options.message;
    this.processLabel = options.processLabel;
    this.confirmLabel = options.confirmLabel;
    this.cancelLabel = options.cancelLabel;
  }
}
