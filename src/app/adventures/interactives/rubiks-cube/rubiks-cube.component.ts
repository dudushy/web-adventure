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

    window.addEventListener('mousedown', (event) => {
      const x = event.clientX;
      console.log(`[${this.title}#setupCubeInteraction#mousedown] x`, x);

      const y = event.clientY;
      console.log(`[${this.title}#setupCubeInteraction#mousedown] y`, y);

      content.style.cursor = 'grabbing';

      const rotateCube = (event) => {
        // console.log(`[${this.title}#setupCubeInteraction#rotateCube] cube`, cube);

        const rotateX = (event.clientY - y) / 2;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] rotateX`, rotateX);

        const rotateY = (event.clientX - x) / 2;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] rotateY`, rotateY);

        const transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        console.log(`[${this.title}#setupCubeInteraction#rotateCube] transform`, transform);

        cube.style.transform = transform;
      };

      window.addEventListener('mousemove', rotateCube);

      window.addEventListener('mouseup', () => {
        console.log(`[${this.title}#setupCubeInteraction#mouseup]`);

        window.removeEventListener('mousemove', rotateCube);
        content.style.cursor = 'grab';
      });
    });
  }
}
