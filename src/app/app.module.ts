import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';

import { Login1Component } from './adventures/forms/login1/login1.component';
import { Loading1Component } from './adventures/loaders/loading1/loading1.component';
import { Loading2Component } from './adventures/loaders/loading2/loading2.component';
import { Loading3Component } from './adventures/loaders/loading3/loading3.component';
import { Loading4Component } from './adventures/loaders/loading4/loading4.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TestComponent,

    Login1Component,
    Loading1Component,
    Loading2Component,
    Loading3Component,
    Loading4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
