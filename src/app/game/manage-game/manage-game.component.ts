import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-game',
  templateUrl: './manage-game.component.html',
  styleUrls: ['./manage-game.component.css'],
})
export class ManageGameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSub(Form: NgForm) {
    console.log(Form.value.Genre);
  }
}
