import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesSectionActionsComponent } from './components/courses-section-actions/courses-section-actions.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CourseBorderColorDirective } from './directives/courseBorderColor/course-border-color.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { SearchPipe } from './pipes/search/search.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesSectionActionsComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CourseBorderColorDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
