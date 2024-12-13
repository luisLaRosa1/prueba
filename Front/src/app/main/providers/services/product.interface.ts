export interface IResponse {
  transactionId?: number;
  status?: number;
  message?: string;
  data?: IProductResult;
}

export interface IProductResult {
  product?: Array<IProduct>;
}

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
}

export type IProductResponse = IResponse;
