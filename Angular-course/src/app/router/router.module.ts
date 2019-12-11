import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/components/courses/courses.component';
import { LoginComponent } from '../login/components/login/login.component';
import { EditCoursePageComponent } from '../courses/components/edit-course-page/edit-course-page.component';
import { AddCoursePageComponent } from '../courses/components/add-course-page/add-course-page.component';
import { NonContentComponent } from './components/non-content/non-content.component';
import { AuthGuard } from '../core/services/authGuard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: EditCoursePageComponent, canActivate: [AuthGuard] },
  { path: '**', component: NonContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [NonContentComponent]
})

export class AppRouterModule { }
