import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  opened = false;
  private roles: string[];
  isLoggedIn = false;
  username: string;

  constructor(private readonly router: Router, private readonly cdref: ChangeDetectorRef,
              private readonly tokenStorageService: TokenStorageService) {
    // translate.setDefaultLang('pl');
    // translate.use('pl');
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  toggleSideNav(): void {
    this.opened = !this.opened;
  }

  redirectTo(pathRedirectTo: string): void {
    this.router.navigate([pathRedirectTo]).then(() => this.opened = false);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
