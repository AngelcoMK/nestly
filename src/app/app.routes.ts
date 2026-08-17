import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/stays-list/stays-list').then(
        (m) => m.StaysList
      ),
  },
  {
    path: 'stays/:id',
    loadComponent: () =>
      import('./pages/stay-detail/stay-detail').then(
        (m) => m.StayDetail
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(
        (m) => m.NotFound
      ),
  },
];