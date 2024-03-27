import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticatedGuard } from './services/auth/authenticated.guard';
import { AppDashboardComponent} from './dashboard/dashboardo.component';
import { ValidarCfdiComponent } from './validarCfdi/validarCfdi.component';


import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './principal/index.component';
import { SaludarComponent } from './prueba/saludar.component';
const routes: Routes = [
  //{path:'',redirectTo:'/index', pathMatch:'full'},
  { path: 'dashboard', component: AppDashboardComponent, canActivate: [AuthenticatedGuard] },
  {path:'iniciar-sesion',component:LoginComponent},
  { path: 'dashboard', component: AppDashboardComponent },

  {path: 'validarCfdi', component: ValidarCfdiComponent, canActivate: [AuthenticatedGuard]},

  {path: 'register', component: RegisterComponent},
  {path: '' , component: IndexComponent},
  {path: 'saludar', component: SaludarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
