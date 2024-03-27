import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { SaludarComponent } from './saludar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from '../services/auth/error-interceptor.service';

@NgModule({
  declarations: [SaludarComponent],
  imports: [
    CommonModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [
    SaludarComponent,
  

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    
    
  ]
})
export class SaludarModule { }
