import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DELAY_TIMEOUT } from '../../app.constants';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  lang = 'pl';

  constructor(private readonly tokenStorageService: TokenStorageService, private readonly translateService: TranslateService,
              private readonly spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.lang = this.tokenStorageService.getLang() || 'pl';
  }

  redirectTo(): void {
    window.open('https://github.com/darekbiszkopt/AngularLib', '_blank');
  }

  internationalization(): void {
    this.spinner.show().then(() => {

      this.lang = this.lang === 'pl' ? 'en' : 'pl';

      this.tokenStorageService.saveLang(this.lang);

      this.translateService.use(this.lang);
    }).then(()=> setTimeout(()=> this.spinner.hide(), DELAY_TIMEOUT));

  }

}
