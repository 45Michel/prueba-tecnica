import { Routes } from '@angular/router';
import { TaskListComponent } from '../app/task-list/task-list.component';

export const routes: Routes = [
    {
        path: '',
        component:TaskListComponent
    },
    {
        path: 'task/List',
        loadComponent: () => import('../app/task-list/task-list.component').then((m) => m.TaskListComponent),
    },
    {
        path: 'board',
        loadComponent: () => import('../app/board/board.component').then((m) => m.BoardComponent),
    },
];
