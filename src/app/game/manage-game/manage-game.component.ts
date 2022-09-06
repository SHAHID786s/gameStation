import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { HubService } from 'src/app/services/hub.service';
import { IGame } from '../interfaces/IGame';

@Component({
  selector: 'app-manage-game',
  templateUrl: './manage-game.component.html',
  styleUrls: ['./manage-game.component.css'],
})
export class ManageGameComponent implements OnInit {
  isNextButtonClicked!: boolean;
  isAvailable!: boolean;
  available!: boolean;
  saveGame!: IGame;
  @Input()
  Game!: IGame;
  @ViewChild('gameTabs') gameTabs!: TabsetComponent;
  manageGameForm!: FormGroup;
  gamesPreview: IGame = {
    Id: 0,
    Genre: '',
    Title: '',
    Age: 0,
    Info: '',
    ReleaseDate: '',
    Available: '',
    src: '',
  };
  constructor(private fb: FormBuilder, private service:HubService) {}
  createForm() {
    this.manageGameForm = this.fb.group({
      GenreInfo: this.fb.group({ Genre: [null, Validators.required] }),
      TitleInfo: this.fb.group({ Title: [null, Validators.required] }),
      AgeInfo: this.fb.group({ Age: [null, Validators.required] }),
      DescriptionInfo: this.fb.group({ Info: [null, Validators.required] }),
      PriceInfo: this.fb.group({ Price: [null, Validators.required] }),
      ReleaseDateInfo: this.fb.group({
        ReleaseDate: [null, Validators.required],
      }),
      AvailableInfo: this.fb.group({ Available: [null, Validators.required] }),
      // src: [null, Validators.required],
    });
  }

  //---------------
  //Getter Methods
  //---------------
  get GenreInfo() {
    return this.manageGameForm.controls.GenreInfo as FormGroup;
  }
  get TitleInfo() {
    return this.manageGameForm.controls.TitleInfo as FormGroup;
  }
  get PriceInfo() {
    return this.manageGameForm.controls.PriceInfo as FormGroup;
  }
  get AgeInfo() {
    return this.manageGameForm.controls.AgeInfo as FormGroup;
  }
  get DescriptionInfo() {
    return this.manageGameForm.controls.DescriptionInfo as FormGroup;
  }
  get ReleaseDateInfo() {
    return this.manageGameForm.controls.ReleaseDateInfo as FormGroup;
  }
  get AvailableInfo() {
    return this.manageGameForm.controls.AvailableInfo as FormGroup;
  }

  ngOnInit() {
    //this.isAvailable =true;
    this.createForm();
  }
  onSub() {
    console.log(this.manageGameForm.controls);
    this.mapFormData();
    this.service.addGameToLocalStorage(this.saveGame);
  }
  selectTab(tabId: number) {
    this.isNextButtonClicked = true;
    this.gameTabs.tabs[tabId].active = true;
  }
  mapFormData() {
    //this.manageGameForm.value.AgeInfo
    this.saveGame = {
      Id :this.service.generateId(),
      Age: parseInt(this.manageGameForm.controls.AgeInfo.value.Age),
      Available: this.AvailableInfo.value.Available,
      Genre: this.GenreInfo.value.Genre,
      Info: this.DescriptionInfo.value.Info,
      Price: this.PriceInfo.value.Price,
      ReleaseDate: this.ReleaseDateInfo.value.ReleaseDate,
      Title: this.TitleInfo.value.Title,
    };
  }


}
