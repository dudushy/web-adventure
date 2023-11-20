/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-glow-text',
  templateUrl: './glow-text.component.html',
  styleUrls: ['./glow-text.component.scss']
})
export class GlowTextComponent implements OnInit {
  title = 'GlowTextComponent';

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

  defaultOrder() { return 0; }

  toggleGlowChar(event) {
    console.log(`[${this.title}#toggleGlowChar] event`, event);

    event.target.classList.toggle('glow');
  }
}
