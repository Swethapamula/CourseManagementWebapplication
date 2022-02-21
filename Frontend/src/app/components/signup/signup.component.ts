import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ProfessorService } from 'src/app/services/professor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title="Signup Form";
  error:any;
  message:any;
  isvalid=false;

  constructor(private _ProfessorService:ProfessorService, private _router:Router) { }
  userRegForm   = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    role:new FormControl(''),
  })
  get email(){ 
    return this.userRegForm.get('email');
  }
  
  get password(){ 
    return this.userRegForm.get('password');
  }
  


  ngOnInit(): void {
  }

  register()
  {

     const usersData= {
      usersData:this.userRegForm.value
     }

     console.log(usersData);
     this._ProfessorService.registerUser(usersData).subscribe((data) => {
       console.log(data);
      this.message=JSON.parse(JSON.stringify(data.msg));
      alert(this.message)
      this._router.navigate(['/login'])
       
  })
}
}
  

