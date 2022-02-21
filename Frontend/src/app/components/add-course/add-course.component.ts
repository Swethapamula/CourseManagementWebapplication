import { Component, OnInit } from '@angular/core';
 import {FormGroup,FormControl,Validators} from '@angular/forms'
 import { ProfessorService } from 'src/app/services/professor.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private _professorService:ProfessorService,private _router :Router) { }
 message:any;
  coursesForm = new FormGroup({
    coursename: new FormControl(''),
    code: new FormControl(''),
    duration:new FormControl(''),
    price:new FormControl(''),
    image:new FormControl(''),
    details:new FormControl('')
  })

  ngOnInit(): void {
  }

  addCourses()
  {

  console.log(this.coursesForm.value);

   const courseData= {
    courseData:this.coursesForm.value
  }

     this._professorService.addCourse(courseData).subscribe((data)=>
    { 
      console.log(data)
      this.message= JSON.parse(JSON.stringify(data))
      console.log(this.message)
      this._router.navigate(['/courses'])
     } )

  }

}
