import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo',
  standalone: true,
})
export class LimitToPipe implements PipeTransform {
  transform<T>(array: T[], limit: number): T[] {
    return array.slice(0, limit);
  }
}
