import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paddingRightText'
})
export class SpacerPipePipe implements PipeTransform {
  transform(value: string): string {
    return [value.slice(0, 3), value.slice(2)].join('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0');
  }
}
