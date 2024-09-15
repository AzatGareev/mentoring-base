import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MainListComponent } from './main-list/main-list.component';
import { HomeWorkComponent } from './HomeWork/homeWork.component';

export const routes: Routes = [
    {
        path: '',
        component: MainListComponent
    },
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: 'dz',
        component: HomeWorkComponent
    }
];
