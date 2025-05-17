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
import { QuietManComponent } from './adventures/clones/quiet-man/quiet-man.component';
import { SocialIconsComponent } from './adventures/interactives/social-icons/social-icons.component';
import { SevenSegmentDisplayComponent } from './adventures/random/seven-segment-display/seven-segment-display.component';
import { HoverTextComponent } from './adventures/interactives/hover-text/hover-text.component';
import { HoverText2Component } from './adventures/interactives/hover-text2/hover-text2.component';
import { FooterIconsComponent } from './adventures/clones/footer-icons/footer-icons.component';
import { SodaComponent } from './adventures/forms/soda/soda.component';
import { HoverButtonsComponent } from './adventures/interactives/hover-buttons/hover-buttons.component';
import { PaintComponent } from './adventures/interactives/paint/paint.component';

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
    MouseTrailComponent,
    HoverLightComponent,
    PulseComponent,
    Loading6Component,
    CssCounterComponent,
    RocketLeagueComponent,
    IphoneLockscreenComponent,
    RollADiceComponent,
    DvdComponent,
    SlidingMenuComponent,
    QuietManComponent,
    SocialIconsComponent,
    SevenSegmentDisplayComponent,
    HoverTextComponent,
    HoverText2Component,
    FooterIconsComponent,
    SodaComponent,
    HoverButtonsComponent,
    PaintComponent
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
