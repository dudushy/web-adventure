/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-rocket-league',
  templateUrl: './rocket-league.component.html',
  styleUrls: ['./rocket-league.component.scss']
})
export class RocketLeagueComponent implements OnInit {
  title = 'QxirComponent';

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

  toggleButton(event) {
    console.log(`[${this.title}#toggleButton] event`, event);

    const selectedButton = event.target;
    console.log(`[${this.title}#toggleButton] selectedButton`, selectedButton);

    const buttons = document.getElementsByClassName('customButton') as HTMLCollectionOf<HTMLButtonElement>;
    console.log(`[${this.title}#toggleButton] buttons`, buttons);

    Array.from(buttons).forEach((button) => {
      console.log(`[${this.title}#toggleButton] button`, button);

      button.classList.remove('on');
    });

    selectedButton.classList.add('on');
  }
}
