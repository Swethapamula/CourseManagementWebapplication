import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
 import { StudentregService } from 'src/app/services/studentreg.service';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private toastr: ToastrService,private _studentService:StudentregService) { 
   
}
message:any;
  title:any;
  studentApproved:any
  student:any
  

  ngOnInit(): void {

  }


  ShowNotification()
  {

    this._studentService.getApplications().subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data))

      this.studentApproved=this.student.filter((x:any)=>x.status=="Approved");
      console.log(this.studentApproved)
      for(let i of  this.studentApproved )
 {
     this.toastr.success(i.name + " your aplication for "+i.courses +" is approved", "Congratulations ");
 }
  })
  }

  



}
