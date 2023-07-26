import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { url } from 'src/app/globals';
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from 'moment';

import { User } from 'src/app/models/user.model';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  iat: number = 0;
  name: string = '';
  id: number = 0;
  userType: number = 0;
  photo: string = '';
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL: string = `http://localhost:3000/api/v1/users`;
  // URL: string = `${url}users`;
  private decodedToken: DecodedToken = new DecodedToken;

  constructor(private http:HttpClient) {
    this.decodedToken = new DecodedToken();
   }

  private handleError(error: HttpErrorResponse) {

    let errors = [{ status: 'Error', message: ' Ooops, someting went wrong!' }];
    let msg = ' Ooops, someting went wrong!'
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // msg = error.error.message ? error.error.message:error.error.text
      // errors = error.error
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
     
      msg = error.error.message ? error.error.message:error.error.text
        errors = error.error
    }
    // Return an observable with a user-facing error message.
    // return throwError(errors);
    console.log('service error:',error.error)
    return throwError(() => new Error(msg))
  }

  signUp(data: User):Observable<User>
  {
     

      return this.http
      .post<User>(`${this.URL}/register`, data)
      .pipe(
        map(data => {

          console.log('Im in auth service: ', data);
          
          return data;
        }), catchError(this.handleError));
  }

  logIn(data: User):Observable<User>
  {
      
    return this.http
    .post<User>(`${this.URL}/login`, data)
    .pipe(
      map((data: any) => {

        const token = data['token']
        console.log('Im in auth service: ', data['token']);
        this.saveToken(token);
        
        return data;
      }), catchError(this.handleError));
  }

  public logout() {
    localStorage.removeItem('Bearer token');
    localStorage.removeItem('activeProject');
    localStorage.removeItem('activeUser');
    localStorage.removeItem('activeProjectStudent');
    this.decodedToken = new DecodedToken();
  }

  private saveToken(token: string): string | null {
    // token = JSON.stringify(token);
    // alert(token);
    const decodedToken = jwt.decodeToken(token);
    // console.log(decodedToken);

    if (!decodedToken) {
      return null;
    }

    this.decodedToken = decodedToken;
    localStorage.setItem('Bearer token', token);

    return token;

  }

  get getAuthToken() {
    return localStorage.getItem('Bearer token');
  }

  checkAuthentication(): boolean {

    const authToken = localStorage.getItem('Bearer token');


    if (!authToken) {
      return false;
    }

    const decodedToken = jwt.decodeToken(authToken);

    if (!decodedToken) {
      return false;
    }

    this.decodedToken = decodedToken;


    return true;
  }

  get username(): string {
    return this.decodedToken.name;
  }

  get userPhoto(): string {
    return this.decodedToken.photo;
  }

  get isAuthenticated(): boolean {

    // console.log('token ', this.decodedToken)
    const expiration = moment.unix(this.decodedToken.exp);
    const isAuth = moment().isBefore(expiration);
    // console.log('My Auth ', isAuth)


    return isAuth;
  }

}
