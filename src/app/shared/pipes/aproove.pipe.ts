import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'aproove',
  pure: false
})
export class AproovePipe implements PipeTransform {
  private readonly translateService = inject(TranslateService);

  transform(value: string): string {
    const aproove = +value === 1 ? 'yes' : 'no';
    return this.translateService.instant(aproove);
  }
}
