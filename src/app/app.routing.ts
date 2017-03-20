import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add.component';

const APP_ROUTES: Routes=[
    {path: '', redirectTo: '/todo', pathMatch: 'full'},
    {path:'todo', component:TodoComponent},
    {path:'user', component:UserComponent},
    {path:'addUser', component:UserAddComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);