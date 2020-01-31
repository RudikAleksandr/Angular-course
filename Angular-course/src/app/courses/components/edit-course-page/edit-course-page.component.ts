import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICourse } from '../../interfaces/course.model';
import { BreadcrumbsService } from 'src/app/core/services/breadcrumbs/breadcrumbs.service';
import { Routes } from 'src/app/core/enums/routes.enum';
import { Store } from '@ngrx/store';
import { LoadCourseByIdRequest, EditCourseRequest } from '../../store/actions/courses.actions';
import { selectCourse } from '../../store/selectors/courses.selector';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit {
  public course: ICourse;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(this.handlerRouteParams.bind(this));
    this.store.select(selectCourse).subscribe((course: ICourse) => {
      this.course = course;
      this.breadcrumbsService.emitBreadcrumbsChangeEvent(course.name);
    });
  }

  private handlerRouteParams({ id }): void {
    this.store.dispatch(LoadCourseByIdRequest({ id }));
  }

  public handlerClickSubmitBtn(courseData: ICourse): void {
    this.store.dispatch(EditCourseRequest({ course: courseData }));
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl(Routes.COURSES);
  }

}
