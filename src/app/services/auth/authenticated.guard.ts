// authenticated.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticatedGuard implements CanActivate {
  
    constructor(private loginService: LoginService, private router: Router) {}
  
    canActivate(): boolean {
      if (this.loginService.isUserLoggedIn()) {
        return true; 
      } else {
        this.router.navigate(['/iniciar-sesion']); 
        return false;
      }
    }
    

   

  }
