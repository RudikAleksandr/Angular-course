import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/components/courses/courses.component';
import { LoginComponent } from './login/components/login/login.component';
import { EditCoursePageComponent } from './courses/components/edit-course-page/edit-course-page.component';
import { AddCoursePageComponent } from './courses/components/add-course-page/add-course-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/new', component: AddCoursePageComponent },
  { path: 'courses/:id', component: EditCoursePageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
