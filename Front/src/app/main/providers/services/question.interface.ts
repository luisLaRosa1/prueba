export interface IQuestion {
  id?: number;
  questionName?: string;
  questionCode?: string;
  value?: Array<IValue>;
}

export interface IValue {
  value: string;
}

export type IQuestionResponse = Array<IQuestion>;
