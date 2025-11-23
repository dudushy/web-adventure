import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QxirComponent } from './qxir.component';

describe('QxirComponent', () => {
  let component: QxirComponent;
  let fixture: ComponentFixture<QxirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QxirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QxirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
