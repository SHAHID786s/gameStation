import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameCardComponent } from './game/game-card/game-card.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { NavBarComponent }from './game/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, GameCardComponent, GameListComponent,NavBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
