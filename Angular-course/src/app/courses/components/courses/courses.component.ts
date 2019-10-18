import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public coursesListPromise: Promise<ICourse[]>;

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.coursesListPromise = this.coursesService.getCourses();
  }

  handlerClickDeleteButton(idCourse: string): void {
    console.log(idCourse);
  }
}
