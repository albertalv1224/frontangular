import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    templateUrl: './menuValidacion.component.html',
})
export class MenuValidacionComponent  {

    constructor(private http:HttpClient){

    }
   enviarPath(body:{path:String}){
  
       this.http.get('http://localhost:8080/validarFactura').subscribe((result)=>{
        console.log(result)
       })
    
 
   }
  }