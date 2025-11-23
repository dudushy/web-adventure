import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowTextComponent } from './glow-text.component';

describe('GlowTextComponent', () => {
  let component: GlowTextComponent;
  let fixture: ComponentFixture<GlowTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlowTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
