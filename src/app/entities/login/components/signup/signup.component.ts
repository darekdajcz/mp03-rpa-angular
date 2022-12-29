import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { UserRoles } from '../../models/user-roles';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  UserRoles = UserRoles

  signUpForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    role: [UserRoles.ROLE_USER, [Validators.required]]
  });

  constructor(private readonly fb: NonNullableFormBuilder, private readonly authService: AuthService) {
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

  onSubmit() {
    this.authService.register({...this.signUpForm.value}).subscribe()
  }

  check() {
    this.authService.getAllUsers().subscribe();
  }
}
