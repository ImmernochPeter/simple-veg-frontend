import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./impressum/impressum').then((m) => m.Impressum),
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('./privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'rezepte',
    loadComponent: () =>
      import('./recipes/recipes').then((m) => m.Recipes),
  },
];
