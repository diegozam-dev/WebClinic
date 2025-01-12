import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component'),
  },
];
