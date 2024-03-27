import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit} from "@angular/core";
import { LoginService } from "../services/auth/login.service";
import { catchError, throwError } from "rxjs";
@Component({
    templateUrl: './saludar.component.html',
  })
  export class SaludarComponent {
    username: string = '';
    moduloValue: string = 'saludar'; 
  
    constructor(private loginService: LoginService, private http: HttpClient) {}
  
    ngOnInit(): void {
    
      this.loginService.username.subscribe({
        next: (username) => {
         
          this.username = username;
          console.log(username)
        },
        error: (errorData) => {
          console.error(errorData);
          
        }
      });
    }
  
    saludar(): void {
   
      const modulo = this.moduloValue;
      console.log(modulo)
    
      this.http.post('http://localhost:8080/auth/prueba', { username: this.username, modulo })
  
        .pipe(
  
          catchError(this.handleError) 
        )
        .subscribe((response) => {
          console.log('Respuesta de la petición POST:', response);
         
        });
    }
  
    
    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        console.error('Error en la petición:', error.error);
      } else {
        console.error('Backend retornó el código de estado:', error.status);
      }
    
      return throwError(() => error);
    }
  }