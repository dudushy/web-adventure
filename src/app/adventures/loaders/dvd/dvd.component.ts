/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss']
})
export class DvdComponent implements OnInit {
  title = 'DvdComponent';

  dvdConfig = {
    containerWidth: 0,
    containerHeight: 0,
    logoWidth: 0,
    logoHeight: 0,
    logoTop: 0,
    logoLeft: 0,
    speedX: 1,
    speedY: 1,
    intervalId: null,
    intervalTime: 1,
  };

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.updateSizes();
    window.addEventListener('resize', () => {
      this.updateSizes();
    });

    this.dvdConfig.intervalId = setInterval(() => {
      this.moveLogo();
    }, this.dvdConfig.intervalTime);
  }

  ngOnDestroy(): void {
    console.log(`[${this.title}#ngOnDestroy]`);

    window.removeEventListener('resize', () => {});

    clearInterval(this.dvdConfig.intervalId);
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

  updateSizes() {
    console.log(`[${this.title}#updateSizes]`);

    this.dvdConfig.logoTop = 0;
    this.dvdConfig.logoLeft = 0;

    const content = document.getElementsByClassName('pageContent')[0] as HTMLDivElement;
    console.log(`[${this.title}#updateSizes] content`, content);
    console.log(`[${this.title}#updateSizes] content.clientWidth`, content?.clientWidth);
    console.log(`[${this.title}#updateSizes] content.clientHeight`, content?.clientHeight);

    this.dvdConfig.containerWidth = content?.clientWidth;
    this.dvdConfig.containerHeight = content?.clientHeight;

    const logo = document.getElementById('logo') as HTMLImageElement;
    console.log(`[${this.title}#updateSizes] logo`, logo);
    console.log(`[${this.title}#updateSizes] logo.clientWidth`, logo?.clientWidth);
    console.log(`[${this.title}#updateSizes] logo.clientHeight`, logo?.clientHeight);

    this.dvdConfig.logoWidth = logo?.clientWidth;
    this.dvdConfig.logoHeight = logo?.clientHeight;

    console.log(`[${this.title}#updateSizes] this.dvdConfig`, this.dvdConfig);
  }

  moveLogo() {
    console.log(`[${this.title}#moveLogo]`);

    this.dvdConfig.logoLeft += this.dvdConfig.speedX;
    this.dvdConfig.logoTop += this.dvdConfig.speedY;

    if (this.dvdConfig.logoLeft + this.dvdConfig.logoWidth > this.dvdConfig.containerWidth || this.dvdConfig.logoLeft < 0) {
      this.dvdConfig.speedX *= -1;
    }

    if (this.dvdConfig.logoTop + this.dvdConfig.logoHeight > this.dvdConfig.containerHeight || this.dvdConfig.logoTop < 0) {
      this.dvdConfig.speedY *= -1;
    }
  }
}
