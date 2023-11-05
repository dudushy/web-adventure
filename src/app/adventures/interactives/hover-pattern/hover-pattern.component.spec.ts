import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverPatternComponent } from './hover-pattern.component';

describe('HoverPatternComponent', () => {
  let component: HoverPatternComponent;
  let fixture: ComponentFixture<HoverPatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverPatternComponent]
    });
    fixture = TestBed.createComponent(HoverPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
