/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-mouse-trail',
  templateUrl: './mouse-trail.component.html',
  styleUrls: ['./mouse-trail.component.scss']
})
export class MouseTrailComponent implements OnInit {
  title = 'MouseTrailComponent';

  trailDuration = 300;

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.setupTrail();
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

  setupTrail() {
    const content = document.getElementById('content');
    console.log(`[${this.title}#ngOnInit] content`, content);

    const addTrail = event => {
      console.log(`[${this.title}#setupTrail] event`, event);

      // const x = event.layerX;
      const x = event.clientX;
      console.log(`[${this.title}#setupTrail] x`, x);

      // const y = event.layerY;
      const y = event.clientY;
      console.log(`[${this.title}#setupTrail] y`, y);

      const trail = document.createElement('div');

      trail.className = 'trail';
      trail.style.setProperty('--trailDuration', `${this.trailDuration}ms`);
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;

      console.log(`[${this.title}#setupTrail] trail`, trail);

      event.target.appendChild(trail);

      setTimeout(() => event.target.removeChild(trail), this.trailDuration);
    };

    content.addEventListener('pointermove', addTrail);
  }

  sample() {
    const start = new Date().getTime();

    const originPosition = { x: 0, y: 0 };

    const last = {
      starTimestamp: start,
      starPosition: originPosition,
      mousePosition: originPosition
    };

    const config = {
      starAnimationDuration: 1500,
      minimumTimeBetweenStars: 250,
      minimumDistanceBetweenStars: 75,
      glowDuration: 75,
      maximumGlowPointSpacing: 10,
      colors: ['249 146 253', '252 254 255'],
      sizes: ['1.4rem', '1rem', '0.6rem'],
      animations: ['fall-1', 'fall-2', 'fall-3']
    };

    let count = 0;

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      selectRandom = items => items[rand(0, items.length - 1)];

    const withUnit = (value, unit) => `${value}${unit}`,
      px = value => withUnit(value, 'px'),
      ms = value => withUnit(value, 'ms');

    const calcDistance = (a, b) => {
      const diffX = b.x - a.x,
        diffY = b.y - a.y;

      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    };

    const calcElapsedTime = (start, end) => end - start;

    const appendElement = element => document.body.appendChild(element),
      removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

    const createStar = position => {
      const star = document.createElement('span'),
        color = selectRandom(config.colors);

      star.className = 'star fa-solid fa-sparkle';

      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
      star.style.animationName = config.animations[count++ % 3];
      star.style.animationDuration = ms(config.starAnimationDuration);

      appendElement(star);

      removeElement(star, config.starAnimationDuration);
    };

    const createGlowPoint = position => {
      const glow = document.createElement('div');

      glow.className = 'glow-point';

      glow.style.left = px(position.x);
      glow.style.top = px(position.y);

      appendElement(glow);

      removeElement(glow, config.glowDuration);
    };

    const determinePointQuantity = distance => Math.max(
      Math.floor(distance / config.maximumGlowPointSpacing),
      1
    );

    const createGlow = (last, current) => {
      const distance = calcDistance(last, current),
        quantity = determinePointQuantity(distance);

      const dx = (current.x - last.x) / quantity,
        dy = (current.y - last.y) / quantity;

      Array.from(Array(quantity)).forEach((_, index) => {
        const x = last.x + dx * index,
          y = last.y + dy * index;

        createGlowPoint({ x, y });
      });
    };

    const updateLastStar = position => {
      last.starTimestamp = new Date().getTime();

      last.starPosition = position;
    };

    const updateLastMousePosition = position => last.mousePosition = position;

    const adjustLastMousePosition = position => {
      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
      }
    };

    window.onpointermove = e => {
      const mousePosition = { x: e.clientX, y: e.clientY };

      adjustLastMousePosition(mousePosition);

      const now = new Date().getTime(),
        hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
        hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);

        updateLastStar(mousePosition);
      }

      createGlow(last.mousePosition, mousePosition);

      updateLastMousePosition(mousePosition);
    };

    document.body.onmouseleave = () => updateLastMousePosition(originPosition);
  }
}
