import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsOutComponent } from './lights-out.component';

describe('LightsOutComponent', () => {
  let component: LightsOutComponent;
  let fixture: ComponentFixture<LightsOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightsOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightsOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
