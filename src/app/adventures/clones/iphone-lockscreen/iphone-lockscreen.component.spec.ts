import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneLockscreenComponent } from './iphone-lockscreen.component';

describe('IphoneLockscreenComponent', () => {
  let component: IphoneLockscreenComponent;
  let fixture: ComponentFixture<IphoneLockscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IphoneLockscreenComponent]
    });
    fixture = TestBed.createComponent(IphoneLockscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
