export interface IOptionHeader {
  label?: string;
  url?: string;
  options?: Array<IOptionHeader>;
  modules?: Array<number>;
  isMain?: boolean;
}

export type IOptionsHeader = Array<IOptionHeader>;
