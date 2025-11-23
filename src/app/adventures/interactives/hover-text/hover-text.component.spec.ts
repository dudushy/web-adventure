import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverTextComponent } from './hover-text.component';

describe('HoverTextComponent', () => {
  let component: HoverTextComponent;
  let fixture: ComponentFixture<HoverTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
