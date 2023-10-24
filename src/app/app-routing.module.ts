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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },

  { path: 'login1', component: Login1Component, data: { type: 'form', description: 'Login form'} },
  { path: 'loading1', component: Loading1Component, data: { type: 'loader', description: 'Flower'} },
  { path: 'loading2', component: Loading2Component, data: { type: 'loader', description: 'Newton Disc'} },
  { path: 'loading3', component: Loading3Component, data: { type: 'loader', description: 'Fairy'} },
  { path: 'loading4', component: Loading4Component, data: { type: 'loader', description: 'Quest 2'} },
  { path: 'loading5', component: Loading5Component, data: { type: 'loader', description: 'Shy'} },
  { path: 'cube', component: CubeComponent, data: { type: 'loader', description: '3D Cube'} },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
