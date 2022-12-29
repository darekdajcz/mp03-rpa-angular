import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private readonly fb: NonNullableFormBuilder) {
  }

  get emailControl(): FormControl<string> {
    return this.loginForm.controls.email
  }

  get passwordControl(): FormControl<string> {
    return this.loginForm.controls.password
  }

  ngOnInit() {
  }

  onSubmit(){
  }
}
