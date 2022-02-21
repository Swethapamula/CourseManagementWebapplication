import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentregService {

  constructor( private http:HttpClient) { }

  studentRegister(studentDetails:any)
  {
     console.log(studentDetails)
     return this.http.post("http://localhost:3000/student/register",studentDetails)
  }
  
  getApplications()
  {
    return this.http.get<any>("http://localhost:3000/student/applications")
  }
}
