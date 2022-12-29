import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  opened = false;

  constructor(private readonly router: Router, private readonly cdref: ChangeDetectorRef) {
    // translate.setDefaultLang('pl');
    // translate.use('pl');
  }

  toggleSideNav(): void {
    this.opened = !this.opened;
  }

  redirectTo(pathRedirectTo: string): void {
    this.router.navigate([pathRedirectTo]).then(() => this.opened = false);
  }
}
