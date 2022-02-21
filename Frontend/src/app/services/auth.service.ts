import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError, last, map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(user:any)
  {
  return this.http.post<any>('http://localhost:3000/auth/login', user)
  }

  isLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  isProfessor() {
    var token = localStorage.getItem('accessToken') || '';
    var role = localStorage.getItem('role');

    return role === 'Professor' ? true : false;
  }

  isStudent() {
    var token = localStorage.getItem('accessToken') || '';
    var role = localStorage.getItem('role');

    return role === 'Student' ? true : false;
  }

  


}
