import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../login/models/user';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {

  user: User;
  constructor(private readonly tokenStorageService: TokenStorageService, private readonly translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
  }
}
