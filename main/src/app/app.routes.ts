import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('generator/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('landing/Routes').then((m) => m.remoteRoutes),
  },
];
