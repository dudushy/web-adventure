/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-hover-pattern',
  templateUrl: './hover-pattern.component.html',
  styleUrls: ['./hover-pattern.component.scss']
})
export class HoverPatternComponent implements OnInit {
  title = 'HoverPatternComponent';

  svgArray = [
    'pattern1',
    'pattern2',
    'pattern3',
    'pattern4',
    'pattern5',
    'pattern6',
    'pattern7',
    'pattern8',
    'pattern9',
    'pattern10',
    'pattern11',
    'pattern12',
    'pattern13',
    'pattern14',
    'pattern15',
    'pattern16'
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    // this.toggleBackgroundSvg();
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

  updateLightPosition(event) {
    console.log(`[${this.title}#updateLightPosition] event`, event);

    // const x = event.clientX;
    const x = event.layerX;
    console.log(`[${this.title}#updateLightPosition] x`, x);

    // const y = event.clientY;
    // const y = event.pageY;
    // const y = event.screenY;
    const y = event.layerY;
    // const y = event.offsetY;
    // const y = event.y;
    console.log(`[${this.title}#updateLightPosition] y`, y);

    const light = document.getElementById('light');
    console.log(`[${this.title}#updateLightPosition] light`, light);

    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
  }

  toggleBackgroundSvg() {
    const randomSvg = this.svgArray[Math.floor(Math.random() * this.svgArray.length)];
    console.log(`[${this.title}#toggleBackgroundSvg] randomSvg`, randomSvg);

    const min = 4;
    const max = 8;
    const randomSize = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`[${this.title}#toggleBackgroundSvg] randomSize`, randomSize);

    const pattern = document.getElementById('pattern');
    console.log(`[${this.title}#toggleBackgroundSvg] pattern`, pattern);
    console.log(`[${this.title}#toggleBackgroundSvg] pattern.style.background`, pattern.style.background);

    pattern.style.background = `repeat url(assets/imgs/SVGs/patterns/${randomSvg}.svg)`;
    pattern.style.backgroundSize = `${randomSize}%`;
  }
}
