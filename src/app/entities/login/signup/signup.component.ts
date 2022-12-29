import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./../login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  signUpForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private readonly fb: NonNullableFormBuilder) {
  }

  get nameControl(): FormControl<string> {
    return this.signUpForm.controls.name
  }

  get emailControl(): FormControl<string> {
    return this.signUpForm.controls.email
  }

  get passwordControl(): FormControl<string> {
    return this.signUpForm.controls.password
  }

  onSubmit() {

  }
}
