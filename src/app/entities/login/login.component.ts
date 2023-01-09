import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { filter } from 'rxjs';
import { LoginModel } from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private readonly fb: NonNullableFormBuilder, private readonly authService: AuthService,
              private readonly tokenStorageService: TokenStorageService) {
  }

  get usernameControl(): FormControl<string> {
    return this.loginForm.controls.username;
  }

  get passwordControl(): FormControl<string> {
    return this.loginForm.controls.password;
  }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const loginValues = { ...this.loginForm.value } as Pick<LoginModel, 'username' | 'password'>;
    this.authService.logIn(loginValues)
      .pipe(filter((res) => !!res))
      .subscribe({
        next: (res) => {

          this.tokenStorageService.saveToken(res.token.accessToken);
          this.tokenStorageService.saveToken(res.token.refreshToken, true);
          this.tokenStorageService.saveUser(res.user);
          LoginComponent.reloadPage();
        }
      });
  }

  private static reloadPage(): void {
    window.location.reload();
  }
}
