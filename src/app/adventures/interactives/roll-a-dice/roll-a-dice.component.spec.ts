import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollADiceComponent } from './roll-a-dice.component';

describe('RollADiceComponent', () => {
  let component: RollADiceComponent;
  let fixture: ComponentFixture<RollADiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollADiceComponent]
    });
    fixture = TestBed.createComponent(RollADiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
