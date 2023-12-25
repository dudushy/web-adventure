/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-iphone-lockscreen',
  templateUrl: './iphone-lockscreen.component.html',
  styleUrls: ['./iphone-lockscreen.component.scss']
})
export class IphoneLockscreenComponent implements OnInit {
  title = 'IphoneLockscreenComponent';

  datetimeInterval = null;
  date = 'Thursday, December 21';
  time = '10:27';

  pullGestureConfig = {
    startY: 0,
    currentY: 0,
    isDragging: false,
    translateY: 0,
    // translateY: -200,
    // threshold: 100,
    threshold: -100,
    multiplier: 0.5
  };


  fullscreen = false;

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.updateDateAndTime();

    this.datetimeInterval = setInterval(() => {
      this.updateDateAndTime();
    }, 1000 * 30);

    this.setupPullGesture();

    document.addEventListener('fullscreenchange', () => {
      console.log(`[${this.title}#ngOnInit] fullscreenchange`);

      if (!document.fullscreenElement) this.exitFullscreenHandler();
    });
  }

  ngOnDestroy(): void {
    console.log(`[${this.title}#ngOnDestroy]`);

    clearInterval(this.datetimeInterval);

    document.removeEventListener('fullscreenchange', () => {});

    const lockscreen = document.getElementById('lockscreen');
    console.log(`[${this.title}#setupPullGesture] lockscreen`, lockscreen);

    const triggerDiv = document.getElementById('pullGestureTrigger');
    console.log(`[${this.title}#setupPullGesture] triggerDiv`, triggerDiv);

    triggerDiv?.removeEventListener('mousedown', () => {});
    triggerDiv?.removeEventListener('touchstart', () => {});

    lockscreen?.removeEventListener('mousemove', () => {});
    lockscreen?.removeEventListener('mouseup', () => {});
    lockscreen?.removeEventListener('mouseleave', () => {});
    lockscreen?.removeEventListener('touchmove', () => {});
    lockscreen?.removeEventListener('touchend', () => {});
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

  updateDateAndTime() {
    console.log(`[${this.title}#updateDateAndTime]`);

    const date = new Date();
    console.log(`[${this.title}#updateDateAndTime] date`, date);

    const formatedDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    console.log(`[${this.title}#updateDateAndTime] formatedDate`, formatedDate);

    this.date = formatedDate;
    console.log(`[${this.title}#updateDateAndTime] this.date`, this.date);

    const formatedTime = date.toLocaleTimeString('pt-br', { hour: 'numeric', minute: 'numeric' });
    console.log(`[${this.title}#updateDateAndTime] formatedTime`, formatedTime);

    this.time = formatedTime;
    console.log(`[${this.title}#updateDateAndTime] this.time`, this.time);
  }

  setupPullGesture() {
    console.log(`[${this.title}#setupPullGesture]`);

    const lockscreen = document.getElementById('lockscreen');
    console.log(`[${this.title}#setupPullGesture] lockscreen`, lockscreen);

    const triggerDiv = document.getElementById('pullGestureTrigger');
    console.log(`[${this.title}#setupPullGesture] triggerDiv`, triggerDiv);

    //? Desktop Version
    triggerDiv.addEventListener('mousedown', (event) => {
      console.log(`[${this.title}#setupPullGesture#mousedown] event`, event);

      // event.preventDefault();

      const startY = event.clientY;
      console.log(`[${this.title}#setupPullGesture#mousedown] startY`, startY);

      this.pullGestureConfig.startY = startY;
      this.pullGestureConfig.isDragging = true;

      console.log(`[${this.title}#setupPullGesture#mousedown] this.pullGestureConfig`, this.pullGestureConfig);
    });

    lockscreen.addEventListener('mousemove', (event) => {
      // console.log(`[${this.title}#setupPullGesture#mousemove] event`, event);

      // event.preventDefault();

      if (!this.pullGestureConfig.isDragging) return;

      console.log(`[${this.title}#setupPullGesture#mousemove] event`, event);

      // event.preventDefault();

      const currentY = event.clientY;
      console.log(`[${this.title}#setupPullGesture#mousemove] currentY`, currentY);

      this.pullGestureConfig.currentY = currentY;

      const diffY = currentY - this.pullGestureConfig.startY;
      console.log(`[${this.title}#setupPullGesture#mousemove] diffY`, diffY);

      if (diffY > 0) return;

      // this.pullGestureConfig.translateY = diffY;
      this.pullGestureConfig.translateY = diffY * (1 + this.pullGestureConfig.multiplier * (1 - this.pullGestureConfig.translateY / window.innerHeight));

      console.log(`[${this.title}#setupPullGesture#mousemove] this.pullGestureConfig`, this.pullGestureConfig);
    });

    lockscreen.addEventListener('mouseup', (event) => {
      console.log(`[${this.title}#setupPullGesture#mouseup] event`, event);

      // event.preventDefault();

      if (!this.pullGestureConfig.isDragging) return;

      this.pullGestureConfig.isDragging = false;

      // if (this.pullGestureConfig.translateY >= this.pullGestureConfig.threshold) {
      if (this.pullGestureConfig.translateY <= this.pullGestureConfig.threshold) {
        alert('You unlocked your iPhone!');

        this.pullGestureConfig.translateY = 0;
      } else {
        this.pullGestureConfig.translateY = 0;
      }

      console.log(`[${this.title}#setupPullGesture#mouseup] this.pullGestureConfig`, this.pullGestureConfig);
    });

    lockscreen.addEventListener('mouseleave', () => {
      console.log(`[${this.title}#setupPullGesture#mouseleave]`);

      if (!this.pullGestureConfig.isDragging) return;

      this.pullGestureConfig.isDragging = false;
      this.pullGestureConfig.translateY = 0;

      console.log(`[${this.title}#setupPullGesture#mouseleave] this.pullGestureConfig`, this.pullGestureConfig);
    });

    //? Mobile Version
    triggerDiv.addEventListener('touchstart', (event) => {
      console.log(`[${this.title}#setupPullGesture#touchstart] event`, event);

      event.preventDefault();

      const startY = event.touches[0].clientY;
      console.log(`[${this.title}#setupPullGesture#touchstart] startY`, startY);

      this.pullGestureConfig.startY = startY;
      this.pullGestureConfig.isDragging = true;

      console.log(`[${this.title}#setupPullGesture#touchstart] this.pullGestureConfig`, this.pullGestureConfig);
    });

    lockscreen.addEventListener('touchmove', (event) => {
      // console.log(`[${this.title}#setupPullGesture#touchmove] event`, event);

      // event.preventDefault();

      if (!this.pullGestureConfig.isDragging) return;

      console.log(`[${this.title}#setupPullGesture#touchmove] event`, event);

      event.preventDefault();

      const currentY = event.touches[0].clientY;
      console.log(`[${this.title}#setupPullGesture#touchmove] currentY`, currentY);

      this.pullGestureConfig.currentY = currentY;

      const diffY = currentY - this.pullGestureConfig.startY;
      console.log(`[${this.title}#setupPullGesture#touchmove] diffY`, diffY);

      if (diffY > 0) return;

      // this.pullGestureConfig.translateY = diffY;
      this.pullGestureConfig.translateY = diffY * (1 + this.pullGestureConfig.multiplier * (1 - this.pullGestureConfig.translateY / window.innerHeight));

      console.log(`[${this.title}#setupPullGesture#touchmove] this.pullGestureConfig`, this.pullGestureConfig);
    });

    lockscreen.addEventListener('touchend', (event) => {
      // console.log(`[${this.title}#setupPullGesture#touchend] event`, event);

      // event.preventDefault();

      if (!this.pullGestureConfig.isDragging) return;

      console.log(`[${this.title}#setupPullGesture#touchend] event`, event);

      this.pullGestureConfig.isDragging = false;

      // if (this.pullGestureConfig.translateY >= this.pullGestureConfig.threshold) {
      if (this.pullGestureConfig.translateY <= this.pullGestureConfig.threshold) {
        alert('You unlocked your iPhone!');

        this.pullGestureConfig.translateY = 0;
      } else {
        this.pullGestureConfig.translateY = 0;
      }

      console.log(`[${this.title}#setupPullGesture#touchend] this.pullGestureConfig`, this.pullGestureConfig);
    });
  }

  toggleFullscreen() {
    const lockscreen = document.getElementById('lockscreen') as any;
    console.log(`[${this.title}#toggleFullscreen] lockscreen`, lockscreen);

    if (!this.fullscreen) {
      this.fullscreen = true;
      lockscreen.classList.add('fullscreen');
      // lockscreen.requestFullscreen({ navigationUI: 'hide' });

      if (lockscreen.requestFullscreen) lockscreen.requestFullscreen();
      else if (lockscreen.webkitRequestFullscreen) lockscreen.webkitRequestFullscreen();
      else if (lockscreen.mozRequestFullScreen) lockscreen.mozRequestFullScreen();
      else if (lockscreen.msRequestFullscreen) lockscreen.msRequestFullscreen();
    } else {
      this.fullscreen = false;
      lockscreen.classList.remove('fullscreen');
      // document.exitFullscreen();

      if (document.exitFullscreen) document.exitFullscreen();
      else if ((document as any).webkitExitFullscreen) (document as any).webkitExitFullscreen();
      else if ((document as any).mozCancelFullScreen) (document as any).mozCancelFullScreen();
      else if ((document as any).msExitFullscreen) (document as any).msExitFullscreen();
    }
  }

  exitFullscreenHandler() {
    const lockscreen = document.getElementById('lockscreen') as any;
    console.log(`[${this.title}#toggleFullscreen] lockscreen`, lockscreen);

    this.fullscreen = false;
    lockscreen.classList.remove('fullscreen');
  }
}
