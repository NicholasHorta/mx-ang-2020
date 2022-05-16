import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
   
  user = new BehaviorSubject<User>(null);
  
  signUp(email: string, password: string) {
    console.log('Signup()');
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2WWKhxQEkvxBa8BJ2rA5VWdF5nMHPZi0',
      { email: email, password: password, returnSecureToken: true }).pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          Number(resData.expiresIn) // Because it comes in from the object as a string
        );
      }));
  }

  login(email: string, password: string) {
    console.log('Login()');
    console.log(email, password);
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2WWKhxQEkvxBa8BJ2rA5VWdF5nMHPZi0',
      { email, password, returnSecureToken: true }).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        Number(resData.expiresIn) // Because it comes in from the object as a string
      )
    }));
  }

  logout(){
    this.router.navigate(['/auth']);
    this.user.next(null);
  };

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    console.log('HandleAuth()');
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expDate
    );
    console.log(user)
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    console.log('handleError()');
    let errorMessage = 'An unknown error occurred!'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = "This email already exists within our database";
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "No email for this user was found";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "Password does not match account";
        break;
    }
    return throwError(errorMessage);
  }
}
