import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuietManComponent } from './quiet-man.component';

describe('QuietManComponent', () => {
  let component: QuietManComponent;
  let fixture: ComponentFixture<QuietManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuietManComponent]
    });
    fixture = TestBed.createComponent(QuietManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
