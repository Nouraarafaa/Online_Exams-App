import { Component, inject } from '@angular/core';
import { SubmitBtnComponent } from "../submit-btn/submit-btn.component";
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SubmitBtnComponent, ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  _authService = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      ),
    ]),
  });

  SubmitForm() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }


}
