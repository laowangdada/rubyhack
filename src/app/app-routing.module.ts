import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatejobComponent } from './components/createjob/createjob.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'login', component: LoginComponent },
  { path: 'jobcontent/:jobId', component: JobDetailsComponent },
  { path:'create',component:CreatejobComponent},
  { path:"*",redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
