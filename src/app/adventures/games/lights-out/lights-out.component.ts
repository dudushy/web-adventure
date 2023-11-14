/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-lights-out',
  templateUrl: './lights-out.component.html',
  styleUrls: ['./lights-out.component.scss']
})
export class LightsOutComponent implements OnInit {
  title = 'LightsOutComponent';

  rows = 5;
  columns = 5;
  randomLights = this.rows + this.columns;

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
  }

  ngAfterViewInit() {
    console.log(`[${this.title}#ngAfterViewInit]`);
  }

  ngAfterViewChecked() {
    console.log(`[${this.title}#ngAfterViewChecked]`);

    this.randomToggle();
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

  defaultOrder() { return 0; }

  toggleLights(event) {
    console.log(`[${this.title}#toggleLights] event`, event);

    const id = event.target.id;
    console.log(`[${this.title}#toggleLights] id`, id);

    const cellIndex = parseInt(id.split('-')[1]);
    console.log(`[${this.title}#toggleLights] cellIndex`, cellIndex);

    const rightLight = document.getElementById(`cell-${cellIndex + 1}`);
    console.log(`[${this.title}#toggleLights] rightLight`, rightLight);

    const leftLight = document.getElementById(`cell-${cellIndex - 1}`);
    console.log(`[${this.title}#toggleLights] leftLight`, leftLight);

    const topLight = document.getElementById(`cell-${cellIndex - this.columns}`);
    console.log(`[${this.title}#toggleLights] topLight`, topLight);

    const bottomLight = document.getElementById(`cell-${cellIndex + this.columns}`);
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
}
