import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../login/models/user';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { UserRoles } from '../login/models/user-roles';
import { AuthService } from '../../shared/services/auth.service';
import { filter, finalize, switchMap, take } from 'rxjs';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {

  user: User;
  UserRoles = UserRoles;
  usersToApprove: User[] = [];

  constructor(private readonly tokenStorageService: TokenStorageService, private readonly authService: AuthService,
              private readonly cdRef: ChangeDetectorRef, private readonly modal: NgbModal) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
    if (this.user.role === UserRoles.ROLE_ADMIN) {
      this.authService.getAllUsersToApprove()
        .pipe(finalize(() => this.cdRef.detectChanges()))
        .subscribe({
          next: (res) => {
            this.usersToApprove = res
            console.log(this.usersToApprove)
          }
        });
    }
  }

  approve(user: User): void {
    console.error(user)
    const modal = ConfirmDialogComponent.open(this.modal, 'admin.register');

    modal.closed
      .pipe(take(1),
        filter((res) => res))
      .subscribe({
        next: () =>
          this.authService.registerStraight(user).pipe(switchMap(() =>
            this.authService.deleteTmpUser(user.id))).subscribe()
      });
  }
}
