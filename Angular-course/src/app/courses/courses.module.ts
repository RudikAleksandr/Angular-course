import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesSectionActionsComponent } from './components/courses-section-actions/courses-section-actions.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesSectionActionsComponent,
    CoursesListComponent,
    CoursesItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
