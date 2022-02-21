import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
