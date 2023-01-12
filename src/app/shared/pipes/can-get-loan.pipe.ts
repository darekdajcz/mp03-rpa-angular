import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'canGetLoan',
  pure: false
})
export class CanGetLoanPipe implements PipeTransform {
  private readonly translateService = inject(TranslateService);

  transform(value: string): string {
    const canGetLoan = +value === 1 ? 'yes' : 'no';
    return this.translateService.instant(canGetLoan);
  }
}
