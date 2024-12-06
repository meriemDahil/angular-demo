import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
    {path:'', redirectTo:'MeriemDahillogin',pathMatch:'full'},
    {path: 'MeriemDahillogin',component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path: 'confirmation',component:ConfirmationComponent},
    {path:'**', component:LoginComponent}
];
