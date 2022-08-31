import { Injectable } from '@angular/core';
import { IUser } from '../game/interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usery!: IUser;
  isLoggedIn!: boolean;
  constructor() {}

  authUser(user: IUser) {
    let userArray!: Array<IUser>;
    this.isLoggedIn = false;
    if (localStorage.getItem('users')) {
      // if there is a value in local storage convert to  readable format
      userArray = JSON.parse(localStorage.getItem('users') as string);
    }

    userArray.find((u) => {
      if (u.name === user.name && u.password === user.password) {
        console.log(u.name + u.password + 'xxxxxx');
        this.isLoggedIn = true;
        return (this.usery = u);
      }
      return this.usery;
    });
  }
}
