import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2WWKhxQEkvxBa8BJ2rA5VWdF5nMHPZi0',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(catchError(errorRes => {
        let errorMessage = 'An unknown error occurred!'
        if(!errorRes.error || !errorRes.error.error){
          return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
          case 'EMAIL_EXISTS':
            errorMessage = "This error already exists within our database";
            break;
        }
        return throwError(errorMessage);
      }))
  }
}
