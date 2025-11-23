import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverPatternComponent } from './hover-pattern.component';

describe('HoverPatternComponent', () => {
  let component: HoverPatternComponent;
  let fixture: ComponentFixture<HoverPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
