/* eslint-disable guard-for-in */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any): any {
    return Object.keys(value);
  }
}
