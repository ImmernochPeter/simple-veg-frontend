import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: 'impressum',
        loadComponent: () =>
          import('./impressum/impressum').then((m) => m.Impressum),
      },
    ],
  },
];
