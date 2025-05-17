import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintComponent } from './paint.component';

describe('PaintComponent', () => {
  let component: PaintComponent;
  let fixture: ComponentFixture<PaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintComponent]
    });
    fixture = TestBed.createComponent(PaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
