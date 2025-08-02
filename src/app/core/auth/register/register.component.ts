import { Component, inject } from '@angular/core';
import { SubmitBtnComponent } from "../submit-btn/submit-btn.component";
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'auth';
import { LocalStorageMethodService } from '../../../shared/services/localstorage.service';
import { Store } from '@ngrx/store';
import { jwtDecode } from 'jwt-decode';
import { setTokenAction } from '../../store/Token/TokenAction';
import { ValidationComponent } from "../../../shared/components/validation/validation.component";


@Component({
  selector: 'app-register',
  imports: [SubmitBtnComponent, RouterLink, ValidationComponent , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({});
  namePattren: string = '^[a-zA-Z]+$';
  cancelSubscription: Subscription = new Subscription(); // This is to manage any subscriptions if needed in the future.
  _authService = inject(AuthService);
  _localStorageMethodService = inject(LocalStorageMethodService)
  isFormSubmited: boolean = false;
  router = inject(Router);
  store = inject(Store);


  initForm(): void {
    this.registerForm = new FormGroup(
      {
        username: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),
        firstName: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.namePattren),
        ]),
        lastName: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.namePattren),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ]),
        rePassword: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [
          Validators.required,
          Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),
        ]),
      },
      // { validators: matchPassword }
    );
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted!');
      this.cancelSubscription = this._authService.register(this.registerForm.value)
        .subscribe({
          next: (res) => {
            this.isFormSubmited = true;
            this._localStorageMethodService.myLocarStorage('setItem', 'token', res.token);
            this.storeToken(jwtDecode(res.token));
            // this.router.navigate(['/home']);
          },
          error: () => {
            this.isFormSubmited = false;
          },
        });
    } else {
      this.registerForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
storeToken(tokenData: string): void {
  this.store.dispatch(setTokenAction({ value: tokenData }));
}
  ngOnInit(): void {
    this.initForm();
  }
  ngOnDestroy(): void {
    this.cancelSubscription.unsubscribe();
  }
}
