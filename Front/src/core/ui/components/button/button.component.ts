import { Component, Input } from '@angular/core';
import { coerceBooleanProp } from 'src/core/shared/helpers/boolean.helper';

@Component({
  selector: 'pmf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Button label
   *
   * @required
   */
  @Input() label = '';
  @Input()
  get icon(): string {
    return this.iconName && `icon-${this.iconName}`;
  }
  set icon(name: string) {
    this.iconName = name;
  }
  @Input() iconPos = 'right';
  @Input() cssClass = '';
  @Input() loading = false;
  /**
   * Is this the principal call to action on the page?
   */

  @Input() download = false;
  @Input() iconDowload = false;
  @Input()
  get primary(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return this._primary;
  }
  set primary(value: boolean | string) {
    // eslint-disable-next-line no-underscore-dangle
    this._primary = coerceBooleanProp(value);
  }
  @Input()
  get outline(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return this._outline;
  }
  set outline(value: boolean | string) {
    // eslint-disable-next-line no-underscore-dangle
    this._outline = coerceBooleanProp(value);
  }

  @Input()
  get rounded(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return this._rounded;
  }
  set rounded(value: boolean | string) {
    // eslint-disable-next-line no-underscore-dangle
    this._rounded = coerceBooleanProp(value);
  }

  @Input() disabled = false;
  /**
   * Button type
   */
  @Input() type: 'button' | 'submit' = 'button';
  /**
   * How large should the button be?
   */
  @Input() size: 'small' | 'large' = 'small';

  protected iconName: string;
  protected _primary = false;
  protected _outline = false;
  protected _rounded = false;

  get classes(): Array<string> {
    const clsPrimary = this.primary ? 'btn--primary' : '';
    const clsOutline = this.outline ? 'btn--outline' : '';
    const clsRounded = this.rounded ? 'btn--rounded' : '';
    const clsSize = this.size === 'large' ? 'btn--big' : '';
    const clsDisable = this.disabled === true ? 'btn--disabled' : '';
    const clsIcon = this.loading || this.icon ? 'btn--icon' : '';
    const clsClass = this.cssClass;
    return ['btn', clsPrimary, clsOutline, clsRounded, clsSize, clsDisable, clsIcon, clsClass];
  }

  get classesIcon(): Array<string> {
    return ['btn__icon', this.loading ? 'icon-spinner' : this.icon];
  }
}
