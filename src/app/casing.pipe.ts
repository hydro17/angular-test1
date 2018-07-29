import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casing'
})
export class CasingPipe implements PipeTransform {

  transform(value1: string, args?: any): any {
    if (!value1) { return null; }

    let value = value1.toLowerCase();
    let customCased: string = value.charAt(0).toUpperCase() + value.slice(1);
    return customCased.split(' ').map(val => {
      return (val === 'the' || val === 'of') ? val : val.charAt(0).toUpperCase() + val.slice(1);
    }).join(' ');
  }

}
