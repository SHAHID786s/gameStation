import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: Array<any> = [
    {
      Id: 1,
      Genre: 'FPS',
      Title: 'MW2',
      Price: 59.99,
      Age: 18,
      Info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tmollit anim id est laborum."',
    },
    {
      Id: 2,
      Genre: 'FPS',
      Title: 'Halo 5',
      Price: 69.99,
      Age: 18,
      Info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tmollit anim id est laborum."',
    },
    {
      Id: 1,
      Genre: 'RPG',
      Title: 'Sea of Theives',
      Price: 49.99,
      Age: 18,
      Info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tmollit anim id est laborum."',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
