import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import  {  Observable, throwError, catchError, BehaviorSubject , tap, map} from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _username: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userRole: string = '';

  constructor(private http: HttpClient) { 
    this.currentUserLoginOn = new BehaviorSubject<boolean>(this.isUserLoggedIn());
    this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem('token') || '');
    this._username = new BehaviorSubject<string>(sessionStorage.getItem('username') || '');
    this.userRole = '';
  }
  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.urlHost + 'auth/login', credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem('token', userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
        this.userRole = userData.role; 
        console.log('Rol del usuario:', this.userRole); 
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  obtenerRol(credentials: LoginRequest): Observable<any>{
    return this.http.post<any>(environment.urlHost + 'auth/obtenerRol', credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem('role', userData.role);
        this.userRole = userData.role; 
      }),
      map((userData) => userData.role),
      catchError(this.handleError)
    );
  }
  

  logout(): void {
    sessionStorage.removeItem('token');
    this.currentUserLoginOn.next(false);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor inténtelo nuevamente.'));
  }

  isUserLoggedIn(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null;
  }

  get userData(): Observable<string> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  get userToken(): string {
    return this.currentUserData.value;
  }


  get username(): Observable<string> {
    return this._username.asObservable();
  }

  obtenerUsername(credentials: LoginRequest): Observable<any>{
    sessionStorage.setItem('username', credentials.username);
    this._username.next(credentials.username);

    return new Observable<string>((observer) => {
      observer.next(credentials.username); 
    }).pipe(
      map((userData) => userData), 
      catchError(this.handleError) 
    );
  }
}
