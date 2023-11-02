import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverGridComponent } from './hover-grid.component';

describe('HoverGridComponent', () => {
  let component: HoverGridComponent;
  let fixture: ComponentFixture<HoverGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverGridComponent]
    });
    fixture = TestBed.createComponent(HoverGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
