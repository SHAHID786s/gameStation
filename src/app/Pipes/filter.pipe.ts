import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, gameName: string): any[] {
    const resultArray = [];
    if (value.length === 0 || filterString == '' || gameName === '') {
      return value; // check for empty
    }
    //check for object matching our filter value
    for (const i of value) {
      if (i[gameName] === filterString) {
        resultArray.push(i);
      }
    }
    return resultArray;

  }
















}
