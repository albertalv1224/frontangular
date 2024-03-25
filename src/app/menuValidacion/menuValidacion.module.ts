import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { MenuValidacionComponent } from './menuValidacion.component';

@NgModule({
  declarations: [
    MenuValidacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Agrega FormsModule aquí
  ],
  exports: [
    MenuValidacionComponent // Si deseas exportar el componente para usarlo fuera de este módulo
  ]
})
export class MenuValidacionModule { }
