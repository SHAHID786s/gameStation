import { Component } from '@angular/core';
@Component({
  selector: 'app-game-card',
  templateUrl: 'game-card.component.html',
  styleUrls: ['game-card.component.css'],
})
export class GameCardComponent {
  Game: any = {
    Id: 1,
    Genre: 'FPS',
    Title: 'MW2',
    Price: 59.99,
    Age: 18,
    Info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tmollit anim id est laborum."',
  };
  constructor() {
    this.Game.Id;
  }

  ngOnInit(): void {}
}
