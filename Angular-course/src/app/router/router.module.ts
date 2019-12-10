import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/components/courses/courses.component';
import { LoginComponent } from '../login/components/login/login.component';
import { EditCoursePageComponent } from '../courses/components/edit-course-page/edit-course-page.component';
import { AddCoursePageComponent } from '../courses/components/add-course-page/add-course-page.component';
import { NonContentComponent } from './components/non-content/non-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/new', component: AddCoursePageComponent },
  { path: 'courses/:id', component: EditCoursePageComponent },
  { path: '**', component: NonContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [NonContentComponent]
})

export class AppRouterModule { }
