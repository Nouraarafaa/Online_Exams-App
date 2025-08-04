import { Component, inject } from '@angular/core';
import { ValidationComponent } from "../../../shared/components/validation/validation.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageMethodService } from '../../../shared/services/localstorage.service';

@Component({
  selector: 'app-forgot-password',
  imports: [ValidationComponent, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  step: number = 1;
  private _authService = inject(AuthService);
  router = inject(Router);
  _localStorageMethodService = inject(LocalStorageMethodService)


  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })


  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
  })


  resetPassword: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [Validators.required, Validators.pattern(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
    )])
  })

  verifyEmailSubmit(): void {
    
    let emailValue = this.verifyEmail.get('email')?.value;
    this.resetPassword.get('email')?.patchValue(emailValue);

    this._authService.ForgotPassword(this.verifyEmail.value).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        if (response.message == 'success') {
          this.step = 2; // Move to the next step
        }
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    })
  }
  verifyCodeSubmit(): void {
    this._authService.VerifyCode(this.verifyCode.value).subscribe({
      next: (response) => {
        console.log('code sent successfully:', response);
        if (response.status == 'Success') {
          this.step = 3; // Move to the next step
        }
      },
      error: (error) => {
        console.error('Error sending code:', error);
      }
    })
  }
  resetPasswordSubmit(): void {
    this._authService.ResetPassword(this.resetPassword.value).subscribe({
      next: (response) => {
        console.log('password is changed successfully:', response);
        this._localStorageMethodService.myLocarStorage('setItem', 'token', response.token);
        this.router.navigate(['/auth/login']);
        this.step = 1;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }



}