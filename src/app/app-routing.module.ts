import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { UserTableComponent} from './user-table/user-table.component';
import { AuthGuard } from './auth.guard'; 

const routes: Routes = [
    { path:'login', component: LoginComponent},
    { path: 'users', component: UserTableComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo:'/login', pathMatch:'full'},
    { path: '**', redirectTo: '/login' } 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}