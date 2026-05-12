import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Pod } from './components/pod/pod';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path:'pod/:id',component: Pod}
];

