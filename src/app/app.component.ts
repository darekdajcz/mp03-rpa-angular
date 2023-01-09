import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/services/token-storage.service';
import { UserRoles } from './entities/login/models/user-roles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  opened = false;
  private isLoggedIn = false;
  private username: string;
  private role: UserRoles;

  constructor(private readonly router: Router, private readonly cdRef: ChangeDetectorRef,
              private readonly tokenStorageService: TokenStorageService) {
    // translate.setDefaultLang('pl');
    // translate.use('pl');
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.username = user.username;
    }
  }

  toggleSideNav(): void {
    this.opened = !this.opened;
  }

  redirectTo(pathRedirectTo: string): void {
    this.router.navigate([pathRedirectTo]).then(() => this.opened = false);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
