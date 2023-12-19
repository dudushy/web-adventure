/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-rubiks-cube',
  templateUrl: './rubiks-cube.component.html',
  styleUrls: ['./rubiks-cube.component.scss']
})
export class RubiksCubeComponent implements OnInit {
  title = 'RubiksCubeComponent';

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.setupCubeInteraction();
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

  setupCubeInteraction() {
    const content = document.getElementsByClassName('pageContent')[0] as HTMLElement;
    console.log(`[${this.title}#setupCubeInteraction] content`, content);

    const cube = document.getElementById('cube');
    console.log(`[${this.title}#setupCubeInteraction] cube`, cube);

    let x = 0;
    let y = 0;

    let lastMouseX = 0;
    let lastMouseY = 0;
    let rotX = 0;
    let rotY = 0;

    const updateCoordinates = (event) => {
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinates] event`, event);

      x = event.clientX;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinates] x`, x);

      y = event.clientY;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinates] y`, y);

      lastMouseX = event.pageX;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinates] lastMouseX`, lastMouseX);

      lastMouseY = event.pageY;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinates] lastMouseY`, lastMouseY);
    };
    console.log(`[${this.title}#setupCubeInteraction] updateCoordinates`, updateCoordinates);

    const rotateCube = (event) => {
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] event`, event);

      const deltaX = event.pageX - lastMouseX;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] deltaX`, deltaX);

      const deltaY = event.pageY - lastMouseY;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] deltaY`, deltaY);

      lastMouseX = event.pageX;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] lastMouseX`, lastMouseX);

      lastMouseY = event.pageY;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] lastMouseY`, lastMouseY);

      const aux = -0.5;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] aux`, aux);

      rotX += deltaY * aux;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] rotX`, rotX);

      rotY -= deltaX * aux;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] rotY`, rotY);

      const transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      console.log(`[${this.title}#setupCubeInteraction#rotateCube] transform`, transform);

      cube.style.transform = transform;
    };
    console.log(`[${this.title}#setupCubeInteraction] rotateCube`, rotateCube);

    const updateCoordinatesMobile = (event) => {
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinatesMobile] event`, event);

      x = event.touches[0].clientX;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinatesMobile] x`, x);

      y = event.touches[0].clientY;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinatesMobile] y`, y);

      lastMouseX = event.touches[0].pageX;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinatesMobile] lastMouseX`, lastMouseX);

      lastMouseY = event.touches[0].pageY;
      console.log(`[${this.title}#setupCubeInteraction#updateCoordinatesMobile] lastMouseY`, lastMouseY);
    };
    console.log(`[${this.title}#setupCubeInteraction] updateCoordinatesMobile`, updateCoordinatesMobile);

    const rotateCubeMobile = (event) => {
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] event`, event);

      event.preventDefault();

      const deltaX = event.touches[0].pageX - lastMouseX;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] deltaX`, deltaX);

      const deltaY = event.touches[0].pageY - lastMouseY;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] deltaY`, deltaY);

      lastMouseX = event.touches[0].pageX;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] lastMouseX`, lastMouseX);

      lastMouseY = event.touches[0].pageY;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] lastMouseY`, lastMouseY);

      const aux = -0.5;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] aux`, aux);

      rotX += deltaY * aux;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] rotX`, rotX);

      rotY -= deltaX * aux;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] rotY`, rotY);

      const transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      console.log(`[${this.title}#setupCubeInteraction#rotateCubeMobile] transform`, transform);

      cube.style.transform = transform;
    };
    console.log(`[${this.title}#setupCubeInteraction] rotateCubeMobile`, rotateCubeMobile);

    window.addEventListener('mousedown', (event) => {
      console.log(`[${this.title}#setupCubeInteraction#mousedown]`);

      updateCoordinates(event);

      content.style.cursor = 'grabbing';

      window.addEventListener('mousemove', rotateCube);

      window.addEventListener('mouseup', () => {
        console.log(`[${this.title}#setupCubeInteraction#mouseup]`);

        window.removeEventListener('mousemove', rotateCube);

        content.style.cursor = 'grab';
      });
    });

    window.addEventListener('touchstart', (event) => {
      console.log(`[${this.title}#setupCubeInteraction#touchstart]`);

      event.preventDefault();

      updateCoordinatesMobile(event);

      content.style.cursor = 'grabbing';

      window.addEventListener('touchmove', rotateCubeMobile);

      window.addEventListener('touchend', () => {
        console.log(`[${this.title}#setupCubeInteraction#touchend]`);

        window.removeEventListener('touchmove', rotateCubeMobile);

        content.style.cursor = 'grab';
      });
    });
  }
}
