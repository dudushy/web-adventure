/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-hover-text2',
  templateUrl: './hover-text2.component.html',
  styleUrls: ['./hover-text2.component.scss']
})
export class HoverText2Component implements OnInit {
  title = 'HoverText2Component';

  text = 'Alexander SAN';
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  interval: any = null;
  delay = 40;

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
    const text = event?.target?.value;
    console.log(`[${this.title}#updateText] text`, text);

    this.text = text;
    console.log(`[${this.title}#updateText] this.text`, this.text);

    const h1 = document.querySelector('h1');
    console.log(`[${this.title}#updateText] h1`, h1);

    h1.innerText = text;
  }

  handleMouseOver(event) {
    console.log(`[${this.title}#handleMouseOver] event`, event);

    let iteration = 0;

    clearInterval(this.interval);

    this.interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((_, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return this.chars[Math.floor(Math.random() * this.chars.length)];
        })
        .join('');

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 3;
    }, this.delay);
  }
}
