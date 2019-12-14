import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../../interfaces/course.model';
import { Routes } from 'src/app/core/enums/routes.enum';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {
  public course: ICourse = {
    id: null,
    name: '',
    date: '',
    length: null,
    description: '',
    authors: {
      id: null,
      name: ''
    },
    isTopRated: false
  };

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
  }

  public handlerClickSubmitBtn(course: ICourse): void {
    this.coursesService.createCourse(course).subscribe(() => {
      this.router.navigateByUrl(Routes.COURSES);
    });
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl(Routes.COURSES);
  }

}
