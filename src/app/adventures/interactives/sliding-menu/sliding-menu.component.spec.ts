import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingMenuComponent } from './sliding-menu.component';

describe('SlidingMenuComponent', () => {
  let component: SlidingMenuComponent;
  let fixture: ComponentFixture<SlidingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
