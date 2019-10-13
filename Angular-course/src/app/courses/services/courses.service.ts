import { Injectable } from '@angular/core';
import { Course } from '../entites';
import { coursesList } from 'jsonMockData/coursesList';
import { ICourse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses(): Promise<ICourse[]> {
    const courses: ICourse[] = coursesList.map((course: object) => {
      return new Course(course);
    });
    return Promise.resolve(courses);
  }
}
