import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from '../../interfaces/course.model';
import { Routes } from 'src/app/core/enums/routes.enum';
import { CreateCourseRequest } from '../../store/actions/courses.actions';
import { Store } from '@ngrx/store';

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
    private store: Store<any>,
  ) { }

  ngOnInit() {
  }

  public handlerClickSubmitBtn(course: ICourse): void {
    this.store.dispatch(CreateCourseRequest({ course }));
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl(Routes.COURSES);
  }

}
