import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading4Component } from './loading4.component';

describe('Loading4Component', () => {
  let component: Loading4Component;
  let fixture: ComponentFixture<Loading4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Loading4Component]
    });
    fixture = TestBed.createComponent(Loading4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
