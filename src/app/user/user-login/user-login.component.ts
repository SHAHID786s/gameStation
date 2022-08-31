import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/game/interfaces/IUser';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  form!: FormGroup;
  user!: IUser;
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,private router:Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.user = {
      name: this.form.value.name,
      password: this.form.value.password,
    };

    console.log(this.user);

    this.authService.authUser(this.user);
    if (this.authService.isLoggedIn) {
      localStorage.setItem('token', this.user.name);
      this.alertify.success('login successful');
      this.router.navigateByUrl('/manage')
    } else {
      // console.log(this.authService.usery.name);
      this.alertify.error('login unsuccessful');
    }
  }


}
