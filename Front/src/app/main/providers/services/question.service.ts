/* eslint-disable id-blacklist */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/core/shared/common/services/api/api.service';
import { environment } from 'src/environments/environment';

import { IQuestionResponse } from './question.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private urlBase: string;

  constructor(private apiService: ApiService) {
    this.urlBase = `${environment.bffBaseUrl}`;
  }

  public questionGet(): Observable<IQuestionResponse> {
    return this.apiService.get(`${this.urlBase}/Question?Code=1`);
  }
}
