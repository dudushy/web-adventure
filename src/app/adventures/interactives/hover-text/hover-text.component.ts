/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-hover-text',
  templateUrl: './hover-text.component.html',
  styleUrls: ['./hover-text.component.scss']
})
export class HoverTextComponent implements OnInit {
  title = 'HoverTextComponent';

  text = 'yummy';
  textArray = [];

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.updateText({ target: { value: this.text } });
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

  updateText(event) {
    console.log(`[${this.title}#updateText] event`, event);
    console.log(`[${this.title}#updateText] event.target`, event.target);
    console.log(`[${this.title}#updateText] event.target.value`, event.target.value);

    // this.text = event.target.value;

    this.textArray = this.text.split('');
    console.log(`[${this.title}#updateText] this.textArray`, this.textArray);
  }
}
