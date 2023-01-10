import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canGetLoan'
})
export class CanGetLoanPipe implements PipeTransform {
  transform(value: string): string {
    return +value === 1 ? 'Tak' : 'Nie';
  }
}
