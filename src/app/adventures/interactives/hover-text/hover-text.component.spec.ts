import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverTextComponent } from './hover-text.component';

describe('HoverTextComponent', () => {
  let component: HoverTextComponent;
  let fixture: ComponentFixture<HoverTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverTextComponent]
    });
    fixture = TestBed.createComponent(HoverTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
