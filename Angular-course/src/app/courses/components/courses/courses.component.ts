import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public coursesList: ICourse[];

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesService.getCourses().then((coursesList: ICourse[]) => {
      this.coursesList = coursesList;
    });
  }
}
