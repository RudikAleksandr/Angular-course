import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../../interfaces/course.model';
import { Routes } from 'src/app/core/enums/routes.enum';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

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
    private coursesService: CoursesService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
  }

  public handlerClickSubmitBtn(course: ICourse): void {
    this.coursesService.createCourse(course).subscribe(() => {
      this.router.navigateByUrl(Routes.COURSES);
      this.loadingService.setLoading(false);
    });
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl(Routes.COURSES);
  }

}
