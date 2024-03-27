import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginAdminService } from 'src/app/services/auth/loginAdmin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoginOn: boolean = false;
  adminLoginOn: boolean = false;

  constructor(
    private loginService: LoginService,
    private loginAdminService: LoginAdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe((userLoginOn) => {
      this.userLoginOn = userLoginOn;
    });

    this.loginAdminService.currentAdminLoginOn.subscribe((adminLoginOn) => {
      this.adminLoginOn = adminLoginOn;
    });
  } 

  logoutUser() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  logoutAdmin() {
    this.loginAdminService.logout();
    this.router.navigate(['/']);
  }
}


