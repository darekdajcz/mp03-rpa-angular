import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { UserRoles } from '../../models/user-roles';
import { RegisterUser } from '../../models/user';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  UserRoles = UserRoles;

  // TODO --> admin can aproove registration
  // TODO --> agent can add account see all lists
  // TODO --> client can see only his accounts and banks

  signUpForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    role: [UserRoles.ROLE_USER, [Validators.required]]
  });

  constructor(private readonly fb: NonNullableFormBuilder, private readonly authService: AuthService,
              private readonly router: Router) {
  }

  get usernameControl(): FormControl<string> {
    return this.signUpForm.controls.username;
  }

  get emailControl(): FormControl<string> {
    return this.signUpForm.controls.email;
  }

  get passwordControl(): FormControl<string> {
    return this.signUpForm.controls.password;
  }

  get roleControl(): FormControl<UserRoles> {
    return this.signUpForm.controls.role;
  }

  onSubmit() {
    const approved = this.roleControl.value === UserRoles.ROLE_USER ? '1' : '0';
    const registerUser = { ...this.signUpForm.value, approved } as RegisterUser;
    this.authService.register(registerUser)
      .pipe(finalize(()=> this.router.navigate(['/login'])))
      .subscribe();
  }
}
