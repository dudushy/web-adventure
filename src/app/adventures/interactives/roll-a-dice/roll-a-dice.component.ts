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

  dicesConfig = {
    sides: 6,
    dices: 1,
    dicesPerRow: 1
  };

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
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

  toggleConfig() {
    const dicesConfig = document.getElementById('dicesConfig');
    console.log(`[${this.title}#toggleConfig] dicesConfig`, dicesConfig);

    dicesConfig?.classList.toggle('shown');
  }

  updateDiceConfig() {
    const sides = document.getElementById('sides') as HTMLInputElement;
    console.log(`[${this.title}#updateDiceConfig] sides`, sides);

    const dices = document.getElementById('dices') as HTMLInputElement;
    console.log(`[${this.title}#updateDiceConfig] dices`, dices);

    this.dicesConfig.sides = sides.valueAsNumber;
    this.dicesConfig.dices = dices.valueAsNumber;
    this.dicesConfig.dicesPerRow = Math.ceil(this.dicesConfig.dices / 2);

    console.log(`[${this.title}#updateDiceConfig] this.dicesConfig`, this.dicesConfig);

    this.toggleConfig();
  }
}
