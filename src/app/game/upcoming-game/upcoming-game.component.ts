import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HubService } from 'src/app/services/hub.service';
import { GameListComponent } from '../game-list/game-list.component';
import { IGame } from '../interfaces/IGame';

@Component({
  selector: 'app-upcoming-game',
  templateUrl: './upcoming-game.component.html',
  styleUrls: ['./upcoming-game.component.css'],
})
export class UpcomingGameComponent implements OnInit {
  games: Array<IGame> = [];
  constructor(private service: HubService) {}

  ngOnInit() {
    this.GetUpcomingTitles();
  }

  GetUpcomingTitles() {
    this.service.GetAllTitles().subscribe(
      (res) => {
        this.games = res;
        //now filter through array and get upcoming flag to true.
        const upcomingGames = this.games.filter((x) => {
          return x.Available === false;
        });
        this.games = upcomingGames; // now store upcoming games into that array for displaying
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
