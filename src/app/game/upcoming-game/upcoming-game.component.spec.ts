/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpcomingGameComponent } from './upcoming-game.component';

describe('UpcomingGameComponent', () => {
  let component: UpcomingGameComponent;
  let fixture: ComponentFixture<UpcomingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
