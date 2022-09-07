import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HubService } from 'src/app/services/hub.service';
import { IGame } from '../interfaces/IGame';

@Injectable({
  providedIn: 'root'
})
export class GameDetailResolverService implements Resolve<IGame>{

constructor(private service : HubService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
  const gameId = route.params['id']
  //var x = this.service.getGameDetail(+gameId).Title
 // console.log("resolver reached title is : " + x)
  return this.service.getGameDetail(+gameId); // plu sign converts to number
}

}
