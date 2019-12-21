import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../../interfaces/course.model';
import { BreadcrumbsService } from 'src/app/core/services/breadcrumbs/breadcrumbs.service';
import { Routes } from 'src/app/core/enums/routes.enum';

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
    private coursesService: CoursesService,
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(this.handlerRouteParams.bind(this));
  }

  private handlerRouteParams({ id }): void {
    this.coursesService.getCourseById(id).subscribe((course: ICourse) => {
      this.course = course;
      this.breadcrumbsService.emitBreadcrumbsChangeEvent(course.name);
    });
  }

  public handlerClickSubmitBtn(courseData: ICourse): void {
    this.coursesService.updateCourse({ ...this.course, ...courseData }).subscribe(() => {
      this.router.navigateByUrl(Routes.COURSES);
    });
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl(Routes.COURSES);
  }

}
