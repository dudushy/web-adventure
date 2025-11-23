import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading6Component } from './loading6.component';

describe('Loading6Component', () => {
  let component: Loading6Component;
  let fixture: ComponentFixture<Loading6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loading6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loading6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
