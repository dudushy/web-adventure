import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading2Component } from './loading2.component';

describe('Loading2Component', () => {
  let component: Loading2Component;
  let fixture: ComponentFixture<Loading2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loading2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loading2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
