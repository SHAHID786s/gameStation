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
        const upcomingLocalGame = JSON.parse(localStorage.getItem("upcomingGame") as string)
        this.games = res;
        //now filter through array and get upcoming flag to true.
        if(upcomingLocalGame)
        {
          this.games=[upcomingLocalGame,...this.games]; // add newly added game that is not available to the upcoming roster
        }
        const upcomingGames = this.games.filter((x) => {
          return x.Available === "no";
        });
        this.games = upcomingGames; // now store upcoming games into that array for displaying
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
