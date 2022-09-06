import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubService } from 'src/app/services/hub.service';
import { IGame } from '../interfaces/IGame';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  gameId!: number;
  cantGoBack!: boolean;
  Game!: IGame;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HubService
  ) {}

  ngOnInit() {
    this.gameId = Number(this.route.snapshot.params['id']);

    // this.route.params.subscribe((params) => {
    //   this.gameId = +params['Id'];
    // });

    this.getAll();
  }

  onNext() {
    //increment the id of the game so we can observe the next object.
    this.cantGoBack = false;
    this.gameId++;
    console.log(this.gameId);
    this.router.navigate(['/game-detail', this.gameId]); // updates the value in url;
  }

  onPrevious() {
    if (this.gameId <= 1) {
      this.cantGoBack = true;
    } else {
      this.cantGoBack = false;
      //decrement the id of the game so we can observe the next object.
      this.gameId--;
      console.log(this.gameId);
      this.router.navigate(['/game-detail', this.gameId]); // updates the value in url;
    }
  }

  getAll() {
    this.Game={
      Info:this.service.getGameDetail(this.gameId)?.Info!,
      Title:this.service.getGameDetail(this.gameId)?.Title!,
      Genre:this.service.getGameDetail(this.gameId)?.Genre!,
      Price:this.service.getGameDetail(this.gameId)?.Price!,
      Age:this.service.getGameDetail(this.gameId)?.Age!,
      ReleaseDate:this.service.getGameDetail(this.gameId)?.ReleaseDate!,
      src:this.service.getGameDetail(this.gameId)?.src!,
    }
    //console.log("@@@@@@@@@@@@@@@"+ this.service.getGameDetail(this.gameId)?.Title)
  }
}
