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


  constructor(
    private loginService: LoginService,
   
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe((userLoginOn) => {
      this.userLoginOn = userLoginOn;
    });

    
  } 

  logoutUser() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

 
}


