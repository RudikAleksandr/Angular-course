import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../interfaces/course.model';
// import { HttpErrorResponse } from '@angular/common/http';

export const LoadCoursesRequest = createAction(
  '[CoursesModule] LoadCoursesRequest',
  props<{ pageNumber: number, textFragment?: string }>(),
);

export const StoreCourses = createAction(
  '[CoursesModule] StoreCourses',
  props<{ courses: ICourse[] }>(),
);

export const LoadCourseByIdRequest = createAction(
  '[CoursesModule] LoadCourseByIdRequest',
  props<{ id: number }>(),
);

export const StoreCourse = createAction(
  '[CoursesModule] StoreCourse',
  props<{ course: ICourse }>(),
);

export const CreateCourseRequest = createAction(
  '[CoursesModule] CreateCourseRequest',
  props<{ course: ICourse }>(),
);

export const EditCourseRequest = createAction(
  '[CoursesModule] EditCourseRequest',
  props<{ course: ICourse }>(),
);

export const RemoveCourseRequest = createAction(
  '[CoursesModule] RemoveCourseRequest',
  props<{ id: number }>(),
);

export const RemoveCourseSuccess = createAction(
  '[CoursesModule] RemoveCourseSuccess',
  props<{ id: number }>(),
);
