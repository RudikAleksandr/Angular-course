import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { CoursesService } from '../../services/courses/courses.service';
import { switchMap, finalize, mergeMap } from 'rxjs/operators';
import {
  LoadCoursesRequest,
  StoreCourses,
  LoadCourseByIdRequest,
  StoreCourse,
  RemoveCourseRequest,
  RemoveCourseSuccess,
  CreateCourseRequest,
  EditCourseRequest
} from '../actions/courses.actions';
import { Router } from '@angular/router';
import { ICourse } from '../../interfaces/course.model';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { Routes } from 'src/app/core/enums/routes.enum';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() => this.actions$.pipe(
    ofType(LoadCoursesRequest),
    switchMap((props) => {
      return this.coursesService.getCourses(props.pageNumber, props.textFragment).pipe(
        mergeMap((courses: ICourse[]) => [ StoreCourses({ courses }) ]),
        finalize(() => this.loadingService.setLoading(false)),
      );
    })
  ));

  loadCourseById$ = createEffect(() => this.actions$.pipe(
    ofType(LoadCourseByIdRequest),
    switchMap((props) => {
      return this.coursesService.getCourseById(props.id).pipe(
        mergeMap((courses: ICourse[]) => [ StoreCourse({course: courses[0]}) ]),
        finalize(() => this.loadingService.setLoading(false)),
      );
    })
  ));

  createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CreateCourseRequest),
    switchMap((props) => {
      return this.coursesService.createCourse(props.course).pipe(
        mergeMap(() => {
          this.router.navigateByUrl(Routes.COURSES);
          return [ LoadCoursesRequest({pageNumber: 1, textFragment: ''}) ];
        }),
        finalize(() => this.loadingService.setLoading(false)),
      );
    })
  ));

  editCourse$ = createEffect(() => this.actions$.pipe(
    ofType(EditCourseRequest),
    switchMap((props) => {
      return this.coursesService.updateCourse(props.course).pipe(
        mergeMap(() => {
          this.router.navigateByUrl(Routes.COURSES);
          return [ LoadCoursesRequest({pageNumber: 1, textFragment: ''}) ];
        }),
        finalize(() => this.loadingService.setLoading(false)),
      );
    })
  ));

  removeCourse$ = createEffect(() => this.actions$.pipe(
    ofType(RemoveCourseRequest),
    switchMap((props) => {
      return this.coursesService.removeCourse(props.id).pipe(
        mergeMap(() => [ RemoveCourseSuccess({id: props.id}) ]),
        finalize(() => this.loadingService.setLoading(false)),
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

}
