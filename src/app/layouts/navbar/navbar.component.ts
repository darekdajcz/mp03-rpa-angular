import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{

  lang = 'pl';

  constructor(private readonly tokenStorageService: TokenStorageService, private readonly translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.lang = this.tokenStorageService.getLang() || 'pl';
  }

  redirectTo(): void {
    window.open('https://github.com/darekbiszkopt/AngularLib', '_blank');
  }

  click(): void {
    this.lang = this.lang === 'pl' ? 'en' : 'pl';
    this.tokenStorageService.saveLang(this.lang);

    this.translateService.use(this.lang);
  }

}
