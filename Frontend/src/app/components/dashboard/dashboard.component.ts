import { Component, OnInit } from '@angular/core';
import { StudentregService } from 'src/app/services/studentreg.service';
import { ProfessorService } from 'src/app/services/professor.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title="Applications Dashboard";
  studentData:any;
  studentdat_approve:any;
  totalRecords:any;
  page:number=1
  message:any;

  constructor( private _studentService:StudentregService,private _professorService:ProfessorService) { }

  ngOnInit(): void {
   console.log(localStorage.getItem('accessToken'))
  this.fetchData();
  
  }

   fetchData()
   {
    this._studentService.getApplications().subscribe((data)=>{
      this.studentData=JSON.parse(JSON.stringify(data))
      this.totalRecords=this.studentData.length;
    })
   }
   approve(record:any)
   {

      this._professorService.approveApplication(record).subscribe((data)=>{
        console.log(data);
        this.fetchData();

      })
 
  
   }
   reject(record:any)
   {
    this._professorService.rejectApplication(record).subscribe((data)=>{
      console.log(data);
      this.fetchData();

    })


   }

}
