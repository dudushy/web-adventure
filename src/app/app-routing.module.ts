import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { Login1Component } from './adventures/login1/login1.component';
import { Loading1Component } from './adventures/loading1/loading1.component';
import { Loading2Component } from './adventures/loading2/loading2.component';
import { Loading3Component } from './adventures/loading3/loading3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: 'login1', component: Login1Component, title: 'Login form' },
  { path: 'loading1', component: Loading1Component, title: 'Flower' },
  { path: 'loading2', component: Loading2Component, title: 'Newton Disc' },
  { path: 'loading3', component: Loading3Component, title: 'Fairy' },

  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
