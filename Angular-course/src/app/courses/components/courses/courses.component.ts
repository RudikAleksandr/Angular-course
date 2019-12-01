import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';

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
    private searchPipe: SearchPipe
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  private loadCourses(): void {
    this.coursesService.getCourses().then((coursesList) => {
      this.coursesList = coursesList;
      this.coursesListView = coursesList;
    })
  }

  public handlerClickDeleteButton(idCourse: string): void {
    console.log(idCourse);
  }

  public handlerClickSearchButton(searchInputText: string): void {
    console.log(searchInputText);
    this.coursesListView = this.searchPipe.transform(this.coursesList, searchInputText);
  }
}
