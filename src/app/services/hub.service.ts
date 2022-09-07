import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IGame } from '../game/interfaces/IGame';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HubService {
  tempGames!: IGame;
  constructor(private http: HttpClient) {}

  //this methods signature has a return type of a array of IGame as an observable. creating type safety for the function
  GetAllTitles(): Observable<IGame[]> {
    return this.http.get('data/games.json').pipe(
      map((res) => {
        const gamesItineray: Array<IGame> = [];
        const localGames = JSON.parse(localStorage.getItem('newGame')!);
        const localUpComingGames = JSON.parse(
          localStorage.getItem('upcomingGame')!
        );

        if (localGames) {
          for (const Id in localGames) {
            gamesItineray.push(localGames[Id as keyof object]); // because Id is a property of the response data coming from games.json we have to tell typescript due to typesafety
          }
        }
        if (localUpComingGames) {
          for (const Id in localUpComingGames) {
            gamesItineray.push(localUpComingGames[Id as keyof object]); // because Id is a property of the response data coming from games.json we have to tell typescript due to typesafety
          }
        }
        //pre populated from json file
        for (const Id in res) {
          gamesItineray.push(res[Id as keyof object]); // because Id is a property of the response data coming from games.json we have to tell typescript due to typesafety
        }
        return gamesItineray;
      })
    );
  }

  generateId() {
    if (localStorage.getItem('Id')) {
      localStorage.setItem('Id', String(+localStorage.getItem('Id')! + 1));
      return +localStorage.getItem('Id')! + 1;
    } else {
      localStorage.setItem('Id', '101');
      return 101;
    }
  }

  addGameToLocalStorage(g: IGame) {
    let newGame = [g]; // sop we can store more than 1 game at a time instead of overwriting eahc time we add game

    //check if we already have a game saved if so append to array.

    //if game is available then set newgame to storage alternatively set upcoming game
    if (g.Available === 'no') {
      if (localStorage.getItem('upcomingGame') != null) {
        newGame = [g, ...JSON.parse(localStorage.getItem('upcomingGame')!)]; // // append new upcoming game
      }
      localStorage.setItem('upcomingGame', JSON.stringify(newGame)); // add the first new upcoming game
    } else {
      if (localStorage.getItem('newGame') != null) {
        newGame = [g, ...JSON.parse(localStorage.getItem('newGame')!)];
      }
      localStorage.setItem('newGame', JSON.stringify(newGame));
    }
  }

  //gets the details of the current game using the game id and checks if the game is in out local array of ALL of the games
  getGameDetail(id: Number): any {
    return this.GetAllTitles().pipe(
      map((p) => {
        return p.find((p) => p.Id === id);
      })
    );
  }
}

