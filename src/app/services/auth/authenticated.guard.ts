// authenticated.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginAdminService } from './loginAdmin.service';
@Injectable({
    providedIn: 'root'
  })
  export class AuthenticatedGuard implements CanActivate {
  
    constructor(private loginService: LoginService, private router: Router, private loginAdminService: LoginAdminService) {}
  
    canActivate(): boolean {
      if (this.loginService.isUserLoggedIn()) {
        return true; 
      } else {
        this.router.navigate(['/iniciar-sesion']); 
        return false;
      }
    }
    

    canActivateAdmin(): boolean {
      if (this.loginAdminService.isAdminLoggedIn()) {
        return true; 
      } else {
        this.router.navigate(['/iniciar-sesion']); 
        return false;
      }
    }

  }
