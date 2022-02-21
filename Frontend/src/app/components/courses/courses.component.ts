import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any


  constructor(private _ProfessorService:ProfessorService,private _router:Router) { }

  ngOnInit(): void {
    this._ProfessorService. getcourses().subscribe((data)=>
    {
     this.courses=JSON.parse(JSON.stringify(data))
     console.log(this.courses)
   
   
    }
   
    )}
  }   