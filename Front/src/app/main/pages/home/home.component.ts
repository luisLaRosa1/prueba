import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UnsubcribeOnDestroy } from '../../components/general/unsubscribe-on-destroy';
import { IQuestionResponse } from '../../providers/services/question.interface';
import { QuestionService } from '../../providers/services/question.service';
//import { HeaderService } from '../../providers/services/header/header.service';

@Component({
  selector: 'pmf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends UnsubcribeOnDestroy implements OnInit {
  data = [];
  loading: boolean;
  constructor(private questionService: QuestionService) {
    super();
  }

  ngOnInit(): void {
    this.loading = true;
    const get$ = this.questionService
      .questionGet()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((response: IQuestionResponse) => {
        this.data = response;
      });
    this.arrayToDestroy.push(get$);
  }

  convert(data: any) {
    const dataL = [];
    data.forEach((element) => {
      dataL.push({ label: element.value, value: element.value });
    });
    return dataL;
  }
}
