import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../../interfaces/course.model';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { Router } from '@angular/router';
import { Routes } from 'src/app/core/enums/routes.enum';

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
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  private loadCourses(textFragment?: string): void {
    this.coursesService.getCourses(this.pageNumber, textFragment).subscribe((courses: ICourse[]) => {
      this.coursesList = courses;
    });
  }

  public handlerClickEditBtn(idCourse: number): void {
    this.router.navigate([Routes.COURSES, idCourse]);
  }

  public handlerClickDeleteBtn(idCourse: number): void {
    const isDeleteCourse: boolean = window.confirm('Do you really want to delete this course?');
    if (isDeleteCourse) {
      this.coursesService.removeCourse(idCourse).subscribe(() => {
        this.loadCourses();
      });
    }
  }

  public handlerClickSearchBtn(searchInputText: string): void {
    this.loadCourses(searchInputText);
  }

  public handlerClickLoadMoreBtn(): void {
    this.pageNumber += 1;
    this.loadCourses();
  }

}
