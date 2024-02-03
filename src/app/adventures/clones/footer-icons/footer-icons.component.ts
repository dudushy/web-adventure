/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-footer-icons',
  templateUrl: './footer-icons.component.html',
  styleUrls: ['./footer-icons.component.scss']
})
export class FooterIconsComponent implements OnInit {
  title = 'FooterIconsComponent';

  iconArray = [
    'trophy',
    'check-square-fill',
    'house-door-fill',
    'book-half',
    'info-circle'
  ];
  iconIndex = Math.floor(this.iconArray.length / 2);
  middleIconIndex = Math.floor(this.iconArray.length / 2);
  footerSelectedIconOffsetMultiplier = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    console.log(`[${this.title}#ngOnInit] this.iconArray`, this.iconArray);
    console.log(`[${this.title}#ngOnInit] this.iconIndex`, this.iconIndex);
  }

  ngOnDestroy(): void {
    console.log(`[${this.title}#ngOnDestroy]`);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
    this.app.updateView(this.title);
  }

  async redirectTo(url: any) {
    await this.app.redirectTo(url, this.title);

    this.updateView();
  }

  updateIconIndex(index: string) {
    console.log(`[${this.title}#updateIconIndex] index`, index);

    this.iconIndex = Number(index);
    this.footerSelectedIconOffsetMultiplier = this.iconIndex - this.middleIconIndex;
  }
}
