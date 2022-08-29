import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.maxLength(32),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(9),
        ]),
        confirmPass: new FormControl(null, [
          Validators.required,
          Validators.minLength(9),
        ]),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(11),
        ]),
      },
      this.verifyPasswordMatch
    );

    this.onSub();
  }

  onSub() {
    console.log(this.registerForm);
  }

  verifyPasswordMatch(f: AbstractControl): ValidationErrors|null {
    return f.get('password')?.value === f.get('confirmPass')?.value ? null :
      { notmatched: true }
  }
}
