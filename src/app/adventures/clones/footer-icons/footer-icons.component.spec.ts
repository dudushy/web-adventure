import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIconsComponent } from './footer-icons.component';

describe('FooterIconsComponent', () => {
  let component: FooterIconsComponent;
  let fixture: ComponentFixture<FooterIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
