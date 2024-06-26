import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import  {  Observable, throwError, catchError, BehaviorSubject , tap, map} from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  currentAdminLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { 
    this.currentAdminLoginOn = new BehaviorSubject<boolean>(this.isAdminLoggedIn());
    this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem('token') || '');
  }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.urlHost + 'auth/login/admin', credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem('token', userData.token);
        this.currentUserData.next(userData.token);
        this.currentAdminLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.currentAdminLoginOn.next(false);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor inténtelo nuevamente.'));
  }

  isAdminLoggedIn(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null;
  }

  get userData(): Observable<string> {
    return this.currentUserData.asObservable();
  }

  get adminLoginOn(): Observable<boolean> {
    return this.currentAdminLoginOn.asObservable();
  }

  get userToken(): string {
    return this.currentUserData.value;
  }

}
