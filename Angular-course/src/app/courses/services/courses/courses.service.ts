import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routes } from '../../../core/enums/routes.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private BASE_URL = `${Routes.SERVER_URL}${Routes.COURSES}`;
  private COUNT_PAGE_COURSES = 4;

  constructor(
    private http: HttpClient
  ) {}

  public getCourses(pageNumber: number, textFragment: string = ''): Observable<ICourse[]> {
    const params = {
      textFragment,
      count: `${this.COUNT_PAGE_COURSES * pageNumber}`,
    };

    return this.http.get<ICourse[]>(this.BASE_URL, { params });
  }

  public getCourseById(id: number): Observable<ICourse> {
    const params = { id: `${id}` };
    return this.http.get<ICourse[]>(this.BASE_URL, { params }).pipe(
      map((courses: ICourse[]) => courses[0])
    );
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(this.BASE_URL, course);
  }

  public updateCourse(course: ICourse): Observable<ICourse> {
    return this.http.patch<ICourse>(`${this.BASE_URL}/${course.id}`, course);
  }

  public removeCourse(id: number): Observable<object> {
    return this.http.delete<object>(`${this.BASE_URL}/${id}`);
  }
}
