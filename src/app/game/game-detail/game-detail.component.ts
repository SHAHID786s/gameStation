import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgxGalleryImage,
  NgxGalleryOptions,
  NgxGalleryAnimation,
  NgxGalleryImageSize,
} from '@kolkov/ngx-gallery';
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
  g!: IGame;
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HubService
  ) {}

  ngOnInit() {
    this.gameId = +this.route.snapshot.params['id'];
    //resolver is a middleware liek feature that is executed before component is loaded
    this.route.data.subscribe((data: any) => {
      console.log('data is : ' + data['gme']);
      this.g = data['gme'];
    });

    this.galleryOptions = [
      {
        width: '200%',
        height: '300px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Zoom,
        //previewArrows: true,
        previewBullets: true,
        //imageAutoPlay:true
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/image/gpic/captain.jpg',
        medium: 'assets/image/gpic/captain.jpg',
        big: 'assets/image/gpic/captain.jpg',
      },
      {
        small: 'assets/image/gpic/beard.png',
        medium: 'assets/image/gpic/beard.png',
        big: 'assets/image/gpic/beard.png',
      },
      {
        small: 'assets/image/gpic/ghost.jpg',
        medium: 'assets/image/gpic/ghost.jpg',
        big: 'assets/image/gpic/ghost.jpg',
      },
    ];
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

  // getAll() {
  //   this.Game = {
  //     Info: this.service.getGameDetail(this.gameId)?.Info!,
  //     Title: this.service.getGameDetail(this.gameId)?.Title!,
  //     Genre: this.service.getGameDetail(this.gameId)?.Genre!,
  //     Price: this.service.getGameDetail(this.gameId)?.Price!,
  //     Age: this.service.getGameDetail(this.gameId)?.Age!,
  //     ReleaseDate: this.service.getGameDetail(this.gameId)?.ReleaseDate!,
  //     src: this.service.getGameDetail(this.gameId)?.src!,
  //   };
  //   //console.log("@@@@@@@@@@@@@@@"+ this.service.getGameDetail(this.gameId)?.Title)
  // }
}
