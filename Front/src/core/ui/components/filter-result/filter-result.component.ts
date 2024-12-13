import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontfilter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
})
export class FilterResultComponent {
  @Input() view: string;
  @Input() to: string;
  @Input() search: string | Array<string>;

  get viewText(): boolean {
    return Array.isArray(this.search) ? !!this.search.length : !!this.search;
  }

  get texts(): Array<string> {
    return (Array.isArray(this.search) && this.search) || [this.search.toString()];
  }
}
