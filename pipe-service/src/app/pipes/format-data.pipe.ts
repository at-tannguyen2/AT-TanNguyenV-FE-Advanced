import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FomartDataPipe implements PipeTransform {

  transform(value: string, start: number, end: number): any {
    return value.substr(start, end) + '...';
  }

}
