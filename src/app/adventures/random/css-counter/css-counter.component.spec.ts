import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCounterComponent } from './css-counter.component';

describe('CssCounterComponent', () => {
  let component: CssCounterComponent;
  let fixture: ComponentFixture<CssCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssCounterComponent]
    });
    fixture = TestBed.createComponent(CssCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
