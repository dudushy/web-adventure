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

  defaultOrder() { return 0; }

  setupCubeInteraction() {
    const content = document.getElementById('content');
    console.log(`[${this.title}#setupCubeInteraction] content`, content);

    const cube = document.getElementById('cube');
    console.log(`[${this.title}#setupCubeInteraction] cube`, cube);

    let lastMouseX = 0;
    let lastMouseY = 0;
    let rotX = 0;
    let rotY = 0;

    window.addEventListener('mousedown', (event) => {
      const x = event.clientX;
      console.log(`[${this.title}#setupCubeInteraction#mousedown] x`, x);

      const y = event.clientY;
      console.log(`[${this.title}#setupCubeInteraction#mousedown] y`, y);

      lastMouseX = event.pageX;
      console.log(`[${this.title}#setupCubeInteraction#mousedown] lastMouseX`, lastMouseX);

      lastMouseY = event.pageY;
      console.log(`[${this.title}#setupCubeInteraction#mousedown] lastMouseY`, lastMouseY);

      content.style.cursor = 'grabbing';

      const rotateCube = (event) => {
        // console.log(`[${this.title}#setupCubeInteraction#rotateCube] cube`, cube);

        const deltaX = event.clientX - x;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] deltaX`, deltaX);

        const deltaY = event.clientY - y;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] deltaY`, deltaY);

        const rotateX = deltaY / 2;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] rotateX`, rotateX);

        const rotateY = deltaX / 2;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] rotateY`, rotateY);

        const transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] transform`, transform);

        cube.style.transform = transform;
      };
      console.log(`[${this.title}#setupCubeInteraction#mousedown] rotateCube`, rotateCube);

      const rotateCube2 = (event) => {
        // console.log(`[${this.title}#setupCubeInteraction#rotateCube2] cube`, cube);

        const deltaX = event.pageX - lastMouseX;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] deltaX`, deltaX);

        const deltaY = event.pageY - lastMouseY;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] deltaY`, deltaY);

        lastMouseX = event.pageX;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] lastMouseX`, lastMouseX);

        lastMouseY = event.pageY;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] lastMouseY`, lastMouseY);

        const aux = -0.5;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] aux`, aux);

        rotX += deltaY * aux;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] rotX`, rotX);

        rotY -= deltaX * aux;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] rotY`, rotY);

        const transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube2] transform`, transform);

        cube.style.transform = transform;
      };
      console.log(`[${this.title}#setupCubeInteraction#mousedown] rotateCube2`, rotateCube2);

      // window.addEventListener('mousemove', rotateCube);
      window.addEventListener('mousemove', rotateCube2);

      window.addEventListener('mouseup', () => {
        console.log(`[${this.title}#setupCubeInteraction#mouseup]`);

        // window.removeEventListener('mousemove', rotateCube);
        window.removeEventListener('mousemove', rotateCube2);
        content.style.cursor = 'grab';
      });
    });
  }
}
