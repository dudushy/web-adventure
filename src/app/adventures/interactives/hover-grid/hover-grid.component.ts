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
    return;

    console.log(`[${this.title}#triggerFade] event`, event);
    console.log(`[${this.title}#triggerFade] event.target`, event.target);
    console.log(`[${this.title}#triggerFade] event.target.classList`, event.target.classList);

    if (!event.target) return;

    // if (event.target.classList.contains('fade')) this.resetAnimation(event.target);

    event.target.classList.add('fade');
    event.target.addEventListener('animationend', () => {
      event.target.classList.remove('fade');
    });
  }

  triggerFadeMobile(event) {
    return; //TODO fix this shit

    console.log(`[${this.title}#triggerFadeMobile] event`, event);
    console.log(`[${this.title}#triggerFadeMobile] event.target`, event.target);
    console.log(`[${this.title}#triggerFadeMobile] event.target.classList`, event.target.classList);

    event.preventDefault();

    if (!event.target) return;

    // if (event.target.classList.contains('fade')) this.resetAnimation(event.target);

    event.target.classList.add('fade');
    event.target.addEventListener('animationend', () => {
      event.target.classList.remove('fade');
    });
  }

  resetAnimation(element) {
    console.log(`[${this.title}#resetAnimation] element`, element);
    //? Method 1
    // element.classList.remove('fade');
    // void element.offsetWidth;

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

    //? Method 3
    const animation = element.style.animation;
    console.log(`[${this.title}#resetAnimation] animation`, animation);

    element.style.animation = 'none';

    requestAnimationFrame(() => {
      setTimeout(() => {
        element.style.animation = animation;
      }, 0);
    });
  }

  test(event) {
    console.log(`[${this.title}#test] event`, event);
  }
}
