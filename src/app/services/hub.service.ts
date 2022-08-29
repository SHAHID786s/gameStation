import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IGame } from '../game/interfaces/IGame';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HubService {
 
  constructor(private http: HttpClient) {}

  //this methods signature has a return type of a array of IGame as an observable. creating type safety for the function
  GetAllTitles(): Observable<IGame[]> {
    return this.http.get('data/games.json').pipe(
      map((res) => {
        const gamesItineray: Array<IGame> = [];
        for (const Id in res) {
          gamesItineray.push(res[Id as keyof object]); // because Id is a property of the response data coming from games.json we have to tell typescript due to typesafety
        }
        return gamesItineray;
      })
    );
  }
}
