import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { EnrollComponent } from './components/enroll/enroll.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfessorguardService } from './services/professorguard.service';
import { StudentguardService } from './services/studentguard.service';

const routes: Routes = [

  {path: 'login', component: LoginComponent
  
  },
  {path:'signup',component:SignupComponent},

  {
    path:"home" ,component:HomeComponent,
   },
 
  {
   path:"dashboard" ,component:DashboardComponent,
   canActivate:[ProfessorguardService]

  },

   {
    path:"notification" ,component:NotificationComponent
   },
   {
    path:"addcourse" ,component:AddCourseComponent,
    canActivate:[ProfessorguardService]

   },
   {
     path:"enroll",component:EnrollComponent,
     canActivate:[StudentguardService]

   },
   {
    path:"courses",component:CoursesComponent
  },
   { path: '', redirectTo: 'home', pathMatch: 'full' }

   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
