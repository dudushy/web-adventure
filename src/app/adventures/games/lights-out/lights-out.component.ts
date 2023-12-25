/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-lights-out',
  templateUrl: './lights-out.component.html',
  styleUrls: ['./lights-out.component.scss']
})
export class LightsOutComponent implements OnInit {
  title = 'LightsOutComponent';

  gameEnd = false;
  rows = 5;
  columns = 5;
  randomLights = this.rows + this.columns;
  counterClicks = 0;
  counterTime = -1;
  randomPattern = 'chess';
  patterns = {
    // 'pattern-name': [
    //   ['O', 'O', 'O', 'O', 'O'],
    //   ['O', 'O', 'O', 'O', 'O'],
    //   ['O', 'O', 'X', 'O', 'O'],
    //   ['O', 'O', 'O', 'O', 'O'],
    //   ['O', 'O', 'O', 'O', 'O'],
    // ],
    'chess': [
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
    ],
    'horizontal-line': [
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
    ],
    'edges': [
      ['X', 'X', 'O', 'O', 'X'],
      ['O', 'O', 'O', 'O', 'X'],
      ['O', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'O', 'X', 'X'],
    ],
    'horizontal-dots': [
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
    ],
    'corners': [
      ['X', 'O', 'O', 'O', 'X'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'O', 'O', 'X'],
    ],
    'center-dot': [
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
    ],
    'almost-corners-dots': [
      ['O', 'X', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'X'],
      ['O', 'O', 'X', 'O', 'O'],
      ['X', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'X', 'O'],
    ],
    'square': [
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'X', 'X', 'X', 'O'],
      ['O', 'X', 'X', 'X', 'O'],
      ['O', 'X', 'X', 'X', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
    ],
    'center-dot-inverted': [
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'O', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
    ],
    'rubiks-cube': [
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
    ],
    'diagonal': [
      ['X', 'O', 'O', 'O', 'O'],
      ['O', 'X', 'O', 'O', 'O'],
      ['O', 'O', 'X', 'O', 'O'],
      ['O', 'O', 'O', 'X', 'O'],
      ['O', 'O', 'O', 'O', 'X'],
    ],
    'filled': [
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
    ],
  };

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
    this.chooseRandomPattern();
  }

  ngAfterViewInit() {
    console.log(`[${this.title}#ngAfterViewInit]`);
    this.setupRandomPattern();
  }

  // ngAfterViewChecked() {
  //   console.log(`[${this.title}#ngAfterViewChecked]`);
  // }

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

  toggleLights(event) {
    if (this.gameEnd) return;

    if (this.counterTime == -1) this.startTimer();

    console.log(`[${this.title}#toggleLights] event`, event);

    const id = event.target.id;
    console.log(`[${this.title}#toggleLights] id`, id);

    const cellIndex = parseInt(id.split('-')[1]);
    console.log(`[${this.title}#toggleLights] cellIndex`, cellIndex);

    const rightLight = document.getElementById(`gridCell-${cellIndex + 1}`);
    console.log(`[${this.title}#toggleLights] rightLight`, rightLight);

    const leftLight = document.getElementById(`gridCell-${cellIndex - 1}`);
    console.log(`[${this.title}#toggleLights] leftLight`, leftLight);

    const topLight = document.getElementById(`gridCell-${cellIndex - this.columns}`);
    console.log(`[${this.title}#toggleLights] topLight`, topLight);

    const bottomLight = document.getElementById(`gridCell-${cellIndex + this.columns}`);
    console.log(`[${this.title}#toggleLights] bottomLight`, bottomLight);

    const detectRightBorder = cellIndex % this.columns === 0;
    console.log(`[${this.title}#toggleLights] detectRightBorder`, detectRightBorder);

    const detectLeftBorder = cellIndex % this.columns === 1;
    console.log(`[${this.title}#toggleLights] detectLeftBorder`, detectLeftBorder);

    event.target.classList.toggle('on');
    if (!detectRightBorder) rightLight?.classList.toggle('on');
    if (!detectLeftBorder) leftLight?.classList.toggle('on');
    topLight?.classList.toggle('on');
    bottomLight?.classList.toggle('on');

    this.checkPatternMatch();
    this.counterClicks++;
  }

  randomToggle() {
    console.log(`[${this.title}#randomToggle] randomLights`, this.randomLights);

    for (let i = 0; i < this.randomLights; i++) {
      const randomCell = Math.floor(Math.random() * (this.rows * this.columns)) + 1;
      console.log(`[${this.title}#randomToggle] randomCell`, randomCell);

      const cell = document.getElementById(`cell-${randomCell}`);
      console.log(`[${this.title}#randomToggle] cell`, cell);

      cell?.classList.toggle('on');

      this.randomLights--;
    }

    this.updateView();
  }

  chooseRandomPattern() {
    console.log(`[${this.title}#chooseRandomPattern] patterns`, this.patterns);

    this.randomPattern = Object.keys(this.patterns)[Math.floor(Math.random() * Object.keys(this.patterns).length)];
    console.log(`[${this.title}#chooseRandomPattern] randomPattern`, this.randomPattern);
  }

  setupRandomPattern() {
    this.patterns[this.randomPattern].forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const id = `patternCell-${(rowIndex * this.columns) + cellIndex + 1}`;
        console.log(`[${this.title}#setupRandomPattern] id`, id);

        const cellElement = document.getElementById(id);
        console.log(`[${this.title}#setupRandomPattern] cellElement`, cellElement);

        if (cell === 'X') {
          cellElement?.classList.add('on');
        } else {
          cellElement?.classList.remove('on');
        }
      });
    });
  }

  checkPatternMatch() {
    console.log(`[${this.title}#checkPatternMatch] patterns`, this.patterns);

    let match = true;

    this.patterns[this.randomPattern].forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const id = `gridCell-${(rowIndex * this.columns) + cellIndex + 1}`;
        console.log(`[${this.title}#checkPatternMatch] id`, id);

        const cellElement = document.getElementById(id);
        console.log(`[${this.title}#checkPatternMatch] cellElement`, cellElement);

        if (cell === 'X') {
          if (!cellElement?.classList.contains('on')) {
            match = false;
          }
        } else {
          if (cellElement?.classList.contains('on')) {
            match = false;
          }
        }
      });
    });

    if (match) {
      console.log(`[${this.title}#checkPatternMatch] match`, match);

      this.gameEnd = true;

      setTimeout(() => {
        alert(`You won! It took you ${this.counterClicks} clicks and ${this.counterTime} seconds!`);
      }, 100);
    }
  }

  startTimer() {
    console.log(`[${this.title}#startTimer]`);

    this.counterTime = 0;

    setInterval(() => {
      if (this.gameEnd) return;

      console.log(`[${this.title}#startTimer] (BEFORE) counterTime`, this.counterTime);

      this.counterTime++;

      console.log(`[${this.title}#startTimer] (AFTER) counterTime`, this.counterTime);
    }, 1000);
  }
}
