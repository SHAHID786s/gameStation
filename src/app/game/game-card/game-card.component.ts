import { Component, Input } from '@angular/core';
import { IGame } from '../interfaces/IGame';
@Component({
  selector: 'app-game-card',
  templateUrl: 'game-card.component.html',
  styleUrls: ['game-card.component.css'],
})
export class GameCardComponent {
  @Input()
  Game!: IGame;

  constructor() {}

  ngOnInit(): void {
    this.imageClick();
  }
  imageClick() {
    //console.log(this.Game.Title);
  }
}
