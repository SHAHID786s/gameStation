import { Pipe, PipeTransform } from '@angular/core';
import { IGame } from '../game/interfaces/IGame';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Array<any>, args: any[]): any[]{
    const field = args[0];
    const direction = args[1];
    let multiplier = 1;

    if(direction === 'desc')
    {
      multiplier = -1;
    }
    else{
      multiplier =1
    }
    //checks values in array 2 at a time
    value.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1 *multiplier; // first value in array smaller than second
      }else if(a[field] > b[field])
      {
        return 1 * multiplier; // first value in array bigger than second
      }
      else{
        return 0; // they are both same
      }
    });
    return value;
  }
}
