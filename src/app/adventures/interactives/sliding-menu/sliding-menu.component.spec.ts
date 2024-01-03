import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingMenuComponent } from './sliding-menu.component';

describe('SlidingMenuComponent', () => {
  let component: SlidingMenuComponent;
  let fixture: ComponentFixture<SlidingMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingMenuComponent]
    });
    fixture = TestBed.createComponent(SlidingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
