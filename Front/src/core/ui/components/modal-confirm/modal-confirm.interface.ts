export interface IOptionsModalConfirm {
  question?: string;
  message?: string;
  confirmLabel?: string;
  processLabel?: string;
  cancelLabel?: string;
  inProcess?: boolean;
}

export class OptionsModalConfirm implements IOptionsModalConfirm {
  question?: string;
  message?: string;
  processLabel?: string;
  confirmLabel?: string;
  cancelLabel?: string;

  constructor(options?: IOptionsModalConfirm) {
    this.question = (options && options.question) || '';
    this.message = (options && options.message) || '';
    this.processLabel = (options && options.processLabel) || '';
    this.confirmLabel = (options && options.confirmLabel) || 'Confirmar';
    this.cancelLabel = (options && options.cancelLabel) || 'Cancelar';
  }
}
