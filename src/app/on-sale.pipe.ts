import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    console.log('my pipe', value);
    if (value) {
      return "Dang ha gia"
    }
    return "";
  }

}
