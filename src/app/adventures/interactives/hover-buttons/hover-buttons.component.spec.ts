import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverButtonsComponent } from './hover-buttons.component';

describe('HoverButtonsComponent', () => {
  let component: HoverButtonsComponent;
  let fixture: ComponentFixture<HoverButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
