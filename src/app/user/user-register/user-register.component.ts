import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { IUser } from 'src/app/game/interfaces/IUser';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user!: IUser;

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

    
  }

  onSub() {
    console.log(this.userData());
    this.addUser(this.userData());
  }

  verifyPasswordMatch(f: AbstractControl): ValidationErrors | null {
    return f.get('password')?.value === f.get('confirmPass')?.value
      ? null
      : { notmatched: true };
  }

  userData(): IUser {
    return (this.user = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      mobile: this.registerForm.value.mobile,
    });
  }

  addUser(user: IUser) {
    let users = [];
    if (localStorage.getItem('users')) {
      // if there already are users
      users = JSON.parse(localStorage.getItem('users') as string); // must add as string due to angular 12 strict type checking error because get item can return null as well as string
      users = [...users, user]; // whatever is in the previous value add the new value to the array
    } else {
      users = [user]; // just set the one user as the array is not populated yet
    }
    localStorage.setItem('users', JSON.stringify(users)); // actuall set the local storage to the user/s
  }
}
