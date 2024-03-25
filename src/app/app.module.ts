import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';

// Services
import { UserService } from './services/user/user.service';
import { LoginService } from './services/auth/login.service';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';
import { MenuValidacionComponent } from './menuValidacion/menuValidacion.component';
import { AppDashboardComponent } from './dashboard/dashboardo.component';
import { ValidarCfdiComponent } from './validarCfdi/validarCfdi.component';
import { ServicicioSpring } from './servicio-spring';
import { LoginAdminComponent } from './auth/loginAdmin/loginAdmin.component';
import { LoginAdminService } from './services/auth/loginAdmin.service';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './principal/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    PersonalDetailsComponent,
    MenuValidacionComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    BrandingComponent,
    AppNavItemComponent,
    ValidarCfdiComponent,
    LoginAdminComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule
   
  ],
  providers: [
    UserService,
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    ServicicioSpring,
    LoginAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
