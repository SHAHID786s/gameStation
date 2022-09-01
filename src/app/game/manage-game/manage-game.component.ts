import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { IGame } from '../interfaces/IGame';

@Component({
  selector: 'app-manage-game',
  templateUrl: './manage-game.component.html',
  styleUrls: ['./manage-game.component.css'],
})
export class ManageGameComponent implements OnInit {
  isAvailable!: boolean;
  available!: boolean;
  @Input()
  Game!: IGame;
  @ViewChild('gameTabs') gameTabs!: TabsetComponent;

  gamesPreview: IGame = {
    Id:0,
    Genre:'',
    Title:'',
    Age:0,
    Info:'',
    releaseDate:''


  }
  constructor() {

  }

  ngOnInit() {
    this.isAvailable =true;
  }
  onSub(Form: NgForm) {
    console.log(Form.value);
  }

  selectTab(tabId: number) {
    this.gameTabs.tabs[tabId].active = true;
  }

  checkAvailability(Form: NgForm) {
    // console.log('****' + Form.value.available)
    if (Form.value.available === 'true') {
      this.isAvailable = true;
    } else {
      this.isAvailable = false;
    }
  }
}
