import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListUserComponent } from './list-user/list-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsinfoComponent } from './list-user/detailsinfo/detailsinfo.component';
import { UpdateempComponent } from './list-user/updateemp/updateemp.component';

const routes: Routes = [
  { path:'registration', component: RegistrationComponent },
  { path:'login',  component:LoginComponent},
  {path:'',component: ListUserComponent},
  {path:'list-user',component:ListUserComponent},
  {path:'details/:id',component:DetailsinfoComponent},
  {path:'update/:id',component:UpdateempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
