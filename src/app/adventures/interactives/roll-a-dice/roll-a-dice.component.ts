/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-roll-a-dice',
  templateUrl: './roll-a-dice.component.html',
  styleUrls: ['./roll-a-dice.component.scss']
})
export class RollADiceComponent implements OnInit {
  title = 'RollADiceComponent';

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
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
}
