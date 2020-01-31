import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course.model';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { Router } from '@angular/router';
import { Routes } from 'src/app/core/enums/routes.enum';
import { Store } from '@ngrx/store';
import { LoadCoursesRequest, RemoveCourseRequest } from '../../store/actions/courses.actions';
import { selectCourses } from '../../store/selectors/courses.selector';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [SearchPipe]
})
export class CoursesComponent implements OnInit {
  public coursesList: ICourse[];
  private pageNumber = 1;

  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.coursesList) {
      this.loadCourses();
    }
    this.store.select(selectCourses).subscribe((courses: ICourse[]) => {
      this.coursesList = courses;
    });
  }

  private loadCourses(textFragment?: string): void {
    this.store.dispatch(LoadCoursesRequest({ pageNumber: this.pageNumber, textFragment }));
  }

  public handlerClickEditBtn(idCourse: number): void {
    this.router.navigate([Routes.COURSES, idCourse]);
  }

  public handlerClickDeleteBtn(idCourse: number): void {
    const isDeleteCourse: boolean = window.confirm('Do you really want to delete this course?');
    if (isDeleteCourse) {
      this.store.dispatch(RemoveCourseRequest({ id: idCourse }));
    }
  }

  public handlerChangeSearchText(searchInputText: string): void {
    this.loadCourses(searchInputText);
  }

  public handlerClickLoadMoreBtn(): void {
    this.pageNumber += 1;
    this.loadCourses();
  }

}
