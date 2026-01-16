import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'rezepte',
    renderMode: RenderMode.Server,
  },
  {
    path: 'datenschutz',
    renderMode: RenderMode.Server,
  },
  {
    path: 'impressum',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
