import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseComponent } from './pulse.component';

describe('PulseComponent', () => {
  let component: PulseComponent;
  let fixture: ComponentFixture<PulseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PulseComponent]
    });
    fixture = TestBed.createComponent(PulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
