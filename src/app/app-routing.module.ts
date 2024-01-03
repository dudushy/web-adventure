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
import { QxirComponent } from './adventures/clones/qxir/qxir.component';
import { GlowTextComponent } from './adventures/interactives/glow-text/glow-text.component';
import { MouseTrailComponent } from './adventures/interactives/mouse-trail/mouse-trail.component';
import { HoverLightComponent } from './adventures/interactives/hover-light/hover-light.component';
import { PulseComponent } from './adventures/loaders/pulse/pulse.component';
import { Loading6Component } from './adventures/loaders/loading6/loading6.component';
import { CssCounterComponent } from './adventures/random/css-counter/css-counter.component';
import { RocketLeagueComponent } from './adventures/clones/rocket-league/rocket-league.component';
import { IphoneLockscreenComponent } from './adventures/clones/iphone-lockscreen/iphone-lockscreen.component';
import { RollADiceComponent } from './adventures/interactives/roll-a-dice/roll-a-dice.component';
import { DvdComponent } from './adventures/loaders/dvd/dvd.component';
import { SlidingMenuComponent } from './adventures/interactives/sliding-menu/sliding-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },

  { path: 'login1', component: Login1Component, data: { status: 'done', type: 'form', description: 'Login form' } },
  { path: 'loading1', component: Loading1Component, data: { status: 'done', type: 'loader', description: 'Flower' } },
  { path: 'loading2', component: Loading2Component, data: { status: 'done', type: 'loader', description: 'Newton Disc' } },
  { path: 'loading3', component: Loading3Component, data: { status: 'wip', type: 'loader', description: 'Fairy' } },
  { path: 'loading4', component: Loading4Component, data: { status: 'done', type: 'loader', description: 'Quest 2' } },
  { path: 'loading5', component: Loading5Component, data: { status: 'done', type: 'loader', description: 'Shy' } },
  { path: 'cube', component: CubeComponent, data: { status: 'wip', type: 'loader', description: '3D Cube' } },
  { path: 'hover-grid', component: HoverGridComponent, data: { status: 'wip', type: 'interactive', description: 'Animated Hover Grid' } },
  { path: 'svg', component: SvgComponent, data: { status: 'done', type: 'random', description: 'Testing SVGs' } },
  { path: 'hover-pattern', component: HoverPatternComponent, data: { status: 'done', type: 'interactive', description: 'Hover this!' } },
  { path: 'rubiks-cube', component: RubiksCubeComponent, data: { status: 'done', type: 'interactive', description: 'Rubik\u0027s Cube' } },
  { path: 'lights-out', component: LightsOutComponent, data: { status: 'done', type: 'game', description: 'Lights Out' } },
  { path: 'qxir', component: QxirComponent, data: { status: 'done', type: 'clone', description: 'Qxir Text' } },
  { path: 'glow-text', component: GlowTextComponent, data: { status: 'done', type: 'interactive', description: 'Glow Text' } },
  { path: 'mouse-trail', component: MouseTrailComponent, data: { status: 'done', type: 'interactive', description: 'Mouse Trail' } },
  { path: 'hover-light', component: HoverLightComponent, data: { status: 'done', type: 'interactive', description: 'Hover Light' } },
  { path: 'pulse', component: PulseComponent, data: { status: 'done', type: 'loader', description: 'Pulse Loader' } },
  { path: 'loading6', component: Loading6Component, data: { status: 'done', type: 'loader', description: 'Spinner' } },
  { path: 'css-counter', component: CssCounterComponent, data: { status: 'done', type: 'random', description: 'CSS Counter' } },
  { path: 'rocket-league', component: RocketLeagueComponent, data: { status: 'wip', type: 'clone', description: 'Rocket League UI Buttons' } },
  { path: 'iphone-lockscreen', component: IphoneLockscreenComponent, data: { status: 'done', type: 'clone', description: 'iPhone Lockscreen Copy' } },
  { path: 'roll-a-dice', component: RollADiceComponent, data: { status: 'wip', type: 'interactive', description: 'Roll 1 or more dices' } },
  { path: 'dvd', component: DvdComponent, data: { status: 'done', type: 'loader', description: 'DVD Screensaver' } },
  { path: 'sliding-menu', component: SlidingMenuComponent, data: { status: 'done', type: 'loader', description: 'Sliding Menu from instagram reel' } },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
