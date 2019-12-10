import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [SearchPipe]
})
export class CoursesComponent implements OnInit {
  public coursesListView: ICourse[];
  private coursesList: ICourse[];

  constructor(
    private coursesService: CoursesService,
    private searchPipe: SearchPipe,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  private async loadCourses(): Promise<void> {
    const coursesList = await this.coursesService.getCourses();
    this.coursesList = coursesList;
    this.coursesListView = coursesList;
  }

  public handlerClickEditBtn(idCourse: string): void {
    this.router.navigate(['/courses', idCourse]);
  }

  public handlerClickDeleteBtn(idCourse: string): void {
    const isDeleteCourse: boolean = window.confirm('Do you really want to delete this course?');
    if (isDeleteCourse) {
      this.coursesService.removeCourse(idCourse);
      this.loadCourses();
    }
  }

  public handlerClickSearchBtn(searchInputText: string): void {
    this.coursesListView = this.searchPipe.transform(this.coursesList, searchInputText);
  }
}
