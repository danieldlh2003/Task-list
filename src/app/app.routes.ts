import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks-list',
    loadComponent: () =>
      import('./features/tasks-list/tasks-list.component').then(
        (m) => m.TasksListComponent
      ),
  },
  { path: '**', redirectTo: 'tasks-list' },
];
