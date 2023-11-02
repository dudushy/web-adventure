/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-hover-grid',
  templateUrl: './hover-grid.component.html',
  styleUrls: ['./hover-grid.component.scss']
})
export class HoverGridComponent implements OnInit {
  title = 'HoverGridComponent';

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

  triggerFade(event) {
    console.log(`[${this.title}#triggerFade] event`, event);
    console.log(`[${this.title}#triggerFade] event.target`, event.target);

    event.target.classList.remove('fade');
    void event.target.offsetWidth;
    event.target.classList.add('fade');
    event.target.addEventListener('animationend', () => {
      event.target.classList.remove('fade');
    });
  }

  triggerFadeMobile(event) {
    console.log(`[${this.title}#triggerFadeMobile] event`, event);

    event.preventDefault();

    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;

    const hoveredElement = document.elementFromPoint(x, y) as HTMLElement;
    console.log(`[${this.title}#triggerFadeMobile] hoveredElement`, hoveredElement);

    if (!hoveredElement) return;

    hoveredElement.classList.remove('fade');
    void hoveredElement.offsetWidth;
    hoveredElement.classList.add('fade');
    hoveredElement.addEventListener('animationend', () => {
      hoveredElement.classList.remove('fade');
    });
  }
}
