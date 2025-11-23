import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading5Component } from './loading5.component';

describe('Loading5Component', () => {
  let component: Loading5Component;
  let fixture: ComponentFixture<Loading5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loading5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loading5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
