import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuzzy'
})
export class FuzzyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args && args.filter ? value.filter((v) => `${v.description} ${v.poster} ${v.title}`.indexOf(args.filter)) : value;
  }

}
