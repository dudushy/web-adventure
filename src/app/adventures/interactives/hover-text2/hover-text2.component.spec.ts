import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverText2Component } from './hover-text2.component';

describe('HoverText2Component', () => {
  let component: HoverText2Component;
  let fixture: ComponentFixture<HoverText2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverText2Component]
    });
    fixture = TestBed.createComponent(HoverText2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
