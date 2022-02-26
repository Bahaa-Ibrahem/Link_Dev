import { SlicePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuteText'
})
export class cuteTextPipe implements PipeTransform {
  constructor(private slicePipe: SlicePipe){

  }

  transform(value: any, wordLenght: any): any {
    if(value) {
      if(value.length > wordLenght) {
        return this.slicePipe.transform(value, 0, (wordLenght-3)) + '...'
      } else {
        return value
      }
    }
    return null;
  }

}
