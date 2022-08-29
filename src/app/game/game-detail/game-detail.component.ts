import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  gameId!: number;
  cantGoBack!: boolean;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.gameId = Number(this.route.snapshot.params['id']);

    // this.route.params.subscribe((params) => {
    //   this.gameId = +params['Id'];
    // });
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
}
