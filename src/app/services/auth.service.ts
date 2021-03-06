import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'https://foodiesapp.herokuapp.com/api/user/registration';
  private _loginUrl = 'https://foodiesapp.herokuapp.com/api/user/login';
  constructor(private http: HttpClient,
    private _router: Router) { }


  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
