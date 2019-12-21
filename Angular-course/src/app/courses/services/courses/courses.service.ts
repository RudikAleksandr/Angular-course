import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routes } from '../../../core/enums/routes.enum';
import { map, finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private BASE_URL = `${Routes.SERVER_URL}${Routes.COURSES}`;
  private COUNT_PAGE_COURSES = 4;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  public getCourses(pageNumber: number, textFragment: string = ''): Observable<ICourse[]> {
    const params = {
      textFragment,
      count: `${this.COUNT_PAGE_COURSES * pageNumber}`,
    };

    this.loadingService.setLoading(true);
    return this.http.get<ICourse[]>(this.BASE_URL, { params }).pipe(
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  public getCourseById(id: number): Observable<ICourse> {
    const params = { id: `${id}` };
    this.loadingService.setLoading(true);
    return this.http.get<ICourse[]>(this.BASE_URL, { params }).pipe(
      map((courses: ICourse[]) => courses[0]),
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    this.loadingService.setLoading(true);
    return this.http.post<ICourse>(this.BASE_URL, course).pipe(
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  public updateCourse(course: ICourse): Observable<ICourse> {
    this.loadingService.setLoading(true);
    return this.http.patch<ICourse>(`${this.BASE_URL}/${course.id}`, course).pipe(
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  public removeCourse(id: number): Observable<object> {
    this.loadingService.setLoading(true);
    return this.http.delete<object>(`${this.BASE_URL}/${id}`).pipe(
      finalize(() => this.loadingService.setLoading(false))
    );
  }
}
