import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSegmentDisplayComponent } from './seven-segment-display.component';

describe('SevenSegmentDisplayComponent', () => {
  let component: SevenSegmentDisplayComponent;
  let fixture: ComponentFixture<SevenSegmentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenSegmentDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenSegmentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
