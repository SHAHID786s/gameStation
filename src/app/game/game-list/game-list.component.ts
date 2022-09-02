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
    //get all titles then filter them to get all the titles that are marked with the available field to true
    this.hubService.GetAllTitles().subscribe(
      (res) => {
        //get data from local storage
        const newG = JSON.parse(localStorage.getItem('newGame') as string);

        this.games = res;
        if(newG)
        {
          this.games=[newG,...this.games]
        }
        const specificTitles = this.games.filter((x) => {
          return x.Available === true;
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
