import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';

import { Login1Component } from './adventures/forms/login1/login1.component';
import { Loading1Component } from './adventures/loaders/loading1/loading1.component';
import { Loading2Component } from './adventures/loaders/loading2/loading2.component';
import { Loading3Component } from './adventures/loaders/loading3/loading3.component';
import { Loading4Component } from './adventures/loaders/loading4/loading4.component';
import { Loading5Component } from './adventures/loaders/loading5/loading5.component';
import { CubeComponent } from './adventures/loaders/cube/cube.component';
import { HoverGridComponent } from './adventures/interactives/hover-grid/hover-grid.component';
import { SvgComponent } from './adventures/random/svg/svg.component';
import { HoverPatternComponent } from './adventures/interactives/hover-pattern/hover-pattern.component';
import { RubiksCubeComponent } from './adventures/interactives/rubiks-cube/rubiks-cube.component';
import { LightsOutComponent } from './adventures/games/lights-out/lights-out.component';
import { QxirComponent } from './adventures/random/qxir/qxir.component';
import { GlowTextComponent } from './adventures/interactives/glow-text/glow-text.component';
import { MouseTrailComponent } from './adventures/interactives/mouse-trail/mouse-trail.component';
import { HoverLightComponent } from './adventures/interactives/hover-light/hover-light.component';
import { PulseComponent } from './adventures/loaders/pulse/pulse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },

  { path: 'login1', component: Login1Component, data: { type: 'form', description: 'Login form' } },
  { path: 'loading1', component: Loading1Component, data: { type: 'loader', description: 'Flower' } },
  { path: 'loading2', component: Loading2Component, data: { type: 'loader', description: 'Newton Disc' } },
  { path: 'loading3', component: Loading3Component, data: { type: 'loader', description: 'Fairy' } },
  { path: 'loading4', component: Loading4Component, data: { type: 'loader', description: 'Quest 2' } },
  { path: 'loading5', component: Loading5Component, data: { type: 'loader', description: 'Shy' } },
  { path: 'cube', component: CubeComponent, data: { type: 'loader', description: '3D Cube' } },
  { path: 'hover-grid', component: HoverGridComponent, data: { type: 'interactive', description: 'Animated Hover Grid' } },
  { path: 'svg', component: SvgComponent, data: { type: 'random', description: 'Testing SVGs' } },
  { path: 'hover-pattern', component: HoverPatternComponent, data: { type: 'interactive', description: 'Hover this!' } },
  { path: 'rubiks-cube', component: RubiksCubeComponent, data: { type: 'interactive', description: 'Rubik\u0027s Cube' } },
  { path: 'lights-out', component: LightsOutComponent, data: { type: 'game', description: 'Lights Out' } },
  { path: 'qxir', component: QxirComponent, data: { type: 'random', description: 'Qxir Text' } },
  { path: 'glow-text', component: GlowTextComponent, data: { type: 'interactive', description: 'Glow Text' } },
  { path: 'mouse-trail', component: MouseTrailComponent, data: { type: 'interactive', description: 'Mouse Trail' } },
  { path: 'hover-light', component: HoverLightComponent, data: { type: 'interactive', description: 'Hover Light' } },
  { path: 'pulse', component: PulseComponent, data: { type: 'loader', description: 'Pulse Loader' } },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
