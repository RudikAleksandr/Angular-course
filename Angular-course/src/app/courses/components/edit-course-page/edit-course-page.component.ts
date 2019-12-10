import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit {
  private course: ICourse;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(this.handlerRouteParams.bind(this));
  }

  private async handlerRouteParams({ id }): Promise<void> {
    this.course = await this.coursesService.getCourseById(id);
    console.log(this.course);
  }

  public handlerClickSubmitBtn(courseData: object): void {
    this.coursesService.updateCourse({...this.course, ...courseData});
    this.router.navigateByUrl('courses');
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl('courses');
  }

}
