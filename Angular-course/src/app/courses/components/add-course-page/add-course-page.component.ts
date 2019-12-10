import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
  }

  public handlerClickSubmitBtn(courseData: ICourse): void {
    this.coursesService.createCourse(courseData);
    this.router.navigateByUrl('courses');
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl('courses');
  }

}
