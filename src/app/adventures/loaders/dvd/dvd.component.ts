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
    logoHue: '0deg',

    starAnimationTrigger: false,
    starAnimationDuration: 1,

    speedX: 1,
    speedY: 1,

    intervalId: null,
    intervalTime: 10,
  };

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.setupConfig();

    window.addEventListener('resize', () => {
      this.setupConfig();
    });
  }

  ngOnDestroy(): void {
    console.log(`[${this.title}#ngOnDestroy]`);

    window.removeEventListener('resize', () => { });

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

  setupConfig() {
    console.log(`[${this.title}#setupConfig]`);

    this.dvdConfig.logoTop = 0;
    this.dvdConfig.logoLeft = 0;

    const content = document.getElementsByClassName('pageContent')[0] as HTMLDivElement;
    console.log(`[${this.title}#setupConfig] content`, content);
    console.log(`[${this.title}#setupConfig] content.clientWidth`, content?.clientWidth);
    console.log(`[${this.title}#setupConfig] content.clientHeight`, content?.clientHeight);

    this.dvdConfig.containerWidth = content?.clientWidth;
    this.dvdConfig.containerHeight = content?.clientHeight;

    const logo = document.getElementById('logo') as HTMLDivElement;
    console.log(`[${this.title}#setupConfig] logo`, logo);
    console.log(`[${this.title}#setupConfig] logo.clientWidth`, logo?.clientWidth);
    console.log(`[${this.title}#setupConfig] logo.clientHeight`, logo?.clientHeight);

    this.dvdConfig.logoWidth = logo?.clientWidth;
    this.dvdConfig.logoHeight = logo?.clientHeight;

    console.log(`[${this.title}#setupConfig] this.dvdConfig`, this.dvdConfig);

    if (this.dvdConfig.intervalId) clearInterval(this.dvdConfig.intervalId);

    this.dvdConfig.intervalId = setInterval(() => {
      this.moveLogo();
    }, this.dvdConfig.intervalTime);
  }

  moveLogo() {
    console.log(`[${this.title}#moveLogo]`);

    const randomHue = Math.floor(Math.random() * 360);

    this.dvdConfig.logoLeft += this.dvdConfig.speedX;
    this.dvdConfig.logoTop += this.dvdConfig.speedY;

    const isTouchingBorderX = this.dvdConfig.logoLeft + this.dvdConfig.logoWidth >= this.dvdConfig.containerWidth || this.dvdConfig.logoLeft <= 0;
    const isTouchingBorderY = this.dvdConfig.logoTop + this.dvdConfig.logoHeight >= this.dvdConfig.containerHeight || this.dvdConfig.logoTop <= 0;

    const isTouchingCorner = isTouchingBorderX && isTouchingBorderY;

    if (isTouchingCorner) this.triggerAnimation();

    if (this.dvdConfig.logoLeft + this.dvdConfig.logoWidth > this.dvdConfig.containerWidth || this.dvdConfig.logoLeft < 0) {
      this.dvdConfig.speedX *= -1;

      this.dvdConfig.logoHue = `${randomHue}deg`;
    }

    if (this.dvdConfig.logoTop + this.dvdConfig.logoHeight > this.dvdConfig.containerHeight || this.dvdConfig.logoTop < 0) {
      this.dvdConfig.speedY *= -1;

      this.dvdConfig.logoHue = `${randomHue}deg`;
    }
  }

  triggerAnimation() {
    console.log(`[${this.title}#triggerAnimation]`);

    const logo = document.getElementById('logo') as HTMLDivElement;
    console.log(`[${this.title}#triggerAnimation] logo`, logo);

    if (this.dvdConfig.starAnimationTrigger) return;

    this.dvdConfig.starAnimationTrigger = true;
    setTimeout(() => {
      this.dvdConfig.starAnimationTrigger = false;
    }, this.dvdConfig.starAnimationDuration * 1000);
  }
}
