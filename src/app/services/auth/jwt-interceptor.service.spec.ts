import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt-interceptor.service';

describe('JwtInterceptor', () => {
  let service: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// validar si el token es 410 o sea si ael token ya caduco, redirigir al inicio en el inteceptor. Hacer un timer 
//donde el timer este revisando si el token aun esta vvalido el navegador debe preguntar si el token sigue existiendo
//del lado del bakc debe haber un servicio que diga si el token esta activo 
//cuando se invalide la sesion el storage tambien se debe invalidar 
// el token no debe de guardarse en el local storage, sino en una variale global 
//roles y poermisos, debe haber permisos por servicio clase padre debe ser la de las validacionees

// generar un usuario y contraseña 