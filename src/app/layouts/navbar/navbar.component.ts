import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  redirectTo(): void {
    window.open('https://github.com/darekbiszkopt/AngularLib', '_blank');
  }
}
