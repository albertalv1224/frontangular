import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    @ViewChild('pathForm') pathForm!: NgForm;
  
    constructor(private http: HttpClient, private router: Router) {}
  
    enviarFormulario(body: { username: string, firstname: string, lastname: string, country: string, password: string }) {
      this.http.post('http://localhost:8080/auth/register', body).subscribe((result) => {

        if (result != null) {
            alert("Registro exitoso")
        } else {
            alert("no se pudo crear el registro")
        }
      
        this.resetForm();
      });
    }
  
    resetForm() {
      this.pathForm.resetForm();
    }
   
  }