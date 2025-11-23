import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCounterComponent } from './css-counter.component';

describe('CssCounterComponent', () => {
  let component: CssCounterComponent;
  let fixture: ComponentFixture<CssCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
