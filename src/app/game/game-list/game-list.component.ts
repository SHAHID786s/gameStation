import { splitAtPeriod } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { HubService } from 'src/app/services/hub.service';
import { IGame } from '../interfaces/IGame';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: Array<IGame> = [];
  isAvailable!: boolean;
  constructor(private hubService: HubService) {}

  ngOnInit(): void {
    //get all titles then filter them to et all the tittle that are marked with the available field to true
    this.hubService.GetAllTitles().subscribe(
      (res) => {
        this.games = res;
        const specificTitles = this.games.filter((x) => {
          return x.available === true;
        });
        console.log(specificTitles);
        this.games = specificTitles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
