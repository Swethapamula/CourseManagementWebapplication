import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { StudentregService } from 'src/app/services/studentreg.service';
import { ProfessorService } from 'src/app/services/professor.service';
 import { Router } from '@angular/router';


@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  courses:any;
  coursename:any;
  message:any;

  constructor(private studentRegister:StudentregService, private _ProfessorService:ProfessorService,private router:Router) { }


  studentRegisterForm= new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')]),
    address: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    qualification: new FormControl(''),
    passout: new FormControl(''),
    courses:new FormControl('')

  })
  
  get email(){ 
    return this.studentRegisterForm.get('email');
  }
  
  get password(){ 
    return this.studentRegisterForm.get('password');
  }
  
  get phone(){ 
    return this.studentRegisterForm.get('phone');
  }


  ngOnInit(): void {

    this._ProfessorService.getcourses().subscribe((data)=>
    {
     this.courses=JSON.parse(JSON.stringify(data))

   
    });

    
  }

  registerStudent()
  {

     const studentDetails ={
       studentProfile:this.studentRegisterForm.value,

       coursename:this.coursename,
       status:"Pending"
      }

   this.studentRegister.studentRegister(studentDetails).subscribe((data)=>
   {
    console.log(data)
     this.message=JSON.parse(JSON.stringify(data))
     console.log(this.message)

    alert(this.message.output)
     this.router.navigate(['/courses'])


  })
}

  courseSelect(event:any)
  {
    this.coursename= event.target.options[event.target.options.selectedIndex].text;
  }

}
