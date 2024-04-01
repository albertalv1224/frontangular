import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoginOn: boolean = false;
  userNav: String = "";
  userRol?: number
  constructor(
    private loginService: LoginService,
   
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe((userLoginOn) => {
      this.userLoginOn = userLoginOn;
    });

    this.loginService.rol.subscribe((userRol)=>{
      
      this.userRol = userRol
      console.log(userRol)
    })

  } 

  
  logoutUser() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

 
}


