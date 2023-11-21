/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-qxir',
  templateUrl: './qxir.component.html',
  styleUrls: ['./qxir.component.scss']
})
export class QxirComponent implements OnInit {
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

  defaultOrder() { return 0; }

  triggerFade(event) {
    console.log(`[${this.title}#triggerFade] event`, event);
    console.log(`[${this.title}#triggerFade] event.target`, event.target);

    if (event.target.classList.contains('fade')) this.resetAnimation(event.target);

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

    if (hoveredElement.classList.contains('fade')) this.resetAnimation(hoveredElement);

    hoveredElement.classList.add('fade');
    hoveredElement.addEventListener('animationend', () => {
      hoveredElement.classList.remove('fade');
    });
  }

  resetAnimation(element) {
    console.log(`[${this.title}#resetAnimation] element`, element);

    //? Method 1
    element.classList.remove('fade');
    void element.offsetWidth;

    //? Method 2
    // const parent = element.parentElement;
    // const sibling = element.nextElementSibling;
    // const clonedElement = element.cloneNode(true);

    // if (sibling) {
    //   parent.insertBefore(clonedElement, sibling);
    // } else {
    //   parent.appendChild(clonedElement);
    // }

    // parent.removeChild(element);
  }
}