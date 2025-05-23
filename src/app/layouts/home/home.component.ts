import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { User } from '../../entities/login/models/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  user: User;
  constructor(private readonly tokenStorageService: TokenStorageService, private readonly translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
  }
}
