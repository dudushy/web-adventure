import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketLeagueComponent } from './rocket-league.component';

describe('RocketLeagueComponent', () => {
  let component: RocketLeagueComponent;
  let fixture: ComponentFixture<RocketLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RocketLeagueComponent]
    });
    fixture = TestBed.createComponent(RocketLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
