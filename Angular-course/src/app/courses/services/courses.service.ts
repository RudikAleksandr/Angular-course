import { Injectable } from '@angular/core';
import { Course } from '../entites';
import { coursesList } from 'jsonMockData/coursesList';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses(): Promise<Course[]> {
    return Promise.resolve(coursesList as Course[]);
  }
}
