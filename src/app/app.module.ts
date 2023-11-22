import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

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
import { SvgRendererComponent } from './components/svg-renderer/svg-renderer.component';
import { HoverPatternComponent } from './adventures/interactives/hover-pattern/hover-pattern.component';
import { RubiksCubeComponent } from './adventures/interactives/rubiks-cube/rubiks-cube.component';
import { LightsOutComponent } from './adventures/games/lights-out/lights-out.component';
import { QxirComponent } from './adventures/random/qxir/qxir.component';
import { GlowTextComponent } from './adventures/interactives/glow-text/glow-text.component';
import { MouseTrailComponent } from './adventures/interactives/mouse-trail/mouse-trail.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TestComponent,

    Login1Component,
    Loading1Component,
    Loading2Component,
    Loading3Component,
    Loading4Component,
    Loading5Component,
    CubeComponent,
    HoverGridComponent,
    SvgComponent,
    SvgRendererComponent,
    HoverPatternComponent,
    RubiksCubeComponent,
    LightsOutComponent,
    QxirComponent,
    GlowTextComponent,
    MouseTrailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
