import { Routes } from '@angular/router';
import { App } from './app';
import {Studentcomponent} from './studentcomponent/studentcomponent';
import { Newdetails } from './newdetails/newdetails';
export const routes: Routes = [
    {path:'details/:id/:name',component:Studentcomponent},
    {path:'new',component:Newdetails}

];
