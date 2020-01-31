import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesSectionActionsComponent } from './components/courses-section-actions/courses-section-actions.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CourseBorderColorDirective } from './directives/courseBorderColor/course-border-color.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { EditCoursePageComponent } from './components/edit-course-page/edit-course-page.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { RouterModule } from '@angular/router';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormDurationComponent } from './components/form-duration/form-duration.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesSectionActionsComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CourseBorderColorDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe,
    AddCoursePageComponent,
    EditCoursePageComponent,
    CourseFormComponent,
    FormDateComponent,
    FormDurationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CoursesComponent,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
