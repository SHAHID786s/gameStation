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
  @Input() hideEditDelete!: boolean

  constructor() {}

  ngOnInit(): void {
    this.imageClick();
  }
  imageClick() {
    //console.log(this.Game.Title);
  }
}
