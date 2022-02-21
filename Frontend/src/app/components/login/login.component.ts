import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isInvalid: boolean = false;
  errorMessage: string = '';

  constructor( public _auth:AuthService,private _router:Router) { }
  LoginController = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required]),
    // Student:new FormControl(''),
    // Employee:new FormControl('')
  })
  get email(){ 
    return this.LoginController.get('email');
  }
  
  get password(){ 
    return this.LoginController.get('password');
  }

  ngOnInit(): void {
  }

  loginUser() {



    this._auth.loginUser(this.LoginController.value).subscribe((res)=>
    {
      
        this.isInvalid = false;
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('role', res.role);
  
        if (this._auth.isProfessor()) {
          this._router.navigate(['/dashboard']);
        } else {
          this._router.navigate(['/courses']);
        }
      },

      
      );

  
}
}
