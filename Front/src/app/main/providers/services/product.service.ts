/* eslint-disable id-blacklist */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/core/shared/common/services/api/api.service';
import { environment } from 'src/environments/environment';

import { IProductResponse } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlBase: string;

  constructor(private apiService: ApiService) {
    this.urlBase = `${environment.bffBaseUrl}`;
  }

  public productGet(): Observable<IProductResponse> {
    return this.apiService.get(`${this.urlBase}/Product`);
  }
}
