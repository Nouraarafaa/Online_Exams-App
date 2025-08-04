import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'auth';
import { Router, RouterLink } from '@angular/router';
import { ValidationComponent } from "../../../shared/components/validation/validation.component";
import { LocalStorageMethodService } from '../../../shared/services/localstorage.service';


@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, RouterLink, ValidationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  _authService = inject(AuthService);
  router = inject(Router);
  _localStorageMethodService = inject(LocalStorageMethodService)


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
          console.log('Login successful');

          this._localStorageMethodService.myLocarStorage('setItem', 'token', response.token);


          this.router.navigate(['/home']);

        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }


}
