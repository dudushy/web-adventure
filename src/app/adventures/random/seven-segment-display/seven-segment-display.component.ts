/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-seven-segment-display',
  templateUrl: './seven-segment-display.component.html',
  styleUrls: ['./seven-segment-display.component.scss']
})
export class SevenSegmentDisplayComponent implements OnInit {
  title = 'SevenSegmentDisplayComponent';

  clockInterval = null;
  display = {
    0: [1, 1, 1, 1, 1, 1, 1],
    1: [1, 1, 1, 1, 1, 1, 1],
    2: [1, 1, 1, 1, 1, 1, 1],
    3: [1, 1, 1, 1, 1, 1, 1],
    am: false,
    pm: true,
  };
  segmentsCheatSheet = {
    0: [1, 1, 1, 0, 1, 1, 1],
    1: [0, 0, 1, 0, 0, 1, 0],
    2: [1, 0, 1, 1, 1, 0, 1],
    3: [1, 0, 1, 1, 0, 1, 1],
    4: [0, 1, 1, 1, 0, 1, 0],
    5: [1, 1, 0, 1, 0, 1, 1],
    6: [1, 1, 0, 1, 1, 1, 1],
    7: [1, 0, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
  };

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    console.log(`[${this.title}#ngOnInit] this.display`, this.display);
    console.log(`[${this.title}#ngOnInit] this.segmentsCheatSheet`, this.segmentsCheatSheet);

    // this.display[0] = this.segmentsCheatSheet[0];
    // this.display[1] = this.segmentsCheatSheet[1];
    // this.display[2] = this.segmentsCheatSheet[2];
    // this.display[3] = this.segmentsCheatSheet[9];

    this.updateClock();

    this.clockInterval = setInterval(() => {
      this.updateClock();
    }, 1000 * 15);
  }

  ngOnDestroy(): void {
    console.log(`[${this.title}#ngOnDestroy]`);

    clearInterval(this.clockInterval);
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

  updateClock() {
    console.log(`[${this.title}#updateClock]`);

    const date = new Date();
    console.log(`[${this.title}#updateClock] date`, date);

    const time = date.toLocaleTimeString('pt-br', { hour: 'numeric', minute: 'numeric' });
    console.log(`[${this.title}#updateClock] time`, time);

    this.display[0] = this.segmentsCheatSheet[parseInt(time[0])];
    this.display[1] = this.segmentsCheatSheet[parseInt(time[1])];
    this.display[2] = this.segmentsCheatSheet[parseInt(time[3])];
    this.display[3] = this.segmentsCheatSheet[parseInt(time[4])];

    const period = parseInt(time.split(':')[0]) > 12 ? 'PM' : 'AM';
    console.log(`[${this.title}#updateClock] period`, period);

    this.display.am = period.includes('AM');
    this.display.pm = period.includes('PM');
  }
}
