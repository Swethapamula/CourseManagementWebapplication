import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

   baseUrl="http://localhost:3000"

  constructor(private http:HttpClient) { }

   registerUser(usersData:any)
   {
      console.log("inservice")
     return this.http.post<any>('http://localhost:3000/auth/register',usersData)
   }
    addCourse(courseData:any)
    {
      return this.http.post('http://localhost:3000/professor/addcourse',courseData)
    }
    getcourses()
    {
      return this.http.get('http://localhost:3000/professor/courses')

    }
    approveApplication(record:any)
    {
       return this.http.patch(`${this.baseUrl}/professor/approve` ,record)
    }
     rejectApplication(record:any)
     {
      return this.http.patch(`${this.baseUrl}/professor/reject` ,record)

     }

}
