/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-quiet-man',
  templateUrl: './quiet-man.component.html',
  styleUrls: ['./quiet-man.component.scss']
})
export class QuietManComponent implements OnInit {
  title = 'QuietManComponent';

  green = '#96f528';
  red = '#ff0000';
  quiet = false;

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

  toggleSwitches() {
    console.log(`[${this.title}#toggleSwitches] (BEFORE) quiet`, this.quiet);

    this.quiet = !this.quiet;

    console.log(`[${this.title}#toggleSwitches] (AFTER) quiet`, this.quiet);
  }
}
