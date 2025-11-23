import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrailComponent } from './mouse-trail.component';

describe('MouseTrailComponent', () => {
  let component: MouseTrailComponent;
  let fixture: ComponentFixture<MouseTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseTrailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
