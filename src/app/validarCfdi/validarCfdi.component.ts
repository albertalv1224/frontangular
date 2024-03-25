import { Component } from "@angular/core";
import { ServicicioSpring } from "../servicio-spring";

@Component({
  templateUrl: './validarCfdi.component.html',
})
export class ValidarCfdiComponent {
    datos: any[] = [];
    camposNoValidos: string[] = ['Exportacion', 
    'TipoDeComprobante', 
    'SubTotal', 
    'Total', 
    'Serie', 
    'Folio', 
    'Version', 
    'Fecha', 
    'Moneda', 
    'FormaPago', 
    'Descuento', 
    'cfdi:Receptor.RegimenFiscalReceptor', 
    'Nombre Receptor', 
    'Domicilio fiscal receptor', 
    'Metodo Pago', 
    'cfdi:CfdiRelacionados. Tipo Relacion', 
    'Lugar expedicion', 
    'Clave Unidad', 
    'ClaveProdServ', 
    'UsoCFDI', 
    'Valor Unitario', 
    'ObjetoImp', 
    'Base'];
    constructor(private servicioBackend: ServicicioSpring) {}
 
  
    obtenerDatos(): void {
      this.servicioBackend.obtenerDatos().subscribe(
        (response: any[]) => {
          this.datos = response;
          console.log('Datos obtenidos:', this.datos);
        },
        (error: any) => {
          console.error('Error al obtener datos:', error);
        }
      );
    }
    isObject(value: any): boolean {
        return typeof value === 'object' && !Array.isArray(value);
      }
      
  }
  

  /*verificarValidezFactura(factura: any): string {
    const campos = factura;
    for (const campo in campos) {
      if (campos.hasOwnProperty(campo)) {
        const estadoCampo = campos[campo];
        if (estadoCampo !== 'Válido') {
          return 'No válida';
        }
      }
    }
    return 'Válida';
  }

  obtenerError(factura: any): string {
    for (const campo in factura) {
      if (factura.hasOwnProperty(campo)) {
        const estadoCampo = factura[campo];
        if (estadoCampo !== 'Válido') {
          return estadoCampo;
        }
      }
    }
    return ''; // Si la factura es válida, no hay error
  }*/
  
