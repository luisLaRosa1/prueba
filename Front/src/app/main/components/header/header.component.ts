import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { coerceBooleanProp } from 'src/core/shared/helpers/boolean.helper';

@Component({
  selector: 'pmf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  get withOutTitle(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return this._withOutTitle;
  }
  set withOutTitle(value: boolean | string) {
    // eslint-disable-next-line no-underscore-dangle
    this._withOutTitle = coerceBooleanProp(value);
  }
  protected _withOutTitle = false;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    //
  }
}
