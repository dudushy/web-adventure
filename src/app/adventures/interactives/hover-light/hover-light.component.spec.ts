import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverLightComponent } from './hover-light.component';

describe('HoverLightComponent', () => {
  let component: HoverLightComponent;
  let fixture: ComponentFixture<HoverLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverLightComponent]
    });
    fixture = TestBed.createComponent(HoverLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
