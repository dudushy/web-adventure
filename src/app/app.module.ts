import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { Login1Component } from './adventures/login1/login1.component';
import { Loading1Component } from './adventures/loading1/loading1.component';
import { Loading2Component } from './adventures/loading2/loading2.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TestComponent,
    NotFoundComponent,

    Login1Component,
    Loading1Component,
    Loading2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
