import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameCardComponent } from './game/game-card/game-card.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { NavBarComponent } from './game/nav-bar/nav-bar.component';
import { HubService } from './services/hub.service';
import { ManageGameComponent } from './game/manage-game/manage-game.component';
import { UpcomingGameComponent } from './game/upcoming-game/upcoming-game.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { GameDetailResolverService } from './game/game-detail/game-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';

const applicationRoutes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'manage', component: ManageGameComponent },
  { path: 'upcoming', component: UpcomingGameComponent },
  { path: 'game-detail/:id', component: GameDetailComponent,resolve:{gme:GameDetailResolverService} },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: '**', component: GameListComponent }, // wildcard for page not found
];

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameListComponent,
    NavBarComponent,
    ManageGameComponent,
    UpcomingGameComponent,
    GameDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [HubService, AlertifyService, AuthService,GameDetailResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
