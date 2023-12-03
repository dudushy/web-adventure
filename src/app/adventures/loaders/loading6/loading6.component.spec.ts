import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading6Component } from './loading6.component';

describe('Loading6Component', () => {
  let component: Loading6Component;
  let fixture: ComponentFixture<Loading6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Loading6Component]
    });
    fixture = TestBed.createComponent(Loading6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
