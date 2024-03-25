import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticatedGuard } from './services/auth/authenticated.guard';
import { AppDashboardComponent} from './dashboard/dashboardo.component';
import { MenuValidacionComponent } from './menuValidacion/menuValidacion.component';
import { ValidarCfdiComponent } from './validarCfdi/validarCfdi.component';
import { LoginAdminComponent } from './auth/loginAdmin/loginAdmin.component';
import { AuthenticatedAdminGuard } from './services/auth/athenticatedAdmin.guard';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './principal/index.component';
const routes: Routes = [
  //{path:'',redirectTo:'/index', pathMatch:'full'},
  { path: 'dashboard', component: AppDashboardComponent, canActivate: [AuthenticatedGuard] },
  {path:'iniciar-sesion',component:LoginComponent},
  { path: 'dashboard', component: AppDashboardComponent },
  {path: 'validar', component: MenuValidacionComponent, canActivate: [AuthenticatedGuard]},
  {path: 'validarCfdi', component: ValidarCfdiComponent, canActivate: [AuthenticatedGuard]},
  {path: 'loginAdmin', component: LoginAdminComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthenticatedAdminGuard]},
  {path: '' , component: IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
