import { Component } from '@angular/core';
import { SubmitBtnComponent } from "../submit-btn/submit-btn.component";
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [SubmitBtnComponent , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({});
  namePattren: string = '^[a-zA-Z]+$';

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
}
