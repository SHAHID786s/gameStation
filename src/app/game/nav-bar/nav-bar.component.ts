import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser?:string
  constructor(private alert : AlertifyService) { }

  ngOnInit(): void {
  }
  loggedIn() {
     this.loggedinUser =localStorage.getItem('token') as string; // means user logged in as we created a key value called token with the value set as user name in localstorage
     return this.loggedinUser;
    }
  onLogout() {
    this.alert.success("Successfully logged out")
    return localStorage.removeItem('token'); // removes the "token" from local storage sowe can show register nav link

  }

}
